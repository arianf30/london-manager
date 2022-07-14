const SIZES = {
  xs: "text-xs",
  sm: "text-sm",
}
const SIZES_ICON = {
  xs: "text-[10px] mr-1",
  sm: "text-sm mr-2",
}

export default function BasicButton({
  size = "xs",
  text,
  icon,
  iconSVG,
  iconBG,
  action,
  margin,
  color = "negro1",
  hover,
}) {
  return (
    <button
      className={`group ${SIZES[size]} transition ease-in-out ${
        margin && margin
      } ${color && color} ${hover && hover}`}
      onClick={action}
    >
      {/* ICON */}
      {icon && <span className={`font-icons i-${icon} ${SIZES_ICON[size]}`} />}
      {iconBG && (
        <span
          className={`inline-block align-middle mr-2 h-[13px] w-[13px] ${iconBG}`}
        />
      )}
      {iconSVG && iconSVG}

      {/* TEXT */}
      <span className="group-hover:underline group-hover:underline-offset-2">
        {text}
      </span>
    </button>
  )
}
