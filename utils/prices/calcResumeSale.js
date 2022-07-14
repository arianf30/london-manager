import articleDiscountCalc from "./articleDiscountCalc"
import priceToShow from "./priceToShow"
import salePriceCalc from "./salePriceCalc"

const calcTotal = (sellItems) => {
  let calcTotal = 0
  sellItems.forEach((item) => {
    const price = salePriceCalc(
      item.tipo_precio,
      item.precio_venta,
      item.precio_compra
    )
    const discount = articleDiscountCalc(
      price,
      item.descuento_cant,
      item.descuento_tipo
    )
    const priceQty = priceToShow(price, discount, item.qty)
    calcTotal += parseFloat(priceQty)
  })

  return parseFloat(calcTotal).toFixed(2)
}

export const calcSubtotal = (sellItems) => {
  let calcSubtotal = 0
  sellItems.forEach((item) => {
    const price = salePriceCalc(
      item.tipo_precio,
      item.precio_venta,
      item.precio_compra
    )
    const priceQty = priceToShow(price, 0, item.qty)
    calcSubtotal += parseFloat(priceQty)
  })

  return parseFloat(calcSubtotal).toFixed(2)
}

export const calcDiscounts = (sellItems) => {
  let calcDiscounts = 0
  sellItems.forEach((item) => {
    const price = salePriceCalc(
      item.tipo_precio,
      item.precio_venta,
      item.precio_compra
    )
    const discount = articleDiscountCalc(
      price,
      item.descuento_cant,
      item.descuento_tipo
    )
    const priceQty = priceToShow(0, discount, item.qty)
    calcDiscounts += parseFloat(priceQty)
  })

  return parseFloat(calcDiscounts).toFixed(2)
}

export default calcTotal
