import React from 'react';
import ReactMarkdown from 'react-markdown';
import { CopyBlock, dracula } from 'react-code-blocks';
import styled from 'styled-components';

const ContentContainer = styled.div`
  width: 90%;
  display: flex;
  flex-flow: column;
  justify-content: flex-start;
  margin: auto;
  color: white;
`

const renderers = {
code: (text) => <CopyBlock text={text.value} language="jsx" theme={dracula} />,
}

const Content = ({ content }) => (
  <ContentContainer>
    <ReactMarkdown source={content} renderers={renderers} />
  </ContentContainer>
);

export default Content;
