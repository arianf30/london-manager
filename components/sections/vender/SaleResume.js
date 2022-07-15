import { useContext } from "react"
import VenderContext from "context/VenderContext"
import calcTotal, {
  calcDiscounts,
  calcSubtotal,
} from "utils/prices/calcResumeSale"

export default function SaleResume() {
  const { saleItems } = useContext(VenderContext)
  const subtotal = calcSubtotal(saleItems)
  const discount = calcDiscounts(saleItems)
  const total = calcTotal(saleItems)

  return (
    <>
      <div className="w-full h-auto bg-gris3 box-border">
        <div className="w-full h-10 grid grid-cols-12 mt-[1px] text-blanco1">
          <div className="col-span-1 bg-negro3"></div>
          <div className="flex items-center justify-start bg-negro3 col-span-5 font-bold px-3">
            Subtotal
          </div>
          <div className="flex items-center justify-end bg-negro3 col-span-5 font-bold px-3">
            {subtotal}
          </div>
          <div className="col-span-1 bg-negro3"></div>
        </div>
        <div className="w-full h-10 grid grid-cols-12 mt-[1px] text-gris3">
          <div className="col-span-1 bg-negro3"></div>
          <div className="flex items-center justify-start bg-negro3 col-span-5 px-3">
            Descuento
          </div>
          <div className="flex items-center justify-end bg-negro3 col-span-5 px-3">
            {discount}
          </div>
          <div className="col-span-1 bg-negro3"></div>
        </div>
      </div>

      {/* TOTAL */}
      <div className="flex items-center justify-end w-full h-24 bg-negro2 px-12">
        <h4 className="text-verde font-bold mr-2">$</h4>
        <h1 className="text-verde font-bold">{total}</h1>
      </div>
    </>
  )
}
