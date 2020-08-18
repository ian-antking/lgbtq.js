import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import GlobalStyle from './styles/global';
import HeroImage from './components/HeroImage';
import CardContainer from './components/CardContainer';
import ContentContainer from './components/Content';
import Flags from './components/Flags';
import FlagOpacity from './components/FlagOpacity';
import Subtitle from './components/Subtitle';
import ColorCards from './components/ColorCards';

import source from './content/content.md';

const AppContainer = styled.div`
  background-color: #333333;
  width: 100vw;
`;

function App() {
  const [content, setContent] = useState('');

  useEffect(() => {
    (async () => {
      const res = await fetch(source);
      const data = await res.text();
      setContent(data);
    })();
  });

  return (
    <AppContainer className="App">
      <GlobalStyle />
      <HeroImage />
      <Subtitle><h2>Getting Started</h2></Subtitle>
      {content && <ContentContainer content={content} />}
      <Subtitle><h2>Available Flags</h2></Subtitle>
      <CardContainer>
        <Flags />
      </CardContainer>
      <Subtitle><h2>Flag Opacity</h2></Subtitle>
      <CardContainer>
        <FlagOpacity />
      </CardContainer>
      <Subtitle><h2>Available Colors</h2></Subtitle>
      <CardContainer>
        <ColorCards />
      </CardContainer>
    </AppContainer>
  );
}

export default App;
