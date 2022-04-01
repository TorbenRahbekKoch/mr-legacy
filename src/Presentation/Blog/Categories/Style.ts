import styled from 'styled-components'

export const CategoryList = styled.div`
  text-align: left;
  display: inline-block;
  vertical-align: top;
`

export const Category = styled.li`
  list-style-type: none;
  margin-left: -30px;

  label {
    background: none;
    border: none;
    padding: none;
    font-family: courier;
    cursor: pointer;
    display: inline-block;
    :first-letter {
      text-transform: capitalize;
    };
  }
`

