import { VenderProvider } from "context/VenderContext"
import useRole from "hooks/useRole"
import SectionNavbar from "components/navbars/SectionNavbar"
import Content from "./Content"

const itemsDropdown = [
  {
    icon: "nuevo",
    iconSVG: null,
    text: "Nueva cliente",
    action: () => console.log("Nueva cliente"),
  },
  {
    icon: "editar",
    iconSVG: null,
    text: "Editar caja",
    action: () => console.log("Editar caja"),
  },
]
export default function SectionVender() {
  const { permissions } = useRole("vender")

  return (
    <VenderProvider>
      <section className="h-screen">
        <SectionNavbar title="vender" itemsDropdown={itemsDropdown} />
        <Content />
      </section>
    </VenderProvider>
  )
}

SectionVender.auth = true
