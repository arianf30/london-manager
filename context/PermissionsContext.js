import usePermissions from 'hooks/usePermissions'
import { useRouter } from 'next/router'
import { createContext, useEffect, useState } from 'react'

const PermissionsContext = createContext({})

export function PermissionsProvider({ children }) {
  const [permissions, setPermissions] = useState(null)
  const router = useRouter()
  const { ptv } = router.query
  const { sendGetPermissions, isLoading, isError, response } = usePermissions(ptv)
  console.log('Punto de venta: ', ptv)

  useEffect(() => {
    if (typeof window !== "undefined") {
      const permissionsStorage = JSON.parse(window.localStorage.getItem(`permissionsStorage_${ptv}`))

      if (permissionsStorage) {
        setPermissions(permissionsStorage)
      } else {
        sendGetPermissions()
      }
    }
  }, [])

  useEffect(() => {
    resetPermissions()
  }, [isError])

  useEffect(() => {
    if (response) {
      window.localStorage.setItem(`permissionsStorage_${ptv}`, JSON.stringify(response))
      setPermissions(response)
    }
  }, [response])

  const resetPermissions = () => {
    if (typeof window !== "undefined") {
      window.localStorage.removeItem(`permissionsStorage_${ptv}`)
      setPermissions(null)
    }
  }

  return (
    <PermissionsContext.Provider value={{ permissions, resetPermissions }}>
      {children}
    </PermissionsContext.Provider>
  )
}

export default PermissionsContext
