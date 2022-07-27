import { useRouter } from "next/router"
import plainText from "utils/plainText"
import { userPermissions } from "services/ptv/permissions"
import { useQuery } from "@tanstack/react-query"

export default function useRole() {
  const { ptv, section } = useRouter().query
  let permissions
  const { data, isLoading, isError } = useQuery(
    ["permissions", ptv],
    () => userPermissions(ptv),
    { staleTime: Infinity }
  )

  if (data) {
    if (section) {
      data.data.ptvJerarquia.permissions.forEach((item) => {
        if (item) {
          if (plainText(item.section.nombre) === section) {
            permissions = item
          }
        }
      })
    } else {
      permissions = data.data
    }
  }

  return {
    permissions,
    isError,
    isLoading,
  }
}
