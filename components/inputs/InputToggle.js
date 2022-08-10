import { motion } from "framer-motion"

const variants = {
  active: { backgroundColor: "#565D98" },
  inactive: { backgroundColor: "#B3B3B3" },
}

const variantsBall = {
  active: { right: "2px" },
  inactive: { left: "2px" },
}

export default function InputToggle({ text, state, action }) {
  return (
    <button className="flex items-center select-none" onClick={action}>
      <motion.div
        animate={state ? "active" : "inactive"}
        variants={variants}
        className="relative h-[14px] w-6 rounded-[15px] p-[2px]"
      >
        <motion.div
          animate={state ? "active" : "inactive"}
          variants={variantsBall}
          className="absolute top-[2px] right-0 h-[10px] w-[10px] rounded-full bg-blanco"
          transition={{ type: "Inertia" }}
        />
      </motion.div>
      <span className="text-bxs text-negro ml-[6px]">{text}</span>
    </button>
  )
}
