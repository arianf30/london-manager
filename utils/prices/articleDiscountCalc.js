export default function articleDiscountCalc(price, discount, discountType) {
  let discountCalc = 0
  if (discount > 0) {
    if (discountType === "porcentaje" || discountType === "percent") {
      discountCalc = (price * parseFloat(discount)) / 100
    } else {
      discountCalc = parseFloat(discount)
    }
  }
  return parseFloat(-discountCalc).toFixed(2)
}
