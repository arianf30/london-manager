import TertiaryButton from "components/buttons/TertiaryButton"
import { motion } from "framer-motion"

const withModal =
  (Component, headerProps) =>
  ({ ...props }) => {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed flex select-none items-center justify-center top-0 left-0 h-screen w-screen bg-[rgba(0,0,0,0.5)] m-auto overflow-auto backdrop-blur-sm z-50"
      >
        <div>
          <div className="flex justify-center mb-2">
            <TertiaryButton
              text="Cerrar"
              size="sm"
              icon="close"
              theme="dark"
              action={() => props.setModal(null)}
            />
          </div>

          <div className="flex flex-row items-center h-auto">
            <div
              className={`h-auto`}
              style={{ width: `${headerProps.width}px` }}
            >
              <div className="w-full flex items-center bg-p500 rounded-t-xl px-6 h-[62px] text-sl text-blanco">
                {headerProps.title}
              </div>
              <div className="w-full h-auto bg-blanco"></div>
              <Component {...props} />
              <div className="flex h-3 w-full items-center justify-between bg-blanco rounded-b-xl" />
            </div>
          </div>
        </div>
      </motion.div>
    )
  }

export default withModal
