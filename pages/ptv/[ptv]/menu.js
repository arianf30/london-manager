import Image from 'next/image'
import HeaderMenu from 'components/menu/HeaderMenu'
import usePermissions from 'hooks/usePermissions'
import { useSession } from "next-auth/react"
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

export default function Menu() {
  const { permissions } = usePermissions()
  const { data: session } = useSession()
  
  if (permissions?.permissions && session) {
    const perms = permissions?.permissions
    const sectionsAction = perms.filter(sect => sect?.section.tipo === 'accion')
    const sectionsResults = perms.filter(sect => sect?.section.tipo === 'resultados')
    const sectionsConfiguration = perms.filter(sect => sect?.section.tipo === 'configuracion')
    
    return (
      <div className={`h-screen w-screen select-none overflow-x-hidden overflow-y-auto bg-cover bg-center bg-[url(https://londonmanager.com/2021/imagenes/puntos_de_venta/1/24_09_2021-J33ab-23_11_2020-uJqAg-04_08_2020-dB4AC-18_06_2020-cMDFq-london%20lion%202.png)]`}>
        <div className="h-full w-full bg-gradient-to-b from-[rgba(0,0,0,0.62)] to-[rgba(0,0,0,0.3]]">
          <HeaderMenu companyName={permissions.companyName} companyAddress={permissions.companyAddress} role={permissions.role} userName={session.user.name} userImage={session.user.image} />

          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
          >
            <SwiperSlide>
              <div className="flex justify-center mt-20">
                <div className="">
                  <div className="grid grid-cols-4 gap-x-16 place-content-center">
                    {sectionsAction.map((item, index) => {
                      if (item != null && item.read > 0) {
                        return (
                          <div className="block text-center my-7">
                            <div key={`item-action-${index}`} className="relative inline-flex w-24 h-20 items-center justify-center rounded-xl drop-shadow-md bg-[rgba(20,20,20,0.8)]">
                              <div className="relative w-8 h-8">
                                <Image src={`https://londonmanager.com/2021/${item.section.icono}`} alt={`${item.section.nombre}`} layout="fill" />
                              </div>
                            </div>
                            <p className="text-xs mt-2 text-center text-blanco3">{item.section.nombre}</p>
                          </div>
                        )
                      }
                    })}
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex justify-center mt-20">
                <div className="w-[600px]">
                  <div className="grid grid-cols-4 gap-x-16 place-content-center">
                    {sectionsResults.map((item, index) => {
                      if (item != null && item.read > 0) {
                        return (
                          <div className="block text-center my-7">
                            <div key={`item-results-${index}`} className="relative inline-flex w-24 h-20 items-center justify-center rounded-xl drop-shadow-md bg-[rgba(20,20,20,0.8)]">
                              <div className="relative w-8 h-8">
                                <Image src={`https://londonmanager.com/2021/${item.section.icono}`} alt={`${item.section.nombre}`} layout="fill" />
                              </div>
                            </div>
                            <p className="text-xs mt-2 text-center text-blanco3">{item.section.nombre}</p>
                          </div>
                        )
                      }
                    })}
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex justify-center mt-20">
                <div className="w-[600px]">
                  <div className="grid grid-cols-4 gap-x-16 place-content-center">
                    {sectionsConfiguration.map((item, index) => {
                      if (item != null && item.read > 0) {
                        return (
                          <div className="block text-center my-7">
                            <div key={`item-configuration-${index}`} className="relative inline-flex w-24 h-20 items-center justify-center rounded-xl drop-shadow-md bg-[rgba(20,20,20,0.8)]">
                              <div className="relative w-8 h-8">
                                <Image src={`https://londonmanager.com/2021/${item.section.icono}`} alt={`${item.section.nombre}`} layout="fill" />
                              </div>
                            </div>
                            <p className="text-xs mt-2 text-center text-blanco3">{item.section.nombre}</p>
                          </div>
                        )
                      }
                    })}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    )
  }

  return <p>Cargando...</p>
}

Menu.auth = true
