import styled from 'styled-components';

const ColorSwatch = styled.div`
  width: 50px;
  min-height: 10px;
  background-color: ${(props) => props.color};
  border-radius: 5px;
`;

export default ColorSwatch;
