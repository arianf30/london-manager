// import popAuthorization from "middleware/popAuthorization"
// import withAuthentication from "middleware/withAuthentication"
import PrinterConfigModel from "models/pop/printer"
import { getSession } from "next-auth/react"

const PrinterConfig = async (req, res) => {
  const { pop } = req.query
  const session = await getSession({ req })

  if (req.method === "GET") {
    if (session) {
      const printerConf = await PrinterConfigModel(pop).findOne({
        attributes: ["userId", "host", "config"],
        where: { userId: session.id },
      })
      return res.json(printerConf)
    } else {
      // Not Signed in
      res.status(401)
    }
  }

  if (req.method === "POST") {
    const payload = req.body
    const config = JSON.stringify({
      cook: payload.cook,
      order: payload.order,
      check: payload.check,
      invoice: payload.invoice,
    })

    if (session) {
      const printerConf = await PrinterConfigModel(pop).findOne({
        attributes: ["userId"],
        where: { userId: session.id },
      })
      if (printerConf) {
        try {
          const result = await PrinterConfigModel(pop).update(
            {
              host: payload.host,
              config: config,
            },
            {
              where: {
                userId: session.id,
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
      } else {
        try {
          const result = await PrinterConfigModel(pop).create({
            userId: parseInt(session.id),
            host: payload.host,
            config: config,
          })
          return res.status(200).json(result)
        } catch (e) {
          return res.status(500).json({
            message:
              "Ocurrió un error. Por favor comuníquese con el administrador.",
          })
        }
      }
    }
  }
}

// export default withAuthentication(popAuthorization(Categorias))
export default PrinterConfig
