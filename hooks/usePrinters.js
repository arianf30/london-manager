import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import { useRouter } from "next/router"
import { getPrinterConfig } from "services/pop/printerConfig"
import { toastLP } from "utils/toasts"

const SIZES = {
  58: "170px",
  80: "300px",
}

export default function usePrinter() {
  const { pop = 0 } = useRouter().query
  const { data, isLoading, isError } = useQuery(["printerConfig", pop], () =>
    getPrinterConfig(pop)
  )
  let host = data?.data.host
  let config = JSON.parse(data?.data.config)

  const remotePrint = async (type, data) => {
    const promise = new Promise(async (resolve, reject) => {
      try {
        await axios.post(`http://${host}:5636/api/printers/print`, {
          printer: config[type],
          width: "170px",
          data: data,
        })
        resolve()
      } catch (e) {
        reject()
      }
    })
    toastLP(promise, {
      loading: "Imprimiendo...",
      success: "Impresión exitosa.",
      error: "Error al imprimir. Configure sus impresoras.",
    })
  }

  return {
    remotePrint,
  }
}
