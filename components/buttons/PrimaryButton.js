import svgs from "components/svg"

const SIZES = {
  sm: "px-2 h-8 text-[12px]",
  lg: "px-6 h-10 font-bold text-sm",
}

const THEMES = {
  light: "disabled:bg-gs200 disabled:text-gs400",
  dark: "disabled:bg-gs500 disabled:text-gs400",
}

export default function PrimaryButton({
  text = "Botón",
  size = "lg",
  theme = "light",
  action,
  icon,
  disabled = false,
  classes,
  buttonRef = null,
}) {
  let addStyles =
    "hover:bg-[linear-gradient(92.28deg,#5E5EA7_0%,#1C9C7D_103.32%)]"
  return (
    <button
      className={`flex items-center justify-center text-blanco bg-p500 rounded-[4px] ${SIZES[size]} ${THEMES[theme]} ${addStyles} ${classes}`}
      disabled={disabled}
      onClick={action}
      ref={buttonRef}
    >
      {icon && (
        <div className="h-3 w-3 mr-[5px]">
          <svg viewBox={svgs[icon].viewBox} xmlns="http://www.w3.org/2000/svg">
            {svgs[icon].svg}
          </svg>
        </div>
      )}
      {text}
    </button>
  )
}
