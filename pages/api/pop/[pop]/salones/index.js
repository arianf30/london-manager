// import popAuthorization from "middleware/popAuthorization"
// import withAuthentication from "middleware/withAuthentication"
import SalonModel from "models/pop/salones"

const Salones = async (req, res) => {
  const { pop } = req.query
  const salones = await SalonModel(pop).findAll({
    attributes: ["id", "nombre"],
  })
  return res.json(salones)
}

// export default withAuthentication(popAuthorization(Categorias))
export default Salones
