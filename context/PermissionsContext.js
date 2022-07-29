import { createContext, useCallback, useEffect, useState } from "react"
import { useRouter } from "next/router"
import axios from "axios"

const API_ENDPOINT = process.env.NEXT_PUBLIC_ENDPOINT

export const PermissionsContext = createContext({})

export function PermissionsProvider({ children }) {
  const [state, setState] = useState({
    isLoading: null,
    isError: null,
    response: null,
  })
  const router = useRouter()
  const { pop } = router.query

  const sendGetPermissions = useCallback(async () => {
    setState({ isLoading: true, isError: null, response: null })
    try {
      const authorizationResponse = await axios(
        `${API_ENDPOINT}/pop/${pop}/user_permissions`
      )
      window.localStorage.setItem(
        `permissionsStorage_${pop}`,
        JSON.stringify(authorizationResponse.data.popJerarquia)
      )
      setState({
        isLoading: null,
        isError: null,
        response: authorizationResponse.data.popJerarquia,
      })
    } catch (error) {
      setState({
        isLoading: null,
        isError: error,
        response: null,
      })
    }
  }, [])

  useEffect(() => {
    if (pop) {
      if (typeof window !== "undefined") {
        const permissionsStorage = JSON.parse(
          window.localStorage.getItem(`permissionsStorage_${pop}`)
        )

        if (permissionsStorage) {
          setState({
            isLoading: null,
            isError: null,
            response: permissionsStorage,
          })
        } else {
          sendGetPermissions()
        }
      }
    }
  }, [pop])

  useEffect(() => {
    if (state.isError) {
      if (typeof window !== "undefined") {
        window.localStorage.removeItem(`permissionsStorage_${pop}`)
      }
      router.push("/profile")
    }
  }, [state.isError])

  const sectionPermissions = (sectionName) => {
    if (state.response) {
      const permisos = state.response?.permissions
      return permisos.find((pop) => pop.section.nombre === sectionName)
    }
    return null
  }

  const deletePermissions = () => {
    if (typeof window !== "undefined") {
      window.localStorage.removeItem(`permissionsStorage_${pop}`)
    }
    router.push("/profile")
  }

  return (
    <PermissionsContext.Provider
      value={{
        permissions: state.response,
        isLoading: state.isLoading,
        sectionPermissions,
        deletePermissions,
      }}
    >
      {children}
    </PermissionsContext.Provider>
  )
}
