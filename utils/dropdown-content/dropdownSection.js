export default function dropdownSection(section, setModal) {
  switch (section) {
    case "vender":
      return [
        {
          icon: "logOut",
          text: "Nueva cliente",
          action: () => console.log("Nueva cliente"),
        },
        {
          icon: "logOut",
          text: "Editar caja",
          action: () => console.log("Editar caja"),
        },
      ]
    case "mesas":
      return [
        {
          icon: "logOut",
          text: "Configurar impresoras",
          action: () => setModal("impresoras"),
        },
      ]
    default:
      return null
  }
}
