import { MonthNames } from './MonthNames'
/// Generic definitions

export interface I8nFormats {
  parent: I8nFormats
  dateFormat: string
  numberFormat: string
}

export interface ComponentI8n {
  texts: any
}

export interface I8n {
  monthNames: MonthNames
}

export interface StateData {
  i8n: I8n  
}
