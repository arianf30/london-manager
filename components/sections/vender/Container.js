import { useContext } from "react"
import VenderContext from "context/vender"
import BoardSaleProducts from "components/boards/sale_products/BoardSaleProducts"
import SaleControllers from "components/sections/vender/SaleControllers"
import SaleItemsContainer from "components/boards/sale_items_resume/SaleItemsContainer"
import SaleResume from "components/boards/sale_items_resume/SaleResume"
import { useRouter } from "next/router"
import PaymentSale from "components/modals/vender/PaymentSale"

export default function Container() {
  const router = useRouter()
  const { pop, section, modal } = router.query
  const {
    config,
    updateConfig,
    discount,
    updateDiscount,
    saleItems,
    promotions,
    addItem,
  } = useContext(VenderContext)
  return (
    <div className="flex h-[calc(100%_-_64px)] flex-wrap">
      {modal && modal === "cobrar" && (
        <>
          <PaymentSale onClose={() => router.push(`/pop/${pop}/${section}`)} />
        </>
      )}

      {/* PRODUCTS SECTION */}
      <div className="flex h-full w-[66.66%] bg-gs600">
        <BoardSaleProducts
          filter={config?.filter}
          updateFilter={(newFilter) => updateConfig("filter", newFilter)}
          layout={config?.layout}
          updateLayout={(newLayout) => updateConfig("layout", newLayout)}
          addItem={addItem}
        />
      </div>

      {/* SALE SECTION */}
      <div className="flex flex-wrap content-between w-[33.34%] h-full">
        <SaleControllers
          qty={config?.qty}
          updateQty={(newQty) => updateConfig("qty", newQty)}
          addItem={addItem}
        />
        <SaleItemsContainer
          saleItems={saleItems}
          viewDiscount={config?.viewDiscount}
          viewSubtotal={config?.viewSubtotal}
          ptomotions={promotions}
        />
        <SaleResume
          saleItems={saleItems}
          promotions={promotions}
          viewSubtotal={config?.viewSubtotal}
          updateViewSubtotal={(newViewSubtotal) =>
            updateConfig("viewSubtotal", newViewSubtotal)
          }
          viewDiscount={config?.viewDiscount}
          updateViewDiscount={(newViewDiscount) =>
            updateConfig("viewDiscount", newViewDiscount)
          }
          discountType={discount?.discountType}
          updateDiscountType={(newDiscountType) =>
            updateDiscount("discountType", newDiscountType)
          }
          discountQty={discount?.discountQty}
          updateDiscountQty={(newDiscountQty) =>
            updateDiscount("discountQty", newDiscountQty)
          }
        />
      </div>
    </div>
  )
}
