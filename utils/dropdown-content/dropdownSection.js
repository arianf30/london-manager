export default function dropdownSection(section) {
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
    default:
      return null
  }
}
