import { useContext } from "react"
import { useRouter } from "next/router"
import useRole from "hooks/useRole"
import VenderContext from "context/vender"
import dropdownSection from "utils/dropdown-content/dropdownSection"
import PanelSaleProducts from "components/panels/sale_products/PanelSaleProducts"
import SaleControllers from "components/sections/vender/SaleControllers"
import SaleItemsContainer from "components/panels/sale_items_resume/SaleItemsContainer"
import SaleResume from "components/panels/sale_items_resume/SaleResume"
import PaymentSale from "components/modals/PaymentSale/PaymentSale"
import SectionNavbar from "components/navbars/SectionNavbar"

export default function Container() {
  const router = useRouter()
  const { permissions, permissionsSection, isLoading } = useRole()
  const { pop, section, modal } = router.query
  const {
    config,
    updateConfig,
    discount,
    updateDiscount,
    saleItems,
    incrementItem,
    decrementItem,
    updateCommentItem,
    removeItem,
    promotions,
    itemsInPromo,
    addItem,
  } = useContext(VenderContext)

  if (permissionsSection?.read === 2) {
    return (
      <>
        {/* MODALS */}
        {modal && modal === "cobrar" && (
          <>
            <PaymentSale
              onClose={() => router.push(`/pop/${pop}/${section}`)}
            />
          </>
        )}

        {/* NAVBAR */}
        <SectionNavbar
          title={"vender"}
          popInfo={{
            name: permissions?.popJerarquia.companyName,
            image: permissions?.popJerarquia.companyImage,
          }}
          permissionsSection={permissionsSection}
          itemsDropdown={dropdownSection(section)}
        />

        {/* CONTENT */}
        <div className="flex h-[calc(100%_-_64px)] flex-wrap">
          {/* PRODUCTS SECTION */}
          <div className="flex h-full w-[66.66%] bg-gs600">
            <PanelSaleProducts
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
              controllersHeight={262}
              saleItems={saleItems}
              incrementItem={incrementItem}
              decrementItem={decrementItem}
              updateCommentItem={updateCommentItem}
              removeItem={removeItem}
              viewDiscount={config?.viewDiscount}
              viewSubtotal={config?.viewSubtotal}
              promotions={promotions}
              itemsInPromo={itemsInPromo}
            />
            <SaleResume
              maxHeight={96}
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
              discountName="Descuento general"
              updateDiscountName={() => console.log()}
              discountType={discount?.discountType}
              updateDiscountType={(newDiscountType) => {
                updateDiscount("discountQty", 0)
                updateDiscount("discountType", newDiscountType)
              }}
              discountQty={discount?.discountQty}
              updateDiscountQty={(newDiscountQty) => {
                let newDis = discount?.discountQty
                if (!isNaN(newDiscountQty)) newDis = newDiscountQty
                if (discount?.discountType === "percent" && newDis > 100) return
                if (newDis.length > 11) return
                updateDiscount("discountQty", newDis)
              }}
            />
          </div>
        </div>
      </>
    )
  }

  if (isLoading) {
    return <p>Cargando permisos...</p>
  }

  return <p>No tenés permisos para acceder.</p>
}
