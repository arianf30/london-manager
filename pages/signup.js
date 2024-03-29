import { useState } from 'react'
import axios from 'axios'

import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'

import { getSession, signIn } from 'next-auth/react'
import { Formik } from 'formik'

export default function SignUp() {
  const [showPass, setShowPass] = useState(false)
  const [error, setError] = useState(null)

  const router = useRouter()

  const toggleShowPass = () => {
    setShowPass(!showPass)
  }

  return (
    <div className="bg-negro3">
      <Head>
        <title>Registarse • London Manager</title>
        <meta name="description" content="Registrate gratis en London Manager." />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main>
        <div className="flex overflow-auto items-center justify-center h-screen bg-[url('/img/system/fondo_londonmanager.jpg')] bg-cover bg-no-repeat bg-bottom">
          <div className="w-[351px] m-auto py-10">
            <Link href="/">
              <a>
                <div className="text-center select-none mb-4">
                  <Image src="/img/system/logo_londonmanager.svg" height={48} width={300} alt="Logo London Manager" />
                  <p className="relative text-xs text-white top-[-8px] mb-7">Sistema de Gestión On-Line</p>
                </div>
              </a>
            </Link>
            <div className="rounded-md drop-shadow-xl text-negro1 select-none">
              <div className="inline-block bg-white w-full h-auto rounded-t-md px-5 py-6">
                <h4 className="mt-2 mb-1"><strong>Registrarse</strong></h4>
                <p className="text-sm">Ya tengo cuenta, quiero <Link href="/login"><a className="text-sm text-violeta underline-offset-2 hover:underline">iniciar sesión</a></Link>.</p>

                {error &&
                  <p className="text-xs text-rojo text-center mt-4 mb-[-1rem]">{error}</p>}

                <Formik
                  initialValues={{ name: '', lastName: '', email: '', password: '' }}
                  onSubmit={async (values, { setSubmitting }) => {
                    try {
                      const res = await axios.post(`${process.env.NEXT_PUBLIC_ENDPOINT}/auth/signup`, {
                        email: values.email,
                        password: values.password,
                        name: values.name,
                        lastName: values.lastName
                      })
                      console.log(`email: ${values.email}, clave: ${values.password}`)
                      if (res) {
                        try {
                          const resSingIn = await signIn('credentials', {
                            redirect: false,
                            email: values.email,
                            password: values.password,
                            callbackUrl: `${window.location.origin}`,
                          });
                          if (resSingIn?.error) {
                            setError(res.error)
                          } else {
                            setError(null)
                          }
                          if (resSingIn.url) router.push(resSingIn.url)
                          setSubmitting(false)
                        } catch (error) {
                          console.log(error)
                          setError(error)
                        } 
                      }
                    } catch (error) {
                      setError(error.response.data.message)
                      setSubmitting(false)
                    }
                  }}
                >
                  {props => (
                    <form onSubmit={props.handleSubmit}>
                      <div className="grid grid-cols-2 gap-2 mt-7">
                        <div className="relative z-0 w-full group">
                          <input type="text" onChange={props.handleChange} value={props.values.name} name="name" id="name" className="w-full text-sm h-[40px] px-5 rounded-sm bg-blanco3 border-2 border-gris1 focus:border-violeta focus:outline-none appearance-none placeholder-negro3 text-negro3 transition ease-in duration-150" placeholder="Nombre" />
                        </div>
                        <div className="relative z-0 w-full group">
                          <input type="text" onChange={props.handleChange} value={props.values.lastName} name="lastName" id="lastName" className="w-full text-sm h-[40px] px-5 rounded-sm bg-blanco3 border-2 border-gris1 focus:border-violeta focus:outline-none appearance-none placeholder-negro3 text-negro3 transition ease-in duration-150" placeholder="Apellido" />
                        </div>
                      </div>

                      <div className="mt-2">
                        <input type="text" onChange={props.handleChange} value={props.values.email} name="email" id="email" className="w-full text-sm h-[40px] px-5 rounded-sm bg-blanco3 border-2 border-gris1 focus:border-violeta focus:outline-none appearance-none placeholder-negro3 text-negro3 transition ease-in duration-150" placeholder="Correo electrónico" />
                      </div>

                      <div className="relative mt-2">
                        <input type={showPass ? "text" : "password"} onChange={props.handleChange} value={props.values.password} name="password" id="password" className="w-full text-sm h-[40px] px-5 rounded-sm bg-blanco3 border-2 border-gris1 focus:border-violeta focus:outline-none appearance-none placeholder-negro3 text-negro3 transition ease-in duration-150" placeholder="Contraseña" />
                        <button type="button" className="absolute right-4 top-[9px] inline-block" onClick={toggleShowPass}>
                          <div className={showPass ? "text-violeta" : "text-gris2"}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24"><path fill="currentColor" d="M15 12c0 1.657-1.343 3-3 3s-3-1.343-3-3c0-.199.02-.393.057-.581 1.474.541 2.927-.882 2.405-2.371.174-.03.354-.048.538-.048 1.657 0 3 1.344 3 3zm-2.985-7c-7.569 0-12.015 6.551-12.015 6.551s4.835 7.449 12.015 7.449c7.733 0 11.985-7.449 11.985-7.449s-4.291-6.551-11.985-6.551zm-.015 12c-2.761 0-5-2.238-5-5 0-2.761 2.239-5 5-5 2.762 0 5 2.239 5 5 0 2.762-2.238 5-5 5z" /></svg>
                          </div>
                        </button>
                      </div>

                      <p className="text-xs text-gris3 mt-5">Al hacer clic en &quot;Registrarme&quot;, aceptás los <Link href="/terminos-y-condiciones"><a className="inline text-xs text-violeta underline-offset-1 hover:underline">Términos y condiciones</a></Link>, la <Link href="/politica-de-privacidad"><a className="inline text-xs text-violeta underline-offset-1 hover:underline">Política de privacidad</a></Link> y la <Link href="/terminos-y-condiciones"><a className="inline text-xs text-violeta underline-offset-1 hover:underline">Política de cookies</a></Link>.</p>

                      <div className="mt-4">
                        {props.isSubmitting
                          ? <div className="flex items-center justify-center text-blanco1 h-[40px] text-center w-full bg-gris2 rounded-sm">Registrando...</div>
                          : <button type="submit" className="text-blanco1 h-[40px] text-center w-full bg-gradient-to-r from-violeta hover:from-verde to-violeta rounded-sm hover:drop-shadow-md transition ease-linear duration-300">Registrarme</button>}
                      </div>
                    </form>
                  )}
                </Formik>
              </div>

              <div className="flex-grow border-t-2 border-gris2"></div>

              <div className="inline-block bg-white w-full h-auto rounded-b-md px-5 py-6">
                <a href="/auth/google" className="flex h-[40px] items-center justify-center w-full text-center border-2 border-gris2 rounded-md hover:bg-blanco3">
                  <div className="w-6 h-6 mr-3 bg-[url('/img/system/icons/google.svg')] bg-no-repeat bg-contain bg-center"></div>
                  <p className="text-xs">Registrarme con mi cuenta de Google</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer>
        
      </footer>
    </div>
  )
}

export const getServerSideProps = async (context) => {
  const session = await getSession(context)

  if (session) return {
    redirect: {
      destination: '/profile',
      permanent: false
    }
  }

  return {
    props: {}
  }
}
