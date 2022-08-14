import axios from "axios"

export function getPrinterConfig(pop) {
  return axios(`/api/pop/${pop}/printer_config`)
}

export function postPrinterConfig({ pop, payload }) {
  return axios.post(`/api/pop/${pop}/printer_config`, payload)
}
