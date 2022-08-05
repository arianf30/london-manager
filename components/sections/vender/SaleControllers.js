import InputQty from "components/sections/vender/InputQty"
import InputProducts from "components/sections/vender/InputProducts"
import { useRouter } from "next/router"
import IconRectangleButton from "components/buttons/IconRectangleButton"

export default function SaleControllers({ qty, updateQty, addItem }) {
  const router = useRouter()
  const { pop, section } = router.query
  return (
    <div className="flex items-center justify-between w-full h-24 bg-gs600 px-4">
      <div className="relative flex h-full w-[calc(100%_-_138px)] items-center gap-2">
        <InputQty qty={qty} updateQty={updateQty} />
        <InputProducts addItem={addItem} />
      </div>

      <div className="flex items-center justify-between gap-4 min-w-[111px]">
        <IconRectangleButton
          size="xl"
          icon="caja"
          classes="bg-s400"
          classesBox="p-[10%]"
          action={() => router.push(`/pop/${pop}/${section}?modal=cobrar`)}
        />
        <IconRectangleButton
          size="lg"
          icon="trash"
          classes="bg-e500"
          action={() => router.push(`/pop/${pop}/${section}?modal=cobrar`)}
        />
      </div>
    </div>
  )
}
