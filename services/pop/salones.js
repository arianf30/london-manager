import axios from "axios"

export function getSalones({ pop }) {
  return axios(`/api/pop/${pop}/salones`)
}
