import formatPriceNumber from "utils/formatPriceNumber"
import priceToShow from "utils/prices/priceToShow"
import salePriceCalc from "utils/prices/salePriceCalc"

export default function ItemListPaymentModal({ item }) {
  const price = salePriceCalc(
    item.tipo_precio,
    item.precio_venta,
    item.precio_compra
  )
  const priceItem = priceToShow(price, 0, item.qty)
  return (
    <>
      <div className="flex flex-none items-center justify-center h-[34px] w-8 border-r-[1px] border-b-[1px] text-bxs border-gs200">
        {item?.qty}
      </div>
      <div className="flex flex-1 items-center px-4 h-[34px] truncate border-r-[1px] border-b-[1px] text-bxs border-gs200">
        {item?.descripcion_1} {item?.descripcion_2}
      </div>
      <div className="flex flex-none items-center justify-end px-2 h-[34px] w-[99px] border-b-[1px] text-bxs border-gs200">
        <div className="text-right">
          <p className="text-bxs leading-[14px] truncate">{priceItem}</p>
          {item.descuento_cant > 0 && (
            <p className="text-s600 text-bxs leading-[14px]">
              {item.descuento_tipo === "porcentaje"
                ? `-${new Intl.NumberFormat({
                    format: "standard",
                  }).format(item.descuento_cant)}%`
                : `-${formatPriceNumber(item.descuento_cant)}`}
            </p>
          )}
        </div>
      </div>
    </>
  )
}
