import { MonthNames } from './MonthNames'
/// Generic definitions

export interface ComponentName {
  componentName ?: string
}

// TODO: Probably not necessary
export interface ComponentState {
}

export interface I8nFormats {
  parent: I8nFormats
  dateFormat: string
  numberFormat: string
}

export interface ComponentI8n {
  texts: any
}

export interface I8n {
  // constructor() {
  //   this.component = new Map<string, ComponentI8n>()
  // }
  component: Map<string, ComponentI8n>
  monthNames: MonthNames

  // public Set(componentName: string, texts: ComponentI8n){
  //   this.component.set(componentName, texts)
  // }

  // public Get<TComponent extends ComponentI8n>(componentName: string) {
  //   return this.component.get(componentName) as TComponent
  // }
}

export interface StateEntry {
  componentName : string
  state : ComponentState
}

export interface StateData {
  component: Map<string, ComponentState> // component name, State
  i8n: I8n  
}

export class StateContainer<TStateData extends StateData>{
  constructor(stateData: TStateData) {
    this.stateData = stateData
  }
    
  public static Get<TComponent, TStateData extends StateData>(
    stateData: TStateData, componentName
    : string): TComponent {

    return stateData.component.get(componentName) as TComponent
  }

  public Set(stateEntry: StateEntry) {
    this.stateData.component.set(stateEntry.componentName, stateEntry.state)
  }

  public Get<TComponent>(componentName: string): TComponent {
    return this.stateData.component.get(componentName) as TComponent
  }

  stateData : TStateData
}
