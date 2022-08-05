export default function SkeletonProductList() {
  return (
    <>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item, index) => {
        return (
          <div className="" key={index}>
            <div className="relative h-[244px] w-full animate-pulse bg-gs550 rounded-lg" />
          </div>
        )
      })}
    </>
  )
}
