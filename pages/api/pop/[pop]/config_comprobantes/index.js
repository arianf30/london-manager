// import popAuthorization from "middleware/popAuthorization"
// import withAuthentication from "middleware/withAuthentication"
import ComprobantesModel from "models/pop/comprobantes"
import { getSession } from "next-auth/react"

const ConfigComprobantes = async (req, res) => {
  const { pop } = req.query
  const session = await getSession({ req })

  if (req.method === "GET") {
    if (session) {
      const ComprobantesConf = await ComprobantesModel(pop).findAll({
        attributes: ["id", "codigo", "nombre"],
      })
      return res.json(ComprobantesConf)
    } else {
      // Not Signed in
      res.status(401)
    }
  }
}

// export default withAuthentication(popAuthorization(Categorias))
export default ConfigComprobantes
