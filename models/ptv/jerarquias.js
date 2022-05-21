import { DataTypes } from 'sequelize'
import { ptvDB } from 'db/connection'

const JerarquiaModel = (ptv) => {
  const db = ptvDB(`u113741966_lman_${ptv}`, 'localhost', '')

  return db.define('jerarquias', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    denominacion: DataTypes.STRING(50),
    jerarquia: DataTypes.TEXT
  })
}

export default JerarquiaModel