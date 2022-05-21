import { useEffect } from 'react'
import Image from 'next/image'
import { signOut } from 'next-auth/react'
import usePost from 'hooks/usePost'
import { completeInfo } from 'services/user/complete_info'
import IconTextButton from 'components/buttons/IconTextButton'
import Link from 'next/link'

export default function Profile() {
  const { sendPost, isPostLoading, hasPostError, response } = usePost(completeInfo)
  const user = response?.data

  useEffect(() => {
    sendPost()
  }, [sendPost])

  return (
    <div className="bg-negro2 min-h-screen h-auto overflow-y-auto min-w-screen w-auto overflow-x-hidden select-none">
      <div className="text-right p-5 pr-8">
        <p onClick={() => signOut()} className="inline-block text-rojo text-sm cursor-pointer hover:underline underline-offset-2">
          <div className="inline-block align-middle mr-2 h-[13px] w-[13px] bg-[url('/img/system/icons/cerrar_sesion.svg')]" />
          Cerrar sesión
        </p>
      </div>

      {!hasPostError ?
        <>
          {!isPostLoading && user ?
            <>
              <div className="flex items-center justify-center mt-7">
                <div className="inline-block relative bg-negro3 rounded-full drop-shadow-xl h-24 w-24 md:h-48 md:w-48 mr-6">
                  <Image className="object-cover rounded-full" src={user.foto ? user.foto : `https://ui-avatars.com/api/?name=${user.nombre}+${user.apellido}&background=565C9A&color=fff&size=256`} layout="fill" alt={`${user.nombre} ${user.apellido}`} />
                </div>

                <div className="inline-block ml-0 md:ml-5">
                  <p className="text-blanco1 text-xs mb-1">{user.red_social ? `@${user.red_social}` : "@Bienvenido"}</p>
                  <h2 className="text-blanco1 text-2xl md:text-4xl font-bold">{user.nombre} {user.apellido}</h2>
                  <p className="hidden md:block text-gris3 mt-2">{user.correo_electronico}</p>
                  <p className="hidden md:block text-gris3">{user.direccion ? user.direccion : "Por favor complete su dirección"}</p>
                  <IconTextButton color="text-violeta" icon="i-editar" text="Editar perfil" action="" styles="mt-2" />
                </div>
              </div>

              <div className="border-y-[1px] box-border border-negro3 text-center h-[49px] mt-10 md:mt-20">
                <p className="inline-flex items-center h-full text-blanco1 font-bold box-border border-y-[3px] border-t-transparent border-b-violeta px-8">PUNTOS DE VENTA</p>
              </div>

              <div className="flex py-14 justify-center">
                <div className="flex w-screen md:justify-center text-center pb-12 px-7 md:px-0 md:w-[696px] xl:w-[1064px] gap-7 md:gap-10 snap-x snap-mandatory overflow-x-auto scrollbar-thin scrollbar-thumb-transparent hover:scrollbar-thumb-scroll scrollbar-thumb-rounded-full scrollbar-track-transparent">
                  {['Maraluga', 'London Manager', 'Saboratto', 'Donkey Rocks', 'Paseo Wynwood', 'Pepe Guapo', 'Nuevo Origen'].map((item, index) => {
                    if (index < 3) {
                      return (
                        <Link href={`/ptv/${index}/menu`} key={`ptv-${index}`}>
                          <a className="group snap-center shrink-0 text-center cursor-pointer bg-negro3 md:bg-transparent p-5 pb-7 md:p-0 rounded-md drop-shadow-md">
                            <div className="inline-block bg-negro1 rounded-full drop-shadow-md group-hover:drop-shadow-xl ease-in duration-150 h-36 w-36">
                              <Image className="object-cover rounded-full" src={`https://ui-avatars.com/api/?name=${item}&background=F2AF29&color=222&size=256`} layout="fill" alt={`${item}`} />
                            </div>
                            <p className="text-blanco1 text-center mt-1">{item}</p>
                          </a>
                        </Link>)
                    }
                  })}
                </div>
              </div>
            </>
            :
            <>
              <div className="animate-pulse flex items-center justify-center mt-7">
                <div className="inline-block relative bg-negro3 rounded-full drop-shadow-xl h-24 w-24 md:h-48 md:w-48 mr-6"></div>

                <div className="inline-block ml-0 md:ml-5">
                  <p className="bg-negro3 h-4 w-20 rounded-lg"></p>
                  <h2 className="bg-negro3 h-4 w-60 mt-3 rounded-lg"></h2>
                  <p className="hidden md:block bg-negro3 h-4 w-48 mt-3 rounded-lg" />
                  <p className="hidden md:block bg-negro3 h-4 w-64 mt-3 rounded-lg" />
                </div>
              </div>
              
              <div className="border-y-[1px] box-border border-negro3 text-center h-[49px] mt-10 md:mt-20">
                <p className="inline-flex items-center h-full text-blanco1 font-bold box-border border-y-[3px] border-t-transparent border-b-violeta px-8">PUNTOS DE VENTA</p>
              </div>

              <div className="animate-pulse py-14 text-center">
                <div className="inline-flex justify-center w-screen md:w-[696px] xl:w-[1064px] gap-10 snap-x snap-mandatory overflow-x-hidden pb-12">
                
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
              </div>
            </>}
        </>
        :
        <h4 className="text-rojo text-center">{hasPostError}</h4>}
    </div>
  )
}

Profile.auth = true
