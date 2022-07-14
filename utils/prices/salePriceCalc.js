export default function salePriceCalc(priceType, salePrice, buyPrice) {
  if (priceType === "porcentaje") {
    const price =
      (parseFloat(buyPrice) * parseFloat(salePrice)) / 100 +
      parseFloat(buyPrice)
    return parseFloat(price).toFixed(2)
  }
  return parseFloat(salePrice).toFixed(2)
}
