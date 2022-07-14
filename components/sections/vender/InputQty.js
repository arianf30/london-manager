export default function InputQty({ qty, updateQty }) {
  return (
    <div>
      <input
        type="number"
        className="w-7 text-2xl font-bold m-0 bg-transparent border-b-4 border-violeta outline-none text-blanco1 text-center selection:text-blanco3 selection:bg-violeta"
        value={qty}
        onClick={(e) => e.target.select()}
        onChange={(e) => {
          if (e.target.value > 0 && e.target.value <= 99) {
            updateQty(e.target.value)
          }
        }}
      />
    </div>
  )
}
