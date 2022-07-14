const THEMES = {
  active:
    "flex w-full h-12 items-center cursor-pointer text-base text-amarillo uppercase px-3 font-semibold transition ease-in-out bg-[rgba(0,0,0,0.2)] border-r-4 border-amarillo",
  inactive:
    "flex w-full h-12 items-center cursor-pointer text-base text-gris2 uppercase px-3 font-semibold hover:text-blanco1 transition ease-in-out",
}

export default function ListCategoryButton({ item, state, action }) {
  return (
    <button className={THEMES[state]} onClick={action}>
      {item}
    </button>
  )
}
