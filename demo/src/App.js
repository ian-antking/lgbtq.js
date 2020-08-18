import React from 'react';
import styled from 'styled-components';
import GlobalStyle from './styles/global';
import { CopyBlock, dracula } from 'react-code-blocks';
import HeroImage from './components/HeroImage';
import ContentContainer from './components/ContentContainer';
import Flags from './components/Flags';
import Subtitle from './components/Subtitle';
import ColorCards from './components/ColorCards';
import styleInjectionExample from './content/code-examples/style-injection';
import styledComponentsExample from './content/code-examples/styled-components-example';

const AppContainer = styled.div`
  background-color: #333333;
  width: 100vw;
`;

function App() {
  return (
    <AppContainer className="App">
      <GlobalStyle />
      <HeroImage />
      <Subtitle title="Colors" color="#FFFFFF" />
      <Subtitle title="Available Colors" color="#FFFFFF" />
      <ContentContainer>
        <ColorCards />
      </ContentContainer>
      <Subtitle title="Flags" color="#FFFFFF" />
      <Subtitle title="Style Injection" color="#FFFFFF" />
      <CopyBlock
        text={styleInjectionExample}
        language={'jsx'}
        showLineNumbers
        theme={dracula}
      />
      <Subtitle title="Styled Components" color="#FFFFFF" />
      <CopyBlock
        text={styledComponentsExample}
        language={'jsx'}
        showLineNumbers
        theme={dracula}
      />
        <Subtitle title="Available Flags" color="#FFFFFF" />
      <ContentContainer>
        <Flags />
      </ContentContainer>
    </AppContainer>
  );
}

export default App;
