import axios from 'axios'
import { useRouter } from 'next/router'
import { useCallback, useEffect, useState } from 'react'

const API_ENDPOINT = process.env.NEXT_PUBLIC_ENDPOINT

export default function usePermissions() {
  const [state, setState] = useState({ isLoading: null, isError: null, response: null })
  const router = useRouter()
  const { ptv } = router.query

  const sendGetPermissions = useCallback(async () => {
    setState({ isLoading: true, isError: null, response: null })
    try {
      const authorizationResponse = await axios(`${API_ENDPOINT}/ptv/${ptv}/user_permissions`)
      window.localStorage.setItem(`permissionsStorage_${ptv}`, JSON.stringify(authorizationResponse.data.ptvJerarquia))
      setState({ isLoading: null, isError: null, response: authorizationResponse.data.ptvJerarquia })
    } catch (error) {
      setState({ isLoading: null, isError: error.response.data.message, response: null })
    }
  }, [])

  useEffect(() => {
    if (typeof window !== "undefined") {
      const permissionsStorage = JSON.parse(window.localStorage.getItem(`permissionsStorage_${ptv}`))

      if (permissionsStorage) {
        setState({ isLoading: null, isError: null, response: permissionsStorage })
      } else {
        sendGetPermissions()
      }
    }
  }, [])

  useEffect(() => {
    if (state.isError) {
      if (typeof window !== "undefined") {
        window.localStorage.removeItem(`permissionsStorage_${ptv}`)
      }
      router.push('/profile')
    }
  }, [state.isError])

  const secPermission = () => {
    const permisos = permissions.permisos
    return permisos.filter(ptv => ptv.seccion === 5)
  }

  return {
    isLoading: state.isLoading,
    permissions: state.response,
    secPermission
  }
}
