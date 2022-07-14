import CircleButton from "components/buttons/CircleButton"
import DropdownNavbar from "components/dropdowns/DropdownNavbar"
import { useRouter } from "next/router"

export default function SectionNavbar({ title, itemsDropdown }) {
  const router = useRouter()
  return (
    <header className="relative flex justify-between h-16 bg-slate-800 items-center primary-gradient z-20 select-none">
      <CircleButton
        theme="transparent"
        size="large"
        color="text-white"
        icon="flecha-izq"
        margin="ml-2"
        shadow={false}
        action={() => router.back()}
      />
      <h2 className="m-0 text-white">
        <strong>{title}</strong>
      </h2>
      {itemsDropdown ? (
        <DropdownNavbar items={itemsDropdown} />
      ) : (
        <CircleButton
          margin="mr-2"
          theme="transparent"
          size="large"
          color="text-white"
          icon="opciones"
          shadow={false}
          action={null}
        />
      )}
    </header>
  )
}
