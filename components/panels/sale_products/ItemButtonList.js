import salePriceCalc from "utils/prices/salePriceCalc"
import articleDiscountCalc from "utils/prices/articleDiscountCalc"
import formatPriceNumber from "utils/formatPriceNumber"
import Icon from "components/svg/Icon"

export default function ItemButtonList({ item, action }) {
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
      className="flex items-center h-[88px] w-full text-left bg-gs550 rounded-lg hover:shadow-[0px_12px_32px_rgba(10,10,20,0.8)] transition ease-linear duration-150"
    >
      <div className="relative h-full w-[120px] rounded-l-lg bg-blanco">
        {item.imagen_url ? (
          <div
            className={`w-full h-full rounded-l-lg`}
            style={{
              backgroundImage: `url('https://londonmanager.com/2021/${item.imagen_url}')`,
              backgroundSize: item.imagen_size,
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          />
        ) : (
          <div className="flex items-center justify-center w-full h-full rounded-l-lg bg-gs500">
            <Icon svg="image" classes="h-10 text-gs550" />
          </div>
        )}
        {item.descuento_cant > 0 && (
          <div className="absolute top-2 left-2 text-ls font-bold tracking-widest bg-e500 text-blanco p-1 rounded-[4px]">
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

      <div className="flex items-center justify-between w-[calc(100%_-_120px)] px-3">
        <div className="text-blanco">
          <p className="text-bs font-bold truncate">{item.descripcion_1}</p>
          <p className="text-bs truncate">{item.descripcion_2}</p>
        </div>

        <div className="flex items-center text-right text-blanco">
          <div>
            {discount ? (
              <div>
                <p className="text-ss font-bold">
                  {formatPriceNumber(price - discount)}
                </p>
                <label className="text-bxs text-e400 ml-2 line-through">
                  {formatPriceNumber(price)}
                </label>
              </div>
            ) : (
              <p className="text-ss font-bold">{formatPriceNumber(price)}</p>
            )}
          </div>
          <div className="h-6 w-6 ml-6 rounded-full bg-gs600" />
        </div>
      </div>
    </button>
  )
}
