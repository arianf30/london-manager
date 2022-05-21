import bcrypt from 'bcrypt'
import UserModel from 'models/general/usuarios'
import cryptoRandomString from 'crypto-random-string'

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const body = req.body
    const passwordHash = await bcrypt.hash(body.contrasena, 10)
    body.contrasena = passwordHash
    body.estado = cryptoRandomString({length: 64, type: 'url-safe'});

    try {
      const user = await UserModel.create(body)
      return res.status(201).json(user)
    } catch (error) {
      console.log(error)
      return res.status(500).json({
        message: 'Ocurrió un error. Por favor comuníquese con el administrador.'
      })
    }
  }

  try {
    const users = await UserModel.findAll()
    return res.json(users)
  } catch (error) {
    console.log(error)
    return res.status(500).json({
      message: 'Ocurrió un error. Por favor comuníquese con el administrador.'
    })
  }

}