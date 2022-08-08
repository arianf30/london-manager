import { dbFirestore } from "db/firebase"
import { set, ref, onValue } from "firebase/database"

export default function Firebase() {
  const writeToDatabase = () => {
    const uuid = uuidv4()
    set(ref(dbFirestore, `/${uuid}`), {
      cliente: 1,
      saleItems: [{ id: 1, nombre: "Coca cola" }],
    })
  }

  onValue(
    ref(dbFirestore, "/0465e9fd-96c9-4f1c-b65c-9d0394127e35"),
    (snapshot) => {
      const data = snapshot.val()
      if (data !== null) {
        console.log(data)
      }
    }
  )

  return <button onClick={() => writeToDatabase()}>Enviar data</button>
}
