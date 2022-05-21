import axios from 'axios'

const ENDPOINT = process.env.NEXT_PUBLIC_ENDPOINT

export function GetSecciones() {
  return axios(`${ENDPOINT}/general/secciones`)
}