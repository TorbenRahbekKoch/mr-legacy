import styled from 'styled-components'

export const Div = styled.div`
  overflow: auto;
  width: 80%;
  margin-left: 10%;
  margin-bottom: 10px;
  margin-top: 10px;
`

export const Table = styled.table`
  width: 90%;
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
    background-color: papayawhip;
`

export const CompanyHeader = styled(TitleTd)`
`

export const ItemText = styled(Td)`
  vertial-align: top;
`

export const ItemTable = styled(Table)`
    background-color: gainsboro;
`

export const ItemHeader = styled(TitleTd)`
`

