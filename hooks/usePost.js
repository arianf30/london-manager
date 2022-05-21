import { useCallback, useState } from "react"

export default function usePost (postService) {
  const [state, setState] = useState({ loading: false, error: false, response: null })

  const sendPost = useCallback(async (headers) => {
    setState({ loading: true, error: false, response: null })
    try {
      const postResponse = await postService(headers)
      setState({ loading: false, error: false, response: postResponse })
    } catch (error) {
      setState({ loading: false, error: error.response.data, response: null })
    }
  }, [])

  return {
    sendPost,
    isPostLoading: state.loading,
    hasPostError: state.error,
    response: state.response
  }
}