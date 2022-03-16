import * as Style from './Style'

export interface Props {
}

interface ItemProps {
  title: string
  path: string
  rightAlign ?: boolean
}

function MenuItem({title, path, rightAlign}: ItemProps) {
  return (<Style.MenuItem href={path} {...rightAlign}>{title}</Style.MenuItem>)
}

export function Menu() {
  return (
    <>
    <Style.MenuBar>
      <MenuItem title="CV" path="/cv"/>
      <MenuItem title="blog" path="/blogs"/>
      {/* <MenuItem title="english" path="" rightAlign={true}/> */}
    </Style.MenuBar>
    </>
  )
}