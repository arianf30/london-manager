import { DataTypes } from "sequelize"
import { popDB } from "db/connection"

const PASS_HOSTINGER_GLOBAL_BD = process.env.PASS_HOSTINGER_GLOBAL_BD

const JerarquiaModel = (pop) => {
  const db = popDB(
    `u113741966_lman_${pop}`,
    `u113741966_luser_${pop}`,
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
