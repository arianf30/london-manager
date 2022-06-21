import PointModel from "models/general/puntos_de_venta"
import SeccionModel from "models/general/secciones"
import UserModel from "models/general/usuarios"
import JerarquiaModel from "models/ptv/jerarquias"
import UserPtvModel from "models/ptv/usuarios"

const ptvAuthorization = (handler) => async (req, res) => {
  if (req.query.ptv) {
    const userPtvs = await UserModel.findOne({
      attributes: ["ptos_vta"],
      where: { id: req.userId },
    })

    const ptvs = userPtvs.ptos_vta.split("/")
    const encontro = ptvs.filter((ptv) => ptv === req.query.ptv)

    if (encontro.length) {
      req.ptvId = req.query.ptv
      const findPoint = await PointModel.findOne({ where: { id: req.ptvId } })
      const findJerarquia = await UserPtvModel(req.query.ptv).findOne({
        attributes: ["id_jerarquia"],
        where: { id_usuario: req.userId },
      })
      const findPermissions = await JerarquiaModel(req.query.ptv).findOne({
        attributes: ["denominacion", "jerarquia"],
        where: { id: findJerarquia.id_jerarquia },
      })
      const dataSections = await SeccionModel.findAll({
        attributes: ["id", "tipo", "nombre", "icono"],
      })
      const permisos = findPermissions.jerarquia.split("/").map((seccion) => {
        if (seccion !== "") {
          const sep = seccion.split("-")
          const perms = sep[1].split("_")
          const dataSection = dataSections.filter((sect) => sect.id == sep[0])
          return {
            section: dataSection[0],
            read: perms[0],
            create: perms[1],
            update: perms[2],
            delete: perms[3],
          }
        }
      })
      req.ptvJerarquia = {
        companyName: findPoint.nombre,
        companyAddress: findPoint.direccion,
        companyImage: findPoint.foto,
        companyBackground: findPoint.fondo,
        role: findPermissions.denominacion,
        permissions: permisos,
      }
      return handler(req, res)
    } else {
      return res.status(401).json({
        success: false,
        message: "No cuenta con permiso para acceder a este punto de venta.",
      })
    }
  } else {
    return res.status(500).json({
      success: false,
      message: "Por favor comuníquese con el administrador.",
    })
  }
}

export default ptvAuthorization
