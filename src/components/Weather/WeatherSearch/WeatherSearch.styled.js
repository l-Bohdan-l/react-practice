import styled from "styled-components";

export const Wrapper = styled.div`
  /* width: 400px; */
  padding: 20px;
  background: rgba(0, 0, 0, 0.5);
  box-sizing: border-box;
  box-shadow: 0 15px 25px rgba(0, 0, 0, 0.6);
  border-radius: 10px;
`;

export const Form = styled.form`
  display: flex;
  gap: 20px;
  justify-content: space-between;
  align-items: center;
`;

export const Label = styled.label`
  position: absolute;
  top: 0;
  left: 5px;
  padding: 10px 0;
  font-size: 16px;
  color: #fff;
  pointer-events: none;
  transition: 0.5s;
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px 5px;
  font-size: 16px;
  color: #fff;
  border: none;
  border-bottom: 1px solid #fff;
  outline: none;
  background: transparent;

  &:focus + ${Label} 
  /* &:valid + ${Label} */ {
    top: -20px;
    left: 0;
    color: #03e9f4;
    font-size: 12px;
  }
`;

// export const Label = styled.label`
//   position: absolute;
//   top: 0;
//   left: 0;
//   padding: 10px 0;
//   font-size: 16px;
//   color: #fff;
//   pointer-events: none;
//   transition: 0.5s;

//   /* ${Input}:focus , ${Input}:valid,  */
//   ${Input}:focus + & {
//     top: -20px;
//     left: 0;
//     /* color: #03e9f4; */
//     color: #000000;
//     font-size: 12px;
//   }
// `;

export const InputWrapper = styled.div`
  position: relative;
  width: 100%;
`;

export const Button = styled.button`
  position: relative;
  display: inline-block;
  padding: 10px 20px;
  color: #03e9f4;
  font-size: 16px;
  text-decoration: none;
  text-transform: uppercase;
  overflow: hidden;
  transition: 0.5s;
  /* margin-top: 40px; */
  letter-spacing: 4px;
  cursor: pointer;
  background-color: transparent;
  border: none;

  :hover {
    background: #03e9f4;
    color: #fff;
    border-radius: 5px;
    box-shadow: 0 0 5px #03e9f4, 0 0 25px #03e9f4, 0 0 50px #03e9f4,
      0 0 100px #03e9f4;
  }
`;

export const Span = styled.span`
  position: absolute;
  display: block;

  &:nth-child(1) {
    top: 0;
    left: -100%;
    width: 100%;
    height: 2px;
    background: linear-gradient(90deg, transparent, #03e9f4);
    animation: btn-anim1 1s linear infinite;
  }
  @keyframes btn-anim1 {
    0% {
      left: -100%;
    }
    50%,
    100% {
      left: 100%;
    }
  }

  &:nth-child(2) {
    top: -100%;
    right: 0;
    width: 2px;
    height: 100%;
    background: linear-gradient(180deg, transparent, #03e9f4);
    animation: btn-anim2 1s linear infinite;
    animation-delay: 0.25s;
  }

  @keyframes btn-anim2 {
    0% {
      top: -100%;
    }
    50%,
    100% {
      top: 100%;
    }
  }

  &:nth-child(3) {
    bottom: 0;
    right: -100%;
    width: 100%;
    height: 2px;
    background: linear-gradient(270deg, transparent, #03e9f4);
    animation: btn-anim3 1s linear infinite;
    animation-delay: 0.5s;
  }

  @keyframes btn-anim3 {
    0% {
      right: -100%;
    }
    50%,
    100% {
      right: 100%;
    }
  }

  &:nth-child(4) {
    bottom: -100%;
    left: 0;
    width: 2px;
    height: 100%;
    background: linear-gradient(360deg, transparent, #03e9f4);
    animation: btn-anim4 1s linear infinite;
    animation-delay: 0.75s;
  }

  @keyframes btn-anim4 {
    0% {
      bottom: -100%;
    }
    50%,
    100% {
      bottom: 100%;
    }
  }
`;
