import CategoryListContainer from "./CategoryListContainer"
import ItemListContainer from "./ItemListContainer"

export default function PanelSaleProducts({
  filter,
  updateFilter,
  layout,
  updateLayout,
  addItem,
}) {
  return (
    <>
      <CategoryListContainer
        filter={filter}
        updateFilter={updateFilter}
        layout={layout}
        updateLayout={updateLayout}
      />
      <ItemListContainer filter={filter} layout={layout} addItem={addItem} />
    </>
  )
}
