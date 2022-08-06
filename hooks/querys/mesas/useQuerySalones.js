import { useRouter } from "next/router"
import { useQuery } from "@tanstack/react-query"
import { getSalones } from "services/pop/salones"

export default function useQuerySalones() {
  const { pop = 0 } = useRouter().query
  const { data, isLoading, isError } = useQuery(["salones", pop], () =>
    getSalones({
      pop: pop,
    })
  )

  return {
    data: data?.data ?? [],
    isLoading,
    isError,
  }
}
