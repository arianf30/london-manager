import { useContext } from "react"
import { useRouter } from "next/router"
import useRole from "hooks/useRole"
import MesasContext from "context/mesas"
import dropdownSection from "utils/dropdown-content/dropdownSection"
import PanelSaleProducts from "components/panels/sale_products/PanelSaleProducts"
import SaleControllers from "components/sections/mesas/SaleControllers"
import SaleItemsContainer from "components/panels/sale_items_resume/SaleItemsContainer"
import SaleResume from "components/panels/sale_items_resume/SaleResume"
import PaymentSale from "components/modals/PaymentSale"
import SectionNavbar from "components/navbars/SectionNavbar"
import PanelTables from "./PanelTables"

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
    promotions,
    addItem,
  } = useContext(MesasContext)

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
          title={section}
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
            {config.viewProducts ? (
              <PanelSaleProducts
                filter={config?.filter}
                updateFilter={(newFilter) => updateConfig("filter", newFilter)}
                layout={config?.layout}
                updateLayout={(newLayout) => updateConfig("layout", newLayout)}
                addItem={addItem}
              />
            ) : (
              <PanelTables
                lounge={config?.lounge}
                updateLounge={(idLounge) => updateConfig("lounge", idLounge)}
                table={config?.table}
                updateTable={(table) => updateConfig("table", table)}
              />
            )}
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
      </>
    )
  }

  if (isLoading) {
    return <p>Cargando permisos...</p>
  }

  return <p>No tenés permisos para acceder.</p>
}
