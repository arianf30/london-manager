import Icon from "components/svg/Icon"

export const InputSelect = ({
  name,
  placeholder = "Text placeholder",
  label = "Label",
  inputRef,
  selected,
  options,
  onChange,
  error,
  descripcion,
  classes,
  required,
}) => {
  return (
    <div className={classes}>
      <label className="block text-ls text-gs700 mb-1 truncate">{label}</label>

      <div className="relative">
        <select
          ref={inputRef}
          name={name}
          className="flex items-center w-full h-10 text-bs text-gs700 bg-gs100 border-[1px] border-p500 caret:p500 rounded-[4px] placeholder:text-gs-400 px-3 focus:border-2 focus:px-[11px] appearance-none"
          onChange={onChange}
          required={required}
          defaultValue={selected}
        >
          <option value="" disabled className="text-e500">
            {placeholder}
          </option>
          {options?.map((opt, i) => {
            const value = opt?.value ?? opt
            const label = opt?.label ?? opt
            return <option key={`sel_${value}_${i}`}>{label}</option>
          })}
        </select>
        <div className="absolute h-5 w-5 right-3 top-[10px] text-gs500">
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
