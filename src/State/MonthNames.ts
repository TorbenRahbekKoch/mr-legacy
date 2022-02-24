export interface MonthNames {
  shortNames: string[]
  longNames: string[]

  getShortName: (month: number) => string
  getLongName: (month: number) => string
}

const dkMonthNames = {
  shortNames: ["Jan", "Feb", "Mar", "Apr", "Maj", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dec"],
  longNames: ["Januar", "Februar", "Marts", "April", "Maj", "Juni", "Juli", "August", "September", "Oktober", "November", "December"]
}

const enMonthNames = {
  shortNames: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  longNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
}

export interface I8nMonthNames {
  dk: MonthNames
  en: MonthNames
}

export const i8nMonthNames = {
  dk: {
    shortNames: dkMonthNames.shortNames,
    longNames: dkMonthNames.longNames,
    getShortName: (month: number) => dkMonthNames.shortNames[month - 1],
    getLongName: (month: number) => dkMonthNames.longNames[month - 1]
  },
  en: {
    shortNames: enMonthNames.shortNames,
    longNames: enMonthNames.longNames,
    getShortName: (month: number) => enMonthNames.shortNames[month - 1],
    getLongName: (month: number) => enMonthNames.longNames[month - 1]
  }
}

export function getMonthNames(language: string) : MonthNames {
  if (language == "dk")
    return i8nMonthNames.dk
  else
    return i8nMonthNames.en
}