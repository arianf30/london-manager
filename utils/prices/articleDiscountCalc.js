export default function articleDiscountCalc(price, discount, discountType) {
  if (discount > 0) {
    if (discountType === "porcentaje") {
      const discountCalc = (price * parseFloat(discount)) / 100
      return parseFloat(discountCalc).toFixed(2)
    } else if (discountType === "pesos") {
      const discountCalc = parseFloat(discount)
      return parseFloat(discountCalc).toFixed(2)
    }
  }
  return 0
}
