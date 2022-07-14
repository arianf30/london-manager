import CategoryListContainer from "./CategoryListContainer"
import ItemListContainer from "./ItemListContainer"

export default function BoardSaleProducts({ filter, updateFilter, addItem }) {
  return (
    <>
      <CategoryListContainer filter={filter} updateFilter={updateFilter} />
      <ItemListContainer filter={filter} addItem={addItem} />
    </>
  )
}
