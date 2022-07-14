import { useRouter } from "next/router"
import { useEffect, useRef, useState } from "react"
import useService from "hooks/useService"
import useDebounce from "hooks/useDebounce"
import { getSearchArticles } from "services/ptv/stock"
import BasicLoader from "components/svg/loaders/BasicLoader"

export default function InputProducts({ addItem }) {
  const { ptv } = useRouter().query
  const [query, setQuery] = useState("")

  const queryDebounce = useDebounce(query, 500)
  const { sendService, isLoading, response, clearService } = useService()
  const inputRef = useRef()

  const resetInput = () => {
    clearService()
    setQuery("")
  }

  useEffect(() => {
    if (query <= 4) {
      if (response) clearService()
    }
  }, [query])

  useEffect(() => {
    if (query.length >= 4) {
      sendService(getSearchArticles, {
        ptv: ptv,
        query: queryDebounce,
        limit: 5,
      })
    }
  }, [ptv, queryDebounce])

  useEffect(() => {
    inputRef.current.focus()
  }, [])

  return (
    <>
      <div>
        <input
          ref={inputRef}
          type="text"
          className="w-full bg-negro3 rounded-full h-10 outline-none text-gris3 px-4 pl-16 border-[3px] border-negro2 focus:border-violeta bg-[url('https://londonmanager.com/2021/imagenes/arbol/codbar-b.svg')] bg-no-repeat placeholder-gris3 transition ease-in-out selection:text-blanco3 selection:bg-violeta"
          style={{
            backgroundPosition: "left 20px center",
            backgroundSize: "25px auto",
          }}
          placeholder="Insertar producto"
          value={query}
          onClick={(e) => e.target.select()}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>

      {isLoading && query.length >= 4 && (
        <div className="absolute z-10 flex flex-wrap text-blanco1 left-[10%] top-20 h-auto w-[66%] min-w-[280px] bg-negro3 border-[1px] border-negro2 rounded-md shadow-2xl">
          <div
            className={`flex relative w-full items-center justify-center px-4 py-3 select-none text-blanco1`}
          >
            <BasicLoader />
          </div>
        </div>
      )}
      {response && Array.isArray(response?.data) && query.length >= 4 && (
        <div className="absolute z-10 flex flex-wrap text-blanco1 left-[10%] top-20 h-auto w-[66%] min-w-[280px] bg-negro3 border-[1px] border-negro2 rounded-md shadow-2xl">
          {response?.data.map((item, index) => {
            let styles
            if (index === 0) {
              styles = "rounded-t-md border-b-[1px]"
            } else if (index + 1 === response.data.length) {
              styles = styles + " rounded-b-md"
            } else {
              styles = "border-b-[1px]"
            }
            return (
              <button
                key={index}
                onClick={() => {
                  addItem(item)
                  resetInput()
                }}
                className={`flex relative cursor-pointer w-full items-center border-negro2 px-4 pr-12 ${styles} hover:text-verde hover:underline hover:underline-offset-2 select-none`}
              >
                <div className="py-4">
                  {item.marca && <strong>{item.marca} · </strong>}
                  {item.descripcion_1 && item.descripcion_1}
                  {item.descripcion_2 && ` ${item.descripcion_2}`}
                  {item.codigo_barras && (
                    <p className="text-xs">[{item.codigo_barras}]</p>
                  )}
                </div>
                {item.imagen_url && (
                  <div
                    className="absolute right-0 h-10 w-10 rounded-full bg-blanco1 mr-4"
                    style={{
                      backgroundImage: `url('https://londonmanager.com/2021/${item.imagen_url}')`,
                      backgroundRepeat: "no-repeat",
                      backgroundSize: `${item.imagen_size}`,
                      backgroundPosition: "center",
                    }}
                  />
                )}
              </button>
            )
          })}
        </div>
      )}
    </>
  )
}
