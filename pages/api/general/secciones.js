import SeccionModel from 'models/general/secciones'
import { getSession } from 'next-auth/react'

export default async function Secciones(req, res){
  const session = await getSession({ req })
  if (session) {
    // Signed in
    const secciones = await SeccionModel.findAll({ attributes: ['id', 'orden', 'nombre', 'tipo', 'icono'] })
    return res.json(secciones)
  } else {
    // Not Signed in
    res.status(401)
  }
  res.end()
}
