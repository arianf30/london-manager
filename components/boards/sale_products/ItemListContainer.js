import { useRouter } from "next/router"
import { useEffect } from "react"
import useService from "hooks/useService"
import { getArticles } from "services/ptv/stock"
import ItemButton from "components/boards/sale_products/ItemButton"
import SkeletonProductList from "./skeleton/SkeletonProductList"

export default function ItemListContainer({ filter, addItem }) {
  const { ptv } = useRouter().query
  const { sendService, isLoading, response } = useService()

  useEffect(() => {
    sendService(getArticles, {
      ptv: ptv,
      category: filter,
      limit: 500,
      offset: 0,
    })
  }, [ptv])

  return (
    <div
      id="product-list-vender"
      className="w-[75%] h-full border-r-[1px] border-negro3 overflow-auto"
    >
      <div className="grid grid-cols-3 gap-4 p-4">
        {isLoading && <SkeletonProductList />}
        {response &&
          response?.data.map((item, index) => {
            if (item.categoria === filter) {
              return (
                <div className="" key={index}>
                  <ItemButton item={item} action={() => addItem(item)} />
                </div>
              )
            }
          })}
      </div>
    </div>
  )
}
