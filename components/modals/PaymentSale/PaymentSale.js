import withModalAmbient from "components/hocs/withModalAmbient"
import PrimaryButton from "components/buttons/PrimaryButton"
import SecondaryButton from "components/buttons/SecondaryButton"
import InputToggle from "components/inputs/InputToggle"
import InputSelect from "components/inputs/InputSelect"
import InputText from "components/inputs/InputText"
import { AnimatePresence, motion } from "framer-motion"
import TertiaryButton from "components/buttons/TertiaryButton"
import KeyboardButton from "components/buttons/KeyboardButton"
import formatPriceNumber from "utils/formatPriceNumber"
import ItemListPaymentModal from "./ItemListPaymentModal"
import calcSubtotal, {
  calcDiscountGeneral,
  calcDiscountProducts,
  calcDiscountPromotions,
} from "utils/prices/calcResumeSale"
import Icon from "components/svg/Icon"
import { useEffect, useRef, useState } from "react"
import useQueryComprobantes from "hooks/querys/config_comprobantes/useQueryComprobantes"

const PaymentSale = ({
  actionClose,
  saleItems,
  promotions,
  discountQty,
  discountType,
  operation,
  viewKeyboard,
  updateViewKeyboard,
  invoice,
  updateInvoice,
  viewPrint,
  updateViewPrint,
  payMethod,
  updatePayMethod,
  payMethodSecondary,
  updatePayMethodSecondary,
}) => {
  const pagoRef = useRef()
  const pago2Ref = useRef()
  const [focus, setFocus] = useState(0)
  const subtotal = parseFloat(calcSubtotal(saleItems))
  const discountProducts = parseFloat(calcDiscountProducts(saleItems))
  const discountPromotions = parseFloat(calcDiscountPromotions(promotions))
  const discountGeneral = parseFloat(
    calcDiscountGeneral(
      subtotal + discountProducts + discountPromotions,
      discountQty,
      discountType
    )
  )
  const total =
    subtotal + discountProducts + discountPromotions + discountGeneral

  const { data: comprobantes } = useQueryComprobantes()

  useEffect(() => {
    pagoRef?.current?.focus()
  }, [])

  useEffect(() => {
    if (payMethodSecondary?.active) {
      pago2Ref?.current?.focus()
    }
  }, [payMethodSecondary?.active])

  const updatePago = (value) => {
    if (isNaN(value)) return
    if (value.length > 11) return
    if (
      payMethodSecondary?.active &&
      parseFloat(value) + parseFloat(payMethodSecondary?.payWith) > total
    ) {
      updatePayMethod(
        "payWith",
        (total - parseFloat(payMethodSecondary?.payWith)).toFixed(2)
      )
      return
    }
    updatePayMethod("payWith", value)
  }
  const updatePago2 = (value) => {
    if (isNaN(value)) return
    if (value.length > 11) return
    if (parseFloat(payMethod?.payWith) + parseFloat(value) > total) {
      updatePayMethodSecondary(
        "payWith",
        (total - parseFloat(payMethod?.payWith)).toFixed(2)
      )
      return
    }
    updatePayMethodSecondary("payWith", value)
  }
  const insertKey = (addValue) => {
    let insertRef = pagoRef
    if (focus === 1) {
      insertRef = pago2Ref
    }
    insertRef?.current?.focus()
    let value = insertRef?.current?.value
    let newValue = value + addValue
    if (isNaN(newValue)) return
    if (newValue.length > 11) return
    if (focus === 1) {
      updatePago2(newValue)
      return
    }
    updatePago(newValue)
  }
  const insertPrice = (addValue) => {
    let insertRef = pagoRef
    if (focus === 1) {
      insertRef = pago2Ref
    }
    insertRef?.current?.focus()
    let value = insertRef?.current?.value || 0
    let newValue = parseFloat(value) + parseFloat(addValue)
    if (isNaN(newValue)) return
    if (newValue.length > 11) return
    if (focus === 1) {
      updatePago2(parseFloat(newValue).toFixed(2))
      return
    }
    updatePago(parseFloat(newValue).toFixed(2))
  }
  const removeKey = () => {
    let insertRef = pagoRef
    if (focus === 1) {
      insertRef = pago2Ref
    }
    insertRef?.current?.focus()
    let value = insertRef?.current?.value
    if (value) {
      if (focus === 1) {
        updatePago2("")
        insertRef.current.value = ""
        return
      }
      updatePago("")
      insertRef.current.value = ""
    }
  }

  const suVuelto = () => {
    let totalPago = parseFloat(payMethod?.payWith) || 0
    let vuelto = 0
    if (payMethodSecondary?.active) {
      totalPago =
        (parseFloat(payMethod.payWith) || 0) +
        (parseFloat(payMethodSecondary.payWith) || 0)
    }
    vuelto = totalPago - total
    if (vuelto < 0) {
      vuelto = 0
    }
    return formatPriceNumber(vuelto)
  }
  const autocompletePay = (payId) => {
    let valueAutocomplete = total
    if (payMethodSecondary?.active) {
      if (payId === 0) {
        if ((parseFloat(payMethodSecondary?.payWith) || 0) < total) {
          valueAutocomplete =
            total - (parseFloat(payMethodSecondary?.payWith) || 0)
          updatePayMethod("payWith", valueAutocomplete.toFixed(2))
          return
        }
        updatePayMethod("payWith", 0)
        return
      }
      if ((parseFloat(payMethod?.payWith) || 0) < total) {
        valueAutocomplete = total - (parseFloat(payMethod?.payWith) || 0)
        updatePayMethodSecondary("payWith", valueAutocomplete.toFixed(2))
        return
      }
      updatePayMethodSecondary("payWith", 0)
      return
    }
    updatePayMethod("payWith", valueAutocomplete.toFixed(2))
    return
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.1 }}
      className="flex flex-row items-center h-auto"
    >
      {/* BLOQUE FACTURACION */}
      <AnimatePresence>
        {invoice?.active && (
          <motion.div
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: 233, opacity: 1 }}
            exit={{ width: 0, opacity: 0 }}
            transition={{ type: "Inertia" }}
            className="relative left-2 top-6 overflow-x-hidden box-border h-auto drop-shadow-[8px_0px_24px_rgba(86,93,152,0.12)]"
          >
            <div className="min-w-[233px] px-4 py-6 bg-blanco rounded-xl border-l-4 border-p500">
              <h5 className="text-ss font-bold">Datos de facturación</h5>
              <InputSelect
                options={
                  comprobantes &&
                  comprobantes.map((item) => {
                    return {
                      value: item.id,
                      label: item.nombre,
                      code: item.codigo,
                    }
                  })
                }
                icon="image"
                label="Tipo de comprobante"
                // placeholder="Seleccioná un tipo de comprobante"
                selected={invoice?.cod}
                onChange={(value) => updateInvoice("cod", value)}
                classes="mt-4"
                required
              />
              <InputSelect
                options={[
                  "IVA Responsable Inscripto",
                  "IVA Sujeto Excento",
                  "Consumidor final",
                  "Responsable Monotributo",
                  "Sujeto No Categorizado",
                  "Proveedor del Exterior",
                  "Cliente del Exterior",
                  "IVA Liberado - Ley N° 19.640",
                  "IVA Responsable Inscripto - Agente de Percepción",
                  "Monotributista Social",
                  "IVA No Alcanzado",
                ]}
                icon="image"
                label="Condición frente al IVA"
                // placeholder="Seleccioná un tipo de comprobante"
                selected={invoice?.condition}
                onChange={(value) => updateInvoice("condition", value)}
                classes="mt-4"
                required
              />
              <InputText
                placeholder="Número sin guiones"
                label="DNI o CUIT"
                value={invoice?.cuit}
                onChange={(value) => {
                  if (isNaN(value)) return
                  if (value.length > 11) return
                  updateInvoice("cuit", value)
                }}
                classes="mt-4"
              />
              <InputText
                placeholder="Razón Social"
                label="Nombre o Razón Social"
                value={invoice?.bussinesName}
                onChange={(value) => {
                  if (value.length > 51) return
                  updateInvoice("bussinesName", value)
                }}
                classes="mt-4"
              />
              <InputText
                placeholder="Domicilio"
                label="Domicilio comercial"
                value={invoice?.bussinesAddress}
                onChange={(value) => {
                  if (value.length > 91) return
                  updateInvoice("bussinesAddress", value)
                }}
                classes="mt-4"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      {/* BLOQUE CENTRAL */}
      <div className="w-[695px] h-auto">
        <div className="w-full flex items-center bg-p500 rounded-t-xl px-6 h-[62px] text-sl text-blanco">
          Cobrar
        </div>
        {/* TOGGLES */}
        <div className="flex items-center justify-between w-full h-[34px] px-6 bg-p50">
          <div className="flex gap-8">
            {operation?.type && (
              <p className="text-cap text-negro font-bold">
                {operation?.type} #{operation?.number}
              </p>
            )}
            {operation?.client && (
              <p className="text-cap text-negro font-bold">
                Cliente: {operation?.client.name}
              </p>
            )}
          </div>
          <div className="flex gap-4">
            <InputToggle
              text="Teclado"
              state={viewKeyboard}
              action={() => updateViewKeyboard(!viewKeyboard)}
            />
            <InputToggle
              text="Factura"
              state={invoice?.active}
              action={() => updateInvoice("active", !invoice?.active)}
            />
            <InputToggle
              text="Impresion"
              state={viewPrint}
              action={() => updateViewPrint(!viewPrint)}
            />
          </div>
        </div>
        {/* TABLES */}
        <div className="grid grid-cols-2 gap-2 bg-blanco px-6 py-4">
          {/* TABLA 1 */}
          <div className="col-span-1 h-[321px] rounded-sm border-[1px] border-p200">
            <div className="flex items-center justify-between h-[29px] bg-p50 px-3">
              <p className="text-bs text-gs700 font-bold">Su cuenta</p>
              {/* {operation?.type === "Mesa" && (
                <InputToggle
                  text="Pago parcial"
                  state={viewPrint}
                  action={() => updateViewPrint(!viewPrint)}
                />
              )} */}
            </div>
            {/* ITEMS */}
            <div className="w-full h-[calc(100%_-_110px)] max-h-[calc(100%_-_110px)] border-b-[1px] border-gs200 overflow-y-auto">
              {saleItems?.length > 0 &&
                saleItems.map((item, index) => {
                  return (
                    <div className="flex" key={`itemPaymentModal-${index}`}>
                      <ItemListPaymentModal item={item} />
                    </div>
                  )
                })}
            </div>
            {/* SUBTOTAL */}
            <div className="flex items-center justify-between bg-p50 w-full h-[22px] border-b-[1px] border-gs200 text-bxs px-3">
              <span>Subtotal</span>
              <span>{formatPriceNumber(subtotal)}</span>
            </div>
            {/* DESCUENTOS */}
            <div className="flex items-center justify-between bg-p50 w-full h-[22px] border-b-[1px] border-gs200 text-bxs px-3">
              <span>Descuentos</span>
              <span>
                {formatPriceNumber(
                  discountProducts + discountPromotions + discountGeneral
                )}
              </span>
            </div>
            <div className="flex items-center justify-between h-[37px] bg-p100 px-3">
              <p className="text-bs text-p700 font-bold">Total:</p>
              <p className="text-bs text-p700 font-bold">
                {formatPriceNumber(total)}
              </p>
            </div>
          </div>
          {/* TABLA 2 */}
          <div className="col-span-1 h-[321px] rounded-sm border-[1px] border-p200">
            <div className="flex items-center justify-between h-[29px] bg-p50 px-3">
              <p className="text-bs text-gs700 font-bold">Forma de pago</p>
              {!payMethodSecondary?.active && (
                <TertiaryButton
                  text="Agregar"
                  size="sm"
                  icon="plusCircle"
                  theme="light"
                  action={() => updatePayMethodSecondary("active", true)}
                />
              )}
            </div>
            {/* FORMAS DE PAGO */}
            <div className="h-[calc(100%_-_66px)] bg-gs100 px-3 pt-[19px]">
              {/* PAGO PRIMARIO */}
              <div className="grid grid-cols-2 gap-2 w-full bg-blanco border-[1px] border-p100 rounded-[4px] px-3 py-4">
                <div className="col-span-1">
                  <InputSelect
                    options={[
                      { value: 0, label: "Efectivo" },
                      { value: 1, label: "Débito" },
                      { value: 2, label: "Crédito" },
                    ]}
                    placeholder=""
                    label="Método"
                    selected={payMethod?.id}
                    onChange={(value) => {
                      if (!payMethodSecondary?.active && value != 0) {
                        updatePayMethod({
                          id: value,
                          payWith: total.toFixed(2),
                        })
                      } else {
                        updatePayMethod("id", value)
                      }
                    }}
                    required
                  />
                </div>
                <div className="relative col-span-1">
                  <InputText
                    inputRef={pagoRef}
                    placeholder="0.00"
                    label="Paga"
                    value={payMethod?.payWith}
                    onChange={(value) => updatePago(value)}
                    onFocus={() => setFocus(0)}
                    disabled={payMethod?.id != 0 && true}
                  />
                  <button
                    className="absolute w-4 h-4 right-3 bottom-3 text-gs400 select-none"
                    onClick={() => autocompletePay(0)}
                  >
                    <Icon svg="image" />
                  </button>
                </div>
              </div>
              {/* PAGO SECUNDARIO */}
              {payMethodSecondary?.active && (
                <>
                  <div className="w-full bg-blanco border-[1px] border-p100 rounded-[4px] mt-5">
                    <div className="col-span-2 h-[28px] rounded-t-[4px] bg-p50 px-3">
                      <div className="flex items-center justify-between h-full w-full">
                        <p className="text-ls text-p500">
                          Método de pago secundario
                        </p>
                        <button
                          className="flex items-center justify-center h-5 w-5 rounded-[4px] hover:bg-[rgba(0,0,0,0.05)]"
                          onClick={() =>
                            updatePayMethodSecondary("active", false)
                          }
                        >
                          <div className="h-3 w-3 text-p500">
                            <Icon svg="trash2" />
                          </div>
                        </button>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-2 px-3 py-4">
                      <div className="col-span-1">
                        <InputSelect
                          options={[
                            { value: 0, label: "Efectivo" },
                            { value: 1, label: "Débito" },
                            { value: 2, label: "Crédito" },
                          ]}
                          placeholder=""
                          label="Método"
                          selected={payMethodSecondary?.id}
                          onChange={(value) =>
                            updatePayMethodSecondary("id", value)
                          }
                          required
                        />
                      </div>
                      <div className="relative col-span-1">
                        <InputText
                          inputRef={pago2Ref}
                          placeholder="0.00"
                          label="Paga"
                          value={payMethodSecondary?.payWith}
                          onChange={(value) => updatePago2(value)}
                          onFocus={() => setFocus(1)}
                          disabled={payMethod?.id != 0 && true}
                        />
                        <button
                          className="absolute w-4 h-4 right-3 bottom-3 text-gs400 select-none"
                          onClick={() => autocompletePay(1)}
                        >
                          <Icon svg="image" />
                        </button>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
            {/* VUELTO */}
            <div className="flex items-center justify-between h-[37px] bg-p100 px-3">
              <p className="text-bs text-p700 font-bold">Su vuelto:</p>
              <p className="text-bs text-p700 font-bold">{suVuelto()}</p>
            </div>
          </div>
        </div>
        {/* BUTTONS */}
        <div className="flex w-full items-center justify-between bg-blanco px-6 pt-2 pb-6 rounded-b-xl">
          <SecondaryButton
            text="Cancelar"
            size="lg"
            action={actionClose}
            classes="w-[210px]"
          />
          <PrimaryButton
            text="Cobrar"
            size="lg"
            theme="light"
            classes="w-[429px]"
          />
        </div>
      </div>
      {/* BLOQUE TECLADO */}
      <AnimatePresence>
        {viewKeyboard && (
          <motion.div
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: 202, opacity: 1 }}
            exit={{ width: 0, opacity: 0 }}
            transition={{ type: "Inertia" }}
            className="relative -left-2 top-3 h-auto overflow-x-hidden drop-shadow-[8px_0px_24px_rgba(86,93,152,0.12)]"
          >
            <div className="min-w-[202px] box-border px-4 py-6 bg-blanco rounded-xl border-r-4 border-p500">
              <div className="grid grid-cols-3 h-[38px] rounded-lg border-[1px] border-p200">
                <button
                  onClick={() => insertPrice(200)}
                  className="col-span-1 h-full text-ss text-p800 font-bold border-r-[1px] border-p200 rounded-l-lg hover:bg-p500 hover:text-blanco"
                >
                  200
                </button>
                <button
                  onClick={() => insertPrice(500)}
                  className="col-span-1 h-full text-ss text-p800 font-bold border-r-[1px] border-p200 hover:bg-p500 hover:text-blanco"
                >
                  500
                </button>
                <button
                  onClick={() => insertPrice(1000)}
                  className="col-span-1 h-full text-ss text-p800 font-bold rounded-r-lg hover:bg-p500 hover:text-blanco"
                >
                  1000
                </button>
              </div>
              {/* NUMEROS */}
              <div className="grid grid-cols-3 h-[227px] rounded-lg border-[1px] border-p200 mt-2">
                <KeyboardButton
                  text={9}
                  bR
                  bB
                  rTL
                  action={() => insertKey(9)}
                />
                <KeyboardButton text={8} bR bB action={() => insertKey(8)} />
                <KeyboardButton text={7} bB rTR action={() => insertKey(7)} />
                <KeyboardButton text={6} bR bB action={() => insertKey(6)} />
                <KeyboardButton text={5} bR bB action={() => insertKey(5)} />
                <KeyboardButton text={4} bB action={() => insertKey(4)} />
                <KeyboardButton text={3} bR bB action={() => insertKey(3)} />
                <KeyboardButton text={2} bR bB action={() => insertKey(2)} />
                <KeyboardButton text={1} bB action={() => insertKey(1)} />
                <KeyboardButton text={0} bR rBL action={() => insertKey(0)} />
                <KeyboardButton text="." bR action={() => insertKey(".")} />
                <KeyboardButton icon="borrar" rBR action={() => removeKey()} />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default withModalAmbient(PaymentSale)
