import { DataTypes } from "sequelize"
import db from "db/connection"

const PointModel = db.define("puntos_de_venta", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  fecha_registro: DataTypes.DATE,
  id_propietario: DataTypes.INTEGER,
  nombre: DataTypes.STRING(45),
  direccion: DataTypes.STRING(100),
  foto: DataTypes.STRING,
  fondo: DataTypes.STRING,
  logo_tique: DataTypes.STRING,
  imagen_tique: DataTypes.STRING,
  telefono: DataTypes.STRING(45),
  codigo_postal: DataTypes.STRING(20),
  razon_social: DataTypes.STRING(60),
  cuit: DataTypes.STRING(15),
  ing_brutos: DataTypes.STRING(15),
  inicio_actividad: DataTypes.DATE,
})

// PointModel.sync({ force: false, alter: true })
//   .then(() => {
//     console.log('Tabla puntos de venta sincronizada.')
//   })

export default PointModel
