import axios from "axios"

export function userPermissions(pop) {
  return axios(`/api/pop/${pop}/user_permissions`)
}
