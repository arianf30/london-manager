import { useCallback, useState } from "react"

export default function useService() {
  const controller = new AbortController()

  const [state, setState] = useState({
    loading: false,
    error: false,
    response: null,
    abort: null,
    clear: null,
  })

  const sendService = useCallback(async (runService, runParams) => {
    setState({
      loading: true,
      error: false,
      response: null,
      abort: () => {
        console.log("abortado")
        controller.abort()
      },
    })
    try {
      const response = await runService({ ...runParams, controller })
      setState({
        loading: false,
        error: false,
        response,
        abort: null,
      })
    } catch (error) {
      setState({
        loading: false,
        error: error.response?.data,
        response: null,
        abort: null,
      })
    }
  }, [])

  const clearService = () => {
    setState({
      loading: false,
      error: false,
      response: null,
      abort: null,
      clear: null,
    })
  }

  return {
    sendService,
    isLoading: state.loading,
    hasError: state.error,
    response: state.response,
    abort: state.abort,
    clearService,
  }
}
