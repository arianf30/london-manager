import bcrypt from 'bcrypt'
import UserModel from 'models/admin/users'

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { nombre, apellido, email, contrasena } = req.body

    if (!nombre || !apellido) {
      return res.status(400).json({ message: 'Por favor complete su nombre y apellido.' })
    }
   
    if (email.length < 6 || contrasena.length < 6) {
      return res.status(400).json({ message: 'Hay un error en los datos enviados.' })
    }
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
      return res.status(400).json({ message: 'El email ingresado no tiene un formato válido.' })
    }

    const body = req.body
    const passwordHash = await bcrypt.hash(body.contrasena, 10)
    body.contrasena = passwordHash
    body.estado = 'Pending'
    body.google = 'credentials'

    try {
      const user = await UserModel.create(body)
      return res.status(201).json(user)
    } catch (error) {
      if (error.name === 'SequelizeUniqueConstraintError') {
        return res.status(500).json({
          message: 'El email que ingresó ya se encuentra registrado.'
        })  
      }
      return res.status(500).json({
        message: 'Ocurrió un error. Por favor comuníquese con el administrador.'
      })
    }
  }
}