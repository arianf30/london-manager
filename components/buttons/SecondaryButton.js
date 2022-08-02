import svgs from "components/svg"

const SIZES = {
  sm: "px-2 h-8 text-[12px] border-[1px]",
  lg: "px-6 h-10 font-bold text-sm border-2",
}

const THEMES = {
  light: "disabled:text-gs400 disabled:border-gs400",
  dark: "disabled:text-gs500 disabled:border-gs500",
}

export default function SecondaryButton({
  text = "Botón",
  size = "lg",
  theme = "light",
  action,
  icon,
  disabled = false,
}) {
  let addStyles = "hover:border-s600 hover:text-s600"
  return (
    <button
      className={`flex items-center justify-center text-blanco bg-transparent border-blanco rounded-[4px] ${
        SIZES[size]
      } ${THEMES[theme]} ${!disabled && addStyles}`}
      disabled={disabled}
      onClick={action}
    >
      {icon && (
        <svg
          className="h-[38%] mr-[5px]"
          viewBox={svgs[icon].viewBox}
          xmlns="http://www.w3.org/2000/svg"
        >
          {svgs[icon].svg}
        </svg>
      )}
      {text}
    </button>
  )
}
