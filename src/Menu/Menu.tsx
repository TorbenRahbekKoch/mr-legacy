import styled from 'styled-components'

const MenuBar = styled.div`
  left: 0px;
  min-width: 50%;  
  background-color: darkblue;  
  border-radius: 5px;
  margin-top: 5px;
  padding-top: 5px;
  padding-bottom: 5px;
  text-align: left;
`

const StyledMenuItem = styled.a`
  min-width: 100px;
  background-color: #5050AB;
  border-radius: 5px;
  color: 	antiquewhite ;
  text-decoration: none;
  font-family: courier;
  font-weight: 100;
  font-size: 1.5em;
  margin-left: 5px;
  margin-right: 10px;
  padding-left: 5px;
  padding-right: 5px;
  text-transform: uppercase;
  @media screen and (max-width: 600px) {
    font-size: 1.2em;
  }
  cursor: pointer;  
`

interface Props {
  title: string
  path: string
  rightAlign ?: boolean
}

function MenuItem({title, path, rightAlign}: Props) {
  return (<StyledMenuItem href={path} {...rightAlign}>{title}</StyledMenuItem>)
}

export function Menu() {
  return (
    <MenuBar>
      <MenuItem title="CV" path="/cv"/>
      <MenuItem title="blog" path="/blog"/>
      {/* <MenuItem title="english" path="" rightAlign={true}/> */}
    </MenuBar>
  )
}