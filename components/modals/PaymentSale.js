export default function PaymentSale({ onCLose }) {
  return (
    <div
      className="fixed top-0 left-0 h-screen w-screen bg-[rgba(0,0,0,0.8)] z-[50]"
      style={{ zIndex: 9999 }}
      onClick={() => onClose()}
    >
      <p className="text-blanco1">Pagar</p>
    </div>
  )
}
