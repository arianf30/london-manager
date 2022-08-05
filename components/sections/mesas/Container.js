import BoardSaleProducts from "components/boards/sale_products/BoardSaleProducts"

export default function Container() {
  return (
    <>
      {/* PRODUCTS SECTION */}
      <div className="flex h-full w-[66.66%] bg-gs600">
        <BoardSaleProducts
          filter={filter}
          updateFilter={updateFilter}
          theme={theme}
          updateTheme={updateTheme}
          addItem={addItem}
        />
      </div>
    </>
  )
}
