import { useState } from "react"
import HeaderMenu from "components/headers/HeaderMenu"
import CarouselMenu from "components/sections/menu/CarouselMenu"
import IconsMenu from "components/sections/menu/IconsMenu"
import useRole from "hooks/useRole"

export default function Menu() {
  const { permissions } = useRole()
  const [search, setSearch] = useState(null)

  const roleInfo = permissions?.popJerarquia

  if (roleInfo) {
    const perms = roleInfo.permissions
    const sectionsAction = perms.filter(
      (sect) => sect?.section.tipo === "accion"
    )
    const sectionsResults = perms.filter(
      (sect) => sect?.section.tipo === "resultados"
    )
    const sectionsConfiguration = perms.filter(
      (sect) => sect?.section.tipo === "configuracion"
    )

    return (
      <div
        className={`h-screen w-screen select-none overflow-x-hidden overflow-y-auto bg-cover bg-center bg-[url(https://londonmanager.com/2021/imagenes/puntos_de_venta/1/24_09_2021-J33ab-23_11_2020-uJqAg-04_08_2020-dB4AC-18_06_2020-cMDFq-london%20lion%202.png)]`}
      >
        <div className="h-full w-full bg-gradient-to-b from-[rgba(0,0,0,0)] to-[rgba(0,0,0,0.16]]">
          <HeaderMenu
            companyName={roleInfo.companyName}
            companyAddress={roleInfo.companyAddress}
            role={roleInfo.role}
            setSearch={setSearch}
          />
          {!search && (
            <div className="flex items-center justify-center">
              <CarouselMenu
                sectionsAction={sectionsAction}
                sectionsResults={sectionsResults}
                sectionsConfiguration={sectionsConfiguration}
              />
            </div>
          )}
          {search && (
            <IconsMenu
              sections={[
                ...sectionsAction,
                ...sectionsResults,
                ...sectionsConfiguration,
              ]}
              search={search}
            />
          )}
        </div>
      </div>
    )
  }

  return <p>Cargando permisos...</p>
}

Menu.auth = true
