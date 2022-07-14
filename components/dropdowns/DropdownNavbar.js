import CircleButton from "components/buttons/CircleButton"
import { useEffect, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"

export default function DropdownNavbar({ items = [] }) {
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
      <CircleButton
        margin="mr-2"
        theme="transparent"
        size="large"
        color="text-white"
        icon="opciones"
        shadow={false}
        action={(e) => {
          e.stopPropagation()
          setOpen(!open)
        }}
      />
      <AnimatePresence>
        {open && (
          <motion.div
            id="dropdown-content-navbar"
            className="relative h-0 w-0 z-20 right-36"
            initial={{ top: -5, opacity: 0 }}
            animate={{ top: 0, opacity: 1 }}
            exit={{ top: 5, opacity: 0 }}
            transition={{ type: "spring", duration: 0.33 }}
          >
            <div className="flex flex-wrap w-48 shadow-md rounded-md origin-top-right">
              {items?.map((item, index) => (
                <button
                  key={index}
                  className={`flex h-12 w-48 items-center cursor-pointer border-b-[1px] border-blanco3 px-4 bg-blanco1 hover:bg-violeta text-negro3 hover:text-blanco1 ${
                    index === 0 && "rounded-t-md"
                  } ${index === items.length - 1 && "rounded-b-md"}`}
                  onClick={item.action}
                >
                  {item.icon && (
                    <p className={`font-icons i-${item.icon} text-sm mr-3`} />
                  )}
                  {item.text}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
