import { nowDateTime } from "utils/dateNow"
import formatPriceNumber from "utils/formatPriceNumber"

export default function dataCheck(data) {
  let listPrint = []
  let discounts = []
  data?.list.forEach((item) => {
    listPrint.push([
      { type: "text", value: item.qty },
      { type: "text", value: item.description, style: "text-align:left" },
      { type: "text", value: item.price, style: "text-align: right" },
    ])
    if (item?.discount) {
      listPrint.push([
        "",
        "",
        { type: "text", value: item.discount, style: "text-align: right" },
      ])
    }
  })
  if (
    data?.discountProducts ||
    data?.discountPromotions ||
    data?.discountGeneral
  ) {
    discounts.push([
      {
        type: "text",
        value: "Subtotal",
        style: "text-align: left; font-weight: 700;",
      },
      {
        type: "text",
        value: data?.subtotal.toFixed(2),
        style: "text-align: right; font-weight: 700;",
      },
    ])
  }
  if (data?.discountProducts) {
    discounts.push([
      {
        type: "text",
        value: "Desc. Productos",
        style: "text-align: left;",
      },
      {
        type: "text",
        value: data?.discountProducts.toFixed(2),
        style: "text-align: right;",
      },
    ])
  }
  if (data?.discountPromotions) {
    discounts.push([
      {
        type: "text",
        value: "Bonif. Promociones",
        style: "text-align: left;",
      },
      {
        type: "text",
        value: data?.discountPromotions.toFixed(2),
        style: "text-align: right;",
      },
    ])
  }
  if (data?.discountGeneral) {
    discounts.push([
      {
        type: "text",
        value: "Desc. General",
        style: "text-align: left;",
      },
      {
        type: "text",
        value: data?.discountGeneral.toFixed(2),
        style: "text-align: right;",
      },
    ])
  }

  let toPrint = []
  toPrint.push(
    {
      type: "text", // 'text' | 'barCode' | 'qrCode' | 'image' | 'table
      value: `Mesa: ${data.table}`,
      css: {
        "text-align": "left",
        width: "100%",
        "font-weight": "700",
        "font-size": "18px",
      },
    },
    {
      type: "text", // 'text' | 'barCode' | 'qrCode' | 'image' | 'table
      value: `Camarero/a: ${data.lounge}`,
      style: `text-align:left;`,
      css: { "font-weight": "700", "font-size": "18px" },
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
    },
    {
      type: "table",
      tableBody: [...discounts],
    },
    {
      type: "table",
      tableBody: [
        [
          {
            type: "text",
            value: "Total",
            style:
              "text-align: left; font-weight: 700; text-transorm: uppercase;",
          },
          {
            type: "text",
            value: formatPriceNumber(data.total),
            style:
              "text-align: right; font-weight: 700; text-transorm: uppercase;",
          },
        ],
      ],
      tableBodyStyle: "border-top: 1px solid #000",
    }
  )
  return toPrint
}
