import { useRouter } from "next/router"
import CircleButton from "components/buttons/CircleButton"
import { useOnlineStatus } from "hooks/useOnlineStatus"
import Zoom from "react-medium-image-zoom"
import "react-medium-image-zoom/dist/styles.css"

const HeaderMenu = ({
  companyName,
  companyAddress,
  role,
  userName,
  userImage,
  setSearch,
}) => {
  const router = useRouter()
  const isOnline = useOnlineStatus()

  return (
    <div className="flex h-28 border-b-2 border-negro3 px-12 pt-4 bg-[rgba(0,0,0,0.1)] select-none xl:justify-between">
      <div className="w-4/12 flex items-center text-blanco1 xl:w-auto">
        {/* <div>I am {isOnline ? "online" : "offline"}!</div> */}
        <CircleButton
          theme="primary"
          size="big"
          margin="mr-4"
          icon="flecha-izq"
          shadow={true}
          action={() => router.push("/profile")}
        />

        <Zoom
          overlayBgColorEnd="rgba(0, 0, 0, 0.95)"
          zoomMargin={40}
          className="inline-block"
        >
          <CircleButton
            size="big"
            shadow={true}
            margin="mr-4"
            image="https://londonmanager.com/2021/imagenes/puntos_de_venta/1/18_06_2020-YeiNu-london-logo.png"
            altImage="Foto de perfil del punto de venta"
          />
        </Zoom>
        <div>
          <h4 className="leading-none mb-1 text-blanco3">
            <strong>{companyName}</strong>
          </h4>
          <p className="leading-none text-gris2">{companyAddress}</p>
        </div>
      </div>
      <div className="w-4/12 flex items-center justify-center xl:w-auto lg:hidden">
        <input
          type="text"
          className="w-72 xl:w-52 h-8 border-2 text-sm rounded-2xl border-negro3 px-4 bg-[rgba(20,20,20,0.3)] text-gris2 placeholder-gris3 appearance-none box-border outline-none"
          placeholder="Buscar sección"
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className="w-4/12 flex items-center justify-end text-blanco1 xl:w-auto md:hidden">
        <div className="text-right">
          <h5 className="leading-none mb-1 text-blanco3">
            <strong>{userName}</strong>
          </h5>
          <p className="leading-none text-gris2">{role}</p>
        </div>
        <Zoom
          overlayBgColorEnd="rgba(0, 0, 0, 0.95)"
          zoomMargin={40}
          className="inline-block"
        >
          <CircleButton
            size="big"
            shadow={true}
            margin="ml-4"
            image={
              userImage
                ? userImage
                : "https://londonmanager.com/2021/imagenes/arbol/no-pic.png"
            }
            altImage="Foto de perfil del usuario"
          />
        </Zoom>
      </div>
    </div>
  )
}

export default HeaderMenu
