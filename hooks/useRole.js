import { useRouter } from "next/router"
import plainText from "utils/plainText"
import { userPermissions } from "services/pop/permissions"
import { dehydrate, QueryClient, useQuery } from "@tanstack/react-query"
import { useSession } from "next-auth/react"

export default function useRole() {
  const { data: session } = useSession()
  const { pop, section } = useRouter().query
  let permissions = null
  let permissionsSection = null
  const { data, isLoading, isError, refetch } = useQuery(
    ["permissions", session.id, +pop],
    () => userPermissions(pop),
    { staleTime: Infinity, cacheTime: Infinity }
  )

  if (data) {
    permissions = data.data
    if (section) {
      data.data.popJerarquia.permissions.forEach((item) => {
        if (item) {
          if (plainText(item.section.nombre) === section) {
            permissionsSection = item
          }
        }
      })
    }
  }

  return {
    permissions,
    permissionsSection,
    isError,
    isLoading,
    refetch,
  }
}

export const getStaticProps = async (context) => {
  const { pop } = context.params?.pop
  const queryClient = new QueryClient()

  await queryClient.prefetchQuery(["permissions"], () => userPermissions(pop))

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  }
}
