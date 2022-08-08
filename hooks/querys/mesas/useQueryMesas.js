import { useRouter } from "next/router"
import { useQuery } from "@tanstack/react-query"
import { getMesas } from "services/pop/mesas"

export default function useQueryMesas() {
  const { pop = 0 } = useRouter().query
  const { data, isLoading, isError, isFetching } = useQuery(
    ["mesas", pop],
    () =>
      getMesas({
        pop: pop,
      })
  )

  return {
    data: data?.data ?? [],
    isLoading,
    isError,
    isFetching,
  }
}
