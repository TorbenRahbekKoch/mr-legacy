export interface PeriodPoint {
  month : number
  year : number
}

export interface Period {
  start : PeriodPoint
  end ?: PeriodPoint
}

export function formatPeriod(period: Period, monthNames: string[], now: string): string
{
  const end = 
    period.end == null
    ? ` - ${now}`
    : ` - ${monthNames[period.end.month - 1]} ${period.end.year}`
  return `${monthNames[period.start.month-1]} ${period.start.year}${end}` 
}

export function comparePeriods(period1: Period, period2: Period){
  if (period1.start.year !== period2.start.year) {
    return period1.start.year < period2.start.year
      ? -1
      : 1
  }

  return period1.start.month < period2.start.month
    ? -1
    : 1
}