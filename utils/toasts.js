import Icon from "components/svg/Icon"
import toast from "react-hot-toast"

const BACKS = {
  wait: "#298AE0",
  success: "#1EAE89",
  alert: "#D99C26",
  error: "#CB5340",
}
const ICONS = {
  wait: "loading",
  success: "check",
  alert: "alertTriangle",
  error: "alertCircle",
}

export const toastL = (state, text) => {
  toast.custom((t) => (
    <div
      className={`${
        t.visible ? "animate-enter" : "animate-leave"
      } flex items-center justify-between h-12 w-auto rounded-lg pointer-events-auto bg-blanco drop-shadow-[0px_4px_8px_rgba(10,10,20,0.08)]`}
    >
      <div
        className="flex items-center justify-center w-12 h-full rounded-l-lg"
        style={{ backgroundColor: BACKS[state] }}
      >
        <div className="h-5 w-5 text-blanco">
          <Icon svg={ICONS[state]} />
        </div>
      </div>
      <div className="flex text-bs px-3">{text}</div>
      {state !== "wait" && (
        <div className="flex items-center justify-center w-12 h-full rounded-r-lg">
          <button
            className="h-5 w-5 text-negro"
            onClick={() => toast.dismiss(t.id)}
          >
            <Icon svg="close20" />
          </button>
        </div>
      )}
    </div>
  ))
}

export const toastLP = (promise, stateMessage) => {
  toast.promise(
    promise,
    {
      loading: stateMessage?.loading ?? "Guardando. Por favor esperá...",
      success: stateMessage?.success ?? "Cambios guardados con éxito.",
      error: stateMessage?.error ?? "Ocurrio un error.",
    },
    {
      style: {
        boxShadow: "0px 4px 8px rgba(10, 10, 20, 0.08)",
        padding: "16px",
        color: "#24292F",
        fontSize: "14px",
        borderRadius: "8px",
        height: "48px",
      },
      iconTheme: {
        primary: "#363B63",
        secondary: "#FFFFFF",
      },
    }
  )
}
