import dayjs from "dayjs"
import utc from "dayjs/plugin/utc"
import timezone from "dayjs/plugin/timezone"

dayjs.extend(utc)
dayjs.extend(timezone)
export const nowDateTime = (time = new Date()) =>
  dayjs(time).tz("America/Argentina/Buenos_Aires").format("YYYY/MM/DD HH:mm:ss")

export const diffDate2 = (date1, date2, unit = "minute") => {
  const dateToDiff = dayjs(date1)
  return dateToDiff.diff(date2, unit)
}

export const diffDate = (date1, date2, unit = "minute") => {
  const dateToDiff = dayjs(date1)
  let minutes = dateToDiff.diff(date2, unit)

  if (minutes > 59) {
    const hours = Math.floor(minutes / 60)
    minutes = minutes - hours * 60
  }

  let response = `${minutes} m.`
  if (hours) {
    response = `${hours}h. ${minutes}m`
  }
  return response
}
