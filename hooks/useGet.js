import { useCallback, useState } from 'react'

export default function useGet(getService, getParams) {
  const [state, setState] = useState({ loading: false, error: false, response: null })

  const sendGet = useCallback(async () => {
    setState({ loading: true, error: false, response: null })
    try {
      const getResponse = await getService(getParams)
      setState({ loading: false, error: false, response: getResponse })
    } catch (error) {
      console.log(error)
      setState({ loading: false, error: error.response.data, response: null })
    }
  }, [])

  return {
    sendGet,
    isGetLoading: state.loading,
    hasGetError: state.error,
    response: state.response
  }
}
