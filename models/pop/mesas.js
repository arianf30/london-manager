import { DataTypes } from "sequelize"
import { popDB } from "db/connection"

const PASS_HOSTINGER_GLOBAL_BD = process.env.PASS_HOSTINGER_GLOBAL_BD

const MesaModel = (pop) => {
  const db = popDB(
    `u113741966_lman_${pop}`,
    `u113741966_luser_${pop}`,
    PASS_HOSTINGER_GLOBAL_BD
  )

  return db.define(
    "mesa",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      id_salon: DataTypes.SMALLINT,
      estado: DataTypes.STRING(20),
      id_transaccion: DataTypes.INTEGER,
      size: DataTypes.STRING(3),
      "data-y": DataTypes.STRING(15),
      "data-x": DataTypes.STRING(15),
    },
    {
      freezeTableName: true,
      tableName: "mesas",
    }
  )
}

export default MesaModel
