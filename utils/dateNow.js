import dayjs from "dayjs"
import utc from "dayjs/plugin/utc"
import timezone from "dayjs/plugin/timezone"

dayjs.extend(utc)
dayjs.extend(timezone)
export const nowDateTime = dayjs(new Date()).tz("America/Argentina/Buenos_Aires").format('YYYY/MM/DD HH:mm:ss')