import { useRouter } from "next/router"
import { useRef } from "react"
import { dbFirestore } from "db/firebase"
import { set, ref, onValue } from "firebase/database"
import PrimaryButton from "components/buttons/PrimaryButton"
import SecondaryButton from "components/buttons/SecondaryButton"
import InputSelect from "components/inputs/InputSelect"
import InputText from "components/inputs/InputText"
import TableModel from "models/firebase/TableModel"

export default function OpenTable({ table }) {
  const { pop } = useRouter().query
  const mozoRef = useRef()
  const cantPersonasRef = useRef()
  const clienteRef = useRef()
  const comentarioRef = useRef()

  const openTable = (table, todo) => {
    set(ref(dbFirestore, `pop/${pop}/mesas/${table}`), { ...todo })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const idUser = mozoRef.current.value ?? 0
    if (!idUser) {
      mozoRef.current.focus()
      return
    }
    const persons = cantPersonasRef.current.value ?? 0
    const idClient = clienteRef.current.value ?? 0
    const comment = comentarioRef.current.value ?? ""
    const newTableObject = TableModel(idUser, persons, idClient, comment)

    openTable(table, newTableObject)
  }

  return (
    <div className="h-full w-full">
      <div className="flex items-center justify-between h-[54px] w-full border-l-[6px] border-s600 bg-gs700 pl-[10px] pr-4">
        <h3 className="text-blanco font-bold">Mesa {table}</h3>
        <SecondaryButton
          text="Abrir"
          size="sm"
          theme="dark"
          action={handleSubmit}
        />
      </div>
      <div className="h-[calc(100%_-_54px)] w-full bg-gs100 overflow-auto py-[33px] px-6">
        <form onSubmit={handleSubmit}>
          <InputSelect
            options={["Ramiro", "Elisa", "Florencia"]}
            label="Mozo (obligatorio)"
            placeholder="Seleccioná un mozo"
            inputRef={mozoRef}
            required
          />
          <InputSelect
            options={[1, 2, 3, 4, "Más de 5"]}
            label="Cantidad de personas"
            placeholder="Cantidad de personas"
            classes="mt-4"
            inputRef={cantPersonasRef}
            required
          />
          <InputText
            placeholder="Nombre de un comensal"
            label="Cliente"
            classes="mt-4"
            inputRef={clienteRef}
          />
          <InputText
            placeholder="Agregar comentarios"
            label="Comentario"
            classes="mt-4"
            inputRef={comentarioRef}
          />
          <PrimaryButton
            text="Abrir mesa"
            size="lg"
            theme="light"
            classes="w-full mt-10"
          />
        </form>
      </div>
    </div>
  )
}
