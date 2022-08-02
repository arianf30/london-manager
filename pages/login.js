import { useState } from "react"
import { signIn, getSession } from "next-auth/react"
import Head from "next/head"
import Link from "next/link"
import Image from "next/image"
import { Formik } from "formik"
import { useRouter } from "next/router"

export default function Login() {
  const [showPass, setShowPass] = useState(false)
  const [error, setError] = useState(null)

  const router = useRouter()

  const toggleShowPass = () => {
    setShowPass(!showPass)
  }

  return (
    <div className="bg-gs550">
      <Head>
        <title>Iniciar sesión • London Manager</title>
        <meta
          name="description"
          content="Gestioná todos tus puntos de venta desde un solo lugar."
        />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main>
        <div className="flex overflow-auto items-center justify-center h-screen bg-[url('/img/system/fondo_londonmanager.jpg')] bg-cover bg-no-repeat bg-bottom">
          <div className="w-[351px] m-auto py-10">
            <Link href="/">
              <a>
                <div className="text-center select-none mb-4">
                  <Image
                    src="/img/system/logo_londonmanager.svg"
                    height={48}
                    width={300}
                    alt="Logo London Manager"
                  />
                  <p className="relative text-xs text-blanco top-[-8px] mb-7">
                    Sistema de Gestión On-Line
                  </p>
                </div>
              </a>
            </Link>
            <div className="rounded-md drop-shadow-xl text-gs700 select-none">
              <div className="inline-block bg-blanco w-full h-auto rounded-t-md px-5 py-6">
                <h3 className="font-bold mt-2 mb-1">Iniciar sesión</h3>
                <p className="text-sm">
                  ¿No tenés cuenta?{" "}
                  <Link href="/signup">
                    <a className="text-sm text-p500 underline-offset-2 hover:underline">
                      Registrarte
                    </a>
                  </Link>{" "}
                  es muy fácil.
                </p>

                {error && (
                  <p className="text-xs text-e400 text-center mt-4 mb-[-1rem]">
                    {error}
                  </p>
                )}

                <Formik
                  initialValues={{ correo_electronico: "", contrasena: "" }}
                  onSubmit={async (values, { setSubmitting }) => {
                    try {
                      const res = await signIn("credentials", {
                        redirect: false,
                        correo_electronico: values.correo_electronico,
                        contrasena: values.contrasena,
                        callbackUrl: `${window.location.origin}`,
                      })
                      if (res?.error) {
                        setError(res.error)
                      } else {
                        setError(null)
                      }
                      if (res.url) router.push(res.url)
                      setSubmitting(false)
                    } catch (error) {
                      setError(error)
                    }
                  }}
                >
                  {(props) => (
                    <form onSubmit={props.handleSubmit}>
                      <div className="mt-7">
                        <input
                          type="text"
                          onChange={props.handleChange}
                          value={props.values.correo_electronico}
                          name="correo_electronico"
                          id="correo_electronico"
                          className="w-full text-sm h-[40px] px-5 rounded-sm bg-gs200 border-2 border-gs400 focus:border-p500 focus:outline-none appearance-none placeholder-gs550 text-gs550 transition ease-in duration-150"
                          placeholder="Correo electrónico"
                        />
                      </div>

                      <div className="relative mt-2">
                        <input
                          type={showPass ? "text" : "password"}
                          onChange={props.handleChange}
                          value={props.values.contrasena}
                          name="contrasena"
                          id="contrasena"
                          className="w-full text-sm h-[40px] px-5 rounded-sm bg-gs200 border-2 border-gs400 focus:border-p500 focus:outline-none appearance-none placeholder-gs550 text-gs550 transition ease-in duration-150"
                          placeholder="Contraseña"
                        />
                        <button
                          type="button"
                          className="absolute right-4 top-[9px] inline-block"
                          onClick={toggleShowPass}
                        >
                          <div
                            className={showPass ? "text-p500" : "text-gs300"}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="22"
                              height="22"
                              viewBox="0 0 24 24"
                            >
                              <path
                                fill="currentColor"
                                d="M15 12c0 1.657-1.343 3-3 3s-3-1.343-3-3c0-.199.02-.393.057-.581 1.474.541 2.927-.882 2.405-2.371.174-.03.354-.048.538-.048 1.657 0 3 1.344 3 3zm-2.985-7c-7.569 0-12.015 6.551-12.015 6.551s4.835 7.449 12.015 7.449c7.733 0 11.985-7.449 11.985-7.449s-4.291-6.551-11.985-6.551zm-.015 12c-2.761 0-5-2.238-5-5 0-2.761 2.239-5 5-5 2.762 0 5 2.239 5 5 0 2.762-2.238 5-5 5z"
                              />
                            </svg>
                          </div>
                        </button>
                      </div>

                      <div className="mt-4">
                        {props.isSubmitting ? (
                          <div className="flex items-center justify-center text-blanco h-[40px] text-center w-full bg-gs300 rounded-sm">
                            Ingresando...
                          </div>
                        ) : (
                          <button
                            type="submit"
                            className="text-blanco h-[40px] text-center w-full bg-gradient-to-r from-p500 hover:from-s400 to-p500 rounded-sm hover:drop-shadow-md transition ease-linear duration-300"
                          >
                            Ingresar
                          </button>
                        )}
                      </div>
                    </form>
                  )}
                </Formik>

                <div className="mt-4 text-center">
                  <Link href="/recuperar_clave">
                    <a className="text-sm text-p500 underline-offset-2 hover:underline">
                      No recuerdo mi contraseña
                    </a>
                  </Link>
                </div>
              </div>

              <div className="flex-grow border-t-2 border-gs300"></div>

              <div className="inline-block bg-blanco w-full h-auto rounded-b-md px-5 py-6">
                <button
                  onClick={() => signIn("google")}
                  className="flex h-[40px] items-center justify-center w-full text-center border-2 border-gs300 rounded-md hover:bg-gs200"
                >
                  <div className="w-6 h-6 mr-3 bg-[url('/img/system/icons/google.svg')] bg-no-repeat bg-contain bg-center"></div>
                  <p className="text-xs">
                    Iniciá sesión con tu cuenta de Google
                  </p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer></footer>
    </div>
  )
}

export const getServerSideProps = async (context) => {
  const session = await getSession(context)

  if (session)
    return {
      redirect: {
        destination: "/profile",
        permanent: false,
      },
    }

  return {
    props: {},
  }
}
