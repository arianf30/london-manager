import { DataTypes } from 'sequelize'
import db from 'db/connection'

const SeccionModel = db.define('secciones', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  orden: DataTypes.SMALLINT,
  tipo: DataTypes.STRING(15),
  nombre: DataTypes.STRING(50),
  href: DataTypes.STRING(50),
  icono: DataTypes.STRING(50),
  ingresar: DataTypes.STRING(1),
  cargar: DataTypes.STRING(1),
  editar: DataTypes.STRING(1),
  borrar: DataTypes.STRING(1)
})

// UserModel.sync({ force: false, alter: true })
//   .then(() => {
//     console.log('Tabla usuarios sincronizada.')
//   })

export default SeccionModel