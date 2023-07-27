import SecondaryButton from "components/buttons/SecondaryButton"
import HeaderProfile from "components/headers/HeaderProfile"

export default function ProfileSkeleton() {
  return (
    <div className="bg-[#262626] min-h-screen h-auto overflow-y-auto min-w-screen w-auto overflow-x-hidden select-none">
      <HeaderProfile name="" email="Cargando..." />
      <div className="relative h-[calc(100vh_-_105px)] min-h-[670px] bg-gs600">
        <h1 className="font-bold text-blanco text-center pt-[7%] pb-[6%]">
          ¡Bienvenid@{" "}
          <span className="inline-block animate-pulse bg-gs500 h-4 w-28 rounded-lg" />
          ! 👋
        </h1>
        <h4 className="text-sl text-blanco text-center mb-12">
          ¿A qué punto de venta querés ingresar?
        </h4>

        <div className="animate-pulse text-center">
          <div className="inline-flex justify-center w-[1064px] md:w-screen xl:w-w-[696px] gap-10 snap-x snap-mandatory overflow-x-hidden pb-12">
            <div className="group snap-center shrink-0 text-center">
              <div className="block bg-gs500 rounded-full drop-shadow-md group-hover:drop-shadow-xl ease-in duration-150 h-[120px] w-[120px]"></div>
              <p className="inline-block bg-gs500 h-4 w-28 mt-4 rounded-lg" />
            </div>

            <div className="group snap-center shrink-0 text-center">
              <div className="block bg-gs500 rounded-full drop-shadow-md group-hover:drop-shadow-xl ease-in duration-150 h-[120px] w-[120px]"></div>
              <p className="inline-block bg-gs500 h-4 w-28 mt-4 rounded-lg" />
            </div>

            <div className="md:hidden group snap-center shrink-0 text-center">
              <div className="block bg-gs500 rounded-full drop-shadow-md group-hover:drop-shadow-xl ease-in duration-150 h-[120px] w-[120px]"></div>
              <p className="inline-block bg-gs500 h-4 w-28 mt-4 rounded-lg" />
            </div>
          </div>
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
