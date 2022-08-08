import axios from "axios"

export function getMesas({ pop }) {
  return axios(`/api/pop/${pop}/mesas`)
}

export function postMesa({ pop, id, payload }) {
  return axios.post(`/api/pop/${pop}/mesas/${id}`, payload, {
    headers: {
      "Content-Type": "application/json",
    },
  })
}
