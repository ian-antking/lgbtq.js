import styled from 'styled-components';

const Card = styled.div`
width: 300px;
height: 200px;
background: ${(props) => props.background || '#808080'};
border-radius: 10px;
margin: 10px;
padding: 10px;
display: flex;
flex-flow: column;
justify-content: center;
align-items: center;
border: 2px solid white;
background-position: center;
background-repeat: no-repeat;
background-size: cover;
position: relative;
`;

export default Card;
