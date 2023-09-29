import styled, { keyframes } from "styled-components";

export const BoardRowWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const BoardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const MainWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
`;

export const NextMessage = styled.p`
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 10px;
  text-decoration: underline;
`;

export const WinnerMessage = styled.p`
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 10px;
  background: #24ff14;
  background: -webkit-linear-gradient(to right, #24ff14 0%, #ff0f87 100%);
  background: -moz-linear-gradient(to right, #24ff14 0%, #ff0f87 100%);
  background: linear-gradient(to right, #24ff14 0%, #ff0f87 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  text-shadow: 3px 1px 2px rgba(0, 0, 0, 0.2);
`;

const firework = keyframes`
 0% { 
    transform: translate(-50%, 60vh);
    width: 0.5vmin;
    opacity: 1;
  }
  50% { 
    width: 0.5vmin;
    opacity: 1;
  }
  100% { 
    width: 45vmin; 
    opacity: 0; 
  }
`;

export const FireWorksWrapper = styled.div`
  /* &, */
  position: absolute;
  top: 0;
  transform: ${(props) => {
    if (props.position === "first") {
      return `translate(-50%, -50%) rotate(339deg) scale(1.15) rotateY(-30deg)`;
    }
    if (props.position === "second") {
      return `translate(-50%, -50%) rotate(20deg) scale(1.15) rotateY(-30deg)`;
    }
    if (!props.position === "third") {
      return `translate(-50%, -50%) rotate(120deg) scale(1.15) rotateY(-30deg)`;
    }
  }};

  &::before,
  &::after {
    --top: 60vh;
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    /* transform: translate(-50%, -50%); */
    width: 0.5vmin;
    aspect-ratio: 1;
    background:
    /* random backgrounds */ radial-gradient(
          circle,
          #ff0 0.2vmin,
          #0000 0
        )
        50% 00%,
      radial-gradient(circle, #ff0 0.3vmin, #0000 0) 00% 50%,
      radial-gradient(circle, #ff0 0.5vmin, #0000 0) 50% 99%,
      radial-gradient(circle, #ff0 0.2vmin, #0000 0) 99% 50%,
      radial-gradient(circle, #ff0 0.3vmin, #0000 0) 80% 90%,
      radial-gradient(circle, #ff0 0.5vmin, #0000 0) 95% 90%,
      radial-gradient(circle, #ff0 0.5vmin, #0000 0) 10% 60%,
      radial-gradient(circle, #ff0 0.2vmin, #0000 0) 31% 80%,
      radial-gradient(circle, #ff0 0.3vmin, #0000 0) 80% 10%,
      radial-gradient(circle, #ff0 0.2vmin, #0000 0) 90% 23%,
      radial-gradient(circle, #ff0 0.3vmin, #0000 0) 45% 20%,
      radial-gradient(circle, #ff0 0.5vmin, #0000 0) 13% 24%;
    background-size: 0.5vmin 0.5vmin;
    background-repeat: no-repeat;
    animation: ${firework} 2s infinite;
  }
  &::before {
    transform: translate(-50%, -50%) rotate(25deg);
  }

  &::after {
    transform: translate(-50%, -50%) rotate(-37deg);
  }
`;
