import InputQty from "components/panels/sale_inputs_add_item/InputQty"
import InputProducts from "components/panels/sale_inputs_add_item/InputProducts"
import IconRectangleButton from "components/buttons/IconRectangleButton"

export default function SaleControllers({
  qty,
  updateQty,
  addItem,
  openCash,
  resetSale,
}) {
  return (
    <div className="flex items-center justify-between w-full h-24 bg-gs600 px-4">
      <div className="relative flex h-full w-[calc(100%_-_138px)] items-center gap-2">
        <InputQty qty={qty} updateQty={updateQty} />
        <InputProducts addItem={addItem} />
      </div>

      <div className="flex items-center justify-between gap-4 min-w-[111px]">
        <IconRectangleButton
          size="xl"
          icon="caja"
          classes="bg-s400"
          classesBox="p-[10%]"
          action={() => openCash()}
        />
        <IconRectangleButton
          size="lg"
          icon="trash"
          classes="bg-e500"
          action={() => resetSale()}
        />
      </div>
    </div>
  )
}
