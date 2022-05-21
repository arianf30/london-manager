import { DataTypes } from 'sequelize'
import db from 'db/connection'

const UserModel = db.define('usuarios', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  correo_electronico: {
    type: DataTypes.STRING(100),
    allowNull: false,
    unique: true
  },
  contrasena: DataTypes.STRING(65),
  nombre: DataTypes.STRING(45),
  apellido: DataTypes.STRING(45),
  celular: DataTypes.STRING(45),
  red_social: DataTypes.STRING,
  direccion: DataTypes.STRING(100),
  localidad: DataTypes.STRING(45),
  provincia: DataTypes.STRING(45),
  foto: DataTypes.STRING,
  privacidad: DataTypes.STRING(1),
  ptos_vta: DataTypes.STRING,
  estado: DataTypes.STRING(120),
  fecha_registro: DataTypes.DATE,
  google: DataTypes.STRING(20),
  cod_recuperar: DataTypes.STRING,
  fecha_venc_recuperar: DataTypes.DATE
})

// UserModel.sync({ force: false, alter: true })
//   .then(() => {
//     console.log('Tabla usuarios sincronizada.')
//   })

export default UserModel