import { useContext, useState } from "react"
import VenderContext from "context/vender"
import salePriceCalc from "utils/prices/salePriceCalc"
import articleDiscountCalc from "utils/prices/articleDiscountCalc"
import priceToShow from "utils/prices/priceToShow"
import Icon from "components/svg/Icon"
import formatPriceNumber from "utils/formatPriceNumber"

export default function SaleItem({ item }) {
  const [state, setState] = useState({
    menu: false,
    comment: false,
    discount: false,
  })
  const { incrementItem, decrementItem, updateCommentItem, removeItem } =
    useContext(VenderContext)
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
      <div className="flex justify-between w-full h-[60px] bg-blanco border-b-[1px] border-gs200 text-negro">
        {/* CANTIDAD */}
        <div className="flex items-center justify-center w-8 min-w-8 text-bm font-bold border-r-[1px] border-gs200 overflow-hidden truncate">
          {item.qty}
        </div>

        {/* DESCRIPCION */}
        <div className="flex items-center justify-between px-4 border-r-[1px] border-gs200 w-[calc(66%_-_32px)] overflow-hidden">
          <div className="truncate">
            <p className="text-bs font-bold truncate">{item.descripcion_1}</p>
            <p className="text-bs truncate -mt-1">{item.descripcion_2}</p>
          </div>

          {/* INFO RELACIONADA AL ITEM */}
          <div className="flex items-center justify-end w-10 h-[21px]">
            {item.promo && (
              <div>
                <Icon svg="fire" classes="h-[21px]" />
                <div>1</div>
              </div>
            )}
            {item.comment && (
              <div>
                <Icon svg="message" classes="h-[21px] text-p500" />
              </div>
            )}
          </div>
        </div>

        {/* PRECIO */}
        <div className="flex items-center justify-end px-2 w-[calc(34%_-_32px)] overflow-hidden">
          <div>
            <p className="text-bm font-bold truncate">{priceQty}</p>
            {item.descuento_cant > 0 && (
              <p className="text-s500 text-cap font-medium text-right">
                {item.descuento_tipo === "porcentaje"
                  ? `-${new Intl.NumberFormat({ format: "standard" }).format(
                      item.descuento_cant
                    )}%`
                  : `-${formatPriceNumber(item.descuento_cant)}`}
              </p>
            )}
          </div>
        </div>

        {/* BTN MENU */}
        <div className="group flex items-center justify-center w-8 min-w-8 border-l-[1px] border-gs200">
          <button
            onClick={() =>
              setState({
                ...state,
                menu: !state.menu,
              })
            }
            className={`flex items-center justify-center h-full w-full transition ease-in hover:text-blanco hover:bg-p500 ${
              state.menu && "text-blanco bg-p500"
            }`}
          >
            <Icon svg="options" classes="h-6 w-6" />
          </button>
        </div>
      </div>

      {/* SUBMENU */}
      {state.menu && (
        <div className="flex justify-between w-full h-8 bg-gs550">
          {/* SUMAR */}
          <button
            onClick={() => incrementItem(item.id)}
            className="flex items-center justify-center w-8 min-w-8 text-gs200 hover:bg-gs700 transition ease-in-out"
          >
            <Icon svg="plus" classes="w-4 h-4" />
          </button>

          {/* RESTAR */}
          <button
            onClick={() => decrementItem(item.id)}
            className="flex items-center justify-center w-8 min-w-8 text-gs200 border-l-[1px] border-gs400 hover:bg-gs700 transition ease-in-out"
          >
            <Icon svg="minus" classes="w-4 h-4" />
          </button>

          {/* COMENTARIO */}
          <div
            className={`flex items-center justify-start w-[calc(100%_-_128px)] px-3 border-l-[1px] ${
              !item.printed && "border-gs400"
            }`}
          >
            {item.tipo_producto === "receta" && (
              <>
                <Icon
                  svg="message"
                  classes={`w-4 min-w-4 h-4 ${
                    item.comment ? "text-a200" : "text-gs400"
                  } ${item.printed && "text-s400"}`}
                />
                <input
                  type="text"
                  value={item.comment}
                  placeholder="Agregar comentario"
                  className={`w-full bg-transparent text-bxs placeholder:text-gs400 caret-a200 ${
                    item.comment && "text-a200"
                  } ${
                    item.printed && "text-s400"
                  } truncate pl-[6px] outline-none`}
                  onChange={(e) => updateCommentItem(item.id, e.target.value)}
                />
              </>
            )}
            {item.comment && (
              <Icon svg="edit" classes="w-4 min-w-4 h-4 text-gs400" />
            )}
          </div>

          {/* DESCUENTO */}
          <button
            onClick={() => alert("Estamos trabajando en esta funcionalidad.")}
            className="flex items-center justify-center w-8 min-w-8 text-gs200 border-l-[1px] border-gs400 hover:bg-gs700 transition ease-in-out"
          >
            <Icon svg="percent" classes="w-4 h-4" />
          </button>

          {/* BORRAR */}
          <button
            onClick={() => removeItem(item.id)}
            className="flex items-center justify-center w-8 min-w-8 text-gs200 border-l-[1px] border-gs400 hover:bg-gs700 transition ease-in-out"
          >
            <Icon svg="trash" classes="w-4 h-4" />
          </button>
        </div>
      )}
    </>
  )
}
