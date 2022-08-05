import Icon from "components/svg/Icon"

const SIZES = {
  lg: "h-10 w-10",
  xl: "h-14 w-14",
}

const SIZES_BOX = {
  lg: "h-6 w-6",
  xl: "h-10 w-10",
}

export default function IconRectangleButton({
  size,
  icon,
  classes,
  classesBox,
  action,
}) {
  return (
    <button
      className={`flex items-center justify-center rounded-lg text-blanco ${SIZES[size]} ${classes}`}
      onClick={action}
    >
      <div
        className={`flex items-center justify-center ${SIZES_BOX[size]} ${classesBox}`}
      >
        <Icon svg={icon} />
      </div>
    </button>
  )
}
