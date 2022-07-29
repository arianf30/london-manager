const formatter = new Intl.NumberFormat("es-AR", {
  notation: "standard",
  currencyDisplay: "narrowSymbol",
  signDisplay: "auto",
  style: "currency",
  currency: "ARS",
})

export default function formatPriceNumber(number) {
  return formatter.format(number)
}
