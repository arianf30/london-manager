import { DataTypes } from "sequelize"
import { popDB } from "db/connection"

const PASS_HOSTINGER_GLOBAL_BD = process.env.PASS_HOSTINGER_GLOBAL_BD

const PrinterConfigModel = (pop) => {
  const db = popDB(
    `u113741966_lman_${pop}`,
    `u113741966_luser_${pop}`,
    PASS_HOSTINGER_GLOBAL_BD
  )

  return db.define(
    "printer_config",
    {
      userId: {
        type: DataTypes.INTEGER,
      },
      host: DataTypes.STRING(50),
      config: DataTypes.STRING(200),
    },
    {
      freezeTableName: true,
      tableName: "printer_config",
    }
  )
}

// PrinterConfigModel.sync({ force: false, alter: true }).then(() => {
//   console.log("Tabla usuarios sincronizada.")
// })

export default PrinterConfigModel
