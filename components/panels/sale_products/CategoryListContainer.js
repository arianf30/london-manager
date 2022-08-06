import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { useQuery } from "@tanstack/react-query"
import { getCategories } from "services/pop/categorias"
import ListCategoryButton from "components/buttons/ListCategoryButton"
import BasicLoader from "components/svg/loaders/BasicLoader"
import Icon from "components/svg/Icon"
import PromotionsButton from "components/buttons/PromotionsButton"

export default function CategoryListContainer({
  filter,
  updateFilter,
  layout,
  updateLayout,
}) {
  const { pop } = useRouter().query
  const [categorys, setCategorys] = useState([])
  const { data: response, isLoading } = useQuery(["categories", pop], () =>
    getCategories(pop)
  )

  useEffect(() => {
    if (response) {
      const newArrayCategorys = new Array()
      response?.data?.forEach((item) => {
        const found = newArrayCategorys.find(
          (cat) => cat.nombre === item.nombre
        )
        if (found === undefined) {
          newArrayCategorys.push(item)
        }
      })
      setCategorys(newArrayCategorys)
      if (!filter) updateFilter(newArrayCategorys[0].nombre)
    }
  }, [response])

  return (
    <div className="relative w-[25%] h-full border-r-[1px] border-[rgba(56,56,56,0.5)] overflow-auto">
      <div className="flex items-center justify-between h-14 px-3 border-b-[1px] border-[rgba(56,56,56,0.5)]">
        <p className="text-sl font-bold text-gs500">VISTA</p>
        <div className="">
          <button
            className="text-gs500 disabled:text-p500 mr-3"
            onClick={() => updateLayout("grid")}
            disabled={layout === "grid" ? true : false}
          >
            <Icon svg="grid" classes="h-6" />
          </button>
          <button
            className="text-gs500 disabled:text-p500"
            onClick={() => updateLayout("list")}
            disabled={layout === "list" ? true : false}
          >
            <Icon svg="list" classes="h-6" />
          </button>
        </div>
      </div>
      {isLoading && (
        <div className="flex h-20 w-full items-center justify-center text-blanco1">
          <BasicLoader />
        </div>
      )}
      {categorys?.map((item, index) => {
        if (item.tipo === "producto" || item.tipo === "receta") {
          return (
            <ListCategoryButton
              key={`categorias-${index}`}
              item={item.nombre}
              state={item.nombre === filter ? "active" : "inactive"}
              action={() => updateFilter(item.nombre)}
            />
          )
        }
      })}
      <div className="absolute bottom-16">
        <PromotionsButton
          state={filter === "Promociones" ? true : false}
          action={() => updateFilter("Promociones")}
        />
      </div>
    </div>
  )
}
