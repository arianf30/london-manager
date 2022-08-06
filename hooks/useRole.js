import { useRouter } from "next/router"
import plainText from "utils/plainText"
import { userPermissions } from "services/pop/permissions"
import { useQuery } from "@tanstack/react-query"
import { useSession } from "next-auth/react"

export default function useRole() {
  const { data: session } = useSession()
  const { pop, section } = useRouter().query
  let permissions = null
  let permissionsSection = null
  const { data, isLoading, isError, refetch } = useQuery(
    ["permissions", session.id, +pop],
    () => userPermissions(pop)
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
