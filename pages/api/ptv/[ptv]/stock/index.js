import StockModel from 'models/ptv/stock'
import { getSession } from 'next-auth/react'

export default async function Stock(req, res){
  const session = await getSession({ req })
  if (session) {
    // Signed in
    const stock = await StockModel.findAll({ attributes: ['id', 'descripcion_1', 'precio_venta'] })
    return res.json(stock)
  } else {
    // Not Signed in
    res.status(401)
  }
  res.end()
}
