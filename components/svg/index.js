class Icon {
  constructor(viewBox, svg) {
    this.viewBox = viewBox
    this.svg = <>{svg}</>
  }
}

const svgs = {
  arrowBottom: new Icon(
    "0 0 16 16",
    (
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.64645 5.64645C3.84171 5.45118 4.15829 5.45118 4.35355 5.64645L8 9.29289L11.6464 5.64645C11.8417 5.45118 12.1583 5.45118 12.3536 5.64645C12.5488 5.84171 12.5488 6.15829 12.3536 6.35355L8.35355 10.3536C8.15829 10.5488 7.84171 10.5488 7.64645 10.3536L3.64645 6.35355C3.45118 6.15829 3.45118 5.84171 3.64645 5.64645Z"
        fill="currentColor"
      />
    )
  ),
  arrowLeft: new Icon(
    "0 0 24 24",
    (
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.7071 5.29289C16.0976 5.68342 16.0976 6.31658 15.7071 6.70711L10.4142 12L15.7071 17.2929C16.0976 17.6834 16.0976 18.3166 15.7071 18.7071C15.3166 19.0976 14.6834 19.0976 14.2929 18.7071L8.29289 12.7071C7.90237 12.3166 7.90237 11.6834 8.29289 11.2929L14.2929 5.29289C14.6834 4.90237 15.3166 4.90237 15.7071 5.29289Z"
        fill="currentColor"
      />
    )
  ),
  arrowTop: new Icon(
    "0 0 16 16",
    (
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.64645 5.64645C7.84171 5.45118 8.15829 5.45118 8.35355 5.64645L12.3536 9.64645C12.5488 9.84171 12.5488 10.1583 12.3536 10.3536C12.1583 10.5488 11.8417 10.5488 11.6464 10.3536L8 6.70711L4.35355 10.3536C4.15829 10.5488 3.84171 10.5488 3.64645 10.3536C3.45118 10.1583 3.45118 9.84171 3.64645 9.64645L7.64645 5.64645Z"
        fill="currentColor"
      />
    )
  ),
  barcode: new Icon(
    "0 0 16 16",
    (
      <>
        <mask id="path-1-inside-1_959_1560" fill="currentColor">
          <path d="M1.33203 3.83333C1.33203 3.3471 1.52519 2.88079 1.869 2.53697C2.21282 2.19315 2.67913 2 3.16536 2H4.16536C4.29797 2 4.42515 2.05268 4.51892 2.14645C4.61269 2.24021 4.66536 2.36739 4.66536 2.5C4.66536 2.63261 4.61269 2.75979 4.51892 2.85355C4.42515 2.94732 4.29797 3 4.16536 3H3.16536C2.70536 3 2.33203 3.37333 2.33203 3.83333V4.83333C2.33203 4.96594 2.27935 5.09312 2.18558 5.18689C2.09182 5.28066 1.96464 5.33333 1.83203 5.33333C1.69942 5.33333 1.57225 5.28066 1.47848 5.18689C1.38471 5.09312 1.33203 4.96594 1.33203 4.83333V3.83333ZM11.332 2.5C11.332 2.36739 11.3847 2.24021 11.4785 2.14645C11.5722 2.05268 11.6994 2 11.832 2H12.832C13.3183 2 13.7846 2.19315 14.1284 2.53697C14.4722 2.88079 14.6654 3.3471 14.6654 3.83333V4.83333C14.6654 4.96594 14.6127 5.09312 14.5189 5.18689C14.4252 5.28066 14.298 5.33333 14.1654 5.33333C14.0328 5.33333 13.9056 5.28066 13.8118 5.18689C13.718 5.09312 13.6654 4.96594 13.6654 4.83333V3.83333C13.6654 3.37333 13.292 3 12.832 3H11.832C11.6994 3 11.5722 2.94732 11.4785 2.85355C11.3847 2.75979 11.332 2.63261 11.332 2.5V2.5ZM1.83203 10.6667C1.96464 10.6667 2.09182 10.7193 2.18558 10.8131C2.27935 10.9069 2.33203 11.0341 2.33203 11.1667V12.1667C2.33203 12.6267 2.70536 13 3.16536 13H4.16536C4.29797 13 4.42515 13.0527 4.51892 13.1464C4.61269 13.2402 4.66536 13.3674 4.66536 13.5C4.66536 13.6326 4.61269 13.7598 4.51892 13.8536C4.42515 13.9473 4.29797 14 4.16536 14H3.16536C2.67913 14 2.21282 13.8068 1.869 13.463C1.52519 13.1192 1.33203 12.6529 1.33203 12.1667V11.1667C1.33203 11.0341 1.38471 10.9069 1.47848 10.8131C1.57225 10.7193 1.69942 10.6667 1.83203 10.6667V10.6667ZM14.1654 10.6667C14.298 10.6667 14.4252 10.7193 14.5189 10.8131C14.6127 10.9069 14.6654 11.0341 14.6654 11.1667V12.1667C14.6654 12.6529 14.4722 13.1192 14.1284 13.463C13.7846 13.8068 13.3183 14 12.832 14H11.832C11.6994 14 11.5722 13.9473 11.4785 13.8536C11.3847 13.7598 11.332 13.6326 11.332 13.5C11.332 13.3674 11.3847 13.2402 11.4785 13.1464C11.5722 13.0527 11.6994 13 11.832 13H12.832C13.292 13 13.6654 12.6267 13.6654 12.1667V11.1667C13.6654 11.0341 13.718 10.9069 13.8118 10.8131C13.9056 10.7193 14.0328 10.6667 14.1654 10.6667V10.6667ZM3.83203 4.66667C3.96464 4.66667 4.09182 4.71935 4.18558 4.81311C4.27935 4.90688 4.33203 5.03406 4.33203 5.16667V10.8333C4.33203 10.9659 4.27935 11.0931 4.18558 11.1869C4.09182 11.2807 3.96464 11.3333 3.83203 11.3333C3.69942 11.3333 3.57225 11.2807 3.47848 11.1869C3.38471 11.0931 3.33203 10.9659 3.33203 10.8333V5.16667C3.33203 5.03406 3.38471 4.90688 3.47848 4.81311C3.57225 4.71935 3.69942 4.66667 3.83203 4.66667V4.66667ZM6.9987 5.16667C6.9987 5.03406 6.94602 4.90688 6.85225 4.81311C6.75848 4.71935 6.63131 4.66667 6.4987 4.66667C6.36609 4.66667 6.23891 4.71935 6.14514 4.81311C6.05138 4.90688 5.9987 5.03406 5.9987 5.16667V10.8333C5.9987 10.9659 6.05138 11.0931 6.14514 11.1869C6.23891 11.2807 6.36609 11.3333 6.4987 11.3333C6.63131 11.3333 6.75848 11.2807 6.85225 11.1869C6.94602 11.0931 6.9987 10.9659 6.9987 10.8333V5.16667ZM9.16536 4.66667C9.29797 4.66667 9.42515 4.71935 9.51892 4.81311C9.61269 4.90688 9.66536 5.03406 9.66536 5.16667V10.8333C9.66536 10.9659 9.61269 11.0931 9.51892 11.1869C9.42515 11.2807 9.29797 11.3333 9.16536 11.3333C9.03276 11.3333 8.90558 11.2807 8.81181 11.1869C8.71804 11.0931 8.66536 10.9659 8.66536 10.8333V5.16667C8.66536 5.03406 8.71804 4.90688 8.81181 4.81311C8.90558 4.71935 9.03276 4.66667 9.16536 4.66667V4.66667ZM12.332 5.16667C12.332 5.03406 12.2794 4.90688 12.1856 4.81311C12.0918 4.71935 11.9646 4.66667 11.832 4.66667C11.6994 4.66667 11.5722 4.71935 11.4785 4.81311C11.3847 4.90688 11.332 5.03406 11.332 5.16667V10.8333C11.332 10.9659 11.3847 11.0931 11.4785 11.1869C11.5722 11.2807 11.6994 11.3333 11.832 11.3333C11.9646 11.3333 12.0918 11.2807 12.1856 11.1869C12.2794 11.0931 12.332 10.9659 12.332 10.8333V5.16667Z" />
        </mask>
        <path
          d="M1.33203 3.83333C1.33203 3.3471 1.52519 2.88079 1.869 2.53697C2.21282 2.19315 2.67913 2 3.16536 2H4.16536C4.29797 2 4.42515 2.05268 4.51892 2.14645C4.61269 2.24021 4.66536 2.36739 4.66536 2.5C4.66536 2.63261 4.61269 2.75979 4.51892 2.85355C4.42515 2.94732 4.29797 3 4.16536 3H3.16536C2.70536 3 2.33203 3.37333 2.33203 3.83333V4.83333C2.33203 4.96594 2.27935 5.09312 2.18558 5.18689C2.09182 5.28066 1.96464 5.33333 1.83203 5.33333C1.69942 5.33333 1.57225 5.28066 1.47848 5.18689C1.38471 5.09312 1.33203 4.96594 1.33203 4.83333V3.83333ZM11.332 2.5C11.332 2.36739 11.3847 2.24021 11.4785 2.14645C11.5722 2.05268 11.6994 2 11.832 2H12.832C13.3183 2 13.7846 2.19315 14.1284 2.53697C14.4722 2.88079 14.6654 3.3471 14.6654 3.83333V4.83333C14.6654 4.96594 14.6127 5.09312 14.5189 5.18689C14.4252 5.28066 14.298 5.33333 14.1654 5.33333C14.0328 5.33333 13.9056 5.28066 13.8118 5.18689C13.718 5.09312 13.6654 4.96594 13.6654 4.83333V3.83333C13.6654 3.37333 13.292 3 12.832 3H11.832C11.6994 3 11.5722 2.94732 11.4785 2.85355C11.3847 2.75979 11.332 2.63261 11.332 2.5V2.5ZM1.83203 10.6667C1.96464 10.6667 2.09182 10.7193 2.18558 10.8131C2.27935 10.9069 2.33203 11.0341 2.33203 11.1667V12.1667C2.33203 12.6267 2.70536 13 3.16536 13H4.16536C4.29797 13 4.42515 13.0527 4.51892 13.1464C4.61269 13.2402 4.66536 13.3674 4.66536 13.5C4.66536 13.6326 4.61269 13.7598 4.51892 13.8536C4.42515 13.9473 4.29797 14 4.16536 14H3.16536C2.67913 14 2.21282 13.8068 1.869 13.463C1.52519 13.1192 1.33203 12.6529 1.33203 12.1667V11.1667C1.33203 11.0341 1.38471 10.9069 1.47848 10.8131C1.57225 10.7193 1.69942 10.6667 1.83203 10.6667V10.6667ZM14.1654 10.6667C14.298 10.6667 14.4252 10.7193 14.5189 10.8131C14.6127 10.9069 14.6654 11.0341 14.6654 11.1667V12.1667C14.6654 12.6529 14.4722 13.1192 14.1284 13.463C13.7846 13.8068 13.3183 14 12.832 14H11.832C11.6994 14 11.5722 13.9473 11.4785 13.8536C11.3847 13.7598 11.332 13.6326 11.332 13.5C11.332 13.3674 11.3847 13.2402 11.4785 13.1464C11.5722 13.0527 11.6994 13 11.832 13H12.832C13.292 13 13.6654 12.6267 13.6654 12.1667V11.1667C13.6654 11.0341 13.718 10.9069 13.8118 10.8131C13.9056 10.7193 14.0328 10.6667 14.1654 10.6667V10.6667ZM3.83203 4.66667C3.96464 4.66667 4.09182 4.71935 4.18558 4.81311C4.27935 4.90688 4.33203 5.03406 4.33203 5.16667V10.8333C4.33203 10.9659 4.27935 11.0931 4.18558 11.1869C4.09182 11.2807 3.96464 11.3333 3.83203 11.3333C3.69942 11.3333 3.57225 11.2807 3.47848 11.1869C3.38471 11.0931 3.33203 10.9659 3.33203 10.8333V5.16667C3.33203 5.03406 3.38471 4.90688 3.47848 4.81311C3.57225 4.71935 3.69942 4.66667 3.83203 4.66667V4.66667ZM6.9987 5.16667C6.9987 5.03406 6.94602 4.90688 6.85225 4.81311C6.75848 4.71935 6.63131 4.66667 6.4987 4.66667C6.36609 4.66667 6.23891 4.71935 6.14514 4.81311C6.05138 4.90688 5.9987 5.03406 5.9987 5.16667V10.8333C5.9987 10.9659 6.05138 11.0931 6.14514 11.1869C6.23891 11.2807 6.36609 11.3333 6.4987 11.3333C6.63131 11.3333 6.75848 11.2807 6.85225 11.1869C6.94602 11.0931 6.9987 10.9659 6.9987 10.8333V5.16667ZM9.16536 4.66667C9.29797 4.66667 9.42515 4.71935 9.51892 4.81311C9.61269 4.90688 9.66536 5.03406 9.66536 5.16667V10.8333C9.66536 10.9659 9.61269 11.0931 9.51892 11.1869C9.42515 11.2807 9.29797 11.3333 9.16536 11.3333C9.03276 11.3333 8.90558 11.2807 8.81181 11.1869C8.71804 11.0931 8.66536 10.9659 8.66536 10.8333V5.16667C8.66536 5.03406 8.71804 4.90688 8.81181 4.81311C8.90558 4.71935 9.03276 4.66667 9.16536 4.66667V4.66667ZM12.332 5.16667C12.332 5.03406 12.2794 4.90688 12.1856 4.81311C12.0918 4.71935 11.9646 4.66667 11.832 4.66667C11.6994 4.66667 11.5722 4.71935 11.4785 4.81311C11.3847 4.90688 11.332 5.03406 11.332 5.16667V10.8333C11.332 10.9659 11.3847 11.0931 11.4785 11.1869C11.5722 11.2807 11.6994 11.3333 11.832 11.3333C11.9646 11.3333 12.0918 11.2807 12.1856 11.1869C12.2794 11.0931 12.332 10.9659 12.332 10.8333V5.16667Z"
          fill="currentColor"
          stroke="currentColor"
          strokeWidth="2"
          mask="url(#path-1-inside-1_959_1560)"
        />
      </>
    )
  ),
  caja: new Icon(
    "0 0 35.6 32",
    (
      <g>
        <path
          fill="currentColor"
          d="M16,2.9l-0.9,1.3c-0.2,0.3-0.5,0.5-0.9,0.5s-0.7-0.2-0.9-0.5l-0.9-1.3l-0.9,1.3c-0.2,0.3-0.5,0.5-0.9,0.5
							s-0.7-0.2-0.9-0.5L9,2.9l-0.7,1v7.1h8.5V3.9h0L16,2.9z"
        ></path>
        <path
          fill="currentColor"
          d="M20.4,27.3h-5.2c-0.6,0-1-0.5-1-1s0.5-1,1-1h5.2c0.6,0,1,0.5,1,1C21.4,26.8,20.9,27.3,20.4,27.3z M0,22.5v5
							C0,30,2,32,4.5,32h26.6c2.5,0,4.5-2,4.5-4.5v-5H0z"
        ></path>
        <path
          fill="currentColor"
          d="M27.9,16.5c0,0.6-0.5,1-1,1c-0.6,0-1-0.5-1-1v-3.7c0-0.6,0.5-1,1-1s1,0.5,1,1V16.5z M19.9,17.6h-1
							c-0.6,0-1-0.5-1-1c0-0.6,0.5-1,1-1h1c0.6,0,1,0.5,1,1C21,17.1,20.5,17.6,19.9,17.6z M14.7,17.6h-1c-0.6,0-1-0.5-1-1
							c0-0.6,0.5-1,1-1h1c0.6,0,1,0.5,1,1C15.7,17.1,15.3,17.6,14.7,17.6z M9.4,17.6h-1c-0.6,0-1-0.5-1-1c0-0.6,0.5-1,1-1h1
							c0.6,0,1,0.5,1,1C10.5,17.1,10,17.6,9.4,17.6z M32.6,8.2c-0.1-0.5-0.5-0.8-1-0.8h-3.7V6h3.5c0.6,0,1-0.5,1-1V1c0-0.6-0.5-1-1-1
							h-9.2c-0.6,0-1,0.5-1,1v3.9c0,0.6,0.5,1,1,1h3.5v1.4h-7v4.7c0,0.6-0.5,1-1,1H7.2c-0.6,0-1-0.5-1-1V7.4H3.9c-0.5,0-0.9,0.3-1,0.8
							L0.2,20.4h35.1L32.6,8.2z"
        ></path>
      </g>
    )
  ),
  cruz: new Icon(
    "0 0 17.9 17.9",
    (
      <g>
        <path
          fill="currentColor"
          d="M17.4,1.6l-1.1-1.1c-0.6-0.6-1.6-0.6-2.2,0L0.5,14.1c-0.6,0.6-0.6,1.6,0,2.2l1.1,1.1c0.6,0.6,1.6,0.6,2.2,0
      L17.4,3.8C18,3.2,18,2.2,17.4,1.6z"
        ></path>
        <path
          fill="currentColor"
          d="M16.3,17.4l1.1-1.1c0.6-0.6,0.6-1.6,0-2.2L3.8,0.5c-0.6-0.6-1.6-0.6-2.2,0L0.5,1.6c-0.6,0.6-0.6,1.6,0,2.2
      l13.6,13.6C14.7,18,15.7,18,16.3,17.4z"
        ></path>
      </g>
    )
  ),
  downloadCloud: new Icon(
    "0 0 14 11",
    (
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.33437 0.99717C6.01461 0.972707 6.69154 1.10288 7.31419 1.37789C7.93684 1.6529 8.489 2.06558 8.92908 2.58486C9.28433 3.00404 9.55908 3.48387 9.74079 4.00009L10.0002 4.00009C10.6377 3.99967 11.2593 4.20239 11.7738 4.57883C12.2885 4.95534 12.6698 5.48607 12.8624 6.09398C13.055 6.7019 13.0489 7.35537 12.845 7.95958C12.641 8.56378 12.2498 9.08727 11.7282 9.45409C11.5023 9.61293 11.1904 9.55858 11.0316 9.3327C10.8727 9.10681 10.9271 8.79493 11.153 8.63609C11.5007 8.39155 11.7615 8.04255 11.8975 7.63975C12.0335 7.23695 12.0375 6.8013 11.9091 6.39602C11.7807 5.99074 11.5265 5.63692 11.1834 5.38591C10.8403 5.1349 10.4261 4.99976 10.001 5.00009H9.37058C9.1423 5.00009 8.943 4.84548 8.88627 4.62436C8.75468 4.11155 8.50848 3.63528 8.16619 3.2314C7.82391 2.82751 7.39446 2.50654 6.91017 2.29264C6.42589 2.07874 5.89939 1.9775 5.37031 1.99652C4.84123 2.01555 4.32337 2.15435 3.8557 2.40248C3.38803 2.65061 2.98274 3.00161 2.67035 3.42904C2.35796 3.85646 2.1466 4.34919 2.05219 4.87013C1.95778 5.39106 1.98278 5.92662 2.12531 6.43649C2.26783 6.94637 2.52417 7.41727 2.87502 7.81374C3.05802 8.02053 3.03873 8.33653 2.83193 8.51953C2.62513 8.70253 2.30914 8.68324 2.12614 8.47644C1.67505 7.96669 1.34547 7.36125 1.16223 6.7057C0.97898 6.05015 0.946839 5.36157 1.06822 4.6918C1.1896 4.02203 1.46135 3.38852 1.86299 2.83897C2.26464 2.28942 2.78572 1.83814 3.38701 1.51912C3.9883 1.20009 4.65413 1.02163 5.33437 0.99717ZM7 5.5C7.27614 5.5 7.5 5.72386 7.5 6L7.50001 9.29292L8.64647 8.14647C8.84173 7.95121 9.15831 7.95121 9.35357 8.14647C9.54884 8.34173 9.54884 8.65831 9.35357 8.85357L7.35357 10.8536C7.2598 10.9473 7.13263 11 7.00002 11C6.86741 11 6.74023 10.9473 6.64647 10.8536L4.64647 8.85357C4.45121 8.65831 4.45121 8.34173 4.64647 8.14647C4.84173 7.95121 5.15831 7.95121 5.35357 8.14647L6.50001 9.29291L6.5 6C6.5 5.72386 6.72386 5.5 7 5.5Z"
        fill="currentColor"
      />
    )
  ),
  edit: new Icon(
    "0 0 20 20",
    (
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.0009 4.58409C13.8022 4.58409 13.6117 4.66302 13.4712 4.80353L5.26809 13.0066L4.91491 14.4193L6.32764 14.0662L14.5307 5.86308C14.6003 5.79351 14.6555 5.71091 14.6931 5.62001C14.7308 5.52912 14.7502 5.43169 14.7502 5.3333C14.7502 5.23492 14.7308 5.13749 14.6931 5.04659C14.6555 4.95569 14.6003 4.8731 14.5307 4.80353C14.4612 4.73396 14.3786 4.67877 14.2877 4.64112C14.1968 4.60347 14.0993 4.58409 14.0009 4.58409ZM12.5307 3.86308C12.9207 3.47315 13.4495 3.25409 14.0009 3.25409C14.274 3.25409 14.5444 3.30787 14.7966 3.41236C15.0489 3.51685 15.2781 3.67 15.4712 3.86308C15.6642 4.05615 15.8174 4.28536 15.9219 4.53762C16.0264 4.78988 16.0802 5.06026 16.0802 5.3333C16.0802 5.60635 16.0264 5.87672 15.9219 6.12898C15.8174 6.38125 15.6642 6.61046 15.4712 6.80353L7.13784 15.1369C7.05262 15.2221 6.94583 15.2825 6.8289 15.3118L4.16224 15.9784C3.93562 16.0351 3.6959 15.9687 3.53073 15.8035C3.36555 15.6384 3.29915 15.3986 3.35581 15.172L4.02247 12.5053C4.05171 12.3884 4.11217 12.2816 4.19739 12.1964L12.5307 3.86308ZM9.33595 15.3333C9.33595 14.9661 9.63368 14.6683 10.001 14.6683H16.001C16.3682 14.6683 16.666 14.9661 16.666 15.3333C16.666 15.7006 16.3682 15.9983 16.001 15.9983H10.001C9.63368 15.9983 9.33595 15.7006 9.33595 15.3333Z"
        fill="currentColor"
      />
    )
  ),
  fire: new Icon(
    "0 0 32 32",
    (
      <path
        d="M21.227 7.1579C19.7111 5.34226 18.0252 3.67552 16.1924 2.18037C16.0663 2.08215 15.9152 2.02127 15.7563 2.00464C15.5974 1.98801 15.4369 2.0163 15.2933 2.08631C15.1496 2.15631 15.0285 2.26521 14.9437 2.40064C14.8588 2.53606 14.8137 2.69257 14.8133 2.85237V6.60475C14.8133 7.32171 14.5421 8.97199 13.8442 9.40475C13.2149 9.82837 11.893 8.60094 11.288 7.54037C11.2193 7.42017 11.1225 7.31846 11.0058 7.244C10.8891 7.16955 10.756 7.12457 10.6181 7.11295C10.4801 7.10133 10.3414 7.12341 10.2139 7.1773C10.0864 7.23118 9.9739 7.31526 9.8861 7.42228C7.304 10.5735 5 14.5476 5 18.639C5 21.468 6.12381 24.1811 8.12419 26.1815C10.1246 28.1819 12.8377 29.3057 15.6667 29.3057C18.4956 29.3057 21.2087 28.1819 23.2091 26.1815C25.2095 24.1811 26.3333 21.468 26.3333 18.639C26.3333 14.4417 23.9097 10.3655 21.2286 7.1579H21.227ZM10.9726 15.6524C10.9726 15.3148 11.0727 14.9849 11.2602 14.7042C11.4477 14.4235 11.7143 14.2048 12.0261 14.0756C12.338 13.9464 12.6811 13.9126 13.0122 13.9785C13.3433 14.0444 13.6474 14.2069 13.886 14.4456C14.1247 14.6843 14.2873 14.9884 14.3531 15.3194C14.419 15.6505 14.3852 15.9936 14.256 16.3055C14.1268 16.6173 13.9081 16.8839 13.6274 17.0714C13.3468 17.2589 13.0168 17.359 12.6792 17.359C12.2268 17.3584 11.793 17.1784 11.4731 16.8585C11.1532 16.5386 10.9732 16.1048 10.9726 15.6524ZM13.3528 23.0025C13.284 23.0912 13.1985 23.1655 13.101 23.2211C13.0036 23.2767 12.8961 23.3126 12.7848 23.3268C12.6735 23.3409 12.5605 23.3329 12.4522 23.3034C12.344 23.2738 12.2426 23.2232 12.1539 23.1545C12.0652 23.0857 11.9909 23.0002 11.9353 22.9027C11.8796 22.8053 11.8437 22.6978 11.8296 22.5865C11.8155 22.4752 11.8235 22.3622 11.853 22.2539C11.8826 22.1457 11.9332 22.0443 12.0019 21.9556L17.9752 14.2756C18.0433 14.1853 18.1287 14.1093 18.2264 14.0523C18.3242 13.9952 18.4322 13.9582 18.5444 13.9433C18.6566 13.9284 18.7706 13.936 18.8798 13.9656C18.989 13.9951 19.0912 14.0462 19.1806 14.1156C19.2699 14.1851 19.3445 14.2716 19.4001 14.3702C19.4556 14.4687 19.491 14.5774 19.5042 14.6898C19.5174 14.8021 19.5081 14.916 19.4769 15.0248C19.4456 15.1335 19.3931 15.235 19.3223 15.3232L13.3528 23.0025ZM18.6526 23.3316C18.315 23.3316 17.9851 23.2315 17.7044 23.044C17.4237 22.8565 17.205 22.5899 17.0758 22.2781C16.9466 21.9662 16.9128 21.6231 16.9787 21.292C17.0445 20.9609 17.2071 20.6568 17.4458 20.4181C17.6845 20.1795 17.9886 20.0169 18.3196 19.9511C18.6507 19.8852 18.9938 19.919 19.3057 20.0482C19.6175 20.1774 19.8841 20.3961 20.0716 20.6768C20.2591 20.9574 20.3592 21.2874 20.3592 21.6249C20.3586 22.0774 20.1786 22.5111 19.8587 22.8311C19.5388 23.151 19.105 23.331 18.6526 23.3316V23.3316Z"
        fill="currentColor"
      />
    )
  ),
  fullScreen: new Icon(
    "0 0 24 24",
    (
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.05546 3.05546C3.57118 2.53973 4.27065 2.25 5 2.25H8C8.41421 2.25 8.75 2.58579 8.75 3C8.75 3.41421 8.41421 3.75 8 3.75H5C4.66848 3.75 4.35054 3.8817 4.11612 4.11612C3.8817 4.35054 3.75 4.66848 3.75 5V8C3.75 8.41421 3.41421 8.75 3 8.75C2.58579 8.75 2.25 8.41421 2.25 8V5C2.25 4.27065 2.53973 3.57118 3.05546 3.05546ZM15.25 3C15.25 2.58579 15.5858 2.25 16 2.25H19C19.7293 2.25 20.4288 2.53973 20.9445 3.05546C21.4603 3.57118 21.75 4.27065 21.75 5V8C21.75 8.41421 21.4142 8.75 21 8.75C20.5858 8.75 20.25 8.41421 20.25 8V5C20.25 4.66848 20.1183 4.35054 19.8839 4.11612C19.6495 3.8817 19.3315 3.75 19 3.75H16C15.5858 3.75 15.25 3.41421 15.25 3ZM3 15.25C3.41421 15.25 3.75 15.5858 3.75 16V19C3.75 19.3315 3.8817 19.6495 4.11612 19.8839C4.35054 20.1183 4.66848 20.25 5 20.25H8C8.41421 20.25 8.75 20.5858 8.75 21C8.75 21.4142 8.41421 21.75 8 21.75H5C4.27065 21.75 3.57118 21.4603 3.05546 20.9445C2.53973 20.4288 2.25 19.7293 2.25 19V16C2.25 15.5858 2.58579 15.25 3 15.25ZM21 15.25C21.4142 15.25 21.75 15.5858 21.75 16V19C21.75 19.7293 21.4603 20.4288 20.9445 20.9445C20.4288 21.4603 19.7293 21.75 19 21.75H16C15.5858 21.75 15.25 21.4142 15.25 21C15.25 20.5858 15.5858 20.25 16 20.25H19C19.3315 20.25 19.6495 20.1183 19.8839 19.8839C20.1183 19.6495 20.25 19.3315 20.25 19V16C20.25 15.5858 20.5858 15.25 21 15.25Z"
        fill="currentColor"
      />
    )
  ),
  grid: new Icon(
    "0 0 24 24",
    (
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.25 3C2.25 2.58579 2.58579 2.25 3 2.25H10C10.4142 2.25 10.75 2.58579 10.75 3V10C10.75 10.4142 10.4142 10.75 10 10.75H3C2.58579 10.75 2.25 10.4142 2.25 10V3ZM3.75 3.75V9.25H9.25V3.75H3.75ZM13.25 3C13.25 2.58579 13.5858 2.25 14 2.25H21C21.4142 2.25 21.75 2.58579 21.75 3V10C21.75 10.4142 21.4142 10.75 21 10.75H14C13.5858 10.75 13.25 10.4142 13.25 10V3ZM14.75 3.75V9.25H20.25V3.75H14.75ZM2.25 14C2.25 13.5858 2.58579 13.25 3 13.25H10C10.4142 13.25 10.75 13.5858 10.75 14V21C10.75 21.4142 10.4142 21.75 10 21.75H3C2.58579 21.75 2.25 21.4142 2.25 21V14ZM3.75 14.75V20.25H9.25V14.75H3.75ZM13.25 14C13.25 13.5858 13.5858 13.25 14 13.25H21C21.4142 13.25 21.75 13.5858 21.75 14V21C21.75 21.4142 21.4142 21.75 21 21.75H14C13.5858 21.75 13.25 21.4142 13.25 21V14ZM14.75 14.75V20.25H20.25V14.75H14.75Z"
        fill="currentColor"
      />
    )
  ),
  help: new Icon(
    "0 0 16 16",
    (
      <>
        <mask id="path-1-inside-1_988_7080" fill="currentColor">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8 1.97674C4.67345 1.97674 1.97674 4.67345 1.97674 8C1.97674 11.3266 4.67345 14.0233 8 14.0233C11.3266 14.0233 14.0233 11.3266 14.0233 8C14.0233 4.67345 11.3266 1.97674 8 1.97674ZM1 8C1 4.13401 4.13401 1 8 1C11.866 1 15 4.13401 15 8C15 11.866 11.866 15 8 15C4.13401 15 1 11.866 1 8ZM7.51099 11.2558C7.51099 10.9861 7.72964 10.7674 7.99936 10.7674H8.00588C8.2756 10.7674 8.49425 10.9861 8.49425 11.2558C8.49425 11.5255 8.2756 11.7442 8.00588 11.7442H7.99936C7.72964 11.7442 7.51099 11.5255 7.51099 11.2558Z"
          />
          <path d="M7.62124 9.01713C7.57761 9.27454 7.75174 9.52294 8.01283 9.52171C8.4048 9.51987 8.79374 9.4339 9.15264 9.26741C9.65527 9.03426 10.0754 8.65416 10.3575 8.17729C10.6396 7.70042 10.7705 7.14922 10.7328 6.59643C10.6951 6.04365 10.4907 5.51528 10.1465 5.08108C9.80236 4.64688 9.33459 4.32727 8.80499 4.16444C8.27539 4.0016 7.70886 4.00321 7.18019 4.16904C6.65153 4.33487 6.18558 4.65712 5.84386 5.09326C5.59985 5.4047 5.42738 5.76375 5.33612 6.14495C5.27534 6.39887 5.47743 6.6251 5.73801 6.64137C5.99859 6.65764 6.21718 6.45565 6.30078 6.20831C6.36541 6.01708 6.46222 5.83705 6.58811 5.67638C6.81187 5.39079 7.11699 5.17977 7.46317 5.07118C7.80936 4.96259 8.18033 4.96154 8.52713 5.06816C8.87392 5.17479 9.18023 5.38408 9.40561 5.6684C9.63099 5.95273 9.76484 6.29872 9.7895 6.66069C9.81416 7.02267 9.72847 7.38362 9.54373 7.69588C9.359 8.00815 9.08391 8.25704 8.75478 8.40972C8.56962 8.49561 8.37225 8.54878 8.17132 8.56806C7.91142 8.593 7.66487 8.75971 7.62124 9.01713Z" />
        </mask>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M8 1.97674C4.67345 1.97674 1.97674 4.67345 1.97674 8C1.97674 11.3266 4.67345 14.0233 8 14.0233C11.3266 14.0233 14.0233 11.3266 14.0233 8C14.0233 4.67345 11.3266 1.97674 8 1.97674ZM1 8C1 4.13401 4.13401 1 8 1C11.866 1 15 4.13401 15 8C15 11.866 11.866 15 8 15C4.13401 15 1 11.866 1 8ZM7.51099 11.2558C7.51099 10.9861 7.72964 10.7674 7.99936 10.7674H8.00588C8.2756 10.7674 8.49425 10.9861 8.49425 11.2558C8.49425 11.5255 8.2756 11.7442 8.00588 11.7442H7.99936C7.72964 11.7442 7.51099 11.5255 7.51099 11.2558Z"
          fill="currentColor"
        />
        <path
          d="M7.62124 9.01713C7.57761 9.27454 7.75174 9.52294 8.01283 9.52171C8.4048 9.51987 8.79374 9.4339 9.15264 9.26741C9.65527 9.03426 10.0754 8.65416 10.3575 8.17729C10.6396 7.70042 10.7705 7.14922 10.7328 6.59643C10.6951 6.04365 10.4907 5.51528 10.1465 5.08108C9.80236 4.64688 9.33459 4.32727 8.80499 4.16444C8.27539 4.0016 7.70886 4.00321 7.18019 4.16904C6.65153 4.33487 6.18558 4.65712 5.84386 5.09326C5.59985 5.4047 5.42738 5.76375 5.33612 6.14495C5.27534 6.39887 5.47743 6.6251 5.73801 6.64137C5.99859 6.65764 6.21718 6.45565 6.30078 6.20831C6.36541 6.01708 6.46222 5.83705 6.58811 5.67638C6.81187 5.39079 7.11699 5.17977 7.46317 5.07118C7.80936 4.96259 8.18033 4.96154 8.52713 5.06816C8.87392 5.17479 9.18023 5.38408 9.40561 5.6684C9.63099 5.95273 9.76484 6.29872 9.7895 6.66069C9.81416 7.02267 9.72847 7.38362 9.54373 7.69588C9.359 8.00815 9.08391 8.25704 8.75478 8.40972C8.56962 8.49561 8.37225 8.54878 8.17132 8.56806C7.91142 8.593 7.66487 8.75971 7.62124 9.01713Z"
          fill="currentColor"
        />
        <path
          d="M9.15264 9.26741L8.73184 8.36026L8.73184 8.36026L9.15264 9.26741ZM5.84386 5.09326L6.63102 5.71001L5.84386 5.09326ZM6.58811 5.67638L7.37527 6.29313L7.37527 6.29313L6.58811 5.67638ZM8.75478 8.40972L8.33397 7.50257L8.33397 7.50257L8.75478 8.40972ZM8.17132 8.56806L8.0758 7.57263L8.17132 8.56806ZM6.30078 6.20831L5.35342 5.88812L5.35342 5.88812L6.30078 6.20831ZM5.33612 6.14495L4.3636 5.91215L5.33612 6.14495ZM8.01283 9.52171L8.01752 10.5217L8.01283 9.52171ZM2.97674 8C2.97674 5.22573 5.22573 2.97674 8 2.97674V0.976744C4.12116 0.976744 0.976744 4.12116 0.976744 8H2.97674ZM8 13.0233C5.22573 13.0233 2.97674 10.7743 2.97674 8H0.976744C0.976744 11.8788 4.12116 15.0233 8 15.0233V13.0233ZM13.0233 8C13.0233 10.7743 10.7743 13.0233 8 13.0233V15.0233C11.8788 15.0233 15.0233 11.8788 15.0233 8H13.0233ZM8 2.97674C10.7743 2.97674 13.0233 5.22573 13.0233 8H15.0233C15.0233 4.12116 11.8788 0.976744 8 0.976744V2.97674ZM8 0C3.58172 0 0 3.58172 0 8H2C2 4.68629 4.68629 2 8 2V0ZM16 8C16 3.58172 12.4183 0 8 0V2C11.3137 2 14 4.68629 14 8H16ZM8 16C12.4183 16 16 12.4183 16 8H14C14 11.3137 11.3137 14 8 14V16ZM0 8C0 12.4183 3.58172 16 8 16V14C4.68629 14 2 11.3137 2 8H0ZM7.99936 9.76744C7.17735 9.76744 6.51099 10.4338 6.51099 11.2558H8.51099C8.51099 11.5384 8.28193 11.7674 7.99936 11.7674V9.76744ZM8.00588 9.76744H7.99936V11.7674H8.00588V9.76744ZM9.49425 11.2558C9.49425 10.4338 8.82788 9.76744 8.00588 9.76744V11.7674C7.72331 11.7674 7.49425 11.5384 7.49425 11.2558H9.49425ZM8.00588 12.7442C8.82788 12.7442 9.49425 12.0778 9.49425 11.2558H7.49425C7.49425 10.9732 7.72331 10.7442 8.00588 10.7442V12.7442ZM7.99936 12.7442H8.00588V10.7442H7.99936V12.7442ZM6.51099 11.2558C6.51099 12.0778 7.17736 12.7442 7.99936 12.7442V10.7442C8.28193 10.7442 8.51099 10.9732 8.51099 11.2558H6.51099ZM8.01752 10.5217C8.55257 10.5192 9.08351 10.4018 9.57345 10.1746L8.73184 8.36026C8.50397 8.46596 8.25703 8.52056 8.00814 8.52172L8.01752 10.5217ZM9.57345 10.1746C10.2596 9.85629 10.833 9.33742 11.2181 8.68646L9.49681 7.66812C9.31769 7.97089 9.05096 8.21223 8.73184 8.36026L9.57345 10.1746ZM11.2181 8.68646C11.6032 8.0355 11.7819 7.28306 11.7305 6.52846L9.73511 6.6644C9.75902 7.01537 9.67593 7.36535 9.49681 7.66812L11.2181 8.68646ZM11.7305 6.52846C11.6791 5.77386 11.4 5.0526 10.9302 4.45989L9.36288 5.70227C9.58141 5.97795 9.7112 6.31343 9.73511 6.6644L11.7305 6.52846ZM10.9302 4.45989C10.4604 3.86717 9.82182 3.43088 9.09888 3.2086L8.51111 5.12028C8.84736 5.22366 9.14435 5.42659 9.36288 5.70227L10.9302 4.45989ZM9.09888 3.2086C8.37593 2.98632 7.60257 2.98851 6.8809 3.21488L7.47949 5.1232C7.81515 5.01791 8.17485 5.01689 8.51111 5.12028L9.09888 3.2086ZM6.8809 3.21488C6.15923 3.44125 5.52317 3.88115 5.0567 4.47652L6.63102 5.71001C6.84799 5.43309 7.14383 5.22849 7.47949 5.1232L6.8809 3.21488ZM5.0567 4.47652C4.72359 4.90166 4.48816 5.39179 4.3636 5.91215L6.30865 6.37775C6.36659 6.1357 6.4761 5.90774 6.63102 5.71001L5.0567 4.47652ZM7.24813 6.5285C7.27673 6.44386 7.31957 6.36422 7.37527 6.29313L5.80094 5.05964C5.60487 5.30989 5.45408 5.59029 5.35342 5.88812L7.24813 6.5285ZM7.37527 6.29313C7.47428 6.16676 7.60929 6.07339 7.76246 6.02534L7.16388 4.11702C6.62469 4.28615 6.14946 4.61482 5.80094 5.05964L7.37527 6.29313ZM7.76246 6.02534C7.91564 5.97729 8.07979 5.97683 8.23324 6.024L8.82101 4.11232C8.28087 3.94625 7.70307 3.94789 7.16388 4.11702L7.76246 6.02534ZM8.23324 6.024C8.38669 6.07118 8.52222 6.16379 8.62195 6.2896L10.1893 5.04721C9.83823 4.60437 9.36115 4.2784 8.82101 4.11232L8.23324 6.024ZM8.62195 6.2896C8.72167 6.4154 8.7809 6.5685 8.79181 6.72866L10.7872 6.59272C10.7488 6.02894 10.5403 5.49005 10.1893 5.04721L8.62195 6.2896ZM8.79181 6.72866C8.80273 6.88883 8.76481 7.04854 8.68307 7.18671L10.4044 8.20505C10.6921 7.71869 10.8256 7.15651 10.7872 6.59272L8.79181 6.72866ZM8.68307 7.18671C8.60133 7.32488 8.47961 7.43501 8.33397 7.50257L9.17559 9.31687C9.68821 9.07907 10.1167 8.69141 10.4044 8.20505L8.68307 7.18671ZM8.33397 7.50257C8.25205 7.54057 8.16473 7.5641 8.0758 7.57263L8.26683 9.56349C8.57977 9.53346 8.88719 9.45065 9.17559 9.31687L8.33397 7.50257ZM8.0758 7.57263C7.5274 7.62525 6.77851 8.00514 6.6353 8.85001L8.60718 9.18425C8.58067 9.34064 8.49367 9.44488 8.42676 9.4966C8.36581 9.54371 8.31009 9.55934 8.26683 9.56349L8.0758 7.57263ZM5.6757 7.63943C6.53095 7.69283 7.07173 7.05041 7.24813 6.5285L5.35342 5.88812C5.36734 5.84695 5.39526 5.79627 5.45505 5.74768C5.52068 5.69434 5.64201 5.63343 5.80033 5.64331L5.6757 7.63943ZM4.3636 5.91215C4.13032 6.88669 4.9213 7.59232 5.6757 7.63943L5.80033 5.64331C5.94008 5.65204 6.08076 5.71764 6.18385 5.84098C6.29425 5.97306 6.35775 6.17263 6.30865 6.37775L4.3636 5.91215ZM8.00814 8.52172C8.21906 8.52073 8.39886 8.62811 8.50226 8.76574C8.59882 8.89425 8.63058 9.04619 8.60718 9.18425L6.6353 8.85001C6.50898 9.59524 7.01546 10.5264 8.01752 10.5217L8.00814 8.52172Z"
          fill="currentColor"
          mask="url(#path-1-inside-1_988_7080)"
        />
      </>
    )
  ),
  image: new Icon(
    "0 0 32 32",
    (
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.66667 5C5.74619 5 5 5.74619 5 6.66667V25.3333C5 26.1261 5.55354 26.7896 6.29522 26.9585L20.6275 12.6261C21.0181 12.2356 21.6512 12.2356 22.0417 12.6261L27 17.5844V6.66667C27 5.74619 26.2538 5 25.3333 5H6.66667ZM29 19.9487V6.66667C29 4.64162 27.3584 3 25.3333 3H6.66667C4.64162 3 3 4.64162 3 6.66667V25.3333C3 27.3584 4.64162 29 6.66667 29H25.3333C27.3584 29 29 27.3584 29 25.3333V20.0511C29.0017 20.017 29.0017 19.9828 29 19.9487ZM27 20.4128L21.3346 14.7475L9.0821 27H25.3333C26.2538 27 27 26.2538 27 25.3333V20.4128ZM11.332 10.3333C10.7797 10.3333 10.332 10.781 10.332 11.3333C10.332 11.8855 10.7797 12.3333 11.332 12.3333C11.8843 12.3333 12.332 11.8855 12.332 11.3333C12.332 10.781 11.8843 10.3333 11.332 10.3333ZM8.33203 11.3333C8.33203 9.6764 9.67518 8.33325 11.332 8.33325C12.9889 8.33325 14.332 9.6764 14.332 11.3333C14.332 12.9901 12.9889 14.3333 11.332 14.3333C9.67518 14.3333 8.33203 12.9901 8.33203 11.3333Z"
        fill="currentColor"
      />
    )
  ),
  list: new Icon(
    "0 0 24 24",
    (
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2 6C2 5.44772 2.44772 5 3 5H3.01C3.56228 5 4.01 5.44772 4.01 6C4.01 6.55228 3.56228 7 3.01 7H3C2.44772 7 2 6.55228 2 6ZM7.00002 6C7.00002 5.44772 7.44773 5 8.00002 5H21C21.5523 5 22 5.44772 22 6C22 6.55228 21.5523 7 21 7H8.00002C7.44773 7 7.00002 6.55228 7.00002 6ZM2 12C2 11.4477 2.44772 11 3 11H3.01C3.56228 11 4.01 11.4477 4.01 12C4.01 12.5523 3.56228 13 3.01 13H3C2.44772 13 2 12.5523 2 12ZM7.00002 12C7.00002 11.4477 7.44773 11 8.00002 11H21C21.5523 11 22 11.4477 22 12C22 12.5523 21.5523 13 21 13H8.00002C7.44773 13 7.00002 12.5523 7.00002 12ZM2 18C2 17.4477 2.44772 17 3 17H3.01C3.56228 17 4.01 17.4477 4.01 18C4.01 18.5523 3.56228 19 3.01 19H3C2.44772 19 2 18.5523 2 18ZM7.00002 18C7.00002 17.4477 7.44773 17 8.00002 17H21C21.5523 17 22 17.4477 22 18C22 18.5523 21.5523 19 21 19H8.00002C7.44773 19 7.00002 18.5523 7.00002 18Z"
        fill="currentColor"
      />
    )
  ),
  logOut: new Icon(
    "0 0 16 16",
    (
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.33333 2.5C3.11232 2.5 2.90036 2.5878 2.74408 2.74408C2.5878 2.90036 2.5 3.11232 2.5 3.33333V12.6667C2.5 12.8877 2.5878 13.0996 2.74408 13.2559C2.90036 13.4122 3.11232 13.5 3.33333 13.5H6C6.27614 13.5 6.5 13.7239 6.5 14C6.5 14.2761 6.27614 14.5 6 14.5H3.33333C2.8471 14.5 2.38079 14.3068 2.03697 13.963C1.69315 13.6192 1.5 13.1529 1.5 12.6667V3.33333C1.5 2.8471 1.69315 2.38079 2.03697 2.03697C2.38079 1.69315 2.8471 1.5 3.33333 1.5H6C6.27614 1.5 6.5 1.72386 6.5 2C6.5 2.27614 6.27614 2.5 6 2.5H3.33333ZM10.3125 4.31295C10.5077 4.11769 10.8243 4.11769 11.0196 4.31295L14.3529 7.64629C14.5482 7.84155 14.5482 8.15813 14.3529 8.35339L11.0196 11.6867C10.8243 11.882 10.5077 11.882 10.3125 11.6867C10.1172 11.4915 10.1172 11.1749 10.3125 10.9796L12.7922 8.49986L6.00001 8.5C5.72387 8.50001 5.50001 8.27615 5.5 8.00001C5.49999 7.72387 5.72385 7.50001 5.99999 7.5L12.7923 7.49986L10.3125 5.02006C10.1172 4.8248 10.1172 4.50821 10.3125 4.31295Z"
        fill="currentColor"
      />
    )
  ),
  message: new Icon(
    "0 0 16 16",
    (
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.21202 12.8428C7.01403 13.2325 7.91244 13.4507 8.86111 13.4507C12.2515 13.4507 15 10.6635 15 7.22535C15 3.78718 12.2515 1 8.86111 1C5.4707 1 2.72222 3.78718 2.72222 7.22535C2.72222 8.20215 2.94407 9.12641 3.33946 9.94914L2.03875 13.2467C1.96092 13.444 2.00232 13.6692 2.14504 13.8248C2.28777 13.9804 2.50621 14.0386 2.70591 13.9741L6.21202 12.8428ZM8.86111 2.09859C6.069 2.09859 3.80556 4.39392 3.80556 7.22535C3.80556 7.96451 3.95981 8.66714 4.23746 9.30193V9.30193C4.39955 9.74699 4.39309 10.236 4.21929 10.6766L3.47068 12.5745L5.8397 11.8101C6.16434 11.7054 6.51817 11.7432 6.81336 11.9141V11.9141C7.43934 12.1957 8.13221 12.3521 8.86111 12.3521C11.6532 12.3521 13.9167 10.0568 13.9167 7.22535C13.9167 4.39392 11.6532 2.09859 8.86111 2.09859Z"
        fill="currentColor"
      />
    )
  ),
  minus: new Icon(
    "0 0 16 16",
    (
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.66797 7.99999C2.66797 7.63272 2.9657 7.33499 3.33297 7.33499H12.6663C13.0336 7.33499 13.3313 7.63272 13.3313 7.99999C13.3313 8.36726 13.0336 8.66499 12.6663 8.66499H3.33297C2.9657 8.66499 2.66797 8.36726 2.66797 7.99999Z"
        fill="currentColor"
      />
    )
  ),
  options: new Icon(
    "0 0 24 24",
    (
      <>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10 5C10 3.89543 10.8954 3 12 3C13.1046 3 14 3.89543 14 5C14 6.10457 13.1046 7 12 7C10.8954 7 10 6.10457 10 5ZM10 12C10 10.8955 10.8954 10 12 10C13.1046 10 14 10.8955 14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12ZM10 19C10 17.8954 10.8954 17 12 17C13.1046 17 14 17.8954 14 19C14 20.1046 13.1046 21 12 21C10.8954 21 10 20.1046 10 19Z"
          fill="currentColor"
        />
      </>
    )
  ),
  percent: new Icon(
    "0 0 16 16",
    (
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.33557 3.3315C3.78237 3.3315 3.33391 3.77996 3.33391 4.33316C3.33391 4.88637 3.78237 5.33483 4.33557 5.33483C4.88878 5.33483 5.33724 4.88637 5.33724 4.33316C5.33724 3.77996 4.88878 3.3315 4.33557 3.3315ZM2.00391 4.33316C2.00391 3.04542 3.04783 2.0015 4.33557 2.0015C5.62332 2.0015 6.66724 3.04542 6.66724 4.33316C6.66724 5.62091 5.62332 6.66483 4.33557 6.66483C3.04783 6.66483 2.00391 5.62091 2.00391 4.33316ZM13.1365 2.86326C13.3962 3.12296 13.3962 3.54401 13.1365 3.80371L3.80319 13.137C3.5435 13.3967 3.12244 13.3967 2.86274 13.137C2.60304 12.8774 2.60304 12.4563 2.86274 12.1966L12.1961 2.86326C12.4558 2.60356 12.8768 2.60356 13.1365 2.86326ZM11.6676 10.665C11.1144 10.665 10.6659 11.1135 10.6659 11.6667C10.6659 12.2199 11.1144 12.6683 11.6676 12.6683C12.2208 12.6683 12.6693 12.2199 12.6693 11.6667C12.6693 11.1135 12.2208 10.665 11.6676 10.665ZM9.33594 11.6667C9.33594 10.3789 10.3799 9.33499 11.6676 9.33499C12.9553 9.33499 13.9993 10.3789 13.9993 11.6667C13.9993 12.9544 12.9553 13.9983 11.6676 13.9983C10.3799 13.9983 9.33594 12.9544 9.33594 11.6667Z"
        fill="currentColor"
      />
    )
  ),
  plus: new Icon(
    "0 0 16 16",
    (
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.99898 2.66849C8.36625 2.66849 8.66398 2.96622 8.66398 3.33349V7.33499H12.6663C13.0336 7.33499 13.3313 7.63272 13.3313 7.99999C13.3313 8.36726 13.0336 8.66499 12.6663 8.66499H8.66398V12.6668C8.66398 13.0341 8.36625 13.3318 7.99898 13.3318C7.63171 13.3318 7.33398 13.0341 7.33398 12.6668V8.66499H3.33297C2.9657 8.66499 2.66797 8.36726 2.66797 7.99999C2.66797 7.63272 2.9657 7.33499 3.33297 7.33499H7.33398V3.33349C7.33398 2.96622 7.63171 2.66849 7.99898 2.66849Z"
        fill="currentColor"
      />
    )
  ),
  plusCircle: new Icon(
    "0 0 24 24",
    (
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2.75C6.89137 2.75 2.75 6.89137 2.75 12C2.75 17.1086 6.89137 21.25 12 21.25C17.1086 21.25 21.25 17.1086 21.25 12C21.25 6.89137 17.1086 2.75 12 2.75ZM1.25 12C1.25 6.06294 6.06294 1.25 12 1.25C17.9371 1.25 22.75 6.06294 22.75 12C22.75 17.9371 17.9371 22.75 12 22.75C6.06294 22.75 1.25 17.9371 1.25 12ZM12 7.25C12.4142 7.25 12.75 7.58579 12.75 8V11.25H16C16.4142 11.25 16.75 11.5858 16.75 12C16.75 12.4142 16.4142 12.75 16 12.75H12.75V16C12.75 16.4142 12.4142 16.75 12 16.75C11.5858 16.75 11.25 16.4142 11.25 16V12.75H8C7.58579 12.75 7.25 12.4142 7.25 12C7.25 11.5858 7.58579 11.25 8 11.25H11.25V8C11.25 7.58579 11.5858 7.25 12 7.25Z"
        fill="currentColor"
      />
    )
  ),
  search: new Icon(
    "0 0 20 20",
    (
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9 2C5.13401 2 2 5.13401 2 9C2 12.866 5.13401 16 9 16C10.8866 16 12.5988 15.2537 13.8576 14.0402C13.8837 14.0064 13.9123 13.9738 13.9433 13.9428C13.9743 13.9118 14.0068 13.8833 14.0406 13.8572C15.2539 12.5984 16 10.8863 16 9C16 5.13401 12.866 2 9 2ZM16.0321 14.6174C17.2636 13.0778 18 11.1249 18 9C18 4.02944 13.9706 0 9 0C4.02944 0 0 4.02944 0 9C0 13.9706 4.02944 18 9 18C11.1251 18 13.0782 17.2634 14.618 16.0317L18.2933 19.707C18.6838 20.0975 19.317 20.0975 19.7075 19.707C20.098 19.3165 20.098 18.6833 19.7075 18.2928L16.0321 14.6174Z"
        fill="currentColor"
      />
    )
  ),
  trash: new Icon(
    "0 0 16 16",
    (
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.66826 1.99849C6.491 1.99849 6.32101 2.0689 6.19567 2.19424C6.07034 2.31958 5.99992 2.48957 5.99992 2.66682V3.33499H10.0033V2.66682C10.0033 2.48957 9.93284 2.31958 9.80751 2.19424C9.68217 2.0689 9.51218 1.99849 9.33492 1.99849H6.66826ZM11.3333 3.33499V2.66682C11.3333 2.13683 11.1227 1.62855 10.748 1.25379C10.3732 0.879026 9.86491 0.668488 9.33492 0.668488H6.66826C6.13827 0.668488 5.62998 0.879026 5.25522 1.25379C4.88046 1.62855 4.66992 2.13683 4.66992 2.66682V3.33499H2.00094C1.63367 3.33499 1.33594 3.63272 1.33594 3.99999C1.33594 4.36726 1.63367 4.66499 2.00094 4.66499H2.66932L2.66992 13.3335C2.66992 13.3335 2.66992 13.3335 2.66992 13.3335C2.66993 13.8635 2.88047 14.3718 3.25522 14.7465C3.62998 15.1213 4.13826 15.3318 4.66826 15.3318H11.3349C11.8649 15.3318 12.3732 15.1213 12.748 14.7465C13.1227 14.3718 13.3333 13.8635 13.3333 13.3335V4.66499H14.0009C14.3682 4.66499 14.6659 4.36726 14.6659 3.99999C14.6659 3.63272 14.3682 3.33499 14.0009 3.33499H11.3333ZM5.32173 4.66503L3.99932 4.665L3.99992 13.3334C3.99992 13.5107 4.07034 13.6807 4.19567 13.8061C4.32101 13.9314 4.491 14.0018 4.66826 14.0018H11.3349C11.5122 14.0018 11.6822 13.9314 11.8075 13.8061C11.9328 13.6807 12.0033 13.5107 12.0033 13.3335V4.66514L10.6751 4.66512C10.6728 4.66514 10.6706 4.66515 10.6683 4.66515C10.666 4.66515 10.6637 4.66514 10.6614 4.66512L5.34809 4.66503C5.34371 4.66511 5.33932 4.66515 5.33492 4.66515C5.33052 4.66515 5.32612 4.66511 5.32173 4.66503ZM6.66695 6.66849C7.03422 6.66849 7.33195 6.96622 7.33195 7.33349V11.3335C7.33195 11.7008 7.03422 11.9985 6.66695 11.9985C6.29968 11.9985 6.00195 11.7008 6.00195 11.3335V7.33349C6.00195 6.96622 6.29968 6.66849 6.66695 6.66849ZM9.33492 6.66849C9.70219 6.66849 9.99992 6.96622 9.99992 7.33349V11.3335C9.99992 11.7008 9.70219 11.9985 9.33492 11.9985C8.96765 11.9985 8.66992 11.7008 8.66992 11.3335V7.33349C8.66992 6.96622 8.96765 6.66849 9.33492 6.66849Z"
        fill="currentColor"
      />
    )
  ),
  user: new Icon(
    "0 0 16 16",
    (
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.9987 2.5C6.80208 2.5 5.83203 3.47005 5.83203 4.66667C5.83203 5.86328 6.80208 6.83333 7.9987 6.83333C9.19531 6.83333 10.1654 5.86328 10.1654 4.66667C10.1654 3.47005 9.19531 2.5 7.9987 2.5ZM4.83203 4.66667C4.83203 2.91776 6.2498 1.5 7.9987 1.5C9.7476 1.5 11.1654 2.91777 11.1654 4.66667C11.1654 6.41557 9.7476 7.83333 7.9987 7.83333C6.2498 7.83333 4.83203 6.41557 4.83203 4.66667ZM3.09546 10.4275C3.68933 9.83363 4.49478 9.5 5.33464 9.5H10.668C11.5078 9.5 12.3133 9.83363 12.9071 10.4275C13.501 11.0214 13.8346 11.8268 13.8346 12.6667V14C13.8346 14.2761 13.6108 14.5 13.3346 14.5C13.0585 14.5 12.8346 14.2761 12.8346 14V12.6667C12.8346 12.092 12.6064 11.5409 12.2 11.1346C11.7937 10.7283 11.2426 10.5 10.668 10.5H5.33464C4.76 10.5 4.2089 10.7283 3.80257 11.1346C3.39624 11.5409 3.16797 12.092 3.16797 12.6667V14C3.16797 14.2761 2.94411 14.5 2.66797 14.5C2.39183 14.5 2.16797 14.2761 2.16797 14V12.6667C2.16797 11.8268 2.5016 11.0214 3.09546 10.4275Z"
        fill="currentColor"
      />
    )
  ),
  default: null,
}

export default svgs
