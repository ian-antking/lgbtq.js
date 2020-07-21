import React from 'react';
import styled from 'styled-components';
import GlobalStyle from './styles/global';
import HeroImage from './components/hero-image';

const AppContainer = styled.div``;

function App() {
  return (
    <AppContainer className="App">
      <GlobalStyle />
      <HeroImage />
    </AppContainer>
  );
}

export default App;
