import { useRouter } from "next/router"
import { useEffect } from "react"

export default function Logout() {
  const router = useRouter()

  useEffect(() => {
    router.push("/login")
  })

  return <div></div>
}
