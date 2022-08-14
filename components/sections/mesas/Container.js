import { useContext, useEffect, useState } from "react"
import { useRouter } from "next/router"
import useRole from "hooks/useRole"
import MesasContext from "context/mesas"
import dropdownSection from "utils/dropdown-content/dropdownSection"
import PanelSaleProducts from "components/panels/sale_products/PanelSaleProducts"
import SaleControllers from "components/sections/mesas/SaleControllers"
import SaleItemsContainer from "components/panels/sale_items_resume/SaleItemsContainer"
import SaleResume from "components/panels/sale_items_resume/SaleResume"
import SectionNavbar from "components/navbars/SectionNavbar"
import PanelTables from "components/sections/mesas/PanelTables"
import OpenTable from "components/sections/mesas/OpenTable"
import { dbFirestore } from "db/firebase"
import { off, onValue, ref } from "firebase/database"
import CardEmptyTable from "components/svg/icons/CardEmptyTable"
import PaymentSale from "components/modals/PaymentSale/PaymentSale"
import PrinterConfig from "components/modals/PrinterConfig.js/PrinterConfig"
import { AnimatePresence } from "framer-motion"

export default function Container() {
  const [modal, setModal] = useState(null)
  const router = useRouter()
  const { permissions, permissionsSection, isLoading } = useRole()
  const { pop, section } = router.query
  const {
    config,
    client,
    invoice,
    updateInvoice,
    updateConfig,
    tables,
    updateTables,
    updateDiscount,
    saleItems,
    updateSaleItems,
    incrementItem,
    decrementItem,
    updateCommentItem,
    removeItem,
    promotions,
    itemsInPromo,
    addItem,
    payMethod,
    updatePayMethod,
    payMethodSecondary,
    updatePayMethodSecondary,
    addCommands,
    updateCommandDelivered,
  } = useContext(MesasContext)

  useEffect(() => {
    // ESCUCHAR MESAS
    onValue(ref(dbFirestore, `pop/${pop}/mesas`), (snapshot) => {
      const data = snapshot.val()
      if (data !== null) {
        updateTables(data)
      }
    })
    return () => off(ref(dbFirestore, `pop/${pop}/mesas`))
  }, [])

  useEffect(() => {
    // ESCUCHAR MESA ACTIVA
    onValue(
      ref(dbFirestore, `pop/${pop}/mesas/${config?.table}/saleItems`),
      (snapshot) => {
        const data = snapshot.val()
        if (data !== null) {
          let valuesTodo = Object.values(data)
          updateSaleItems([...valuesTodo])
        } else {
          updateSaleItems([])
        }
      }
    )
    return () =>
      off(ref(dbFirestore, `pop/${pop}/mesas/${config?.table}/saleItems`))
  }, [config?.table])

  if (permissionsSection?.read === 2) {
    return (
      <>
        {/* MODALS */}
        <AnimatePresence>
          {modal && modal === "impresoras" && (
            <PrinterConfig setModal={() => setModal()} />
          )}
          {modal && modal === "cobrar" && (
            <PaymentSale
              actionClose={() => setModal(null)}
              operation={{
                type: "Mesa",
                number: config?.table,
                client: client,
              }}
              saleItems={saleItems}
              promotions={promotions}
              discountType={tables[config?.table]?.discountType}
              discountQty={tables[config?.table]?.discountQty}
              viewKeyboard={config?.viewKeyboard}
              updateViewKeyboard={(value) =>
                updateConfig("viewKeyboard", value)
              }
              invoice={invoice}
              updateInvoice={updateInvoice}
              viewPrint={config?.print}
              updateViewPrint={(value) => updateConfig("print", value)}
              payMethod={payMethod}
              updatePayMethod={updatePayMethod}
              payMethodSecondary={payMethodSecondary}
              updatePayMethodSecondary={updatePayMethodSecondary}
            />
          )}
        </AnimatePresence>

        {/* NAVBAR */}
        <SectionNavbar
          title={section}
          popInfo={{
            name: permissions?.popJerarquia.companyName,
            image: permissions?.popJerarquia.companyImage,
          }}
          permissionsSection={permissionsSection}
          itemsDropdown={dropdownSection(section, setModal)}
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
                tables={tables}
                lounge={config?.lounge}
                updateLounge={(idLounge) => updateConfig("lounge", idLounge)}
                table={config?.table}
                updateTable={(table) => updateConfig("table", table)}
                editMode={config?.editTablesMode}
                updateEditMode={(val) => updateConfig("editTablesMode", val)}
              />
            )}
          </div>

          {/* SALE SECTION */}
          <div className="flex flex-wrap content-between w-[33.34%] h-full border-l-[1px] border-gs550">
            {config?.table > 0 ? (
              <>
                {tables[config?.table]?.status !== "open" ? (
                  <>
                    <OpenTable table={config?.table} />
                  </>
                ) : (
                  <>
                    <SaleControllers
                      table={config?.table}
                      lounge={config?.lounge}
                      tables={tables}
                      viewProducts={config?.viewProducts}
                      updateViewProducts={(value) =>
                        updateConfig("viewProducts", value)
                      }
                      qty={config?.qty}
                      updateQty={(newQty) => updateConfig("qty", newQty)}
                      addItem={addItem}
                      saleItems={saleItems}
                      promotions={promotions}
                      discountType={tables[config?.table]?.discountType}
                      discountQty={tables[config?.table]?.discountQty}
                      addCommands={addCommands}
                    />
                    <SaleItemsContainer
                      controllersHeight={339}
                      saleItems={saleItems}
                      incrementItem={incrementItem}
                      decrementItem={decrementItem}
                      updateCommentItem={updateCommentItem}
                      removeItem={removeItem}
                      viewDiscount={config?.viewDiscount}
                      viewSubtotal={config?.viewSubtotal}
                      promotions={promotions}
                      itemsInPromo={itemsInPromo}
                      updateCommandDelivered={updateCommandDelivered}
                    />
                    <SaleResume
                      maxHeight={173}
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
                      discountType={tables[config?.table]?.discountType}
                      updateDiscountType={(newDiscountType) => {
                        updateDiscount("discountQty", 0)
                        updateDiscount("discountType", newDiscountType)
                      }}
                      discountQty={tables[config?.table]?.discountQty}
                      updateDiscountQty={(newDiscountQty) => {
                        let newDis = tables[config?.table]?.discountQty
                        if (!isNaN(newDiscountQty)) newDis = newDiscountQty
                        if (
                          tables[config?.table]?.discountType === "percent" &&
                          newDis > 100
                        )
                          return
                        if (newDis.length > 11) return
                        updateDiscount("discountQty", newDis)
                      }}
                      cashBoard
                      openCash={() => setModal("cobrar")}
                    />
                  </>
                )}
              </>
            ) : (
              <div className="h-full">
                <div className="flex items-center justify-between h-[54px] w-full border-l-[6px] border-gs500 bg-gs700 pl-[10px] pr-4">
                  <h3 className="text-blanco font-bold">Indicar mesa</h3>
                </div>
                <div className="flex flex-col h-[calc(100%_-_54px)] w-full items-center justify-center px-14 py-8 overflow-auto">
                  <div className="inline-block mb-8 h-[199px] min-h-[199px]">
                    <CardEmptyTable />
                  </div>
                  <p className="text-bm text-gs400 text-center">
                    Seleccioná un producto que quieras vender, escanealo o
                    ingresalo en el buscador.
                  </p>
                </div>
              </div>
            )}
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
