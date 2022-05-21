import axios from 'axios'

const ENDPOINT = process.env.NEXT_PUBLIC_ENDPOINT
const ADMIN_LINK = process.env.NEXT_PUBLIC_ADMIN_LINK

export function listUsers({ limit, offset }) {
  return axios(`${ENDPOINT}/${ADMIN_LINK}/usuarios?limit=${limit}&offset=${offset}`)
}

export function newUser(headers) {
  return axios.post(`${ENDPOINT}/${ADMIN_LINK}/usuarios`, headers)
}