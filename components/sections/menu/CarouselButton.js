import Link from "next/link"
import Image from "next/image"
import { useRouter } from "next/router"
import plainText from "utils/plainText"

export default function CarouselButton({ nombre, icono }) {
  const router = useRouter()
  const { pop } = router.query
  return (
    <div className="block text-center my-7 md:my-4">
      <Link href={`/pop/${pop}/${plainText(nombre)}`}>
        <a className="relative inline-flex w-24 h-20 md:w-20 md:h-16 items-center justify-center rounded-xl drop-shadow-md bg-[rgba(20,20,20,0.8)]">
          <div className="relative w-8 h-8 md:w-6 md:h-6 cursor-pointer">
            <Image
              src={`https://londonmanager.com/2021/${icono}`}
              alt={`${nombre}`}
              layout="fill"
            />
          </div>
        </a>
      </Link>
      <p className="text-xs mt-2 text-center text-blanco3">{nombre}</p>
    </div>
  )
}
