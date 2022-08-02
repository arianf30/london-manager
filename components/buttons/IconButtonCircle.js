import svgs from "components/svg"

const SIZES = {
  sm: "w-5 h-5",
  lg: "w-8 h-8",
}

const SIZES_BOX = {
  sm: "w-4 h-4",
  lg: "w-6 h-6",
}

const THEMES = {
  light: "bg-[transparent] hover:bg-[rgba(0,0,0,0.05)] text-gs700",
  dark: "bg-[transparent] hover:bg-[rgba(0,0,0,0.2)] text-blanco",
  disabledLight: "bg-[transparent] text-gs300",
  disabledDark: "bg-[transparent] text-gs500",
}

export default function IconButtonCircle({ icon, size, theme, action }) {
  return (
    <button
      className={`flex items-center justify-center ${SIZES[size]} ${THEMES[theme]} rounded-full transition ease-in-out`}
      onClick={action}
    >
      <div className={`flex ${SIZES_BOX[size]}`}>
        <svg viewBox={svgs[icon].viewBox} xmlns="http://www.w3.org/2000/svg">
          {svgs[icon].svg}
        </svg>
      </div>
    </button>
  )
}
