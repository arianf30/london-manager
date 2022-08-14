const THEMES = {
  active: "text-blanco bg-gs700 border-r-4 border-p500",
  inactive: "text-gs300",
}

export default function ListCategoryButton({ item, state, action }) {
  return (
    <button
      className={`flex w-full min-h-[46px] py-1 items-center justify-start text-left text-ss font-bold uppercase px-4 transition ease-in-out ${THEMES[state]}`}
      onClick={action}
    >
      {item}
    </button>
  )
}
