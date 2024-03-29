import Icon from "components/svg/Icon"

export const InputSelect = ({
  name,
  placeholder = "",
  label = "Label",
  inputRef,
  selected,
  options,
  icon,
  onChange = () => undefined,
  error,
  descripcion,
  classes,
  required,
}) => {
  return (
    <div className={`select-none ${classes}`}>
      <label className="block text-ls text-gs700 mb-1 truncate">{label}</label>

      <div className="relative">
        <select
          ref={inputRef || undefined}
          name={name}
          className={`flex items-center w-full h-10 text-bs text-gs700 bg-gs100 border-[1px] border-p500 caret:p500 rounded-[4px] placeholder:text-gs-400 px-3 pr-10 outline-none focus:shadow-[0_0_0_1px_rgba(86,93,152,1)] appearance-none truncate ${
            icon && "pl-[44px]"
          }`}
          onChange={(e) => onChange(e.target.value)}
          required={required}
          defaultValue={selected || undefined}
        >
          {placeholder && (
            <option value="" disabled selected className="text-e500">
              {placeholder}
            </option>
          )}
          {options?.map((opt, i) => {
            const value = opt?.value ?? opt
            const label = opt?.label ?? opt
            return (
              <option value={value} key={`sel_${value}_${i}`}>
                {label}
              </option>
            )
          })}
        </select>
        {icon && (
          <div className="absolute left-4 top-[10px] h-5 w-5 text-gs400 pointer-events-none">
            <Icon svg={icon} />
          </div>
        )}
        <div className="absolute h-5 w-5 right-3 top-[10px] text-gs500 pointer-events-none">
          <Icon svg="arrowBottom" />
        </div>
      </div>

      {error && (
        <span className="block text-ls text-e500 mt-[7px] truncate">
          {error}
        </span>
      )}
      {descripcion && (
        <span className="block text-ls text-gs400 mt-[7px] truncate">
          {descripcion}
        </span>
      )}
    </div>
  )
}

export default InputSelect
