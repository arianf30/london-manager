// import popAuthorization from "middleware/popAuthorization"
// import withAuthentication from "middleware/withAuthentication"
import MesaModel from "models/pop/mesas"

const AbrirMesa = async (req, res) => {
  const { pop } = req.query

  if (req.method === "POST") {
    const body = req.body
    try {
      const result = await MesaModel(pop).update(
        { ...body.mesa },
        {
          where: {
            id: id,
          },
        }
      )
      return res.status(200).json(result)
    } catch (e) {
      return res.status(500).json({
        message:
          "Ocurrió un error. Por favor comuníquese con el administrador.",
      })
    }
  }

  return res.status(500).json({
    message: "Ocurrió un error.",
  })
}

// export default withAuthentication(popAuthorization(Mesa))
export default AbrirMesa
