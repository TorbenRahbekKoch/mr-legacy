import styled from 'styled-components';

const MugShot = styled.picture`
  position: absolute;
  @media screen and (min-width: 1000px) {
    left: 10%;
    top: 15px;    
  }
  @media screen and (max-width: 1000px) {
  left: 20%;
  top: 10px;
  margin-bottom: -72px;
  }
  @media screen and (max-width: 600px) {
  left: 10%;
  top: 10px;
  margin-bottom: -72px;
  }
`
const StyledHeader = styled.h1`
  margin-top: 10px;
  font-family: courier;  
  font-size: 2.5em;
  font-weight: bold;
  padding-left: 72px;
`
export function Header() {
  return (
    <div>
      <StyledHeader>Mr. Legacy</StyledHeader>
      <MugShot>
        <source srcSet="/images/mugshot.jpg" media="(min-width: 1000px)"/>
        <img src="/images/mugshot-small.jpg" alt=""/>
      </MugShot>
      <p>aka Torben Koch Pløen, +45 2482 1824, torben at kochploeen.dk</p>
    </div>
  )
}