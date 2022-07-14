export default function plainText(string) {
  string.replace(/\s+/g, " ")
  const chars = {
    á: "a",
    é: "e",
    í: "i",
    ó: "o",
    ú: "u",
    Á: "a",
    É: "e",
    Í: "i",
    Ó: "o",
    Ú: "u",
    ñ: "n",
    Ñ: "n",
  }
  const withinSpaces = string.replace(/\s/g, "-").toLowerCase()
  const expr = /[áàéèíìóòúùñ]/gi
  const res = withinSpaces.replace(expr, (e) => {
    return chars[e]
  })
  return res
}
