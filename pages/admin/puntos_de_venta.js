import { useEffect } from "react"
import dayjs from "dayjs"
import useService from "hooks/useService"
import { getAllPoints } from "services/admin/points"
import Link from "next/link"

const ADMIN_LINK = process.env.NEXT_PUBLIC_ADMIN_LINK

export default function Usuarios() {
  const { sendService, isLoading, hasError, response } = useService()

  console.log(response)

  useEffect(() => {
    sendService(getAllPoints, { limit: 1000, offset: 0 })
  }, [])

  return (
    <div className="flex h-screen justify-center overflow-auto bg-[#1b1c23] p-10">
      <div className="block w-full">
        <h3 className="text-verde font-light">¡Hola, Arián! 😊</h3>
        <h2 className="text-blanco1 font-light mt-4">
          Está viendo el listado de <strong>puntos de venta</strong>.
        </h2>

        <Link href={`/${ADMIN_LINK}`}>
          <a className="block text-sm font-normal hover:underline underline-offset-4 text-celeste mt-4 mb-6">
            <svg
              className="inline w-6 h-6 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              ></path>
            </svg>
            Volver al administrador
          </a>
        </Link>

        <div className="flex flex-col">
          <div className="overflow-x-auto shadow-md sm:rounded-lg">
            <div className="inline-block min-w-full align-middle">
              <div className="overflow-hidden ">
                <table className="min-w-full divide-y divide-gris3 table-fixed">
                  <thead className="bg-gris2">
                    <tr>
                      <th
                        scope="col"
                        className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gris3 uppercase"
                      >
                        ID
                      </th>
                      <th
                        scope="col"
                        className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gris3 uppercase"
                      >
                        Propietario
                      </th>
                      <th
                        scope="col"
                        className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gris3 uppercase"
                      >
                        Nombre
                      </th>
                      <th
                        scope="col"
                        className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gris3 uppercase"
                      >
                        Dirección
                      </th>
                      <th
                        scope="col"
                        className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gris3 uppercase"
                      >
                        Teléfono
                      </th>
                      <th
                        scope="col"
                        className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gris3 uppercase"
                      >
                        Código Postal
                      </th>
                      <th
                        scope="col"
                        className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gris3 uppercase"
                      >
                        Configuración
                      </th>
                      <th
                        scope="col"
                        className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gris3 uppercase"
                      >
                        Razón Social
                      </th>
                      <th
                        scope="col"
                        className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gris3 uppercase"
                      >
                        Cuit
                      </th>
                      <th
                        scope="col"
                        className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gris3 uppercase"
                      >
                        Fecha Registro
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-blanco1 divide-y divide-gris2">
                    {response &&
                      response.data.map((point, index) => (
                        <tr className="hover:bg-gris1" key={index}>
                          <td className="py-4 px-6 text-sm font-medium text-negro3 whitespace-nowrap">
                            {point.id}
                          </td>
                          <td className="py-4 px-6 text-sm font-medium text-negro3 whitespace-nowrap">
                            {point.id_propietario}
                          </td>
                          <td className="py-4 px-6 text-sm font-medium text-negro3 whitespace-nowrap">
                            {point.nombre}
                          </td>
                          <td className="py-4 px-6 text-sm font-medium text-negro3 whitespace-nowrap">
                            {point.direccion}
                          </td>
                          <td className="py-4 px-6 text-sm font-medium text-negro3 whitespace-nowrap">
                            {point.telefono}
                          </td>
                          <td className="py-4 px-6 text-sm font-medium text-negro3 whitespace-nowrap">
                            {point.codigo_postal}
                          </td>
                          <td className="py-4 px-6 text-sm font-medium text-negro3 whitespace-nowrap"></td>
                          <td className="py-4 px-6 text-sm font-medium text-negro3 whitespace-nowrap">
                            {point.razon_social}
                          </td>
                          <td className="py-4 px-6 text-sm font-medium text-negro3 whitespace-nowrap">
                            {point.cuit}
                          </td>
                          {/* <td className="py-4 px-6 text-sm font-medium text-negro3 whitespace-nowrap">{dayjs(point.createdAt).format('DD/MM/YYYY')}</td> */}
                          <td className="py-4 px-6 text-sm font-medium text-negro3 whitespace-nowrap">
                            Nada
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        {hasError && (
          <h5 className="block text-blanco1 text-center m-4">{hasError}</h5>
        )}

        {isLoading && (
          <h5 className="block text-blanco1 text-center m-4">Cargando...</h5>
        )}
      </div>
    </div>
  )
}
