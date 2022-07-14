import axios from "axios"

const ENDPOINT = process.env.NEXT_PUBLIC_ENDPOINT

export function getArticles({ ptv, limit, offset, controller }) {
  return axios(
    `${ENDPOINT}/ptv/${ptv}/articulos?limit=${limit}&offset=${offset}`,
    { signal: controller.signal }
  )
}

export function getArticlesCategory({ ptv, category, limit, offset }) {
  return axios(
    `${ENDPOINT}/ptv/${ptv}/articulos/${category}?limit=${limit}&offset=${offset}`,
    { signal: controller.signal }
  )
}

export function getSearchArticles({ ptv, query, limit }) {
  return axios(
    `${ENDPOINT}/ptv/${ptv}/articulos/search?query=${query}&limit=${limit}`
  )
}
