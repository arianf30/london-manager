import { nowDateTime } from "utils/dateNow"

const TableModel = (idUser, persons, idClient = 0, comment) => {
  return {
    status: "open",
    idUser: idUser,
    idClient: idClient,
    persons: persons,
    comment: comment,
    openAt: nowDateTime(new Date()),
    closeAt: "",
  }
}

export default TableModel
