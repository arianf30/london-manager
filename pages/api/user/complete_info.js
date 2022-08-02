import UserModel from "models/general/usuarios"
import { getSession } from "next-auth/react"

export default async function CompleteInfo(req, res) {
  const session = await getSession({ req })
  if (session) {
    // Signed in
    const userInfo = await UserModel.findOne({
      attributes: [
        "correo_electronico",
        "nombre",
        "apellido",
        "foto",
        "direccion",
        "red_social",
      ],
      where: { id: session.id },
    })
    return res.json(userInfo)
  } else {
    // Not Signed in
    res.status(401)
  }
  res.end()
}
