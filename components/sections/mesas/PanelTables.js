import { useRouter } from "next/router"
import { useEffect, useRef } from "react"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import SecondaryButton from "components/buttons/SecondaryButton"
import Tabs from "components/tabs/Tabs"
import useQuerySalones from "hooks/querys/mesas/useQuerySalones"
import useQueryMesas from "hooks/querys/mesas/useQueryMesas"
import { motion } from "framer-motion"
import { postMesa } from "services/pop/mesas"

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
  close: "bg-s600 border-s700",
  open: "bg-e500 border-e600",
}

export default function PanelTables({
  tables,
  lounge,
  updateLounge,
  table,
  updateTable,
  editMode,
  updateEditMode,
}) {
  const { pop } = useRouter().query
  const queryClient = useQueryClient()

  const { data: salones, isLoading: isLoadingSalones } = useQuerySalones()
  const { data: mesas, isLoading: isLoadingMesas } = useQueryMesas()
  const { mutate: mutateMesa } = useMutation(postMesa)

  const constraintsRef = useRef(null)

  const saveTablePosition = (tableId) => {
    const pos = document
      .getElementById(`table-move-${tableId}`)
      .style.transform.split(" ")
    const x = pos[0].slice(11, -3)
    const y = pos[1].slice(11, -3)

    mutateMesa({
      pop: pop,
      id: tableId,
      payload: {
        "data-x": parseFloat(x),
        "data-y": parseFloat(y),
      },
    })
  }

  useEffect(() => {
    if (!editMode) {
      queryClient.invalidateQueries(["mesas", pop])
    }
  }, [editMode])

  return (
    <div className="flex flex-col w-full h-full overflow-auto">
      {/* TOP NAVBAR */}
      <div className="flex items-center justify-between w-full px-4 h-[54px] border-b-[1px] border-gs550">
        <Tabs
          options={salones}
          active={lounge}
          action={(lounge) => updateLounge(lounge)}
        />
        <div
          className={`relative min-w-max pl-4 ${editMode && "animate-pulse"}`}
        >
          <SecondaryButton
            text={editMode ? "Dejar de mover" : "Mover mesas"}
            size="sm"
            theme="light"
            icon="move"
            action={() => updateEditMode(!editMode)}
          />
        </div>
      </div>
      {/* TABLE */}
      <div className="w-full h-[calc(100%_-_54px)] py-6 px-4 select-none">
        <motion.div
          className="relative h-full w-full rounded-xl bg-gs550 overflow-hidden"
          ref={constraintsRef}
        >
          {mesas?.map((mesa, index) => {
            if (mesa.id_salon === lounge) {
              return (
                <motion.div
                  key={`mesa-${index}`}
                  id={`table-move-${mesa.id}`}
                  className={`inline-flex items-center justify-center ${
                    LAYOUTS[mesa.size]
                  } ${
                    STATE[tables[mesa.id]?.status ?? "close"]
                  } border-[3px] text-ss font-bold text-blanco ${
                    table === mesa.id && "border-a400"
                  } ${editMode && "cursor-move"}`}
                  dragConstraints={constraintsRef}
                  drag={editMode ? true : false}
                  dragMomentum={false}
                  dragElastic={0}
                  onDragEnd={() => {
                    saveTablePosition(mesa.id)
                  }}
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    x: parseFloat(mesa["data-x"]),
                    y: parseFloat(mesa["data-y"]),
                  }}
                  transition={{
                    duration: 0,
                  }}
                  onClick={() => {
                    if (!editMode) {
                      updateTable(mesa.id)
                    }
                  }}
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
