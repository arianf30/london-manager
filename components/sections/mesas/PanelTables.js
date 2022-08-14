import { useRouter } from "next/router"
import { useEffect, useRef } from "react"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import SecondaryButton from "components/buttons/SecondaryButton"
import Tabs from "components/tabs/Tabs"
import useQuerySalones from "hooks/querys/mesas/useQuerySalones"
import useQueryMesas from "hooks/querys/mesas/useQueryMesas"
import { motion } from "framer-motion"
import { postMesa } from "services/pop/mesas"
import DateDiff from "components/panels/DateDiff"

const LAYOUTS = {
  "1s": "h-[40px] w-[40px] rounded-full",
  "1m": "h-[80px] w-[80px] rounded-full",
  "1l": "h-[80px] w-[80px] rounded-full",
  "2s": "h-[40px] w-[40px] rounded-[4px]",
  "2m": "h-[56px] w-[56px] rounded-[4px]",
  "2l": "h-[56px] w-[56px] rounded-[4px]",
  "3s": "h-[40px] w-[80px] rounded-[4px]",
  "3m": "h-[56px] w-[112px] rounded-[4px]",
  "3l": "h-[56px] w-[112px] rounded-[4px]",
  "4s": "h-[40px] w-[80px] rounded-[4px]",
  "4m": "h-[56px] w-[112px] rounded-[4px]",
  "4l": "h-[56px] w-[112px] rounded-[4px]",
  "5s": "h-[168px] w-[32px] rounded-[4px]",
  "5m": "h-[224px] w-[32px] rounded-[4px]",
  "5l": "h-[224px] w-[32px] rounded-[4px]",
  "6s": "h-[32px] w-[168px] rounded-[4px]",
  "6m": "h-[48px] w-[224px] rounded-[4px]",
  "6l": "h-[48px] w-[224px] rounded-[4px]",
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
            theme="dark"
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
            console.log(mesa)
            if (mesa.id_salon === lounge) {
              return (
                <motion.div
                  key={`mesa-${index}`}
                  id={`table-move-${mesa.id}`}
                  className={`relative inline-flex items-center justify-center ${
                    LAYOUTS[mesa.size]
                  } ${
                    STATE[tables[mesa.id]?.status ?? "close"]
                  } border-[3px] box-content text-ss font-bold text-blanco ${
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
                  {tables[mesa.id]?.openAt && (
                    <div className="absolute font-normal -bottom-5 text-cap text-center text-gs400">
                      <DateDiff date1="now" date2={tables[mesa.id]?.openAt} />
                    </div>
                  )}
                </motion.div>
              )
            }
          })}
        </motion.div>
      </div>
    </div>
  )
}
