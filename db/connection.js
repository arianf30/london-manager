import { Sequelize } from "sequelize"

const db = new Sequelize('u113741966_general', 'arian', 'arian300', {
    host: '192.168.64.4',
    dialect: 'mysql',
    operatorsAliases: false,
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    },
})

export const ptvDB = (database, user, pass) => {
  return new Sequelize(database, user, pass, {
      host: '192.168.64.4',
      dialect: 'mysql',
      operatorsAliases: false,
      pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
      },
  })
}

export default db