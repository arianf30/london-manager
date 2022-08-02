import { useRouter } from "next/router"
import plainText from "utils/plainText"

const normalizeText = (text) => {
  if (text === "Cuentas Corrientes") return "Ctas. Ctes."
  if (text === "Órdenes de Compra") return "Ord. Compras"
  if (text === "Formas de Pago") return "Formas Pago"
  return text
}

const addStyles =
  "group-hover:bg-[linear-gradient(92.28deg,#5E5EA7_0%,#1C9C7D_103.32%)] group-focus-within:border-2 group-focus-within:border-s400"

export default function CarouselButton({ nombre, disabled }) {
  const router = useRouter()
  const { pop } = router.query
  return (
    <button
      className="group block text-center my-7 md:my-4 outline-none disabled:opacity-40"
      onClick={() => router.push(`/pop/${pop}/${plainText(nombre)}`)}
      disabled={disabled}
    >
      <div
        className={`block w-[104px] h-[72px] md:w-20 md:h-16 rounded-lg bg-[rgba(27,28,35,0.8)] outline-none ${
          !disabled && addStyles
        }`}
      >
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `url(/img/system/icons/menu/${plainText(
              nombre
            )}.svg)`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        />
      </div>
      <p className="text-ll mt-2 text-center tracking-wider text-[#FAFAFA]">
        {normalizeText(nombre)}
      </p>
    </button>
  )
}
