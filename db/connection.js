import { Sequelize } from "sequelize"
import mysql2 from "mysql2"

const db = new Sequelize(
  "u113741966_general",
  "u113741966_london_man",
  "Arian300",
  {
    host: "sql551.main-hosting.eu",
    dialect: "mysql",
    dialectModule: mysql2,
    operatorsAliases: false,
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  }
)

export const popDB = (database, user, pass) => {
  return new Sequelize(database, user, pass, {
    host: "sql551.main-hosting.eu",
    dialect: "mysql",
    dialectModule: mysql2,
    operatorsAliases: false,
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  })
}

export default db
