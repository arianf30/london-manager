import Icon from "components/svg/Icon"
import formatPriceNumber from "utils/formatPriceNumber"
import calcTotal, {
  calcDiscounts,
  calcSubtotal,
} from "utils/prices/calcResumeSale"

export default function SaleResume({
  saleItems,
  promotions,
  viewSubtotal,
  updateViewSubtotal,
  viewDiscount,
  updateViewDiscount,
  discountType,
  updateDiscountType,
  discountQty,
  updateDiscountQty,
}) {
  const subtotal = calcSubtotal(saleItems)
  const discountProducts = calcDiscounts(saleItems)
  const discountGeneral = () => {
    if (discountType === "pesos") return discountQty
    if (discountType === "percent") {
      let totalForDiscount = parseFloat(subtotal) + parseFloat(discountProducts)
      return formatPriceNumber(
        (totalForDiscount * parseFloat(discountQty)) / 100
      )
    }
    return 0
  }
  const total = calcTotal(saleItems)

  const totalString = formatPriceNumber(total).toString()
  const totalSep = totalString.split(",")

  return (
    <div className="w-full h-auto bg-gs550 box-border">
      {/* SUBTOTAL */}
      <button
        className="flex items-center justify-between w-full h-[38px] text-blanco px-4 border-b-[1px] border-gs500"
        onClick={() => updateViewSubtotal(!viewSubtotal)}
      >
        <div className="flex items-center">
          <span className="text-ss font-bold mr-1">Subtotal</span>
          <Icon
            svg={`${viewSubtotal ? "arrowTop" : "arrowBottom"}`}
            classes="text-blanco h-4 w-4"
          />
        </div>
        <div className="flex text-ss font-bold">
          {formatPriceNumber(subtotal)}
        </div>
      </button>
      {viewSubtotal && discountProducts != 0 && (
        <div className="flex items-center justify-between w-full h-[38px] text-blanco px-4 border-b-[1px] border-gs500">
          <div className="flex items-center">
            <Icon svg="fire" classes="text-e500 h-[20.5px]" />
            <span className="text-bs ml-2">Descuentos de productos</span>
          </div>
          <div className="flex text-bs">
            {formatPriceNumber(discountProducts)}
          </div>
        </div>
      )}
      {viewSubtotal && promotions?.length > 0 && (
        <div className="flex items-center justify-between w-full h-[38px] text-blanco px-4 border-b-[1px] border-gs500">
          <div className="flex items-center">
            <Icon svg="fire" classes="text-e500 h-[20.5px]" />
            <span className="text-bs ml-2">Descuentos de productos</span>
          </div>
          <div className="flex text-bs">
            {formatPriceNumber(discountProducts)}
          </div>
        </div>
      )}

      {/* DESCUENTOS */}
      <button
        className="flex items-center justify-between w-full h-[38px] text-blanco px-4 border-b-[1px] border-gs500"
        onClick={() => updateViewDiscount(!viewDiscount)}
      >
        <div className="flex items-center">
          <span className="text-ss font-bold mr-1">Descuento general</span>
          <Icon
            svg={`${viewDiscount ? "arrowTop" : "arrowBottom"}`}
            classes="text-blanco h-4 w-4"
          />
        </div>
        <div className="flex text-ss font-bold">{discountGeneral()}</div>
      </button>
      {viewDiscount && (
        <div className="flex items-center justify-between w-full h-[38px] text-blanco pl-3 pr-4 border-b-[1px] border-gs500">
          <div className="h-full border-r-[1px] border-gs500 pr-3">
            <select className="h-full text-bs bg-transparent pr-3 outline-none">
              <option className="p-0">Descuento general</option>
            </select>
          </div>
          <div className="h-full border-r-[1px] border-gs500 px-3">
            <select
              className="h-full text-bs bg-transparent pr-3 outline-none"
              onChange={(e) => updateDiscountType(e.target.value)}
            >
              <option
                value="percent"
                selected={discountType === "percent" && "selected"}
              >
                % Porcentaje
              </option>
              <option
                value="pesos"
                selected={discountType === "pesos" && "selected"}
              >
                $ Pesos
              </option>
            </select>
          </div>
          <input
            type="text"
            onChange={(e) => updateDiscountQty(e.target.value)}
            value={discountQty}
            className="w-full h-full bg-transparent text-bs outline-none pl-3 text-right text-gs400"
          />
        </div>
      )}

      {/* TOTAL */}
      <div className="flex items-center justify-start w-full h-[90px] bg-gs600 px-4">
        <p className="text-sl text-gs300 text-bold mr-[19px]">TOTAL</p>
        <div className="flex align-top">
          <h1 className="text-h0 text-s400 font-bold">{totalSep[0]}</h1>
          <p className="text-sl text-s400 font-bold ml-1">{totalSep[1]}</p>
        </div>
      </div>
    </div>
  )
}
