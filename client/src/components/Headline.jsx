import styled from "styled-components";

// const transform = styled.keyframes`
//   from {
//     transform: transformX(-50%);
//   }

//   to {
//     transform: transformX(50%);
//   }
// `;

const Container = styled.div`
  background-color: #f37413;
  color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-weight: 500;
  padding: 10px 0;
`;
// animation: ${transform} 2s linear infinite;

const Headline = () => {
  return (
    <Container>Amazing discount! 25% slash on all orders over N30k</Container>
  );
};

export default Headline;
