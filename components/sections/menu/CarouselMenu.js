import { useCallback, useEffect, useState } from "react"
import useEmblaCarousel from "embla-carousel-react"
import CarouselButton from "./CarouselButton"
import { motion } from "framer-motion"

const inactiveItemsStyle =
  "inline-block text-xs text-gris3 px-3 font-light cursor-pointer hover:text-blanco1"
const aciveItemsStyle = "inline-block text-2xl text-blanco1 px-3 font-bold"
const motionItem = {
  first: {
    left: 80,
    transition: {
      type: "Inertia",
    },
  },
  second: {
    left: 10,
    transition: {
      type: "Inertia",
    },
  },
  third: {
    left: -70,
    transition: {
      type: "Inertia",
    },
  },
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
    <div className="embla overflow-hidden" ref={emblaRef}>
      <div className="embla__container flex">
        {/* SLIDE 1 */}
        <div className="embla__slide relative mx-auto">
          <div className="flex justify-center mt-20 md:mt-10">
            <div className="w-[600px] md:w-auto">
              <div className="grid grid-cols-4 md:grid-cols-3 gap-x-16 md:gap-x-8 sm:gap-x-0 place-content-center">
                {sectionsAction.map((item, index) => {
                  if (item != null && item.read > 0) {
                    return (
                      <CarouselButton
                        key={index}
                        nombre={item.section.nombre}
                        icono={item.section.icono}
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
                    return (
                      <CarouselButton
                        key={index}
                        nombre={item.section.nombre}
                        icono={item.section.icono}
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
                    return (
                      <CarouselButton
                        key={index}
                        nombre={item.section.nombre}
                        icono={item.section.icono}
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
      <div className="relative w-full h-auto text-center mt-6">
        <motion.div
          className={`relative inline-block h-auto w-auto text-blanco1 text-center`}
          variants={motionItem}
          animate={() => {
            if (selectedIndex === 0) return "first"
            if (selectedIndex === 1) return "second"
            if (selectedIndex === 2) return "third"
          }}
        >
          <span
            onClick={() => embla.scrollTo(0)}
            className={`${
              selectedIndex === 0 ? aciveItemsStyle : inactiveItemsStyle
            }`}
          >
            operar
          </span>
          <span
            onClick={() => embla.scrollTo(1)}
            className={`${
              selectedIndex === 1 ? aciveItemsStyle : inactiveItemsStyle
            }`}
          >
            administrar
          </span>
          <span
            onClick={() => embla.scrollTo(2)}
            className={`${
              selectedIndex === 2 ? aciveItemsStyle : inactiveItemsStyle
            }`}
          >
            configurar
          </span>
        </motion.div>
        <div className="text-center">
          <div className="inline-block w-2 h-2 rounded-full bg-blanco1" />
        </div>
      </div>
    </div>
  )
}
