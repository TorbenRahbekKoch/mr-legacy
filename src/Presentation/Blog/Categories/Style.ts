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
export const Category = styled.div`

  button {
    background-color: ${(props: any) => props.selected === true ? "darkgray" : "none"};
  }

  label {
    background: none;
    border: none;
    padding: 5px;
    font-family: courier;
    cursor: pointer;
    display: inline-block;
    
    :first-letter {
      text-transform: capitalize;
    };
  }
`

