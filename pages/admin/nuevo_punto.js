import Link from "next/link"
import useService from "hooks/useService"
import { savePoint } from "services/admin/points"
import { Form, Field, Formik, ErrorMessage } from "formik"

const ADMIN_LINK = process.env.NEXT_PUBLIC_ADMIN_LINK

export default function NewPoint() {
  const { sendService, isLoading, hasError, response } = useService(savePoint)

  const handleSubmit = async (values) => {
    const headers = values
    sendService(headers)
  }

  return (
    <div className="flex h-screen justify-center overflow-auto bg-[#1b1c23] p-10">
      <div className="block max-w-lg w-full">
        <h3 className="text-verde font-light">¡Hola, Arián! 😊</h3>
        <h2 className="text-blanco1 font-light mt-4">
          Darás de alta un nuevo <strong>punto de venta</strong>.
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

        <div className="bg-white p-4 pt-6 rounded-md shadow-xl">
          {response ? (
            <>
              <h4 className="text-negro3">
                ¡Punto de venta añadido con éxito!
              </h4>
              <p className="text-negro2 mt-4 mb-2">
                ID: <strong>{response.data.id}</strong>
              </p>
              <p className="text-negro2 mt-4 mb-2">
                Nombre: <strong>{response.data.nombre}</strong>
              </p>
              <p className="text-negro2 mt-4 mb-2">
                Dirección:{" "}
                <strong>
                  {response.data.domicilio} · {response.data.codigo_postal}
                </strong>
              </p>
            </>
          ) : (
            <Formik
              initialValues={{
                config: [],
                id_propietario: 1,
                nombre: "",
                direccion: "",
                telefono: "",
                codigo_postal: "",
              }}
              validate={(values) => {
                const errors = {}
                if (!values.id_propietario) {
                  errors.id_propietario = "Requerido"
                } else if (!/^[0-9]+$/i.test(values.id_propietario)) {
                  errors.id_propietario = "El ID debe ser numérico"
                }
                if (!values.nombre) {
                  errors.nombre = "Requerido"
                }
                if (!values.domicilio) {
                  errors.domicilio = "Requerido"
                }
                if (!values.telefono) {
                  errors.telefono = "Requerido"
                } else if (
                  !/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im.test(
                    values.telefono
                  )
                ) {
                  errors.telefono = "Teléfono inválido"
                }
                if (!values.codigo_postal) {
                  errors.codigo_postal = "Requerido"
                }
                if (values.config.length === 0) {
                  errors.config = "Requerido"
                }
                return errors
              }}
              onSubmit={handleSubmit}
            >
              <Form>
                <div className="flex flex-nowrap gap-6">
                  <div className="relative z-0 mb-6 grow-0">
                    <Field
                      type="text"
                      name="id_propietario"
                      className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      placeholder=" "
                    />
                    <label
                      htmlFor="id_propietario"
                      className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      *ID Propietario
                    </label>
                    <ErrorMessage
                      name="id_propietario"
                      component="div"
                      className="mt-2 text-xs text-rojo"
                    />
                  </div>
                  <div className="relative z-0 mb-6 grow">
                    <Field
                      type="text"
                      name="nombre"
                      className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      placeholder=" "
                    />
                    <label
                      htmlFor="nombre"
                      className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      *Nombre Pto. Vta.
                    </label>
                    <ErrorMessage
                      name="nombre"
                      component="div"
                      className="mt-2 text-xs text-rojo"
                    />
                  </div>
                </div>
                <div className="relative z-0 mb-6 w-full group">
                  <Field
                    type="text"
                    name="domicilio"
                    className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                  />
                  <label
                    htmlFor="domicilio"
                    className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    *Dirección
                  </label>
                  <ErrorMessage
                    name="domicilio"
                    component="div"
                    className="mt-2 text-xs text-rojo"
                  />
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <div className="relative z-0 mb-6 w-full group">
                    <Field
                      type="text"
                      name="telefono"
                      className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      placeholder=" "
                    />
                    <label
                      htmlFor="telefono"
                      className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-99 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      *Teléfono
                    </label>
                    <ErrorMessage
                      name="telefono"
                      component="div"
                      className="mt-2 text-xs text-rojo"
                    />
                  </div>
                  <div className="relative z-0 mb-6 w-full group">
                    <Field
                      type="text"
                      name="codigo_postal"
                      className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                      placeholder=" "
                    />
                    <label
                      htmlFor="codigo_postal"
                      className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-99 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      *Código Postal
                    </label>
                    <ErrorMessage
                      name="codigo_postal"
                      component="div"
                      className="mt-2 text-xs text-rojo"
                    />
                  </div>
                </div>

                <div
                  role="group"
                  aria-labelledby="checkbox-group"
                  className="mb-6"
                >
                  <div className="flex items-center mb-4">
                    <Field
                      type="checkbox"
                      id="config-1"
                      name="config"
                      value="comercio"
                      className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 focus:ring-2"
                    />
                    <label
                      htmlFor="config-1"
                      className="ml-3 text-sm font-medium text-gray-900"
                    >
                      Comercio
                    </label>
                  </div>
                  <div className="flex items-center mb-4">
                    <Field
                      type="checkbox"
                      id="config-2"
                      name="config"
                      value="servicio"
                      className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 focus:ring-2"
                    />
                    <label
                      htmlFor="config-2"
                      className="ml-3 text-sm font-medium text-gray-900"
                    >
                      Servicio
                    </label>
                  </div>
                  <div className="flex items-center mb-4">
                    <Field
                      type="checkbox"
                      id="config-3"
                      name="config"
                      value="gastronomico"
                      className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 focus:ring-2"
                    />
                    <label
                      htmlFor="config-3"
                      className="ml-3 text-sm font-medium text-gray-900"
                    >
                      Gastronómico
                    </label>
                  </div>
                  <div className="flex items-center mb-4">
                    <Field
                      type="checkbox"
                      id="config-4"
                      name="config"
                      value="fabricacion"
                      className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 focus:ring-2"
                    />
                    <label
                      htmlFor="config-4"
                      className="ml-3 text-sm font-medium text-gray-900"
                    >
                      Fabricación
                    </label>
                  </div>
                  <div className="flex items-center mb-4">
                    <Field
                      type="checkbox"
                      name="alquiler"
                      className="w-4 h-4 bg-gray-50 rounded border-gray-300 focus:ring-3 focus:ring-blue-300"
                      disabled
                    />
                    <label className="ml-3 text-sm font-medium text-gray-300">
                      Alquiler
                    </label>
                  </div>
                  <div className="flex items-center mb-4">
                    <Field
                      type="checkbox"
                      name="academia"
                      className="w-4 h-4 bg-gray-50 rounded border-gray-300 focus:ring-3 focus:ring-blue-300"
                      disabled
                    />
                    <label className="ml-3 text-sm font-medium text-gray-300">
                      Academia
                    </label>
                  </div>
                  <div className="flex items-center">
                    <Field
                      type="checkbox"
                      name="reservas"
                      className="w-4 h-4 bg-gray-50 rounded border-gray-300 focus:ring-3 focus:ring-blue-300"
                      disabled
                    />
                    <label className="ml-3 text-sm font-medium text-gray-300">
                      Reservas
                    </label>
                  </div>
                  <ErrorMessage
                    name="config"
                    component="div"
                    className="mt-2 text-xs text-rojo"
                  />
                </div>

                {isLoading ? (
                  <div className="text-white bg-gris3 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center">
                    Enviando...
                  </div>
                ) : (
                  <button
                    type="submit"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center"
                  >
                    Crear punto de venta
                  </button>
                )}
              </Form>
            </Formik>
          )}
        </div>

        {hasError && (
          <div className="text-rojo mt-4 text-center">{hasError.msg}</div>
        )}
      </div>
    </div>
  )
}
