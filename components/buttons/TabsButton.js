export default function TabsButton({ text, state, action }) {
  return (
    <button
      className={`flex items-center justify-center h-full w-full text-ss font-bold px-2 truncate uppercase ${
        state
          ? "text-p500 bg-gs700"
          : "text-gs300 bg-transparent hover:text-p500 hover:bg-gs700"
      }`}
      onClick={action}
    >
      {text}
    </button>
  )
}
