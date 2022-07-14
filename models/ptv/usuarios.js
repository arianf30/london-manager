import { DataTypes } from "sequelize"
import { ptvDB } from "db/connection"

const PASS_HOSTINGER_GLOBAL_BD = process.env.PASS_HOSTINGER_GLOBAL_BD

const UserPtvModel = (ptv) => {
  const db = ptvDB(
    `u113741966_lman_${ptv}`,
    `u113741966_luser_${ptv}`,
    PASS_HOSTINGER_GLOBAL_BD
  )

  return db.define("usuario", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    id_usuario: DataTypes.INTEGER,
    id_jerarquia: DataTypes.SMALLINT,
    estado: DataTypes.STRING(15),
  })
}

export default UserPtvModel
