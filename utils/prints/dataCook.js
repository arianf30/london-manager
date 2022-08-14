import { nowDateTime } from "utils/dateNow"

export default function dataCook(data) {
  let toSave = new Map()
  let listPrint = []
  data?.saleItems.forEach((item) => {
    if (item?.con_comanda == 1) {
      // GUARDAR IMPRESION EN LISTADO
      let qty = 0
      let accumulate = 0
      if (item?.commands) {
        item.commands.forEach((comm) => {
          accumulate += parseInt(comm.qty)
        })
      }
      qty = parseInt(item.qty) - parseInt(accumulate)
      // CONFIRMAR SI HAY PARA IMPRIMIR Y GUARDAR
      if (qty > 0) {
        toSave.set(item.id, {
          qty: qty,
          date: nowDateTime(new Date()),
          delivered: "",
        })

        listPrint.push([
          { type: "text", value: qty },
          {
            type: "text",
            value: `${item.descripcion_1} ${item.descripcion_2}`,
            style: "text-align:left",
          },
        ])
        if (item?.comment) {
          listPrint.push([
            "↑",
            {
              type: "text",
              value: item.comment,
              style: "font-weight: 700; text-align:left;",
            },
          ])
        }
      }
    }
  })

  let toPrint = []

  if (data.table) {
    toPrint.push({
      type: "text", // 'text' | 'barCode' | 'qrCode' | 'image' | 'table
      value: `Mesa: ${data.table}`,
      css: {
        "text-align": "left",
        width: "100%",
        "font-weight": "700",
        "font-size": "18px",
      },
    })
  }
  if (data.lounge) {
    toPrint.push({
      type: "text", // 'text' | 'barCode' | 'qrCode' | 'image' | 'table
      value: `Camarero/a: ${data.lounge}`,
      style: `text-align:left;`,
      css: { "font-weight": "700", "font-size": "18px" },
    })
  }
  toPrint.push(
    {
      type: "text", // 'text' | 'barCode' | 'qrCode' | 'image' | 'table
      value: `-----`,
      css: {
        "font-weight": "400",
        "font-size": "12px",
      },
    },
    {
      type: "text", // 'text' | 'barCode' | 'qrCode' | 'image' | 'table
      value: nowDateTime(new Date()),
      style: `text-align:left;`,
      css: {
        "martin-top": "6px",
        "martin-bottom": "12px",
        "font-weight": "700",
        "font-size": "12px",
      },
    },
    {
      type: "text", // 'text' | 'barCode' | 'qrCode' | 'image' | 'table
      value: `-----`,
      css: {
        "font-weight": "400",
        "font-size": "12px",
      },
    },
    {
      type: "table",
      tableBody: [...listPrint],
    }
  )
  return { data: toPrint, toSave: toSave }
}
