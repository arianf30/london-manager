import { DataTypes } from "sequelize"
import { popDB } from "db/connection"

const PASS_HOSTINGER_GLOBAL_BD = process.env.PASS_HOSTINGER_GLOBAL_BD

const ComprobantesModel = (pop) => {
  const db = popDB(
    `u113741966_lman_${pop}`,
    `u113741966_luser_${pop}`,
    PASS_HOSTINGER_GLOBAL_BD
  )

  return db.define(
    "comprobantes",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      codigo: DataTypes.STRING(3),
      nombre: DataTypes.STRING(20),
    },
    {
      freezeTableName: true,
      tableName: "comprobantes",
    }
  )
}

export default ComprobantesModel
