import axios from "axios"

export function getArticles({ pop, limit, offset }) {
  return axios(`/api/pop/${pop}/articulos?limit=${limit}&offset=${offset}`)
}

export function getArticlesCategory({ pop, category, limit, offset }) {
  return axios(
    `/api/pop/${pop}/articulos/${category}?limit=${limit}&offset=${offset}`
  )
}

export function getSearchArticles({ pop, query, limit }) {
  return axios(`/api/pop/${pop}/articulos/search?query=${query}&limit=${limit}`)
}
