import { useContext } from "react"
import VenderContext from "context/VenderContext"
import BoardSaleProducts from "components/boards/sale_products/BoardSaleProducts"
import SaleControllers from "components/sections/vender/SaleControllers"
import SaleItemsContainer from "components/sections/vender/SaleItemsContainer"
import SaleResume from "components/sections/vender/SaleResume"

export default function Content() {
  const { filter, updateFilter, qty, updateQty, sellItems, addItem } =
    useContext(VenderContext)
  return (
    <>
      <div className="flex h-[calc(100%_-_64px)] flex-wrap">
        {/* PRODUCTS SECTION */}
        <div className="flex h-full w-[66.66%] bg-negro2">
          <BoardSaleProducts
            filter={filter}
            updateFilter={updateFilter}
            addItem={addItem}
          />
        </div>

        {/* SALE SECTION */}
        <div className="flex flex-wrap content-between w-[33.34%] h-full">
          <SaleControllers qty={qty} updateQty={updateQty} addItem={addItem} />
          <SaleItemsContainer sellItems={sellItems} />
          <SaleResume />
        </div>
      </div>
    </>
  )
}
