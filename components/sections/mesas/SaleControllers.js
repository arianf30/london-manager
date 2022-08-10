import { useRouter } from "next/router"
import InputQty from "components/panels/sale_inputs_add_item/InputQty"
import InputProducts from "components/panels/sale_inputs_add_item/InputProducts"
import IconRectangleButton from "components/buttons/IconRectangleButton"
import SecondaryButton from "components/buttons/SecondaryButton"
import PrimaryButton from "components/buttons/PrimaryButton"

export default function SaleControllers({
  table,
  tables,
  viewProducts,
  updateViewProducts,
  qty,
  updateQty,
  addItem,
}) {
  return (
    <>
      <div className="flex items-center justify-between h-[54px] w-full border-l-[6px] border-e500 bg-gs700 pl-[10px] pr-4">
        <div className="flex items-end">
          <h3 className="text-blanco font-bold">Mesa {table}</h3>
          <p className="text-xs text-p200 ml-2 leading-5">
            {tables[table].persons} personas
          </p>
        </div>
        <div className="flex gap-2">
          {/* <SecondaryButton text="Editar" size="sm" theme="light" /> */}
          <SecondaryButton text="Cerrar" size="sm" theme="dark" />
        </div>
      </div>
      <div className="flex items-center justify-between w-full h-[75px] bg-gs600 px-4">
        <div className="relative flex h-full w-[calc(100%_-_115px)] items-center gap-2">
          <InputQty qty={qty} updateQty={updateQty} />
          <InputProducts addItem={addItem} />
        </div>

        <div className="flex items-center justify-between min-w-[107px]">
          <PrimaryButton
            text={viewProducts ? "Ocultar" : "Mostrar"}
            icon={viewProducts ? "eyeOff" : "eye"}
            size="sm"
            theme="light"
            classes={`w-full ${
              viewProducts &&
              "animate-pulse bg-e500 hover:bg-[linear-gradient(92.28deg,#CB5340_0%,#CB5340_103.32%)]"
            }`}
            action={() => updateViewProducts(!viewProducts)}
          />
        </div>
      </div>

      <div className="grid grid-cols-12 h-11 w-full">
        <button className="h-full col-span-4 bg-gs550 text-bm font-bold text-blanco border-r-[1px] border-gs500 hover:bg-gs700 transition ease-in-out">
          Cuenta
        </button>
        <button className="h-full col-span-4 bg-gs550 text-bm font-bold text-blanco border-r-[1px] border-gs500 hover:bg-gs700 transition ease-in-out">
          Orden
        </button>
        <button className="h-full col-span-4 bg-gs550 text-bm font-bold text-blanco hover:bg-gs700 transition ease-in-out">
          Comanda
        </button>
      </div>
    </>
  )
}
