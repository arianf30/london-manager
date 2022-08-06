import { useEffect, useRef, useState } from "react"
import useDebounce from "hooks/useDebounce"
import InputIconDark from "components/inputs/InputIconDark"
import InputProductsSearchResults from "./InputProductsSearchResults"

export default function InputProducts({ addItem }) {
  const [query, setQuery] = useState("")
  const queryDebounce = useDebounce(query, 500)

  const inputRef = useRef()

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

      <InputProductsSearchResults
        query={queryDebounce}
        action={(item) => {
          addItem(item)
        }}
      />
    </div>
  )
}
