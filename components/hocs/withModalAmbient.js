import { motion } from "framer-motion"

const withModalAmbient =
  (Component, headerProps) =>
  ({ ...props }) => {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed flex items-center justify-center top-0 left-0 h-screen w-screen bg-[rgba(0,0,0,0.5)] m-auto overflow-auto backdrop-blur-sm z-50"
      >
        <Component {...props} />
      </motion.div>
    )
  }

export default withModalAmbient
