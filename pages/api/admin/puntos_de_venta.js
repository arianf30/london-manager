import PointModel from "models/general/puntos_de_venta"

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const body = req.body
    // body.config = body.config.toString()

    try {
      const point = await PointModel.create(body)
      return res.status(201).json(point)
    } catch (error) {
      console.log(error)
      return res.status(500).json({
        message: 'Ocurrió un error. Por favor comuníquese con el administrador.'
      })
    }
  }

  try {
    const points = await PointModel.findAll()
    return res.json(points)
  } catch (error) {
    console.log(error)
    return res.status(500).json({
      message: 'Ocurrió un error. Por favor comuníquese con el administrador.'
    })
  }

}