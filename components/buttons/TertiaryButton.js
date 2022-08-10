import svgs from "components/svg"
import Icon from "components/svg/Icon"

const SIZES = {
  sm: "text-bxs font-bold",
  lg: "text-bs font-bold capitalize",
}

const ICON = {
  sm: "h-4 w-4 mr-[4px]",
  lg: "h-5 w-5 mr-[4px]",
}

const THEMES = {
  light: "text-p500 disabled:text-gs400",
  dark: "text-blanco disabled:text-gs500",
}

const HOVER = {
  light: "hover:drop-shadow-[0_35px_35px_rgba(27,156,123,0.25)]",
  dark: "hover:text-s600",
}

export default function TertiaryButton({
  text = "Botón",
  size = "lg",
  theme = "light",
  action,
  icon,
  disabled = false,
  classes,
}) {
  return (
    <button
      className={`flex items-center justify-center bg-transparent rounded-[4px] ${
        SIZES[size]
      } ${THEMES[theme]} ${!disabled && HOVER[theme]} ${classes}`}
      disabled={disabled}
      onClick={action}
    >
      {icon && (
        <div className={`${ICON[size]}`}>
          <Icon svg={icon} />
        </div>
      )}
      {text}
    </button>
  )
}
