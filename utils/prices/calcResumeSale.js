import articleDiscountCalc from "./articleDiscountCalc"
import priceToShow from "./priceToShow"
import salePriceCalc from "./salePriceCalc"

export const calcSubtotal = (saleItems) => {
  let calcSubtotal = 0
  if (saleItems?.length > 0) {
    saleItems.forEach((item) => {
      const price = salePriceCalc(
        item?.tipo_precio,
        item?.precio_venta,
        item?.precio_compra
      )
      const priceQty = priceToShow(price, 0, item?.qty)
      calcSubtotal += parseFloat(priceQty)
    })
  }

  return parseFloat(calcSubtotal).toFixed(2)
}

export const calcDiscountProducts = (saleItems) => {
  let calcDiscounts = 0
  if (saleItems?.length > 0) {
    saleItems.forEach((item) => {
      const price = salePriceCalc(
        item?.tipo_precio,
        item?.precio_venta,
        item?.precio_compra
      )
      const discount = articleDiscountCalc(
        price,
        item?.descuento_cant,
        item?.descuento_tipo
      )
      const priceQty =
        item?.descuento_tipo === "pesos"
          ? priceToShow(0, discount, 1)
          : priceToShow(0, discount, item?.qty)
      calcDiscounts += parseFloat(priceQty)
    })
  }

  return parseFloat(-calcDiscounts).toFixed(2)
}

export const calcDiscountPromotions = (promotions) => {
  let discountPromotions = 0
  if (promotions) {
    promotions.forEach((item) => {
      discountPromotions += parseFloat(item.discount)
    })
  }
  return parseFloat(discountPromotions).toFixed(2)
}

export const calcDiscountGeneral = (
  subtotalWithDiscounts,
  discountQty,
  discountType
) => {
  const discountGeneral = articleDiscountCalc(
    subtotalWithDiscounts,
    discountQty,
    discountType
  )

  return parseFloat(discountGeneral).toFixed(2)
}

export default calcSubtotal
