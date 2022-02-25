import styled from 'styled-components';

const MugShot = styled.img`
  position: absolute;
  left: 10%;
  top: 15px;
`
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
      <MugShot src="/images/mugshot.jpg"/>
      <StyledHeader>Mr. Legacy</StyledHeader>
    </div>
  )
}