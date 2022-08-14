import { useEffect } from "react"
import { calcDiscountProducts } from "utils/prices/calcResumeSale"
import SaleItem from "components/panels/sale_items_resume/SaleItem"
import CardProduct from "components/svg/icons/CardProduct"

function scrollToBottom(id) {
  let div = document.getElementById(id)
  div.scrollTop = div.scrollHeight - div.clientHeight
}

export default function SaleItemsContainer({
  controllersHeight,
  saleItems,
  incrementItem,
  decrementItem,
  updateCommentItem,
  removeItem,
  viewDiscount,
  viewSubtotal,
  promotions,
  itemsInPromo,
  updateCommandDelivered,
}) {
  const discountCant = calcDiscountProducts(saleItems)
  let restSize = +controllersHeight
  if (viewDiscount) restSize += 38
  if (viewSubtotal) {
    if (discountCant != 0) restSize += 38
    if (promotions?.length > 0) restSize += 38 * parseInt(promotions.length)
  }

  useEffect(() => {
    scrollToBottom("scroll")
  }, [saleItems?.length, viewDiscount, viewSubtotal, promotions])

  return (
    <div
      id="scroll"
      className="w-full bg-gs100 overflow-auto"
      style={{ height: `calc(100% - ${restSize}px)` }}
    >
      {saleItems?.length > 0 &&
        Array.isArray(saleItems) &&
        saleItems.map((item, index) => {
          return (
            <div key={`saleItem-${item.id}`}>
              <SaleItem
                item={item}
                incrementItem={incrementItem}
                decrementItem={decrementItem}
                updateCommentItem={updateCommentItem}
                removeItem={removeItem}
                qtyInPromo={
                  itemsInPromo instanceof Map ? itemsInPromo.get(item.id) : null
                }
                updateCommandDelivered={updateCommandDelivered}
              />
            </div>
          )
        })}
      {saleItems?.length === 0 && (
        <div className="flex flex-col min-h-full w-full items-center justify-center px-14 py-8 overflow-auto">
          <div className="inline-block mb-8 h-[242px] min-h-[242px]">
            <CardProduct />
          </div>
          <p className="text-bm text-gs400 text-center">
            Seleccioná un producto que quieras vender, escanealo o ingresalo en
            el buscador.
          </p>
        </div>
      )}
    </div>
  )
}
