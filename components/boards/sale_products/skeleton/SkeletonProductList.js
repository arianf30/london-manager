export default function SkeletonProductList() {
  return (
    <>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item, index) => {
        return (
          <div className="" key={index}>
            <div className="relative h-64 w-full animate-pulse bg-negro3 rounded-2xl" />
          </div>
        )
      })}
    </>
  )
}
