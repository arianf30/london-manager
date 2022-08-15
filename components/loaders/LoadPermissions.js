import { Player } from "@lottiefiles/react-lottie-player"
import { motion } from "framer-motion"

export default function LoadPermissions() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex flex-col items-center justify-center h-screen w-screen bg-blanco"
    >
      <Player
        autoplay
        loop
        src={`../../lottie/menu-loader.json`}
        style={{ width: "420px" }}
      />
      <p className="relative -top-[120px] text-bs text-p600">
        Poniendo el negocio en orden...
      </p>
    </motion.div>
  )
}
