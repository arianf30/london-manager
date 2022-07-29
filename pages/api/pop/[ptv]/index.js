import popAuthorization from "middleware/popAuthorization"
import withAuthentication from "middleware/withAuthentication"

function handler(req, res) {
  res.json({
    userId: req.userId,
    popId: req.popId,
    popJerarquia: req.popJerarquia,
  })
}

export default withAuthentication(popAuthorization(handler))
