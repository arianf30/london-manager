import { useRouter } from "next/router"
import { createContext, useEffect, useReducer } from "react"

const VenderContext = createContext({})

const ACTIONS = {
  INITIALIZE: "initialize",
  UPDATE_FILTER: "update_filter",
  UPDATE_QTY: "update_qty",
  UPDATE_SELL_ITEMS: "update_sell_items",
}

const ACTIONS_REDUCERS = {
  [ACTIONS.INITIALIZE]: (state, action) => ({
    ...action.payload,
  }),
  [ACTIONS.UPDATE_FILTER]: (state, action) => ({
    ...state,
    filter: action.payload,
  }),
  [ACTIONS.UPDATE_QTY]: (state, action) => ({
    ...state,
    qty: action.payload,
  }),
  [ACTIONS.UPDATE_SELL_ITEMS]: (state, action) => ({
    ...state,
    sellItems: [...action.payload],
  }),
}

const reducer = (state, action) => {
  const actionReducer = ACTIONS_REDUCERS[action.type]
  return actionReducer ? actionReducer(state, action) : state
}

export function VenderProvider({ children }) {
  const { ptv } = useRouter().query
  const [state, dispatch] = useReducer(reducer, {
    filter: null,
    qty: 1,
    sellItems: [],
  })

  useEffect(() => {
    if (ptv !== "undefined") {
      if (typeof window !== undefined) {
        const venderStorage = JSON.parse(
          window.localStorage.getItem(`venderStorage_${ptv}`)
        )
        if (venderStorage) {
          dispatch({ type: ACTIONS.INITIALIZE, payload: venderStorage })
        } else {
          window.localStorage.setItem(
            `venderStorage_${ptv}`,
            JSON.stringify(state)
          )
        }
      }
    }
  }, [ptv])

  useEffect(() => {
    if (ptv !== "undefined") {
      if (typeof window !== "undefined") {
        window.localStorage.setItem(
          `venderStorage_${ptv}`,
          JSON.stringify(state)
        )
      }
    }
  }, [state])

  const updateFilter = (data) => {
    dispatch({ type: ACTIONS.UPDATE_FILTER, payload: data })
  }

  const updateQty = (data) => {
    dispatch({ type: ACTIONS.UPDATE_QTY, payload: data })
  }

  // SELL RESUME
  const existItem = (id) => {
    if (state.sellItems) {
      const found = state.sellItems.find((item) => item.id === id)
      return found
    }
    return null
  }

  const addItem = (item) => {
    existItem(item.id) ? incrementItem(item, state.qty) : newItem(item)
    dispatch({
      type: ACTIONS.UPDATE_QTY,
      payload: 1,
    })
  }

  const newItem = (item) => {
    state.sellItems
      ? dispatch({
          type: ACTIONS.UPDATE_SELL_ITEMS,
          payload: [...state.sellItems, { ...item, qty: state.qty }],
        })
      : dispatch({
          type: ACTIONS.UPDATE_SELL_ITEMS,
          payload: [{ ...item, qty: state.qty }],
        })
  }

  const incrementItem = (item, qty = 1) => {
    dispatch({
      type: ACTIONS.UPDATE_SELL_ITEMS,
      payload: state.sellItems.map((prevItem) => {
        if (prevItem.id === item.id) {
          item.qty = parseFloat(prevItem.qty) + parseFloat(qty)
          return item
        }
        return prevItem
      }),
    })
  }

  const decrementItem = (item, qty = 1) => {
    dispatch({
      type: ACTIONS.UPDATE_SELL_ITEMS,
      payload: state.sellItems.map((prevItem) => {
        if (prevItem.id === item.id && prevItem.qty > 1) {
          item.qty = parseFloat(prevItem.qty) - parseFloat(qty)
          return item
        }
        return prevItem
      }),
    })
  }

  const removeItem = (id) => {
    dispatch({
      type: ACTIONS.UPDATE_SELL_ITEMS,
      payload: state.sellItems.filter((item) => item.id !== id),
    })
  }

  const clearAllItems = () => {
    dispatch({
      type: ACTIONS.UPDATE_SELL_ITEMS,
      payload: [],
    })
  }

  return (
    <VenderContext.Provider
      value={{
        filter: state.filter,
        updateFilter,
        qty: state.qty,
        updateQty,
        sellItems: state.sellItems,
        addItem,
        incrementItem,
        decrementItem,
        removeItem,
        clearAllItems,
      }}
    >
      {children}
    </VenderContext.Provider>
  )
}

export default VenderContext
