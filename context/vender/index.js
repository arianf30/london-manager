import useQueryArticlesToSale from "hooks/querys/articles/useQueryArticlesToSale"
import { useRouter } from "next/router"
import { createContext, useEffect, useReducer } from "react"
import applyPromotions from "utils/applyPromotions"

const VenderContext = createContext({})

const ACTIONS = {
  INITIALIZE: "initialize",
  UPDATE_CONFIG: "update_config",
  UPDATE_DISCOUNT: "update_discount",
  UPDATE_CLIENT: "update_client",
  UPDATE_INVOICE: "update_invoice",
  UPDATE_PAY_METHOD: "update_pay_method",
  UPDATE_PAY_METHOD_SECONDARY: "update_pay_method_secondary",
  UPDATE_SALE_ITEMS: "update_sale_items",
  UPDATE_PROMOTIONS: "update_promotions",
  UPDATE_ITEMS_IN_PROMO: "update_items_in_promo",
}

const ACTIONS_REDUCERS = {
  [ACTIONS.INITIALIZE]: (state, action) => ({
    ...action.payload,
  }),
  [ACTIONS.UPDATE_CONFIG]: (state, action) => ({
    ...state,
    config: { ...action.payload },
  }),
  [ACTIONS.UPDATE_DISCOUNT]: (state, action) => ({
    ...state,
    discount: { ...action.payload },
  }),
  [ACTIONS.UPDATE_CLIENT]: (state, action) => ({
    ...state,
    client: { ...action.payload },
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
  [ACTIONS.UPDATE_ITEMS_IN_PROMO]: (state, action) => ({
    ...state,
    itemsInPromo: action.payload,
  }),
}

const reducer = (state, action) => {
  const actionReducer = ACTIONS_REDUCERS[action.type]
  return actionReducer ? actionReducer(state, action) : state
}

export function Provider({ children }) {
  const { pop } = useRouter().query
  const { data: articles } = useQueryArticlesToSale()
  const [state, dispatch] = useReducer(reducer, {
    config: {
      filter: "",
      layout: "grid",
      qty: 1,
      viewSubtotal: false,
      viewDiscount: false,
      viewKeyboard: false,
      print: true,
    },
    discount: {
      discountId: 0,
      discountType: "percent",
      discountQty: 0,
    },
    client: {
      id: 0,
      name: "",
    },
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
    itemsInPromo: [],
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

  const updateDiscount = (prop, value) => {
    dispatch({
      type: ACTIONS.UPDATE_DISCOUNT,
      payload: {
        ...state.discount,
        [prop]: value,
      },
    })
  }

  const updateClient = (prop, value) => {
    dispatch({
      type: ACTIONS.UPDATE_CLIENT,
      payload: {
        ...state.client,
        [prop]: value,
      },
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
    // BUSCAR PROMOCIONES
    const promotionArticles = articles?.filter(
      (item) => item.tipo_producto === "promocion"
    )
    const { articlesInPromo, promotions } = applyPromotions(
      promotionArticles,
      todo
    )

    dispatch({
      type: ACTIONS.UPDATE_SALE_ITEMS,
      payload: todo,
    })
    dispatch({
      type: ACTIONS.UPDATE_PROMOTIONS,
      payload: promotions,
    })
    dispatch({
      type: ACTIONS.UPDATE_ITEMS_IN_PROMO,
      payload: articlesInPromo,
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
    if (item.tipo_producto === "promocion") {
      let newSaleItems = [...state.saleItems]
      const itemsPromo = item.detalle_texto.split("/")
      itemsPromo.forEach((element, index) => {
        const articlesInItemPrev = element.split("-")
        const articlesInItem = articlesInItemPrev?.filter((elem) => elem !== "")
        const indexAdd = articles?.findIndex(
          (elem) => elem.id === +articlesInItem[0]
        )
        const articleAdd = articles[indexAdd] || null
        const search = newSaleItems.findIndex((e) => e.id === +articleAdd?.id)
        if (search > -1) {
          newSaleItems = newSaleItems.map((e) => {
            if (e.id === articleAdd?.id) {
              return { ...articleAdd, qty: +e.qty + 1 * state?.config.qty ?? 1 }
            }
            return e
          })
        } else {
          newSaleItems.push({
            ...articleAdd,
            qty: 1 * state?.config.qty ?? 1,
          })
        }
      })
      updateSaleItems(newSaleItems)
      dispatch({
        type: ACTIONS.UPDATE_CONFIG,
        payload: { ...state.config, qty: 1 },
      })
      return
    }
    existItem(item.id)
      ? incrementItem(item.id, state.config.qty)
      : newItem(item)
    dispatch({
      type: ACTIONS.UPDATE_CONFIG,
      payload: { ...state.config, qty: 1 },
    })
  }

  const newItem = (item) => {
    state.saleItems
      ? updateSaleItems([
          ...state.saleItems,
          { ...item, qty: state.config.qty },
        ])
      : updateSaleItems([{ ...item, qty: state.config.qty }])
  }

  const incrementItem = (itemId, qty = 1) => {
    const newSaleItems = state.saleItems.map((item) => {
      if (itemId === item.id) {
        const newQty = parseFloat(item.qty) + parseFloat(qty)
        if (newQty < 999) {
          return {
            ...item,
            qty: newQty,
          }
        }
      }
      return item
    })
    updateSaleItems(newSaleItems)
  }

  const decrementItem = (itemId, qty = 1) => {
    const newSaleItems = state.saleItems.map((item) => {
      if (itemId === item.id) {
        const newQty = parseFloat(item.qty) - parseFloat(qty)
        if (newQty >= 1) {
          return {
            ...item,
            qty: newQty,
          }
        }
      }
      return item
    })
    updateSaleItems(newSaleItems)
  }

  const updateCommentItem = (itemId, comment = "") => {
    const newSaleItems = state.saleItems.map((item) => {
      if (itemId === item.id) {
        return {
          ...item,
          comment: comment,
        }
      }
      return item
    })
    updateSaleItems(newSaleItems)
  }

  const removeItem = (id) => {
    const newSaleItems = state.saleItems.filter((item) => item.id !== id)
    updateSaleItems(newSaleItems)
  }

  const clearAllItems = () => {
    updateSaleItems([])
  }

  return (
    <VenderContext.Provider
      value={{
        config: state.config,
        updateConfig,
        discount: state.discount,
        updateDiscount,
        client: state.client,
        updateClient,
        invoice: state.invoice,
        updateInvoice,
        payMethod: state.payMethod,
        updatePayMethod,
        payMethodSecondary: state.payMethodSecondary,
        updatePayMethodSecondary,
        saleItems: state.saleItems,
        promotions: state.promotions,
        itemsInPromo: state.itemsInPromo,
        addItem,
        incrementItem,
        decrementItem,
        updateCommentItem,
        removeItem,
        clearAllItems,
      }}
    >
      {children}
    </VenderContext.Provider>
  )
}

export default VenderContext
