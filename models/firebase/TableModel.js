const TableModel = (idUser, persons, idClient = 0, comment) => {
  return {
    status: "open",
    idUser: idUser,
    idClient: idClient,
    persons: persons,
    comment: comment,
    openAt: "",
    closeAt: "",
  }
}

export default TableModel
