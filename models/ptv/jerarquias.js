import { DataTypes } from "sequelize"
import { ptvDB } from "db/connection"

const PASS_HOSTINGER_GLOBAL_BD = process.env.PASS_HOSTINGER_GLOBAL_BD

const JerarquiaModel = (ptv) => {
  const db = ptvDB(
    `u113741966_lman_${ptv}`,
    `u113741966_luser_${ptv}`,
    PASS_HOSTINGER_GLOBAL_BD
  )

  return db.define("jerarquias", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    denominacion: DataTypes.STRING(50),
    jerarquia: DataTypes.TEXT,
  })
}

export default JerarquiaModel
