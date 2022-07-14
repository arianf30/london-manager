import { DataTypes } from "sequelize"
import { ptvDB } from "db/connection"

const PASS_HOSTINGER_GLOBAL_BD = process.env.PASS_HOSTINGER_GLOBAL_BD

const StockModel = (ptv) => {
  const db = ptvDB(
    `u113741966_lman_${ptv}`,
    `u113741966_luser_${ptv}`,
    PASS_HOSTINGER_GLOBAL_BD
  )

  return db.define(
    "stock",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      descripcion_1: DataTypes.TEXT("tiny"),
      precio_venta: DataTypes.DECIMAL(10, 2),
    },
    {
      freezeTableName: true,
      tableName: "stock",
    }
  )
}

export default StockModel
