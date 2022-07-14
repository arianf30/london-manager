import StockModel from "models/ptv/stock"
import { Op, Sequelize } from "sequelize"

const Articulos = async (req, res) => {
  const { ptv, query, limit = 20 } = req.query
  const stock = await StockModel(ptv).findAll({
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
    ],
    where: {
      [Op.match]: Sequelize.where(
        Sequelize.fn(
          "concat",
          Sequelize.col("codigo_barras"),
          Sequelize.col("descripcion_1"),
          Sequelize.col("descripcion_2"),
          Sequelize.col("marca")
        ),
        {
          [Op.substring]: query,
        }
      ),
      tipo_producto: {
        [Op.or]: ["producto", "receta"],
      },
    },
  })
  return res.json(stock)
}

export default Articulos
