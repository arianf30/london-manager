import ItemButtonGrid from "components/panels/sale_products/ItemButtonGrid"
import SkeletonProductList from "components/panels/sale_products/skeleton/SkeletonProductList"
import ItemButtonList from "./ItemButtonList"
import useQueryArticlesToSale from "hooks/querys/articles/useQueryArticlesToSale"

export default function ItemListContainer({ filter, layout, addItem }) {
  const { data: response, isLoading, isError } = useQueryArticlesToSale()
  let layoutStyle = ""
  if (layout === "grid") layoutStyle = "grid grid-cols-3 gap-4 p-6"
  if (layout === "list") layoutStyle = "grid grid-cols-1 gap-2 p-6"

  return (
    <div
      id="product-list-vender"
      className="w-[75%] h-full border-r-[1px] border-[rgba(56,56,56,0.5)] overflow-auto"
    >
      <div className={layoutStyle}>
        {isLoading && <SkeletonProductList />}
        {response &&
          response?.map((item, index) => {
            if (item.categoria === filter && item.tipo_producto !== "insumo") {
              return (
                <div className="" key={index}>
                  {layout === "grid" && (
                    <ItemButtonGrid item={item} action={() => addItem(item)} />
                  )}
                  {layout === "list" && (
                    <ItemButtonList item={item} action={() => addItem(item)} />
                  )}
                </div>
              )
            }
          })}
      </div>
    </div>
  )
}
