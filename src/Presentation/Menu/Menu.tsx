import React from 'react'
import * as Style from './Style'

export interface Texts {
  danish: string
  english: string
}

export interface Props {
  currentLanguage: string  
  requestLanguageChange: (language: string) => void
  texts: Texts
}

export const defaultProps = {
  currentLanguage: "",
  texts: {
    danish: "",
    english: ""
  }
}

interface ItemProps {
  title: string
  path: string
  onClick?: () => void
  rightAlign ?: boolean
}

function MenuItem({title, path, rightAlign, onClick}: ItemProps) {
  const localClick: React.MouseEventHandler | undefined= 
    onClick == null 
    ? undefined
    : (e: React.MouseEvent) => { 
      e.preventDefault()
      onClick()
    } 

  return (<Style.MenuItem href={path} onClick={localClick} {...rightAlign}>{title}</Style.MenuItem>)
}

export function Menu({...props}: Props) {
  const [languageLabel, newLanguage] = 
    props.currentLanguage == "dk"
    ? [props.texts.english, "en"]
    : [props.texts.danish, "dk"]

  function changeLanguage(newLanguage: string) {
    props.requestLanguageChange(newLanguage)
  }

  return (
    <>
    <Style.MenuBar>
      <MenuItem title="CV" path="/cv"/>
      <MenuItem title="blog" path="/blogs"/>
      <span style={{float:"right"}}>
        <MenuItem title={languageLabel} path="/" onClick={() => changeLanguage(newLanguage)}/>
      </span>
    </Style.MenuBar>
    </>
  )
}