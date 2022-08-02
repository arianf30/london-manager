import { useQuery } from "@tanstack/react-query"
import { completeInfo } from "services/user/complete_info"

export default function useUserCompleteInfo() {
  const { data, isError, isLoading } = useQuery(["userCompleteInfo"], () =>
    completeInfo()
  )

  return {
    user: data?.data,
    isError,
    isLoading,
  }
}
