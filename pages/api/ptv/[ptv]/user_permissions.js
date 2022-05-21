import ptvAuthorization from 'middleware/ptvAuthorization'
import withAuthentication from 'middleware/withAuthentication'

function handler(req, res) {
  res.json({
    userId: req.userId,
    ptvId: req.ptvId,
    ptvJerarquia: req.ptvJerarquia
  })
}

export default withAuthentication(ptvAuthorization(handler))
