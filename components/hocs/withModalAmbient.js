const withModalAmbient =
  (Component, headerProps) =>
  ({ ...props }) => {
    return (
      <div className="fixed flex items-center justify-center top-0 left-0 h-screen w-screen bg-[rgba(0,0,0,0.5)] m-auto overflow-auto backdrop-blur-sm z-50">
        <Component {...props} />
      </div>
    )
  }

export default withModalAmbient
