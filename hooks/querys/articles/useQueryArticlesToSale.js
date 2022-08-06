import { useRouter } from "next/router"
import { useQuery } from "@tanstack/react-query"
import { getArticles } from "services/pop/stock"

export default function useQueryArticlesToSale() {
  const { pop = 0 } = useRouter().query
  const { data, isLoading, isError } = useQuery(["articlesToSale", pop], () =>
    getArticles({
      pop: pop,
      limit: 1000,
      offset: 0,
    })
  )

  return {
    data: data?.data ?? [],
    isLoading,
    isError,
  }
}
