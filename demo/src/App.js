import React from 'react';
import styled from 'styled-components';
import GlobalStyle from './styles/global';
import HeroImage from './components/hero-image';

const AppContainer = styled.div`
  background-color: #333333;
  height: 100vh;
  width: 100vw;
`;

function App() {
  return (
    <AppContainer className="App">
      <GlobalStyle />
      <HeroImage />
    </AppContainer>
  );
}

export default App;
