import axios from 'axios'

const ENDPOINT = process.env.NEXT_PUBLIC_ENDPOINT

export function completeInfo() {
  return axios(`${ENDPOINT}/user/complete_info`)
}