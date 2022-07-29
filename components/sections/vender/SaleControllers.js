import InputQty from "components/sections/vender/InputQty"
import InputProducts from "components/sections/vender/InputProducts"
import CircleButton from "components/buttons/CircleButton"
import svgs from "components/svg"
import Link from "next/link"
import { useRouter } from "next/router"

export default function SaleControllers({ qty, updateQty, addItem }) {
  const { pop, section } = useRouter().query
  return (
    <div className="relative flex items-center justify-around w-full h-24 bg-negro2">
      <InputQty qty={qty} updateQty={updateQty} />
      <InputProducts addItem={addItem} />

      <Link
        href="/pop/[pop]/[section]?modal=cobrar"
        as={`/pop/${pop}/${section}?modal=cobrar`}
      >
        <a>
          <CircleButton
            iconSVG={svgs["caja"]}
            bg="bg-verde"
            size="big2"
            color="text-blanco1"
            shadow={true}
            theme="zoom"
          />
        </a>
      </Link>

      <CircleButton
        iconSVG={svgs["cruz"]}
        iconSize="w-2/5"
        bg="bg-rojo"
        size="large"
        color="text-blanco1"
        shadow={true}
        theme="zoom"
      />
    </div>
  )
}
