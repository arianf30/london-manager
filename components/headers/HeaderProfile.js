import Avatar from "components/avatars/Avatar"
import LogoPrimary from "components/svg/logos/LogoPrimary"
import DropdownNavbar from "components/dropdowns/DropdownNavbar"
import { signOut } from "next-auth/react"
import { useRouter } from "next/router"
import ImageZoom from "react-medium-image-zoom"
import "react-medium-image-zoom/dist/styles.css"

const DROPDOWN_OPTIONS = [
  {
    icon: "user",
    text: "Ver perfil",
    action: () => alert("Disculpas. Estamos construyendo esta sección."),
  },
  {
    icon: "help",
    text: "Ayuda",
    action: () => alert("Disculpas. Estamos construyendo esta sección."),
  },
  {
    separator: true,
  },
  {
    icon: "logOut",
    text: "Cerrar sesión",
    action: () => signOut({ redirect: true, callbackUrl: "/logout" }),
  },
]

export default function HeaderProfile({ name = "", email = "", avatar = "" }) {
  const router = useRouter()
  return (
    <div className="flex items-center justify-between h-[104px] px-4 bg-gs600 border-b-[1px] border-gs500">
      <button onClick={() => router.push("https://londonmanager.com")}>
        <LogoPrimary />
      </button>
      <div className="flex items-center gap-3">
        <div className="flex flex-col">
          <span className="text-sl font-bold text-blanco">{name}</span>
          <span className="text-bs font-normal text-gs300">{email}</span>
        </div>
        <ImageZoom overlayBgColorEnd="rgba(0, 0, 0, 0.95)" zoomMargin={40}>
          <Avatar
            type="user"
            avatar={avatar}
            alt={name}
            size="lg"
            shadow={true}
          />
        </ImageZoom>
        <DropdownNavbar items={DROPDOWN_OPTIONS} />
      </div>
    </div>
  )
}
