import { useRouter } from "next/router"
import dynamic from "next/dynamic"

export default function Section() {
  const { section } = useRouter().query
  const withContext = ["vender", "mesas"]
  let Container = null
  let Provider = null
  if (section) {
    Container = dynamic(() =>
      import(`components/sections/${section}/Container`)
    )
    if (withContext.includes(section)) {
      Provider = dynamic(() =>
        import(`context/${section}`).then((mod) => mod.Provider)
      )
    }
  }

  if (Container) {
    return (
      <section className="h-screen">
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
