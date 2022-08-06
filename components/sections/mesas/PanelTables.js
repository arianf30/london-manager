import { useRef } from "react"
import SecondaryButton from "components/buttons/SecondaryButton"
import Tabs from "components/tabs/Tabs"
import useQuerySalones from "hooks/querys/mesas/useQuerySalones"
import useQueryMesas from "hooks/querys/mesas/useQueryMesas"
import { motion } from "framer-motion"

const LAYOUTS = {
  "1s": "h-10 w-10 rounded-[3px]",
  "1m": "h-16 w-16 rounded-[3px]",
  "1l": "h-24 w-24 rounded-[3px]",
  "2s": "h-10 w-10 rounded-full",
  "2m": "h-16 w-16 rounded-full",
  "2l": "h-24 w-24 rounded-full",
  "3s": "h-10 w-16 rounded-[3px]",
  "3m": "h-16 w-28 rounded-[3px]",
  "3l": "h-24 w-36 rounded-[3px]",
  "4s": "h-6 w-16 rounded-[3px]",
  "4m": "h-12 w-28 rounded-[3px]",
  "4l": "h-16 w-40 rounded-[3px]",
  "5s": "w-10 h-16 rounded-[3px]",
  "5m": "w-16 h-28 rounded-[3px]",
  "5l": "w-24 h-36 rounded-[3px]",
}

const STATE = {
  abierta: "bg-s600 border-s700",
  cerrada: "bg-e500 border-e600",
}

export default function PanelTables({
  lounge,
  updateLounge,
  table,
  updateTable,
}) {
  const { data: salones, isLoading: isLoadingSalones } = useQuerySalones()
  const { data: mesas, isLoading: isLoadingMesas } = useQueryMesas()

  const constraintsRef = useRef(null)

  return (
    <div className="flex flex-col w-full h-full overflow-auto">
      {/* TOP NAVBAR */}
      <div className="flex items-center justify-between w-full px-4 h-[54px] border-b-[1px] border-gs550">
        <Tabs
          options={salones}
          active={lounge}
          action={(lounge) => updateLounge(lounge)}
        />
        <div className="min-w-max pl-4">
          <SecondaryButton
            text="Mover mesas"
            size="sm"
            theme="light"
            icon="move"
          />
        </div>
      </div>
      {/* TABLE */}
      <div className="relative w-full h-[calc(100%_-_54px)] py-6 px-4">
        <motion.div
          className="h-full w-full rounded-xl bg-gs550"
          ref={constraintsRef}
        >
          {mesas?.map((mesa, index) => {
            if (mesa.id_salon === lounge) {
              return (
                <motion.div
                  key={`mesa-${index}`}
                  className={`absolute flex items-center justify-center ${
                    LAYOUTS[mesa.size]
                  } ${
                    STATE[mesa.estado]
                  } border-[3px] text-ss font-bold text-blanco`}
                  style={{
                    left: `${mesa["data-x"]}px`,
                    top: `${mesa["data-y"]}px`,
                  }}
                  drag
                  dragConstraints={constraintsRef}
                  dragMomentum={false}
                  dragElastic={0}
                  whileDrag={{ scale: 1.2 }}
                  onDragEnd={(event, info) =>
                    console.log(info.point.x, info.point.y)
                  }
                >
                  {mesa.id}
                </motion.div>
              )
            }
          })}
        </motion.div>
      </div>
    </div>
  )
}
