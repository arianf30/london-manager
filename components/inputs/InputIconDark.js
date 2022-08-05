import Icon from "components/svg/Icon"

export default function InputIconDark({
  inputPlaceholder,
  inputValue,
  inputRef,
  icon,
  classesIcon,
  action,
  change,
}) {
  return (
    <div className="group relative w-full">
      <input
        type="text"
        className="flex items-center w-full h-8 pl-9 pr-3 border-[1px] border-gs300 bg-[rgba(27,28,35,0.4)] rounded-lg text-[12px] focus:border-s400 outline-none caret-s400 text-blanco"
        placeholder={inputPlaceholder}
        value={inputValue}
        ref={inputRef}
        onClick={action}
        onChange={change}
      />
      <div className="absolute flex items-center justify-center left-[14px] top-2 h-4 w-4 text-gs300 mr-2 group-focus-within:text-s400">
        <Icon svg={icon} classes={classesIcon} />
      </div>
    </div>
  )
}
