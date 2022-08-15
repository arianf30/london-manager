import { DataTypes } from "sequelize"
import { popDB } from "db/connection"

const PASS_HOSTINGER_GLOBAL_BD = process.env.PASS_HOSTINGER_GLOBAL_BD

const PopUsersModel = (pop) => {
  const db = popDB(
    `u113741966_lman_${pop}`,
    `u113741966_luser_${pop}`,
    PASS_HOSTINGER_GLOBAL_BD
  )

  return db.define(
    "usuarios",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      id_usuario: DataTypes.SMALLINT,
      id_jerarquia: DataTypes.SMALLINT,
      id_impresora: DataTypes.SMALLINT,
      id_impresora_codina: DataTypes.SMALLINT,
      estado: DataTypes.STRING(15),
      autorizador: DataTypes.STRING(1),
      codigo_autorizador: DataTypes.STRING(18),
      codigo_solicitud: DataTypes.STRING(120),
      fecha_ingreso: DataTypes.DATE,
    },
    {
      freezeTableName: true,
      tableName: "usuarios",
    }
  )
}

export default PopUsersModel
