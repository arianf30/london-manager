// import popAuthorization from "middleware/popAuthorization"
// import withAuthentication from "middleware/withAuthentication"
import MesaModel from "models/pop/mesas"

const Mesas = async (req, res) => {
  const { pop } = req.query
  const mesas = await MesaModel(pop).findAll({
    attributes: [
      "id",
      "id_salon",
      "estado",
      "id_transaccion",
      "size",
      "data-y",
      "data-x",
    ],
  })
  return res.json(mesas)
}

// export default withAuthentication(popAuthorization(Mesas))
export default Mesas
