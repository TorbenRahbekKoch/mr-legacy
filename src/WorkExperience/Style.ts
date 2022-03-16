import styled from 'styled-components'

export const Div = styled.div`
  overflow: auto;
  width: 80%;
  margin-left: 10%;
  margin-bottom: 10px;
  margin-top: 10px;
`

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  table-layout: fixed;
  

`

export const Td = styled.td`
  border: 1px solid black;
  text-align: left;
  padding: 0.5rem;
  overflow: hidden;
  vertical-align: top;
`

export const TitleTd = styled(Td)`
  font-weight: bold;
  vertical-align: top;
`

export const TitleCol = styled.col`
  width: 25%;
`

export const CompanyTable = styled(Table)`
  background-color: ${(props: any) => props.parentId == null ? "papayawhip" : "beige"};
`

export const CompanyHeader = styled(TitleTd)`
`

export const ItemText = styled(Td)`
  vertical-align: top;
`

export const ItemTable = styled(Table)`
  background-color: whitesmoke;

  @media print {
    break-inside: avoid;
  }
`

export const ItemHeader = styled(TitleTd)`
`

