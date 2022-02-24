import {ComponentState} from '../State/State'
import {useStore} from '../BootStrapping'

export interface State extends ComponentState{
    quotes: string[]
}

export function defaultState(): State {
    return {
        quotes : ["Det ville jo være smart, så det kan man ikke"]
    }
}

export const defaultName = "quote"

export function Quote() {
    const quotes = useStore(state => (state.component.get(defaultName) as State)?.quotes)
    if (quotes == null) {
        useStore.setState(state => {
            state.component.set(defaultName, defaultState())
        })
    }
    return (
        <span>Det ville jo være smart, så det kan man ikke</span>    
    )
}