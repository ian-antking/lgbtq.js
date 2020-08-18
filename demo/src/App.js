import React, { useState, useEffect } from "react";
import styled from "styled-components";
import GlobalStyle from "./styles/global";
import HeroImage from "./components/HeroImage";
import CardContainer from "./components/CardContainer";
import ContentContainer from "./components/Content";
import Flags from "./components/Flags";
import Subtitle from "./components/Subtitle";
import ColorCards from "./components/ColorCards";

import source from "./content/content.md";

const AppContainer = styled.div`
  background-color: #333333;
  width: 100vw;
`;

function App() {
  const [content, setContent] = useState("");

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
        {content && <ContentContainer content={content} />}
        <Subtitle title="Available Colors" color="#FFFFFF" />
      <CardContainer>
        <ColorCards />
      </CardContainer>
        <Subtitle title="Available Flags" color="#FFFFFF" />
      <CardContainer>
        <Flags />
      </CardContainer>
    </AppContainer>
  );
}

export default App;
