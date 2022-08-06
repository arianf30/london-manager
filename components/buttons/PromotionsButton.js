import { motion } from "framer-motion"
import Icon from "components/svg/Icon"

const buttonVariants = {
  active: {
    width: "160px",
    backgroundColor: "#363B63",
  },
  hover: {
    width: "160px",
  },
}
const textVariants = {
  active: {
    display: "block",
    opacity: 1,
  },
  hover: {
    display: "block",
    opacity: 1,
  },
}

export default function PromotionsButton({ state, action }) {
  return (
    <motion.button
      className="relative flex items-center w-14 h-12 px-3 rounded-r-3xl bg-p700 active:bg-p800 transition ease-in-out"
      whileHover="hover"
      transition={{ type: "spring", stiffness: 600 }}
      animate={state ? "active" : ""}
      variants={buttonVariants}
      onClick={action}
    >
      <motion.span
        className="hidden opacity-0 text-ss max-w-[136px] truncate font-bold text-blanco"
        transition={{ type: "tween", duration: 0.2 }}
        variants={textVariants}
      >
        Promociones
      </motion.span>
      <div className="absolute right-3 h-8 w-8 text-e500">
        <Icon svg="fire" />
      </div>
    </motion.button>
  )
}
