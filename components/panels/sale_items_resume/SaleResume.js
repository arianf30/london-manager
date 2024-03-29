import IconRectangleButton from "components/buttons/IconRectangleButton"
import Icon from "components/svg/Icon"
import { useEffect } from "react"
import formatPriceNumber from "utils/formatPriceNumber"
import calcSubtotal, {
  calcDiscountGeneral,
  calcDiscountProducts,
  calcDiscountPromotions,
} from "utils/prices/calcResumeSale"

export default function SaleResume({
  maxHeight,
  saleItems,
  promotions,
  viewSubtotal,
  updateViewSubtotal,
  viewDiscount,
  updateViewDiscount,
  discountName,
  updateDiscountName,
  discountType,
  updateDiscountType,
  discountQty,
  updateDiscountQty,
  cashBoard,
  openCash,
}) {
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
  const totalWithinDiscountGeneral =
    subtotal + discountProducts + discountPromotions
  const total =
    subtotal + discountProducts + discountPromotions + discountGeneral

  const totalString = formatPriceNumber(total).toString()
  const totalSep = totalString.split(",")

  useEffect(() => {
    if (parseFloat(discountQty) > totalWithinDiscountGeneral) {
      updateDiscountQty(totalWithinDiscountGeneral)
    }
  }, [discountQty, total])

  return (
    <div
      className={`w-full h-auto bg-gs550 box-border max-h-[calc(100%_-_${maxHeight}px)] overflow-auto`}
    >
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
        <>
          {promotions.map((promo, index) => {
            return (
              <div
                key={`promo-${promo.id}-${index}`}
                className="flex items-center justify-between w-full h-[38px] text-blanco px-4 border-b-[1px] border-gs500"
              >
                <div className="flex items-center">
                  <Icon svg="fire" classes="text-e500 h-[20.5px]" />
                  <span className="text-bs ml-2">{promo.name}</span>
                </div>
                <div className="flex text-bs">
                  {formatPriceNumber(promo.discount)}
                </div>
              </div>
            )
          })}
        </>
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
        <div className="flex text-ss font-bold">
          {formatPriceNumber(discountGeneral)}
        </div>
      </button>
      {viewDiscount && (
        <div className="flex items-center justify-between w-full h-[38px] text-blanco pl-3 pr-4 border-b-[1px] border-gs500">
          <div className="h-full border-r-[1px] border-gs500 pr-3">
            <select
              className="h-full text-bs bg-transparent pr-3 outline-none"
              onChange={(e) => updateDiscountName(e.target.value)}
              value={discountName}
            >
              <option className="p-0">Descuento general</option>
            </select>
          </div>
          <div className="h-full border-r-[1px] border-gs500 px-3">
            <select
              className="h-full text-bs bg-transparent pr-3 outline-none"
              onChange={(e) => updateDiscountType(e.target.value)}
              value={discountType}
            >
              <option value="percent">% Porcentaje</option>
              <option value="pesos">$ Pesos</option>
            </select>
          </div>
          <input
            type="text"
            onChange={(e) => updateDiscountQty(e.target.value)}
            value={discountQty ?? 0}
            placeholder="0.00"
            className="w-full h-full bg-transparent text-bs outline-none pl-3 text-right text-gs400"
          />
        </div>
      )}

      {/* TOTAL */}
      <div className="flex items-center justify-between w-full h-[90px] bg-gs600 px-4">
        <div className="flex items-center justify-start">
          <p className="text-sl text-gs300 font-bold mr-[19px]">TOTAL</p>
          <div className="flex align-top">
            <h1 className="text-h0 text-s400 font-bold">
              {total > 0 ? totalSep[0] : "$ 000"}
            </h1>
            <p className="text-sl text-s400 font-bold ml-1">{totalSep[1]}</p>
          </div>
        </div>
        {cashBoard && (
          <IconRectangleButton
            size="xl"
            icon="caja"
            classes="bg-s400"
            classesBox="p-[10%]"
            action={() => openCash()}
          />
        )}
      </div>
    </div>
  )
}
