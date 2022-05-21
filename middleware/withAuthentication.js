import { getSession } from 'next-auth/react'

const withAuthentication = (handler) => async (req, res) => {
  const session = await getSession({ req })

  if (session) {
    req.userId = session.id
    return handler(req, res)
  } else {
    return res.status(401).json({
      success: false,
      message: 'Por favor inicie sesión para acceder.'
    })
  }
}

export default withAuthentication
