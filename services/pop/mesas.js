import axios from "axios"

export function getMesas({ pop }) {
  return axios(`/api/pop/${pop}/mesas`)
}
