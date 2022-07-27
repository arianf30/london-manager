import axios from "axios"

export function getArticles({ ptv, limit, offset, controller }) {
  return axios(`/api/ptv/${ptv}/articulos?limit=${limit}&offset=${offset}`)
}

export function getArticlesCategory({ ptv, category, limit, offset }) {
  return axios(
    `/api/ptv/${ptv}/articulos/${category}?limit=${limit}&offset=${offset}`,
    { signal: controller.signal }
  )
}

export function getSearchArticles({ ptv, query, limit }) {
  return axios(`/api/ptv/${ptv}/articulos/search?query=${query}&limit=${limit}`)
}
