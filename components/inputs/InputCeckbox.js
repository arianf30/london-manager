import Icon from "components/svg/Icon"

export default function InputCheckbox({ text, state, action }) {
  return (
    <button
      onClick={action}
      className="flex items-center px-2 h-5 text-p800 text-bxs"
    >
      <div className="h-5 w-5 mr-1">
        <Icon svg={state ? "checkboxActive" : "checkboxInactive"} />
      </div>
      {text}
    </button>
  )
}
