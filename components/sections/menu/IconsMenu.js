import plainText from "utils/plainText"
import CarouselButton from "./CarouselButton"

export default function IconsMenu({ sections, search }) {
  const plainSearch = plainText(search)
  const results = sections.filter((item) => {
    if (item != null && item.read > 0) {
      if (plainText(item.section.nombre).includes(plainSearch)) return item
    }
  })

  if (Array.isArray(results)) {
    return (
      <div className="flex justify-center mt-20">
        <div className="grid grid-cols-4 gap-x-16 place-content-center">
          {results.slice(0, 12).map((item, index) => {
            if (item != null && item.read > 0) {
              let disabled = true
              if (
                item.section.nombre === "Mesas" ||
                item.section.nombre === "Vender" ||
                item.section.nombre === "Mostrador"
              ) {
                disabled = false
              }
              return (
                <CarouselButton
                  key={index}
                  nombre={item.section.nombre}
                  disabled={disabled}
                />
              )
            }
          })}
        </div>
      </div>
    )
  }

  if (typeof results === "object") {
    return (
      <div className="grid grid-cols-4 gap-x-16 place-content-center">
        <CarouselButton
          nombre={results.section.nombre}
          icono={results.section.icono}
        />
      </div>
    )
  }

  return <p className="text-blanco1">estoy acá</p>
}
