import { useEffect, useState } from "react"
import { diffDate } from "utils/dateNow"

export default function DateDiff({ date1, date2, unit = "minute" }) {
  let datePrimary = date1
  if (date1 === "now") {
    datePrimary = new Date()
  }
  const [dateDiff, setDateDiff] = useState(diffDate(datePrimary, date2, unit))

  useEffect(() => {
    if (date1 === "now") {
      const timer = setInterval(() => {
        datePrimary = new Date()
        setDateDiff(diffDate(datePrimary, date2, unit))
      }, 60000)
    }
    return () => {
      if (timer) {
        clearInterval(timer)
      }
    }
  }, [])

  return <>{dateDiff}</>
}
