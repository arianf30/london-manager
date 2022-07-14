import { useRouter } from "next/router"

export default function Seccion() {
  const { err404 } = useRouter().query
  return <h1>Lo sentimos! {err404} no existe.</h1>
}

Seccion.auth = true
