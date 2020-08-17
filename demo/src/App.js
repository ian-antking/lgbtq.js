import React from 'react';
import styled from 'styled-components';
import GlobalStyle from './styles/global';
import HeroImage from './components/HeroImage';
import ContentContainer from './components/ContentContainer';
import Flag from './components/Flag';
import Subtitle from './components/Subtitle'
import { flags } from 'lgbtq.js';

const AppContainer = styled.div`
  background-color: #333333;
  width: 100vw;
`;

function App() {
  return (
    <AppContainer className="App">
      <GlobalStyle />
      <HeroImage />
        <Subtitle title="Available Flags" color="#FFFFFF" />
      <ContentContainer>
        {Object.keys(flags).map(flag => <Flag key={`${flag}-flag`} flag={flag} />)}
      </ContentContainer>
    </AppContainer>
  );
}

export default App;
