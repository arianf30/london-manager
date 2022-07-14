import axios from "axios"

const ENDPOINT = process.env.NEXT_PUBLIC_ENDPOINT

export function getCategories({ ptv }) {
  return axios(`${ENDPOINT}/ptv/${ptv}/categorias`)
}
