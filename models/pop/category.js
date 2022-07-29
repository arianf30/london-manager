import { DataTypes } from "sequelize"
import { popDB } from "db/connection"

const PASS_HOSTINGER_GLOBAL_BD = process.env.PASS_HOSTINGER_GLOBAL_BD

const CategoryModel = (pop) => {
  const db = popDB(
    `u113741966_lman_${pop}`,
    `u113741966_luser_${pop}`,
    PASS_HOSTINGER_GLOBAL_BD
  )

  return db.define(
    "categoria",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      tipo: DataTypes.STRING(20),
      nombre: DataTypes.TEXT("tiny"),
      orden: DataTypes.SMALLINT,
    },
    {
      freezeTableName: true,
      tableName: "categorias",
    }
  )
}

export default CategoryModel
