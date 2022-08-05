const THEMES = {
  active: "text-blanco bg-gs700 border-r-4 border-p500",
  inactive: "text-gs300",
}

export default function ListCategoryButton({ item, state, action }) {
  return (
    <button
      className={`flex w-full h-[46px] items-center text-ss font-bold uppercase px-4 transition ease-in-out ${THEMES[state]}`}
      onClick={action}
    >
      {item}
    </button>
  )
}
