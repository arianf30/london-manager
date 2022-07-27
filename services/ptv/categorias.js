import axios from "axios"

export function getCategories(ptv) {
  return axios(`/api/ptv/${ptv}/categorias`)
}
