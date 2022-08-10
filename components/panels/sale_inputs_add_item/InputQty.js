import Icon from "components/svg/Icon"

export default function InputQty({ qty, updateQty }) {
  return (
    <div className="group flex flex-col h-full items-center justify-center text-blanco gap-1">
      <button
        className="h-4 w-4 text-gs300 hidden group-focus-within:block group-hover:block"
        onClick={() => {
          if (+qty < 99) updateQty(+qty + 1)
        }}
      >
        <Icon svg="arrowTop" />
      </button>
      <input
        type="number"
        className="h-8 w-8 text-center text-sl font-bold rounded-lg border-[1px] border-gs300 bg-[rgba(27,28,35,0.4)] group-hover:border-p500 focus:border-p500 outline-none"
        value={qty}
        onClick={(e) => e.target.select()}
        onChange={(e) => {
          let value = +e.target.value
          if (value > 0 && value < 100) updateQty(value)
        }}
      />
      <button
        className="h-4 w-4 text-gs300 hidden group-focus-within:block group-hover:block"
        onClick={() => {
          if (+qty > 1) updateQty(+qty - 1)
        }}
      >
        <Icon svg="arrowBottom" />
      </button>
    </div>
  )
}
