import StockModel from "models/pop/stock"

const ArticulosCategoria = async (req, res) => {
  const { pop, category, limit = 2, offset = 0 } = req.query
  const stock = await StockModel(pop).findAll({
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
