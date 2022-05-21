export default function IconTextButton({ color, icon, text, action, styles }) {
  return (
    <p onClick={() => action} className={`inline-block ${color} text-sm cursor-pointer hover:underline underline-offset-2 ${styles}`}>
      <div className={`inline-block align-middle mr-2 font-icons ${icon}`} />
      {text}
    </p>
  )
}