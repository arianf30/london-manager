import SaleItem from "./SaleItem"

export default function SaleItemsContainer({ sellItems }) {
  return (
    <div className="w-full h-[calc(100%_-_274px)] bg-gris2 overflow-auto">
      {sellItems &&
        Array.isArray(sellItems) &&
        sellItems.map((item, index) => {
          return (
            <div key={`saleItem-${item.id}`}>
              <SaleItem item={item} />
            </div>
          )
        })}
    </div>
  )
}
