// PROMO: -28-29-30-32-33-34-35-36-37-38-39-63-64-65-/-28-29-30-32-33-34-35-36-37-38-39-63-64-65-

import salePriceCalc from "./prices/salePriceCalc"

export default function applyPromotions(promotionArticles, saleItems) {
  let promotions = []
  const productsInPromo = new Map()
  let articlesInPromo = []
  let listItems = [...saleItems]

  const savePromos = (itemsFound, promotion) => {
    let discount = 0
    let totalPrice = 0

    itemsFound.forEach((item) => {
      if (productsInPromo.get(item.id)) {
        const newQty = parseFloat(productsInPromo.get(item.id)) + 1
        productsInPromo.set(item.id, newQty)
      } else {
        productsInPromo.set(item.id, 1)
      }

      totalPrice += parseFloat(
        salePriceCalc(item.tipo_precio, item.precio_venta, item.precio_compra)
      )
    })

    if (promotion.tipo_precio === "fijo") {
      discount = parseFloat(totalPrice) - parseFloat(promotion.precio_venta)
    }
    if (promotion.tipo_precio === "descuento") {
      discount =
        (parseFloat(totalPrice) * parseFloat(promotion.descuento_cant)) / 100
    }

    promotions.push({
      id: promotion.id,
      name: promotion.descripcion_1,
      discount: -discount,
    })

    articlesInPromo = productsInPromo
  }

  const deleteItems = (itemsFound) => {
    itemsFound.forEach((itemInfo) => {
      listItems = listItems.map((item) => {
        if (item?.id === itemInfo.id) {
          if (item?.qty > 1) {
            return { ...item, qty: +item?.qty - 1 }
          }
          return null
        }
        return item
      })
    })
  }

  // RECORRER PROMOS
  promotionArticles.forEach((promotion) => {
    const promoItem = promotion?.detalle_texto.split("/")
    const cantItemsPromo = promoItem.length

    let exist = true
    while (exist !== false) {
      let borradorList = [...listItems]
      let itemsFound = []
      let acum = 0

      // RECORRER PROMO
      for (let itemPromo of promoItem) {
        // itemPromo = -28-29-30-32-33-34-35-36-37-38-39-63-64-65-
        for (let item of borradorList) {
          // 28
          if (itemPromo.includes(`-${item?.id}-`)) {
            acum += 1
            itemsFound.push(item)
            borradorList = borradorList.map((a) => {
              if (a?.id === item?.id) {
                if (a?.qty > 1) {
                  return { ...a, qty: +a?.qty - 1 }
                }
              } else {
                return { ...a }
              }
            })
            break
          }
        }
      }

      if (acum !== cantItemsPromo) {
        exist = false
        return
      }

      savePromos(itemsFound, promotion)
      deleteItems(itemsFound)
    }
  })

  return {
    articlesInPromo: articlesInPromo,
    promotions: promotions,
  }
}
