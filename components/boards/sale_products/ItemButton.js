import Image from "next/image"
import salePriceCalc from "utils/prices/salePriceCalc"
import articleDiscountCalc from "utils/prices/articleDiscountCalc"
import setArticleImage from "utils/images/setArticleImage"

export default function ItemButton({ item, action }) {
  const circleColor = item.color ? "bg-celeste" : "bg-violeta"
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
  const image = setArticleImage(item.imagen_url, item.imagen_size)

  return (
    <button
      onClick={action}
      className="relative h-60 w-full text-left bg-negro3 rounded-2xl hover:shadow-[0_0_30px_rgb(0_0_0)] hover:top-[-2px] transition ease-linear duration-150"
    >
      <div className="relative h-36 w-full rounded-2xl bg-blanco1">
        <div
          className={`w-full h-full rounded-2xl`}
          style={{
            backgroundImage: image.image,
            backgroundSize: image.size,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />
        {item.descuento_cant > 0 && (
          <div className="absolute left-2 bottom-2 bg-verde text-blanco1 py-1 px-2 rounded-xl">
            {item.descuento_tipo === "porcentaje" ? (
              <span>-{item.descuento_cant}%</span>
            ) : (
              <span>-${item.descuento_cant}</span>
            )}
          </div>
        )}
      </div>
      <div className="relative flex flex-wrap content-between h-24 pt-2 pr-4 pb-2 pl-6 box-border">
        <div className="flex w-full text-blanco1 capitalize suspensivos-2">
          {item.marca && <strong>{item.marca} · </strong>}
          {item.descripcion_1 && item.descripcion_1}
          {item.descripcion_2 && ` ${item.descripcion_2}`}
        </div>
        <div className="w-full text-blanco1">
          {discount ? (
            <>
              <strong>${price - discount}</strong>
              <label className="ml-2 line-through">${price}</label>
            </>
          ) : (
            <strong>${price}</strong>
          )}
        </div>
        <div
          className={`absolute right-2 bottom-2 h-5 w-5 rounded-full ${circleColor}`}
        />
      </div>
    </button>
  )
}
