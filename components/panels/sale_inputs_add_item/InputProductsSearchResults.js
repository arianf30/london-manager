import Icon from "components/svg/Icon"
import useQueryArticlesToSale from "hooks/querys/articles/useQueryArticlesToSale"
import { useEffect, useState } from "react"

export default function InputProductsSearchResults({ query, action }) {
  const [results, setResults] = useState([])
  const { data, isLoading, isError } = useQueryArticlesToSale()

  useEffect(() => {
    const newResults = new Array()
    if (data && Array.isArray(data) && query.length >= 2) {
      data.forEach((item) => {
        if (newResults.length < 8) {
          let textToSearch = `${item.marca} ${item.descripcion_1} ${item.descripcion_2} ${item.codigo_barras}`
          if (textToSearch.toLowerCase().includes(query.toLowerCase()))
            newResults.push(item)
        }
      })
    }
    setResults(newResults)
  }, [query])

  if (results.length > 0) {
    return (
      <div className="absolute z-10 flex flex-wrap text-blanco right-0 top-[69px] h-auto w-[calc(100%_-_39px)] min-w-[270px] bg-gs700 border-[1px] border-s400 rounded-[8px] p-1">
        {results.map((item, index) => {
          return (
            <button
              key={index}
              onClick={() => {
                action(item)
              }}
              className={`flex w-full min-h-8 items-center px-2 py-1 hover:bg-gs600 select-none rounded-[4px]`}
            >
              {item.imagen_url ? (
                <div
                  className="h-6 w-6 rounded-full bg-blanco mr-2"
                  style={{
                    backgroundImage: `url('https://londonmanager.com/2021/${item.imagen_url}')`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: `${item.imagen_size}`,
                    backgroundPosition: "center",
                  }}
                />
              ) : (
                <div className="h-6 w-6 rounded-full border-[1px] border-gs500 mr-2 text-gs500 p-1">
                  <Icon svg="image" />
                </div>
              )}
              <div className="text-left w-[calc(100%_-_32px)]">
                <p className="truncate text-bm">
                  {item.descripcion_1} {item.descripcion_2}
                </p>
                <p className="truncate text-cap text-gs300">
                  {item.codigo_barras}
                </p>
              </div>
            </button>
          )
        })}
      </div>
    )
  }

  return null
}
