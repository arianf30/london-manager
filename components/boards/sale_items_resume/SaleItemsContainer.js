import { useEffect } from "react"
import { calcDiscounts } from "utils/prices/calcResumeSale"
import SaleItem from "components/boards/sale_items_resume/SaleItem"

function scrollToBottom(id) {
  let div = document.getElementById(id)
  div.scrollTop = div.scrollHeight - div.clientHeight
}

export default function SaleItemsContainer({
  saleItems,
  viewDiscount,
  viewSubtotal,
  promotions,
}) {
  const discountCant = calcDiscounts(saleItems)
  let restSize = 262
  if (viewDiscount) restSize += 38
  if (viewSubtotal) {
    if (discountCant != 0) restSize += 38
    if (promotions?.length > 0) restSize += 38 * parseInt(promotions.length)
  }

  useEffect(() => {
    scrollToBottom("scroll")
  }, [saleItems.length, viewDiscount, viewSubtotal, promotions])

  return (
    <div
      id="scroll"
      className="w-full bg-gs100 overflow-auto"
      style={{ height: `calc(100% - ${restSize}px)` }}
    >
      {saleItems &&
        Array.isArray(saleItems) &&
        saleItems.map((item, index) => {
          return (
            <div key={`saleItem-${item.id}`}>
              <SaleItem item={item} />
            </div>
          )
        })}
    </div>
  )
}
