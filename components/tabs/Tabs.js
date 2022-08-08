import TabsButton from "components/buttons/TabsButton"
import { motion } from "framer-motion"

export default function Tabs({ options, active, action }) {
  return (
    <div className="relative flex h-full overflow-x-auto">
      {options?.map((item, i) => (
        <div className="relative w-[144px]" key={`tab-${i}]`}>
          <TabsButton
            text={item.nombre}
            state={active === item.id ? true : false}
            action={() => action(item.id)}
          />
          {active === item.id ? (
            <motion.div
              className="underline absolute bottom-0 left-0 w-full h-[4px] bg-p500"
              layoutId="underline"
            />
          ) : null}
        </div>
      ))}
    </div>
  )
}
