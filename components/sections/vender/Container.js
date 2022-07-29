import { useContext } from "react"
import VenderContext from "context/vender"
import BoardSaleProducts from "components/boards/sale_products/BoardSaleProducts"
import SaleControllers from "components/sections/vender/SaleControllers"
import SaleItemsContainer from "components/sections/vender/SaleItemsContainer"
import SaleResume from "components/sections/vender/SaleResume"
import { useRouter } from "next/router"
import PaymentSale from "components/modals/vender/PaymentSale"

export default function Container() {
  const router = useRouter()
  const { pop, section, modal } = router.query
  const { filter, updateFilter, qty, updateQty, saleItems, addItem } =
    useContext(VenderContext)
  return (
    <div className="flex h-[calc(100%_-_64px)] flex-wrap">
      {modal && modal === "cobrar" && (
        <>
          <PaymentSale onClose={() => router.push(`/pop/${pop}/${section}`)} />
        </>
      )}

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
        <SaleItemsContainer saleItems={saleItems} />
        <SaleResume />
      </div>
    </div>
  )
}
