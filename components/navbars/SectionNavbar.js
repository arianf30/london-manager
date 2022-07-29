import CircleButton from "components/buttons/CircleButton"
import DropdownNavbar from "components/dropdowns/DropdownNavbar"
import { useRouter } from "next/router"

export default function SectionNavbar({ title, itemsDropdown }) {
  const router = useRouter()
  const { pop } = router.query
  return (
    <header className="relative flex justify-between h-16 bg-negro1 items-center z-20 select-none">
      <CircleButton
        theme="transparent"
        size="medium"
        color="text-white"
        icon="flecha-izq"
        margin="ml-2"
        shadow={false}
        action={() => router.push(`/pop/${pop}/menu`)}
      />
      <h2 className="m-0 text-white text-h1b">{title}</h2>
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
