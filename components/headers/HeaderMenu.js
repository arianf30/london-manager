import { useRouter } from "next/router"
import ImageZoom from "react-medium-image-zoom"
import "react-medium-image-zoom/dist/styles.css"
import Avatar from "components/avatars/Avatar"
import useUserCompleteInfo from "hooks/querys/user/useUserCompleteInfo"
import HomeButton from "components/buttons/HomeButton"
import InputIconDark from "components/inputs/InputIconDark"

const HeaderMenu = ({
  companyName,
  companyAddress,
  role,
  search,
  setSearch,
}) => {
  const { user } = useUserCompleteInfo()
  const name = `${user?.nombre} ${user?.apellido[0]}.`

  const router = useRouter()
  return (
    <div className="flex items-center justify-between h-[104px] bg-[rgba(27,28,35,0.4)] border-b-[1px] border-[rgba(132,132,132,0.2)]">
      <div className="flex items-center w-4/12 h-full gap-3">
        <div className="mr-3 h-full text-[rgba(250,250,250,1)]">
          <HomeButton action={() => router.push("/profile")} />
        </div>
        <ImageZoom overlayBgColorEnd="rgba(0, 0, 0, 0.95)" zoomMargin={40}>
          <Avatar
            type="pop"
            alt={`Logotipo del punto de venta de ${companyName}`}
            size="lg"
            shadow={true}
          />
        </ImageZoom>
        <div className="flex flex-col">
          <h3 className="font-bold text-blanco">{companyName}</h3>
          <span className="text-ss font-normal text-blanco">
            {companyAddress}
          </span>
        </div>
      </div>
      <div className="w-4/12 flex items-center justify-center xl:w-auto lg:hidden">
        <div className="group relative w-[265px]">
          <InputIconDark
            inputPlaceholder="Buscar sección"
            icon="search"
            classesIcon="h-3"
            change={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>
      <div className="flex items-center justify-end w-4/12 gap-3 mr-6">
        <div className="flex flex-col">
          <span className="text-sl font-bold text-blanco">{name}</span>
          <span className="text-bs font-normal text-gs300">{role}</span>
        </div>
        <ImageZoom overlayBgColorEnd="rgba(0, 0, 0, 0.95)" zoomMargin={40}>
          <Avatar
            type="user"
            avatar={`https://londonmanager.com/2021/${user?.foto}`}
            alt={`Foto de perfil de ${name}`}
            size="lg"
            shadow={true}
          />
        </ImageZoom>
      </div>
    </div>
  )
}

export default HeaderMenu
