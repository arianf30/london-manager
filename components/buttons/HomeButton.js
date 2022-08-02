export default function HomeButton({ action }) {
  return (
    <button
      className="flex items-center justify-center h-full w-[88px] bg-gs700 hover:bg-p500 transition ease-in-out"
      onClick={action}
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M3 9.00003L12 2.00003L21 9.00003V20C21 20.5305 20.7893 21.0392 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0392 3 20.5305 3 20V9.00003Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9 22V12H15V22"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  )
}
