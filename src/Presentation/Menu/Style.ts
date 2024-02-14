import styled from 'styled-components'

export const MenuBar = styled.div`
  left: 0px;
  min-width: 50%;  
  background-color: darkblue;  
  border-radius: 5px;
  margin-top: 5px;
  padding-top: 5px;
  padding-bottom: 5px;
  text-align: left;  
  
  @media print {
    display: none;
  }
`

export type MenuItemProps = {
  rightAlign?: boolean
}

export const MenuItem = styled.a<MenuItemProps>`
  min-width: 100px;
  background-color: #5050AB;
  border-radius: 5px;
  color: 	antiquewhite ;
  text-decoration: none;
  font-family: courier;
  font-weight: 100;
  font-size: 1.5em;
  margin-top: 5px;
  margin-left: 5px;
  margin-right: 10px;
  padding-left: 5px;
  padding-right: 5px;
  padding-top: 5px;
  text-transform: uppercase;
  @media screen and (max-width: 600px) {
    font-size: 1.1em;
    padding-left: 2px;
    padding-right: 2px;
    margin-left: 3px;
    margin-right: 2px;
  }
  cursor: pointer;  
  float: ${(props: any) => (props.rightAlign === true ? "right" : "none")};
`
