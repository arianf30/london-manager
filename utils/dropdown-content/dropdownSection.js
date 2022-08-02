export default function dropdownSection(section) {
  switch (section) {
    case "vender":
      return [
        {
          icon: "nuevo",
          text: "Nueva cliente",
          action: () => console.log("Nueva cliente"),
        },
        {
          icon: "editar",
          text: "Editar caja",
          action: () => console.log("Editar caja"),
        },
      ]
    default:
      return null
  }
}
