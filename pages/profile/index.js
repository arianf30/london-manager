import Link from "next/link"
import useUserCompleteInfo from "hooks/querys/user/useUserCompleteInfo"
import ProfileSkeleton from "./skeleton"
import HeaderProfile from "components/headers/HeaderProfile"
import Avatar from "components/avatars/Avatar"
import NewPop from "components/buttons/NewPop"
import SecondaryButton from "components/buttons/SecondaryButton"

export default function Profile() {
  const { user, isLoading, isError } = useUserCompleteInfo()

  if (isError)
    return (
      <h4 className="text-rojo text-center">Ocurrió un error inesperado.</h4>
    )

  if (isLoading) return <ProfileSkeleton />

  return (
    <div className="bg-[#262626] min-h-screen h-auto overflow-y-auto min-w-screen w-auto overflow-x-hidden select-none">
      <HeaderProfile
        name={`${user.nombre} ${user.apellido}`}
        email={user.correo_electronico}
        avatar={user.foto && `https://londonmanager.com/2021/${user.foto}`}
      />
      <div className="relative h-[calc(100vh_-_105px)] min-h-[670px] bg-gs600">
        <h2 className="font-bold text-blanco text-center pt-[7%] pb-[6%]">
          ¡Bienvenid@ {user.nombre}! 👋
        </h2>
        <h4 className="text-sl text-blanco text-center mb-12">
          ¿A qué punto de venta querés ingresar?
        </h4>
        <div className="flex justify-center gap-6">
          {["Maraluga", "London Manager", "Saboratto"].map((item, index) => {
            return (
              <Link href={`/pop/${index}/menu`} key={`pos-${index}`}>
                <a className="w-[120px]">
                  <Avatar type="pop" size="2xl" shadow={true} />
                  <p className="text-sr text-gs300 text-center mt-2 truncate">
                    {item}
                  </p>
                </a>
              </Link>
            )
          })}
          <NewPop
            action={() =>
              alert("Disculpas. Estamos construyendo esta sección.")
            }
          />
        </div>
        <div className="absolute w-full flex items-center justify-center bottom-16">
          <span className="text-cap text-blanco mr-5">
            ¡Instalá el sistema en tu compu y accedé más fácil y rápido!
          </span>
          <SecondaryButton
            text="Descargar"
            size="sm"
            theme="dark"
            icon="downloadCloud"
          />
        </div>
      </div>
    </div>
  )
}

Profile.auth = true
