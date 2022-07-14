import StockModel from "models/ptv/stock"

const ArticulosCategoria = async (req, res) => {
  const { ptv, category, limit = 2, offset = 0 } = req.query
  const stock = await StockModel(ptv).findAll({
    attributes: [
      "id",
      "marca",
      "descripcion_1",
      "descripcion_2",
      "precio_compra",
      "imagen_url",
      "precio_venta",
    ],
    where: {
      categoria: category,
    },
    offset: +offset,
    limit: +limit,
  })
  return res.json(stock)
}

export default ArticulosCategoria
