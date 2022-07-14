export default function priceToShow(price, discount, qty) {
  let priceQty
  if (discount) {
    priceQty = (price - discount) * parseFloat(qty)
    return parseFloat(priceQty).toFixed(2)
  }
  priceQty = price * parseFloat(qty)
  return parseFloat(priceQty).toFixed(2)
}
