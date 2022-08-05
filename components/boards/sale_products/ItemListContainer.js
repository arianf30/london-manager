import { useRouter } from "next/router"
import { getArticles } from "services/pop/stock"
import ItemButtonGrid from "components/boards/sale_products/ItemButtonGrid"
import SkeletonProductList from "components/boards/sale_products/skeleton/SkeletonProductList"
import { useQuery } from "@tanstack/react-query"
import ItemButtonList from "./ItemButtonList"

export default function ItemListContainer({ filter, layout, addItem }) {
  const { pop } = useRouter().query
  const { data: response, isLoading } = useQuery(["articlesSale", pop], () =>
    getArticles({
      pop: pop,
      category: filter,
      limit: 500,
      offset: 0,
    })
  )
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
          response?.data.map((item, index) => {
            if (item.categoria === filter) {
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
