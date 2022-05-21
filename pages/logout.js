import { useContext, useEffect } from 'react'
import { useRouter } from 'next/router'
import UserContext from 'context/UserContext'

export default function Logout() {
  const { user, setUser } = useContext(UserContext)

  const router = useRouter()

  useEffect(() => {
    if (window !== "undefined") {
      sessionStorage.removeItem('user')
      setUser(null)
    }
  }, [setUser])

  useEffect(() => {
    if(!user) router.push('/login')
  }, [user, router])

  return (<div>Cerrando sesión...</div>)
}
