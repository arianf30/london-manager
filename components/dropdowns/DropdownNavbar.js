import { useEffect, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import IconButtonCircle from "components/buttons/IconButtonCircle"
import svgs from "components/svg"

export default function DropdownNavbar({ items = [], orientation = "right" }) {
  const [open, setOpen] = useState(false)

  const closeDropdown = ({ items }) => {
    setOpen(false)
  }

  useEffect(() => {
    document.addEventListener("click", closeDropdown)
    return () => {
      document.removeEventListener("click", closeDropdown)
    }
  }, [])

  return (
    <div className="relative">
      <IconButtonCircle
        icon="options"
        size="lg"
        theme="dark"
        action={(e) => {
          e.stopPropagation()
          setOpen(!open)
        }}
      />
      <AnimatePresence>
        {open && (
          <motion.div
            id="dropdown-content-navbar"
            className={`absolute bg-blanco h-auto w-auto z-20 ${orientation}-0 mt-9 px-1 py-2 rounded-[4px] drop-shadow-[0px_4px_8px_rgba(10,10,20,0.08)]`}
            initial={{ top: -5, opacity: 0 }}
            animate={{ top: 0, opacity: 1 }}
            exit={{ top: 5, opacity: 0 }}
            transition={{ type: "spring", duration: 0.33 }}
          >
            {items?.map((item, index) => (
              <>
                {item.separator ? (
                  <div className="h-[1px] bg-gs200 my-1 min-w-full" />
                ) : (
                  <button
                    key={index}
                    className="flex items-center justify-start h-8 min-w-full whitespace-nowrap hover:bg-p200 pl-[18px] pr-10 text-[14px] text-gs600 hover:text-p800 transition ease-in-out rounded-[4px]"
                    onClick={item.action}
                  >
                    {item.icon && (
                      <svg
                        className="h-[44%] mr-[10px]"
                        viewBox={svgs[item.icon].viewBox}
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        {svgs[item.icon].svg}
                      </svg>
                    )}
                    {item.text}
                  </button>
                )}
              </>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
