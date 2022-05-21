import { DataTypes } from 'sequelize'
import { ptvDB } from 'db/connection'

const UserPtvModel = (ptv) => {
  const db = ptvDB(`u113741966_lman_${ptv}`, 'localhost', '')

  return db.define('usuario', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    id_usuario: DataTypes.INTEGER,
    id_jerarquia: DataTypes.SMALLINT,
    estado: DataTypes.STRING(15)
  })
}
export default UserPtvModel