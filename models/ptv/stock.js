import { DataTypes } from 'sequelize'
import { ptvDB } from 'db/connection'

const db = ptvDB('u113741966_lman_1', 'localhost', '')

const StockModel = db.define('stock', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  descripcion_1: DataTypes.TEXT('tiny'),
  precio_venta: DataTypes.DECIMAL(10, 2)
},
  {
    freezeTableName: true,
    tableName: 'stock'
  })

// UserModel.sync({ force: false, alter: true })
//   .then(() => {
//     console.log('Tabla usuarios sincronizada.')
//   })

export default StockModel