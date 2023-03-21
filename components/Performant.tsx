import styled, { keyframes } from "styled-components";

const spinAnimation = keyframes`
	from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Ball = styled.div`
  position: absolute;
  width: 60px;
  height: 60px;
  top: 40px;
  left: -30px;
  will-change: transform;
  border-radius: 50%;
  animation: 1s ease-in-out infinite ${spinAnimation};
  transform-origin: 50% -40px;
`;

const Ball1 = styled(Ball)`
  background: crimson;
  animation-delay: 100ms;
`;

const Ball2 = styled(Ball)`
  background: gold;
  animation-delay: 250ms;
`;

const Ball3 = styled(Ball)`
  background: forestgreen;
  animation-delay: 400ms;
`;

const Ball4 = styled(Ball)`
  background: royalblue;
  animation-delay: 550ms;
`;

const Container = styled.div`
  position: relative;
`;

export const Performant = () => (
  <Container>
    <Ball1 />
    <Ball2 />
    <Ball3 />
    <Ball4 />
  </Container>
);
