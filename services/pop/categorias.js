import axios from "axios"

export function getCategories(pop) {
  return axios(`/api/pop/${pop}/categorias`)
}
