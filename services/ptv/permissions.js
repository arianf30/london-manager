import axios from "axios"

export function userPermissions(ptv) {
  return axios(`/api/ptv/${ptv}/user_permissions`)
}
