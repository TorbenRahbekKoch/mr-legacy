import styled from 'styled-components';

const StyledHeader = styled.h1`
  margin-top: 10px;
  font-family: Luminary;
  font-style: italic;
  font-size: 2.5em;
  font-weight: bold;
`

export function Header() {
  return (
    <div>
      <img src="/images/mugshot.jpg" alt="mugshot"/>
      <StyledHeader>Mr. Legacy</StyledHeader>
    </div>
  )
}