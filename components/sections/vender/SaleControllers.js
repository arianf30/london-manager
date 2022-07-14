import InputQty from "./InputQty"
import InputProducts from "./InputProducts"
import CircleButton from "components/buttons/CircleButton"

export default function SaleControllers({ qty, updateQty, addItem }) {
  return (
    <div className="relative flex items-center justify-around w-full h-24 bg-negro2">
      <InputQty qty={qty} updateQty={updateQty} />
      <InputProducts addItem={addItem} />

      <CircleButton
        iconSVG={
          <svg
            viewBox="0 0 35.6 32"
            style={{
              fill: "currentcolor",
            }}
          >
            <g>
              <path
                d="M16,2.9l-0.9,1.3c-0.2,0.3-0.5,0.5-0.9,0.5s-0.7-0.2-0.9-0.5l-0.9-1.3l-0.9,1.3c-0.2,0.3-0.5,0.5-0.9,0.5
							s-0.7-0.2-0.9-0.5L9,2.9l-0.7,1v7.1h8.5V3.9h0L16,2.9z"
              ></path>
              <path
                d="M20.4,27.3h-5.2c-0.6,0-1-0.5-1-1s0.5-1,1-1h5.2c0.6,0,1,0.5,1,1C21.4,26.8,20.9,27.3,20.4,27.3z M0,22.5v5
							C0,30,2,32,4.5,32h26.6c2.5,0,4.5-2,4.5-4.5v-5H0z"
              ></path>
              <path
                d="M27.9,16.5c0,0.6-0.5,1-1,1c-0.6,0-1-0.5-1-1v-3.7c0-0.6,0.5-1,1-1s1,0.5,1,1V16.5z M19.9,17.6h-1
							c-0.6,0-1-0.5-1-1c0-0.6,0.5-1,1-1h1c0.6,0,1,0.5,1,1C21,17.1,20.5,17.6,19.9,17.6z M14.7,17.6h-1c-0.6,0-1-0.5-1-1
							c0-0.6,0.5-1,1-1h1c0.6,0,1,0.5,1,1C15.7,17.1,15.3,17.6,14.7,17.6z M9.4,17.6h-1c-0.6,0-1-0.5-1-1c0-0.6,0.5-1,1-1h1
							c0.6,0,1,0.5,1,1C10.5,17.1,10,17.6,9.4,17.6z M32.6,8.2c-0.1-0.5-0.5-0.8-1-0.8h-3.7V6h3.5c0.6,0,1-0.5,1-1V1c0-0.6-0.5-1-1-1
							h-9.2c-0.6,0-1,0.5-1,1v3.9c0,0.6,0.5,1,1,1h3.5v1.4h-7v4.7c0,0.6-0.5,1-1,1H7.2c-0.6,0-1-0.5-1-1V7.4H3.9c-0.5,0-0.9,0.3-1,0.8
							L0.2,20.4h35.1L32.6,8.2z"
              ></path>
            </g>
          </svg>
        }
        bg="bg-verde"
        size="big2"
        color="text-blanco1"
        shadow={true}
        theme="zoom"
      />
      <CircleButton
        iconSVG={
          <svg
            viewBox="0 0 17.9 17.9"
            style={{
              fill: "currentcolor",
            }}
          >
            <g>
              <path
                d="M17.4,1.6l-1.1-1.1c-0.6-0.6-1.6-0.6-2.2,0L0.5,14.1c-0.6,0.6-0.6,1.6,0,2.2l1.1,1.1c0.6,0.6,1.6,0.6,2.2,0
							L17.4,3.8C18,3.2,18,2.2,17.4,1.6z"
              ></path>
              <path
                d="M16.3,17.4l1.1-1.1c0.6-0.6,0.6-1.6,0-2.2L3.8,0.5c-0.6-0.6-1.6-0.6-2.2,0L0.5,1.6c-0.6,0.6-0.6,1.6,0,2.2
							l13.6,13.6C14.7,18,15.7,18,16.3,17.4z"
              ></path>
            </g>
          </svg>
        }
        iconSize="w-2/5"
        bg="bg-rojo"
        size="large"
        color="text-blanco1"
        shadow={true}
        theme="zoom"
      />
    </div>
  )
}
