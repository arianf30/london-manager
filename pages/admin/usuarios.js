import { useEffect } from "react"
import dayjs from "dayjs"
import useService from "hooks/useService"
import { listUsers } from "services/admin/users"
import Link from "next/link"

const ADMIN_LINK = process.env.NEXT_PUBLIC_ADMIN_LINK

export default function Usuarios() {
  const { sendService, isLoading, hasError, response } = useService(listUsers, {
    limit: 1000,
    offset: 0,
  })

  useEffect(() => {
    sendService()
  }, [])

  return (
    <div className="flex h-screen justify-center overflow-auto bg-[#1b1c23] p-10">
      <div className="block w-full">
        <h3 className="text-verde font-light">¡Hola, Arián! 😊</h3>
        <h2 className="text-blanco1 font-light mt-4">
          Está viendo el listado de <strong>usuarios</strong>.
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
                        Email
                      </th>
                      <th
                        scope="col"
                        className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gris3 uppercase"
                      >
                        Nombre Apellido
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
                        Social
                      </th>
                      <th
                        scope="col"
                        className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gris3 uppercase"
                      >
                        Dirección Completa
                      </th>
                      <th
                        scope="col"
                        className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gris3 uppercase"
                      >
                        Priv.
                      </th>
                      <th
                        scope="col"
                        className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gris3 uppercase"
                      >
                        Puntos
                      </th>
                      <th
                        scope="col"
                        className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gris3 uppercase"
                      >
                        Estado
                      </th>
                      <th
                        scope="col"
                        className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gris3 uppercase"
                      >
                        Fecha Registro
                      </th>
                      <th
                        scope="col"
                        className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gris3 uppercase"
                      >
                        Estrategia
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-blanco1 divide-y divide-gris2">
                    {response &&
                      response.data.map((user, index) => (
                        <tr className="hover:bg-gris1" key={index}>
                          <td className="py-4 px-6 text-sm font-medium text-negro3 whitespace-nowrap">
                            {user.id}
                          </td>
                          <td className="py-4 px-6 text-sm font-medium text-negro3 whitespace-nowrap">
                            {user.correo_electronico}
                          </td>
                          <td className="py-4 px-6 text-sm font-medium text-negro3 whitespace-nowrap">
                            {user.nombre} {user.apellido}
                          </td>
                          <td className="py-4 px-6 text-sm font-medium text-negro3 whitespace-nowrap">
                            {user.celular}
                          </td>
                          <td className="py-4 px-6 text-sm font-medium text-negro3 whitespace-nowrap">
                            {user.red_social}
                          </td>
                          <td className="py-4 px-6 text-sm font-medium text-negro3 whitespace-nowrap">
                            {user.direccion} {user.localidad} {user.province}
                          </td>
                          <td className="py-4 px-6 text-sm font-medium text-negro3 whitespace-nowrap">
                            {user.privacidad}
                          </td>
                          <td className="py-4 px-6 text-sm font-medium text-negro3 whitespace-nowrap">
                            {user.ptos_vta}
                          </td>
                          <td className="py-4 px-6 text-sm font-medium text-negro3 whitespace-nowrap">
                            {user.estado}
                          </td>
                          <td className="py-4 px-6 text-sm font-medium text-negro3 whitespace-nowrap">
                            {dayjs(user.createdAt).format("DD/MM/YYYY")}
                          </td>
                          <td className="py-4 px-6 text-sm font-medium text-negro3 whitespace-nowrap">
                            {user.google}
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
          <h5 className="block text-blanco1 text-center m-4">{hasError.msg}</h5>
        )}

        {isLoading && (
          <h5 className="block text-blanco1 text-center m-4">Cargando...</h5>
        )}
      </div>
    </div>
  )
}
