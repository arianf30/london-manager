import axios from "axios"

const ENDPOINT = process.env.NEXT_PUBLIC_ENDPOINT
const ADMIN_LINK = process.env.NEXT_PUBLIC_ADMIN_LINK

export function getAllPoints({ limit, offset }) {
  return axios(`${ENDPOINT}/${ADMIN_LINK}/puntos_de_venta?limit=${limit}&offset=${offset}`)
}

export async function savePoint(headers) {
  return axios.post(`${ENDPOINT}/${ADMIN_LINK}/puntos_de_venta`, headers)
}