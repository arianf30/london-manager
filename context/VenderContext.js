import { useRouter } from "next/router"
import { createContext, useEffect, useReducer } from "react"

const VenderContext = createContext({})

const ACTIONS = {
  INITIALIZE: "initialize",
  UPDATE_FILTER: "update_filter",
  UPDATE_QTY: "update_qty",
  UPDATE_SALE_ITEMS: "update_sale_items",
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
  [ACTIONS.UPDATE_SALE_ITEMS]: (state, action) => ({
    ...state,
    saleItems: [...action.payload],
  }),
}

const reducer = (state, action) => {
  const actionReducer = ACTIONS_REDUCERS[action.type]
  return actionReducer ? actionReducer(state, action) : state
}

export function VenderProvider({ children }) {
  const { pop } = useRouter().query
  const [state, dispatch] = useReducer(reducer, {
    filter: null,
    qty: 1,
    saleItems: [],
  })

  useEffect(() => {
    if (pop !== "undefined") {
      if (typeof window !== undefined) {
        const venderStorage = JSON.parse(
          window.localStorage.getItem(`venderStorage_${pop}`)
        )
        if (venderStorage) {
          dispatch({ type: ACTIONS.INITIALIZE, payload: venderStorage })
        } else {
          window.localStorage.setItem(
            `venderStorage_${pop}`,
            JSON.stringify(state)
          )
        }
      }
    }
  }, [pop])

  useEffect(() => {
    if (pop !== "undefined") {
      if (typeof window !== "undefined") {
        window.localStorage.setItem(
          `venderStorage_${pop}`,
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

  // SALE RESUME
  const existItem = (id) => {
    if (state.saleItems) {
      const found = state.saleItems.find((item) => item.id === id)
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
    state.saleItems
      ? dispatch({
          type: ACTIONS.UPDATE_SALE_ITEMS,
          payload: [...state.saleItems, { ...item, qty: state.qty }],
        })
      : dispatch({
          type: ACTIONS.UPDATE_SALE_ITEMS,
          payload: [{ ...item, qty: state.qty }],
        })
  }

  const incrementItem = (item, qty = 1) => {
    dispatch({
      type: ACTIONS.UPDATE_SALE_ITEMS,
      payload: state.saleItems.map((prevItem) => {
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
      type: ACTIONS.UPDATE_SALE_ITEMS,
      payload: state.saleItems.map((prevItem) => {
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
      type: ACTIONS.UPDATE_SALE_ITEMS,
      payload: state.saleItems.filter((item) => item.id !== id),
    })
  }

  const clearAllItems = () => {
    dispatch({
      type: ACTIONS.UPDATE_SALE_ITEMS,
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
        saleItems: state.saleItems,
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
