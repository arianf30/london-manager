import { useRouter } from "next/router"
import dynamic from "next/dynamic"
import useRole from "hooks/useRole"
import SectionNavbar from "components/navbars/SectionNavbar"
import dropdownSection from "utils/dropdown-content/dropdownSection"

export default function Section() {
  const { section } = useRouter().query
  const { permissions } = useRole()
  let Container = null
  let Provider = null
  if (section) {
    Container = dynamic(() =>
      import(`components/sections/${section}/Container`)
    )
    Provider = dynamic(() =>
      import(`context/${section}`).then((mod) => mod.Provider)
    )
  }

  if (Container) {
    return (
      <section className="h-screen">
        <SectionNavbar
          title={section}
          itemsDropdown={dropdownSection(section)}
        />
        {Provider ? (
          <Provider>
            <Container />
          </Provider>
        ) : (
          <Container />
        )}
      </section>
    )
  }
  return <p>La sección {section} no existe.</p>
}

Section.auth = true
