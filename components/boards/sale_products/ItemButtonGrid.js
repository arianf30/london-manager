import salePriceCalc from "utils/prices/salePriceCalc"
import articleDiscountCalc from "utils/prices/articleDiscountCalc"
import formatPriceNumber from "utils/formatPriceNumber"
import Icon from "components/svg/Icon"

export default function ItemButtonGrid({ item, action }) {
  const price = salePriceCalc(
    item.tipo_precio,
    item.precio_venta,
    item.precio_compra
  )
  const discount = articleDiscountCalc(
    price,
    item.descuento_cant,
    item.descuento_tipo
  )

  return (
    <button
      onClick={action}
      className="relative h-[244px] w-full text-left bg-gs550 rounded-lg hover:shadow-[0px_12px_32px_rgba(10,10,20,0.8)] transition ease-linear duration-150"
    >
      <div className="relative h-[136px] w-full rounded-t-lg bg-blanco">
        {item.imagen_url ? (
          <div
            className={`w-full h-full rounded-t-lg`}
            style={{
              backgroundImage: `url('https://londonmanager.com/2021/${item.imagen_url}')`,
              backgroundSize: item.imagen_size,
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          />
        ) : (
          <div className="flex items-center justify-center w-full h-full rounded-t-lg bg-gs500">
            <Icon svg="image" classes="h-10 text-gs550" />
          </div>
        )}
        {item.descuento_cant > 0 && (
          <div className="absolute top-[7px] left-3 text-ls font-bold tracking-widest bg-e500 text-blanco p-1 rounded-[4px]">
            {item.descuento_tipo === "porcentaje" ? (
              <span>
                -
                {new Intl.NumberFormat("es-AR", {
                  notation: "standard",
                }).format(item.descuento_cant)}
                %
              </span>
            ) : (
              <span>
                -
                {new Intl.NumberFormat("es-AR", {
                  style: "currency",
                  currency: "ARS",
                }).format(item.descuento_cant)}
              </span>
            )}
          </div>
        )}
      </div>
      <div className="relative flex flex-col justify-between h-[108px] p-3 box-border">
        <div className="text-blanco">
          <p className="text-bs font-bold truncate">{item.descripcion_1}</p>
          <p className="text-bs truncate">{item.descripcion_2}</p>
        </div>
        <div className="w-full text-blanco">
          {discount ? (
            <>
              <span className="text-ss font-bold">
                {formatPriceNumber(price - discount)}
              </span>
              <label className="text-bxs text-e400 ml-2 line-through">
                {formatPriceNumber(price)}
              </label>
            </>
          ) : (
            <p className="text-ss font-bold">{formatPriceNumber(price)}</p>
          )}
        </div>
        <div className="absolute right-3 bottom-3 h-6 w-6 rounded-full bg-gs600" />
      </div>
    </button>
  )
}
