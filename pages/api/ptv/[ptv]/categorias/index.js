// import ptvAuthorization from "middleware/ptvAuthorization"
// import withAuthentication from "middleware/withAuthentication"
import CategoryModel from "models/ptv/category"

const Categorias = async (req, res) => {
  const { ptv } = req.query
  const categorias = await CategoryModel(ptv).findAll({
    attributes: ["id", "nombre", "tipo"],
  })
  return res.json(categorias)
}

// export default withAuthentication(ptvAuthorization(Categorias))
export default Categorias
