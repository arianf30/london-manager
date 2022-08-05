import { useRouter } from "next/router"
import { useEffect, useRef, useState } from "react"
import useDebounce from "hooks/useDebounce"
import { getSearchArticles } from "services/pop/stock"
import { useQuery } from "@tanstack/react-query"
import InputIconDark from "components/inputs/InputIconDark"
import Icon from "components/svg/Icon"

export default function InputProducts({ addItem }) {
  const { pop } = useRouter().query
  const [query, setQuery] = useState("")
  const queryDebounce = useDebounce(query, 500)

  const {
    data: response,
    isLoading,
    isFetching,
    refetch,
  } = useQuery(
    ["searchArticleSale", pop],
    () =>
      getSearchArticles({
        pop: pop,
        query: queryDebounce,
        limit: 5,
      }),
    { enabled: false }
  )

  const inputRef = useRef()

  useEffect(() => {
    if (query.length >= 4) {
      refetch()
    }
  }, [queryDebounce])

  useEffect(() => {
    inputRef.current.focus()
  }, [])

  return (
    <div className="w-full">
      <InputIconDark
        inputPlaceholder="Buscar o escanear producto"
        inputValue={query}
        inputRef={inputRef}
        icon="barcode"
        action={(e) => e.target.select()}
        change={(e) => setQuery(e.target.value)}
      />

      {response && Array.isArray(response?.data) && query.length >= 4 && (
        <div className="absolute z-10 flex flex-wrap text-blanco right-0 top-[69px] h-auto w-[calc(100%_-_39px)] min-w-[270px] bg-gs700 border-[1px] border-s400 rounded-[8px] p-1">
          {response?.data.map((item, index) => {
            return (
              <button
                key={index}
                onClick={() => {
                  addItem(item)
                }}
                className={`flex w-full h-8 items-center px-2 py-1 hover:bg-gs600 select-none rounded-[4px]`}
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
                <span className="">
                  {item.descripcion_1} {item.descripcion_2}
                  <br />
                  {item.codigo_barras}
                </span>
              </button>
            )
          })}
        </div>
      )}
    </div>
  )
}
