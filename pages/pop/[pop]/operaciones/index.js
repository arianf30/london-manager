import CircleButton from "components/buttons/CircleButton"
import SectionNavbar from "components/navbars/SectionNavbar"
import { useRouter } from "next/router"

export default function Operaciones() {
  const { pagina, cantidad, busqueda, filtro, orden_por, orden_hacia, fecha } =
    useRouter().query
  console.log(filtro)

  return (
    <>
      <section className="w-full h-screen bg-blanco3">
        <SectionNavbar title="operaciones" />

        {/* FILTROS */}
        <div className="flex w-full items-center h-24">
          <div className="grid w-full px-6 grid-cols-4 gap-6">
            <div className="flex w-full h-12 items-center px-8 bg-blanco1 rounded-full drop-shadow-sm">
              Fecha
            </div>
            <div className="flex w-full h-12 items-center px-8 bg-blanco1 rounded-full drop-shadow-sm">
              Todas
            </div>
            <div className="flex w-full h-12 items-center px-8 bg-blanco1 rounded-full drop-shadow-sm">
              ID
            </div>
            <div className="flex w-full h-12 items-center px-8 bg-gris3 text-blanco1 rounded-full drop-shadow-sm">
              Buscar
            </div>
          </div>
        </div>

        {/* TABLA */}
        <div className="w-full h-[calc(100%_-_224px)] bg-gris2 overflow-auto">
          <table className="w-full min-w-[1000px] text-left">
            <thead className="sticky top-0 h-9 bg-blanco1 shadow-xl">
              <tr>
                <th className="bg-blanco1">ID</th>
                <th className="bg-blanco1">Tipo</th>
                <th className="bg-blanco1">Apertura</th>
                <th className="bg-blanco1">Cierre</th>
                <th className="bg-blanco1">Detalle</th>
                <th className="bg-blanco1">Ingresos · Egresos</th>
                <th className="bg-blanco1">Descuento</th>
                <th className="bg-blanco1">Importe</th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  id: 1,
                  tipo: "venta",
                  apertura: "10/06/2022",
                  cierre: "10/06/2022",
                  detalle: "Venta a Arián Fernández",
                  ing_egr: 23200,
                  descuento: 0,
                  importe: 23200,
                },
                {
                  id: 2,
                  tipo: "alquiler",
                  apertura: "10/06/2022",
                  cierre: "10/06/2022",
                  detalle: "Alquiler a Arián Fernández",
                  ing_egr: 3400,
                  descuento: 400,
                  importe: 3000,
                },
                {
                  id: 1,
                  tipo: "venta",
                  apertura: "10/06/2022",
                  cierre: "10/06/2022",
                  detalle: "Venta a Arián Fernández",
                  ing_egr: 23200,
                  descuento: 0,
                  importe: 23200,
                },
                {
                  id: 2,
                  tipo: "alquiler",
                  apertura: "10/06/2022",
                  cierre: "10/06/2022",
                  detalle: "Alquiler a Arián Fernández",
                  ing_egr: 3400,
                  descuento: 400,
                  importe: 3000,
                },
                {
                  id: 1,
                  tipo: "venta",
                  apertura: "10/06/2022",
                  cierre: "10/06/2022",
                  detalle: "Venta a Arián Fernández",
                  ing_egr: 23200,
                  descuento: 0,
                  importe: 23200,
                },
                {
                  id: 2,
                  tipo: "alquiler",
                  apertura: "10/06/2022",
                  cierre: "10/06/2022",
                  detalle: "Alquiler a Arián Fernández",
                  ing_egr: 3400,
                  descuento: 400,
                  importe: 3000,
                },
              ].map((item, index) => {
                return (
                  <tr key={index} className="h-16 odd:bg-blanco1 even:bg-gris1">
                    <td className="border-x-[1px] border-blanco3">{item.id}</td>
                    <td className="border-x-[1px] border-blanco3">
                      {item.tipo}
                    </td>
                    <td className="border-x-[1px] border-blanco3">
                      {item.apertura}
                    </td>
                    <td className="border-x-[1px] border-blanco3">
                      {item.apertura}
                    </td>
                    <td className="border-x-[1px] border-blanco3">
                      {item.detalle}
                    </td>
                    <td className="border-x-[1px] border-blanco3">
                      {item.ing_egr}
                    </td>
                    <td className="border-x-[1px] border-blanco3">
                      {item.descuento}
                    </td>
                    <td className="border-x-[1px] border-blanco3">
                      {item.importe}
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>

        {/* CONTROLADORES */}
        <div className="fixed grid grid-cols-12 w-full bottom-0 h-16 bg-negro1">
          <div className="flex col-span-1 justify-center items-center">
            <CircleButton
              theme="transparentWhite"
              size="large"
              color="text-white"
              icon="flecha-izquierda-fin"
              shadow={false}
            />
          </div>
          <div className="flex col-span-1 justify-center items-center">
            <CircleButton
              theme="transparentWhite"
              size="large"
              color="text-white"
              icon="flecha-izq"
              shadow={false}
            />
          </div>
          <div className="flex col-span-2 justify-center items-center text-blanco1">
            Pagina 1
          </div>
          <div className="flex col-span-2 justify-center items-center text-blanco1">
            Hasta 20
          </div>
          <div className="flex col-span-4 justify-center items-center text-blanco1">
            30 resultados
          </div>
          <div className="flex col-span-1 justify-center items-center">
            <CircleButton
              theme="transparentWhite"
              size="large"
              color="text-white"
              icon="flecha-derecha"
              shadow={false}
            />
          </div>
          <div className="flex col-span-1 justify-center items-center">
            <CircleButton
              theme="transparentWhite"
              size="large"
              color="text-white"
              icon="flecha-derecha-fin"
              shadow={false}
            />
          </div>
        </div>
      </section>
    </>
  )
}
