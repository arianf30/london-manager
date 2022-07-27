import axios from "axios"

export function completeInfo() {
  return axios("/api/user/complete_info")
}
