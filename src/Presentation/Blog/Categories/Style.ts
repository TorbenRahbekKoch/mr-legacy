import styled from 'styled-components'

export const CategoryList = styled.div`
  margin-top: 20px;
  margin-left: 20px;
  text-align: left;
  width: 80%;
  display: flex;
  flex-wrap: wrap;
`

export type CategoryProps = {
  selected: boolean
}

export const Category = styled.button<{ selected?: boolean; }>`
  
  background-color: ${(props) => props.selected ? 'darkgrey' : 'none'};
        
  padding: 5px;
  font-family: courier;
  cursor: grab;
  display: inline-block;
  
  &:first-letter {
    text-transform: capitalize;
  };
  
`

