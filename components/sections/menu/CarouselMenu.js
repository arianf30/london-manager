import { useCallback, useEffect, useState } from "react"
import useEmblaCarousel from "embla-carousel-react"
import CarouselButton from "./CarouselButton"

const dotsText = {
  0: "operar",
  1: "administrar",
  2: "configurar",
}
const styleDots = {
  active: "text-h3 opacity-100 font-bold",
  inactive: "text-bs opacity-60 font-normal",
}
const styleDotsPoint = {
  active: "w-2 h-2 mt-1 opacity-100",
  inactive: "w-0 h-0 mt-0 opacity-0",
}

export default function CarouselMenu({
  sectionsAction,
  sectionsResults,
  sectionsConfiguration,
}) {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [emblaRef, embla] = useEmblaCarousel({ loop: false })

  const onSelect = useCallback(() => {
    if (!embla) return
    setSelectedIndex(embla.selectedScrollSnap())
  })

  useEffect(() => {
    if (!embla) return
    onSelect()
    embla.on("select", onSelect)
  }, [embla, onSelect])

  return (
    <div className="embla overflow-hidden max-w-[660px]" ref={emblaRef}>
      <div className="embla__container flex">
        {/* SLIDE 1 */}
        <div className="embla__slide relative mx-auto">
          <div className="flex justify-center mt-20 md:mt-10">
            <div className="w-[600px] md:w-auto">
              <div className="grid grid-cols-4 md:grid-cols-3 gap-x-14 md:gap-x-8 sm:gap-x-0 place-content-center">
                {sectionsAction.map((item, index) => {
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
                        key={`menu-slide-${index}`}
                        nombre={item.section.nombre}
                        disabled={disabled}
                      />
                    )
                  }
                })}
              </div>
            </div>
          </div>
        </div>
        {/* SLIDE 2 */}
        <div className="embla__slide relative">
          <div className="flex justify-center mt-20 md:mt-10">
            <div className="w-[600px] md:w-auto">
              <div className="grid grid-cols-4 md:grid-cols-3 gap-x-16 md:gap-x-8 sm:gap-x-0 place-content-center">
                {sectionsResults.map((item, index) => {
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
                        key={`menu-slide-${index}`}
                        nombre={item.section.nombre}
                        disabled={disabled}
                      />
                    )
                  }
                })}
              </div>
            </div>
          </div>
        </div>
        {/* SLIDE 3 */}
        <div className="embla__slide relative">
          <div className="flex justify-center mt-20 md:mt-10">
            <div className="w-[600px] md:w-auto">
              <div className="grid grid-cols-4 md:grid-cols-3 gap-x-16 md:gap-x-8 sm:gap-x-0 place-content-center">
                {sectionsConfiguration.map((item, index) => {
                  if (item != null && item.read > 0) {
                    if (item.section.nombre === "Jerarquías") return
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
                        key={`menu-slide-${index}`}
                        nombre={item.section.nombre}
                        disabled={disabled}
                      />
                    )
                  }
                })}
              </div>
            </div>
          </div>
        </div>
        {/* FIN SLIDES */}
      </div>
      {/* BOTONES */}
      <div className="relative flex justify-center items-top gap-8 mt-16 mb-8">
        {[0, 1, 2].map((i) => (
          <div
            className="relative"
            key={`dot-${i}`}
            onClick={() => embla.scrollTo(i)}
          >
            <div className="flex flex-col items-center">
              <button
                className={`flex h-8 items-end text-blanco transition ease-in-out ${
                  selectedIndex === i ? styleDots.active : styleDots.inactive
                }`}
                style={{ transition: "font-size .33s" }}
              >
                {dotsText[i]}
              </button>
              <div
                className={`relative rounded-full bg-blanco ${
                  selectedIndex === i
                    ? styleDotsPoint.active
                    : styleDotsPoint.inactive
                }`}
                style={{ transition: ".33s, opacity .33s" }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
