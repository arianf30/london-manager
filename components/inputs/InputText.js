export const InputText = ({
  name,
  placeholder = "Text placeholder",
  label = "Label",
  inputRef,
  value,
  onChange = () => null,
  error,
  descripcion,
  classes,
  required,
}) => {
  return (
    <div className={classes}>
      <label className="block text-ls text-gs700 mb-1 truncate">{label}</label>
      <input
        type="text"
        ref={inputRef || null}
        name={name}
        value={value || null}
        className="flex items-center w-full h-10 text-bs text-gs700 bg-gs100 border-[1px] border-p500 caret:p500 rounded-[4px] placeholder:text-gs400 px-3 outline-none focus:shadow-[0_0_0_1px_rgba(86,93,152,1)]"
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        required={required}
      />
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

export default InputText
