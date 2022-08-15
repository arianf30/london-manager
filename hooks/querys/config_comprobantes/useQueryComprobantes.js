import { useRouter } from "next/router"
import { useQuery } from "@tanstack/react-query"
import axios from "axios"

export default function useQueryComprobantes() {
  const { pop = 0 } = useRouter().query
  const { data, isLoading, isError, isFetching } = useQuery(
    ["config_comprobantes", pop],
    () => axios(`/api/pop/${pop}/config_comprobantes`)
  )

  return {
    data: data?.data ?? [],
    isLoading,
    isError,
    isFetching,
  }
}
