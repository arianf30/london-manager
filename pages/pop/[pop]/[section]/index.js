import { useRouter } from "next/router"
import dynamic from "next/dynamic"
import useRole from "hooks/useRole"
import SectionNavbar from "components/navbars/SectionNavbar"
import dropdownSection from "utils/dropdown-content/dropdownSection"

export default function Section() {
  const { section } = useRouter().query
  const { permissions, permissionsSection, isLoading, isError } = useRole()
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
    if (permissions) {
      return (
        <section className="h-screen">
          <SectionNavbar
            title={section}
            popInfo={{
              name: permissions?.popJerarquia.companyName,
              image: permissions?.popJerarquia.companyImage,
            }}
            permissions={permissionsSection}
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
    if (isLoading) {
      return <p>Cargando permisos...</p>
    }
    if (isError) {
      return <p>No tenés permisos para acceder a esta sección: {section}.</p>
    }
  }
  return <p>La sección {section} no existe.</p>
}

Section.auth = true
