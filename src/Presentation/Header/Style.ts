import styled from 'styled-components';

export const Header = styled.div`
  vertical-align: top;
  text-align: left;
`

export const HeaderDetails = styled.div`
  width: 80%;
  margin-right: 5px;
  padding-left: 50px;
  display: inline-block;
  vertical-align: top;
`

export const MugShot = styled.picture`
  display: inline-block;

  @media print {
    display: none;
  }
`

export const MainTitle = styled.h1`
  margin-top: 0px;
  font-family: courier;  
  font-size: 2.5em;
  font-weight: bold;
  vertical-align: top;

  @media screen and (max-width: 1000px) {
    font-size: 1.8em;
  }

  @media screen and (max-width: 600px) {
    font-size: 1.5em;
  }

  @media print {
    display: none;
  }
`

export const PrintImage = styled.picture`
  @media screen {
    display: none;
  }

  @media print {
    display: inline-block;
    left: 0%;
    top: 15px;
  }  
`

export const PrintMainTitle = styled(MainTitle)`

  @media print {
    display: unset;
    font-size: 2em; 
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
  font-size: 1em;
  min-height: 50px;
  text-align: left;
  vertical-align: top;

  @media screen and (max-width: 600px) {
    margin-left: -20px;
  }

  @media print {
    display: none;
  }
`

export const QuoteSource = styled.span``

export const QuoteText = styled.div`
  font-style: italic;

  strong {
    font-style: italic;
    font-weight: normal;
    font-size: smaller;
  }
`