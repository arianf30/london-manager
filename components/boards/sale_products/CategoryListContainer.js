import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { getCategories } from "services/pop/categorias"
import ListCategoryButton from "components/buttons/ListCategoryButton"
import BasicLoader from "components/svg/loaders/BasicLoader"
import { useQuery } from "@tanstack/react-query"

export default function CategoryListContainer({ filter, updateFilter }) {
  const { pop } = useRouter().query
  const [categorys, setCategorys] = useState([])
  const { data: response, isLoading } = useQuery(
    ["articlesCategories", pop],
    () => getCategories(pop)
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
    <div className="w-[25%] h-full border-r-[1px] border-negro3 overflow-auto">
      {isLoading && (
        <div className="flex h-20 w-full items-center justify-center text-blanco1">
          <BasicLoader />
        </div>
      )}
      {categorys &&
        categorys.map((item, index) => {
          if (item.tipo !== "insumo") {
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
    </div>
  )
}
