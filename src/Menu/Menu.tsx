import styled from 'styled-components'

const MenuBar = styled.div`
  width: 50%;
  height: 20px;
  background-color: lightgreen;  
`

const MenuItem = styled.span`

`

export function Menu() {
  return (
    <MenuBar>
      <span>Resume</span>
      <span>Blog</span>
    </MenuBar>
  )
}