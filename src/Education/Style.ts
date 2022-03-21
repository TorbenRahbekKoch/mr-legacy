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
  width: 25%;
`

export const EducationTable = styled(Table)`
    background-color: whitesmoke;
`

export const EducationHeader = styled(TitleTd)`
`

export const EducationText = styled(Td)`
  vertical-align: top;
`
