import { useContext, useState } from "react"
import VenderContext from "context/VenderContext"
import salePriceCalc from "utils/prices/salePriceCalc"
import articleDiscountCalc from "utils/prices/articleDiscountCalc"
import priceToShow from "utils/prices/priceToShow"

export default function SaleItem({ item }) {
  const [state, setState] = useState({
    menu: false,
    comment: false,
    discount: false,
  })
  const { incrementItem, decrementItem, removeItem } = useContext(VenderContext)
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
  const priceQty = priceToShow(price, discount, item.qty)

  return (
    <>
      <div className="w-full h-14 grid grid-cols-12 gap-[1px] mt-[1px] text-negro1">
        {/* CANTIDAD */}
        <div className="flex items-center justify-center bg-blanco3 col-span-1 text-xl">
          <strong>{item.qty}</strong>
        </div>

        {/* DESCRIPCION */}
        <div className="flex items-center justify-start bg-blanco3 col-span-7 px-3">
          {item.marca && `${item.marca} · `}
          {item.descripcion_1 && item.descripcion_1}
          {item.descripcion_2 && ` ${item.descripcion_2}`}
        </div>

        {/* PRECIO */}
        <div className="relative flex flex-col items-end justify-center bg-blanco3 col-span-3 px-3 font-bold">
          {item.descuento_cant > 0 && (
            <>
              {item.descuento_tipo === "porcentaje" ? (
                <p className="text-verde text-xs">-{item.descuento_cant}%</p>
              ) : (
                <p className="text-verde text-xs">-${item.descuento_cant}</p>
              )}
            </>
          )}
          <p>{priceQty}</p>
        </div>

        {/* BTN MENU */}
        <div className="flex items-center justify-center col-span-1">
          <button
            onClick={() =>
              setState({
                ...state,
                menu: !state.menu,
              })
            }
            className={`h-full w-full transition ease-in hover:text-blanco1 hover:bg-amarillo ${
              state.menu ? "text-blanco1 bg-amarillo" : "text-negro1 bg-blanco3"
            }`}
          >
            <p className="font-icons i-opciones text-2xl" />
          </button>
        </div>
      </div>

      {/* SUBMENU */}
      {state.menu && (
        <div className="w-full h-10 grid grid-cols-12 gap-[1px] mt-[1px] bg-blanco1">
          {/* SUMAR */}
          <div className="flex items-center justify-center col-span-1 bg-gris3">
            <button
              onClick={() => incrementItem(item)}
              className="h-full w-full text-blanco1 transition ease-in hover:bg-violeta"
            >
              <p className="font-icons i-flecha-izq text-md rotate-90" />
            </button>
          </div>

          {/* RESTAR */}
          <div className="flex items-center justify-center col-span-1 bg-gris3">
            <button
              onClick={() => decrementItem(item)}
              className="h-full w-full text-blanco1 transition ease-in hover:bg-violeta"
            >
              <p className="font-icons i-flecha-derecha text-md rotate-90" />
            </button>
          </div>

          {/* COMENTARIO */}
          <div className="flex items-center justify-center col-span-6 bg-gris3">
            {item.tipo_producto === "receta" ? (
              <button
                onClick={() => console.log("Comentario")}
                className="h-full w-full text-xl font-bold text-blanco1 transition ease-in hover:bg-violeta"
              >
                Comentario
              </button>
            ) : (
              <button
                className="h-full w-full text-md font-bold text-gris2 cursor-not-allowed"
                disabled
              >
                Comentario
              </button>
            )}
          </div>

          {/* DESCUENTO */}
          <div className="flex items-center justify-center col-span-2 bg-negro3">
            <button
              onClick={() => console.log("porcentaje")}
              className="h-full w-full text-blanco1 transition ease-in hover:bg-verde"
            >
              <p className="font-icons i-porcentaje text-md" />
            </button>
          </div>

          {/* BORRAR */}
          <div className="flex items-center justify-center col-span-2 bg-negro3">
            <button
              onClick={() => removeItem(item.id)}
              className="h-full w-full text-blanco1 transition ease-in hover:bg-rojo"
            >
              <p className="font-icons i-eliminar text-md" />
            </button>
          </div>
        </div>
      )}
    </>
  )
}
