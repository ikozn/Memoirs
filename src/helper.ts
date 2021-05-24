const A_DAY_TIME = 24 * 60 * 60 * 1000

export function splitDate (date: string | number | Date) {
  const dateObj = new Date(date)
  const year = dateObj.getFullYear()
  const month = dateObj.getMonth() + 1
  const day = dateObj.getDate()
  return {
    year,
    month,
    day
  }
}

export function getDayTime (date: string | number | Date) {
  const { year, month, day } = splitDate(new Date(date))
  return new Date(`${year}-${month}-${day}`)
}

export function getAfterDaysTime (date: string | number | Date, days: number) {
  const dateObj = new Date(new Date(date).getTime() + A_DAY_TIME * days)
  const { year, month, day } = splitDate(dateObj)
  return new Date(`${year}-${month}-${day}`)
}

export function getBeforeDaysTime (date: string | number | Date, days: number) {
  const dateObj = new Date(new Date(date).getTime() - A_DAY_TIME * days)
  const { year, month, day } = splitDate(dateObj)
  return new Date(`${year}-${month}-${day}`)
}

export const objToArray = <T>(obj: {[key:string]: T}) => {
  return Object.keys(obj).map(key => obj[key])
}
