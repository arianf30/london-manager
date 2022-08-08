import { dbFirestore } from "db/firebase"
import { ref, set, update } from "firebase/database"
import { useRouter } from "next/router"
import { createContext, useEffect, useReducer } from "react"

const MesasContext = createContext({})

const ACTIONS = {
  INITIALIZE: "initialize",
  UPDATE_CONFIG: "update_config",
  UPDATE_TABLES: "update_tables",
  UPDATE_DISCOUNT: "update_discount",
  UPDATE_CLIENT: "update_client",
  UPDATE_INVOICE: "update_invoice",
  UPDATE_PAY_METHOD: "update_pay_method",
  UPDATE_PAY_METHOD_SECONDARY: "update_pay_method_secondary",
  UPDATE_SALE_ITEMS: "update_sale_items",
  UPDATE_PROMOTIONS: "update_promotions",
}

const ACTIONS_REDUCERS = {
  [ACTIONS.INITIALIZE]: (state, action) => ({
    ...action.payload,
  }),
  [ACTIONS.UPDATE_CONFIG]: (state, action) => ({
    ...state,
    config: { ...action.payload },
  }),
  [ACTIONS.UPDATE_TABLES]: (state, action) => ({
    ...state,
    tables: action.payload,
  }),
  [ACTIONS.UPDATE_INVOICE]: (state, action) => ({
    ...state,
    invoice: { ...action.payload },
  }),
  [ACTIONS.UPDATE_PAY_METHOD]: (state, action) => ({
    ...state,
    payMethod: { ...action.payload },
  }),
  [ACTIONS.UPDATE_PAY_METHOD_SECONDARY]: (state, action) => ({
    ...state,
    payMethodSecondary: { ...action.payload },
  }),
  [ACTIONS.UPDATE_SALE_ITEMS]: (state, action) => ({
    ...state,
    saleItems: [...action.payload],
  }),
  [ACTIONS.UPDATE_PROMOTIONS]: (state, action) => ({
    ...state,
    promotions: [...action.payload],
  }),
}

const reducer = (state, action) => {
  const actionReducer = ACTIONS_REDUCERS[action.type]
  return actionReducer ? actionReducer(state, action) : state
}

export function Provider({ children }) {
  const { pop } = useRouter().query
  const [state, dispatch] = useReducer(reducer, {
    config: {
      filter: "",
      layout: "grid",
      qty: 1,
      lounge: 0,
      table: 0,
      editTablesMode: false,
      viewProducts: false,
      viewSubtotal: false,
      viewDiscount: false,
      viewKeyboard: false,
      print: true,
    },
    tables: [],
    invoice: {
      active: true,
      cod: 0,
      condition: "Consumidor final",
      cuit: 0,
      bussinesName: "",
      bussinesAddress: "",
    },
    payMethod: {
      id: 0,
      payWith: 0,
    },
    payMethodSecondary: {
      active: false,
      id: 0,
      payWith: 0,
    },
    saleItems: [],
    promotions: [],
  })

  useEffect(() => {
    if (pop !== "undefined") {
      if (typeof window !== undefined) {
        const mesasStorage = JSON.parse(
          window.localStorage.getItem(`mesasStorage_${pop}`)
        )
        if (mesasStorage) {
          dispatch({ type: ACTIONS.INITIALIZE, payload: mesasStorage })
        } else {
          window.localStorage.setItem(
            `mesasStorage_${pop}`,
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
          `mesasStorage_${pop}`,
          JSON.stringify(state)
        )
      }
    }
  }, [state])

  // UPDATE OBJECTS
  const updateConfig = (prop, value) => {
    dispatch({
      type: ACTIONS.UPDATE_CONFIG,
      payload: {
        ...state.config,
        [prop]: value,
      },
    })
  }

  const updateTables = (todo) => {
    dispatch({
      type: ACTIONS.UPDATE_TABLES,
      payload: todo,
    })
  }

  const updateDiscount = (col, value) => {
    update(ref(dbFirestore, `pop/${pop}/mesas/${state.config.table}`), {
      [col]: value,
    })
  }

  const updateInvoice = (prop, value) => {
    dispatch({
      type: ACTIONS.UPDATE_INVOICE,
      payload: {
        ...state.invoice,
        [prop]: value,
      },
    })
  }

  const updatePayMethod = (prop, value) => {
    dispatch({
      type: ACTIONS.UPDATE_PAY_METHOD,
      payload: {
        ...state.payMethod,
        [prop]: value,
      },
    })
  }

  const updatePayMethodSecondary = (prop, value) => {
    dispatch({
      type: ACTIONS.UPDATE_PAY_METHOD_SECONDARY,
      payload: {
        ...state.payMethodSecondary,
        [prop]: value,
      },
    })
  }

  const updateSaleItems = (todo) => {
    dispatch({
      type: ACTIONS.UPDATE_SALE_ITEMS,
      payload: todo,
    })
  }

  // ITEMS-FUNCTIONS
  const existItem = (id) => {
    if (state.saleItems) {
      const found = state.saleItems.find((item) => item.id === id)
      return found
    }
    return null
  }

  const addItem = (item) => {
    existItem(item.id)
      ? incrementItem(item.id, state.config.qty)
      : newItem(item)
    dispatch({
      type: ACTIONS.UPDATE_CONFIG,
      payload: { ...state.config, qty: 1 },
    })
  }

  const newItem = (item) => {
    let oldKey = state.saleItems.length
    let newItemKey = 0
    if (oldKey > 0) {
      newItemKey = oldKey
    }
    set(
      ref(
        dbFirestore,
        `pop/${pop}/mesas/${state.config.table}/saleItems/${newItemKey}`
      ),
      { ...item, qty: state.config.qty }
    )
  }

  const incrementItem = (itemId, qty = 1) => {
    const foundIndex = state.saleItems.findIndex((item) => item.id === itemId)
    if (foundIndex > -1) {
      const newQty =
        parseFloat(state.saleItems[foundIndex].qty) + parseFloat(qty)
      if (newQty < 999) {
        update(
          ref(
            dbFirestore,
            `pop/${pop}/mesas/${state.config.table}/saleItems/${foundIndex}`
          ),
          { qty: newQty }
        )
      }
    }
  }

  const decrementItem = (itemId, qty = 1) => {
    const foundIndex = state.saleItems.findIndex((item) => item.id === itemId)
    if (foundIndex > -1) {
      const newQty =
        parseFloat(state.saleItems[foundIndex].qty) - parseFloat(qty)
      if (newQty > 1) {
        update(
          ref(
            dbFirestore,
            `pop/${pop}/mesas/${state.config.table}/saleItems/${foundIndex}`
          ),
          { qty: newQty }
        )
      }
    }
  }

  const updateCommentItem = (itemId, comment = "") => {
    const foundIndex = state.saleItems.findIndex((item) => item.id === itemId)
    if (foundIndex > -1) {
      update(
        ref(
          dbFirestore,
          `pop/${pop}/mesas/${state.config.table}/saleItems/${foundIndex}`
        ),
        { comment: comment }
      )
    }
  }

  const removeItem = (id) => {
    const newSaleItems = state.saleItems.filter((item) => item.id !== id)
    set(ref(dbFirestore, `pop/${pop}/mesas/${state.config.table}/saleItems`), {
      ...newSaleItems,
    })
  }

  const clearAllItems = () => {
    delete ref(dbFirestore, `pop/${pop}/mesas/${state.config.table}/saleItems`)
  }

  return (
    <MesasContext.Provider
      value={{
        config: state.config,
        updateConfig,
        tables: state.tables,
        updateTables,
        updateDiscount,
        invoice: state.invoice,
        updateInvoice,
        payMethod: state.payMethod,
        updatePayMethod,
        payMethodSecondary: state.payMethodSecondary,
        updatePayMethodSecondary,
        saleItems: state.saleItems,
        updateSaleItems,
        addItem,
        incrementItem,
        decrementItem,
        updateCommentItem,
        removeItem,
        clearAllItems,
      }}
    >
      {children}
    </MesasContext.Provider>
  )
}

export default MesasContext
