import Link from 'next/link'
import usePost from 'hooks/usePost'
import { newUser } from 'services/admin/users'
import { Form, Field, Formik, ErrorMessage } from 'formik'

const ADMIN_LINK = process.env.NEXT_PUBLIC_ADMIN_LINK

export default function NewUser() {
  const { sendPost, isPostLoading, hasPostError, response } = usePost(newUser)

  const handleSubmit = async (values) => {
    const headers = values
    sendPost(headers)
  }

  return (
    <div className="flex h-screen justify-center overflow-auto bg-[#1b1c23] p-10">
      <div className="block max-w-lg w-full">
        <h3 className="text-verde font-light">¡Hola, Arián! 😊</h3>
        <h2 className="text-blanco1 font-light mt-4">Darás de alta un nuevo <strong>usuario</strong>.</h2>
        
        <Link href={`/${ADMIN_LINK}`}>
          <a className="block text-sm font-normal hover:underline underline-offset-4 text-celeste mt-4 mb-6">
            <svg className="inline w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
            Volver al administrador
          </a>
        </Link>

        <div className="bg-white p-4 pt-6 rounded-md shadow-xl">

          {response ? 
            (
              <>
                <h4 className="text-negro3">¡Nuevo usuario añadido con éxito!</h4>
                <p className="text-negro2 mt-4 mb-2">ID: <strong>{response.data.id}</strong></p>
                <p className="text-negro2 mt-4 mb-2">Email: <strong>{response.data.correo_electronico}</strong></p>
                <p className="text-negro2 mt-4 mb-2">Nombre y Apellido: <strong>{response.data.nombre} {response.data.apellido}</strong></p>
              </>
            )
            :
            (
              <Formik
                initialValues={{ correo_electronico: '', contrasena: '', nombre: '', apellido: '' }}
                validate={values => {
                  const errors = {}
                  if (!values.correo_electronico) {
                    errors.correo_electronico = 'Requerido'
                  } else if (
                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.correo_electronico)
                  ) {
                    errors.correo_electronico = 'Dirección de email inválida'
                  }
                  if (!values.contrasena) {
                    errors.contrasena = 'Requerido'
                  } else if (values.contrasena.length < 6) {
                    errors.contrasena = 'La contraseña debe contener al menos 6 caracteres'
                  }
                  if (!values.nombre) {
                    errors.nombre = 'Requerido'
                  }
                  if (!values.apellido) {
                    errors.apellido = 'Requerido'
                  }
                  return errors;
                }}
                onSubmit={handleSubmit}
              >
                <Form>
                  <div className="relative z-0 mb-6 w-full group">
                    <Field type="text" name="correo_electronico" id="correo_electronico" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                    <label htmlFor="correo_electronico" className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-99 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">*Email</label>
                    <ErrorMessage name="correo_electronico" component="div" className="mt-2 text-xs text-rojo" />
                  </div>
                  <div className="relative z-0 mb-6 w-full group">
                    <Field type="text" name="contrasena" id="contrasena" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                    <label htmlFor="contrasena" className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-99 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">*Contraseña</label>
                    <ErrorMessage name="contrasena" component="div" className="mt-2 text-xs text-rojo" />
                  </div>
                  <div className="grid grid-cols-2 gap-6">
                    <div className="relative z-0 mb-6 w-full group">
                      <Field type="text" name="nombre" id="nombre" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                      <label htmlFor="nombre" className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-99 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">*Nombre</label>
                      <ErrorMessage name="nombre" component="div" className="mt-2 text-xs text-rojo" />
                    </div>
                    <div className="relative z-0 mb-6 w-full group">
                      <Field type="text" name="apellido" id="apellido" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                      <label htmlFor="apellido" className="absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-99 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">*Apellido</label>
                      <ErrorMessage name="apellido" component="div" className="mt-2 text-xs text-rojo" />
                    </div>
                  </div>
                  {isPostLoading
                    ? <div className="text-white bg-gris3 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center">Enviando...</div>
                    : <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center">Crear usuario</button>}
                </Form>
              </Formik>
            )}
        </div>

        {hasPostError &&
          <div className="text-rojo mt-4 text-center">{hasPostError.message}</div>}

      </div>
    </div>
  )
}