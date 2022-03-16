import styled from 'styled-components';


export const MugShot = styled.picture`
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
    left: 5%;
    top: 10px;
    margin-bottom: -72px;
  }

  @media print {
    display: none;
  }

`
export const Header = styled.h1`
  margin-top: 10px;
  font-family: courier;  
  font-size: 2.5em;
  font-weight: bold;
  padding-left: 72px;

  @media print {
    display: none;
  }
`
export const PrintImage = styled.picture`
  position: absolute;

  @media screen {
    display: none;
  }
  
  @media print {
    display: inline;
    left: 10%;
    top: 15px;
  }  
`


export const PrintHeader = styled(Header)`
  text-align: right;

  @media print {
    display: block;
  }

  @media screen {
    display: none;
  }
`

export const ContactInformation = styled.p`
  @media print {
    display: none;
  }
`
export const PrintContactInformation = styled(ContactInformation)`
  @media print {
    display: block;
  }
  @media screen {
    display: none;
  }
`


export const Quote = styled.div`
  left: 10%;
  width: 80%;
  font-size: 1em;

  @media print {
    display: none;
  }
`

export const QuoteText = styled.span`
  font-style: italic;
`

export const Author = styled.span`
  font-style: italic;
  font-size: smaller;
`
