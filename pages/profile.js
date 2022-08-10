import Link from "next/link"
import useUserCompleteInfo from "hooks/querys/user/useUserCompleteInfo"
import HeaderProfile from "components/headers/HeaderProfile"
import Avatar from "components/avatars/Avatar"
import NewPop from "components/buttons/NewPop"
import SecondaryButton from "components/buttons/SecondaryButton"

export default function Profile() {
  const { user, isError } = useUserCompleteInfo()

  return (
    <div className="bg-[#262626] min-h-screen h-auto overflow-y-auto min-w-screen w-auto overflow-x-hidden select-none">
      {!isError ? (
        <>
          {user ? (
            <>
              <HeaderProfile
                name={`${user.nombre} ${user.apellido}`}
                email={user.correo_electronico}
                avatar={`https://londonmanager.com/2021/${user.foto}`}
              />
              <div className="relative h-[calc(100vh_-_105px)] bg-gs600">
                <h1 className="font-bold text-blanco text-center pt-[7%] pb-[6%]">
                  ¡Bienvenid@ {user.nombre}! 👋
                </h1>
                <h4 className="text-sl text-blanco text-center mb-12">
                  ¿A qué punto de venta querés ingresar?
                </h4>
                <div className="flex justify-center gap-6">
                  {["Maraluga", "London Manager", "Saboratto"].map(
                    (item, index) => {
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
                    }
                  )}
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
            </>
          ) : (
            <>
              {/* <div className="animate-pulse flex items-center justify-center mt-7">
                <div className="inline-block relative bg-negro3 rounded-full drop-shadow-xl h-48 w-48 md:h-24 md:w-24 mr-6"></div>

                <div className="inline-block ml-5 md:ml-0">
                  <p className="bg-negro3 h-4 w-20 rounded-lg"></p>
                  <h2 className="bg-negro3 h-4 w-60 mt-3 rounded-lg"></h2>
                  <p className="hidden md:block bg-negro3 h-4 w-48 mt-3 rounded-lg" />
                  <p className="hidden md:block bg-negro3 h-4 w-64 mt-3 rounded-lg" />
                </div>
              </div>

              <div className="border-y-[1px] box-border border-negro3 text-center h-[49px] mt-20 md:mt-10">
                <p className="inline-flex items-center h-full text-blanco1 font-bold box-border border-y-[3px] border-t-transparent border-b-violeta px-8">
                  PUNTOS DE VENTA
                </p>
              </div>

              <div className="animate-pulse py-14 text-center">
                <div className="inline-flex justify-center w-[1064px] md:w-screen xl:w-w-[696px] gap-10 snap-x snap-mandatory overflow-x-hidden pb-12">
                  <div className="group snap-center shrink-0 text-center">
                    <div className="block bg-negro3 rounded-full drop-shadow-md group-hover:drop-shadow-xl ease-in duration-150 h-36 w-36"></div>
                    <p className="inline-block bg-negro3 h-4 w-28 mt-4 rounded-lg" />
                  </div>

                  <div className="group snap-center shrink-0 text-center">
                    <div className="block bg-negro3 rounded-full drop-shadow-md group-hover:drop-shadow-xl ease-in duration-150 h-36 w-36"></div>
                    <p className="inline-block bg-negro3 h-4 w-28 mt-4 rounded-lg" />
                  </div>

                  <div className="hidden md:block group snap-center shrink-0 text-center">
                    <div className="block bg-negro3 rounded-full drop-shadow-md group-hover:drop-shadow-xl ease-in duration-150 h-36 w-36"></div>
                    <p className="inline-block bg-negro3 h-4 w-28 mt-4 rounded-lg" />
                  </div>
                </div>
              </div> */}
            </>
          )}
        </>
      ) : (
        <h4 className="text-rojo text-center">Ocurrió un error inesperado.</h4>
      )}
    </div>
  )
}

Profile.auth = true
