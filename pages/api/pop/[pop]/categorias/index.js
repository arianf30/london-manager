// import popAuthorization from "middleware/popAuthorization"
// import withAuthentication from "middleware/withAuthentication"
import CategoryModel from "models/pop/category"

const Categorias = async (req, res) => {
  const { pop } = req.query
  const categorias = await CategoryModel(pop).findAll({
    attributes: ["id", "nombre", "tipo"],
  })
  return res.json(categorias)
}

// export default withAuthentication(popAuthorization(Categorias))
export default Categorias
