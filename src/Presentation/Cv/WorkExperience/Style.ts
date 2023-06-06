import styled from 'styled-components'

export const Div = styled.div`
  overflow: auto;
  width: 80%;
  margin-left: 0%;
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
  width: calc(25vh - ${(props:any) => props.indent*10}px);
  /*background-color: ${(props:any) => props.indent < 3 ? "red" : "pink"};*/
`

export const CompanyTable = styled(Table)`
  margin-left: ${(props:any) => props.indent*10}px;
  width: calc(100% - ${(props:any) => props.indent*10}px);
  background-color: ${(props: any) => props.indent === 0 ? "papayawhip" : "beige"};
`

export const CompanyHeader = styled(TitleTd)`
`

export const ItemText = styled(Td)`
  vertical-align: top;
`

export const ItemTable = styled(Table)`
  background-color: whitesmoke;
  margin-left: ${(props:any) => props.indent*10}px;
  width: calc(100% - ${(props:any) => props.indent*10}px);
  @media print {
    break-inside: avoid;
  }
`

export const ItemHeader = styled(TitleTd)`
  width: calc(25vh - ${(props:any) => props.indent*10}px);
`

