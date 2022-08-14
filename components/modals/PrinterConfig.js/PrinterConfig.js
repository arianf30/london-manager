import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import PrimaryButton from "components/buttons/PrimaryButton"
import withModal from "components/hocs/withModal"
import InputSelect from "components/inputs/InputSelect"
import InputText from "components/inputs/InputText"
import { useRouter } from "next/router"
import { useEffect, useRef } from "react"
import toast from "react-hot-toast"
import { getPrinterConfig, postPrinterConfig } from "services/pop/printerConfig"
import { toastLP } from "utils/toasts"

const PrinterConfig = ({ setModal }) => {
  const refHost = useRef()
  const refCook = useRef()
  const refOrder = useRef()
  const refCheck = useRef()
  const refInvoice = useRef()
  const refButton = useRef()
  const { pop } = useRouter().query

  const queryClient = useQueryClient()

  const { data, isFetching, isError } = useQuery(["printerConfig", pop], () =>
    getPrinterConfig(pop)
  )
  const { mutate: mutateConfigPrinter } = useMutation(postPrinterConfig)
  const handleSubmit = async () => {
    const send = new Promise((resolve, rejected) => {
      refButton.current.disabled = true
      mutateConfigPrinter(
        {
          pop: pop,
          payload: {
            host: refHost.current.value,
            cook: refCook.current.value,
            order: refOrder.current.value,
            check: refCheck.current.value,
            invoice: refInvoice.current.value,
          },
        },
        {
          onSuccess: () => {
            refButton.current.disabled = false
            queryClient.invalidateQueries(["printerConfig", pop])
            resolve()
          },
          onError: () => {
            refButton.current.disabled = false
            rejected()
          },
        }
      )
    })
    toastLP(send)
  }

  useEffect(() => {
    queryClient.invalidateQueries(["printerConfig", pop])
    return () => {
      toast.dismiss()
    }
  }, [])

  useEffect(() => {
    let host = data?.data.host
    let config = JSON.parse(data?.data.config)
    refHost.current.value = host
    refCook.current.value = config.cook
    refOrder.current.value = config.order
    refCheck.current.value = config.check
    refInvoice.current.value = config.invoice
  }, [data])

  return (
    <div className="w-full bg-blanco px-6 pt-6 pb-[18px] box-border">
      {/* {isFetching && (
        <p className="text-center py-1 bg-blanco text-bxs">Cargando...</p>
      )} */}
      <InputText
        inputRef={refHost}
        placeholder="Por ej: 192.168.0.11"
        label="URL Host (obligatorio)"
        descripcion={`IP de la máquina donde se ejecuta el London Printer.`}
      />
      <div className="grid grid-cols-4 gap-2 w-full mt-6">
        <div className="col-span-1">
          <InputSelect
            inputRef={refCook}
            options={[1, 2, 3, 4]}
            label="Comandas de cocina"
          />
        </div>
        <div className="col-span-1">
          <InputSelect
            inputRef={refOrder}
            options={[1, 2, 3, 4]}
            label="Ordenes de pedido"
          />
        </div>
        <div className="col-span-1">
          <InputSelect
            inputRef={refCheck}
            options={[1, 2, 3, 4]}
            label="Cuenta"
          />
        </div>
        <div className="col-span-1">
          <InputSelect
            inputRef={refInvoice}
            options={[1, 2, 3, 4]}
            label="Facturación"
          />
        </div>
      </div>

      <PrimaryButton
        buttonRef={refButton}
        text="Guardar"
        theme="light"
        action={() => handleSubmit()}
        classes="w-full mt-6"
      />
    </div>
  )
}

export default withModal(PrinterConfig, {
  width: 600,
  title: "Configurar impresoras",
})
