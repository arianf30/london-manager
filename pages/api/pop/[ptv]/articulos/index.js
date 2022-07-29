// import popAuthorization from "middleware/popAuthorization"
// import withAuthentication from "middleware/withAuthentication"
import StockModel from "models/pop/stock"
import { Op } from "sequelize"

const Articulos = async (req, res) => {
  const { pop, limit = 20, offset = 0 } = req.query
  const stock = await StockModel(pop).findAll({
    offset: +offset,
    limit: +limit,
    attributes: [
      "id",
      "tipo_producto",
      "tipo_precio",
      "marca",
      "codigo_barras",
      "descripcion_1",
      "descripcion_2",
      "categoria",
      "precio_compra",
      "imagen_url",
      "imagen_size",
      "precio_venta",
      "descuento_tipo",
      "descuento_cant",
      "stock",
      "stock_negativo",
      "color",
    ],
    where: {
      tipo_producto: {
        [Op.or]: ["producto", "receta"],
      },
    },
  })
  return res.json(stock)
}

// export default withAuthentication(popAuthorization(Articulos))
export default Articulos
