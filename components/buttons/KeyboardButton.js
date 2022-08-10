import Icon from "components/svg/Icon"

export default function KeyboardButton({
  text,
  icon,
  classes,
  bR,
  bB,
  rTL,
  rTR,
  rBL,
  rBR,
}) {
  return (
    <button
      className={`flex items-center justify-center col-span-1 h-full text-h3 text-p800 font-bold border-p200 hover:text-blanco hover:bg-p500 transition ease-in-out ${
        bR && "border-r-[1px]"
      } ${bB && "border-b-[1px]"} ${rTL && "rounded-tl-lg"} ${
        rTR && "rounded-tr-lg"
      } ${rBL && "rounded-bl-lg"} ${rBR && "rounded-br-lg"}`}
    >
      {text && text}
      {icon && (
        <div className="h-5 w-5">
          <Icon svg={icon} />
        </div>
      )}
    </button>
  )
}
