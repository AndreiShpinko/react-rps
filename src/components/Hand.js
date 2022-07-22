import React from "react";
import styled, { keyframes } from "styled-components";
import { color_hand, color_hand_border } from "../Constants";

const Hand = ({ sign, signs, reverse = false, playAnimation }) => {
  if (!sign) sign = signs[Math.floor(Math.random() * signs.length)];

  return (
    <HandWrap reverse={reverse}>
      <PalmWrap animReverse={reverse} playAnimation={playAnimation}>
        <Palm>
          <FingerThumb sign={sign} />
          <FingerIndex sign={sign} />
          <FingerMiddle sign={sign} />
          <FingerRing sign={sign} />
          <FingerLittle sign={sign} />
        </Palm>
      </PalmWrap>
    </HandWrap>
  );
};

const BorderWidth = "4px";
const transition = "0.4s";

const handAnimation = keyframes`
  0% { transform: rotateZ(0deg)}
  25% { transform: rotateZ(-15deg)}
  75% { transform: rotateZ(15deg)}
  100% { transform: rotateZ(0deg)}
`;

const HandWrap = styled.div`
  max-width: 800px;
  max-height: 800px;
  width: 100%;
  height: 100%;
  aspect-ratio: 1;
  position: relative;
  margin: 0 7%;

  @media screen and (max-width: 767px) {
    margin: 0 3%;
  }
  display: flex;
  align-items: center;
  ${({ reverse }) => reverse && "transform: rotateY(180deg);"}
`;

const PalmWrap = styled.div`
  position: absolute;
  width: 57%;
  height: 57%;
  right: 0;
  display: flex;
  justify-content: flex-end;

  animation-name: ${handAnimation};
  animation-duration: 3s;
  animation-iteration-count: infinite;
  ${({ animReverse }) => animReverse && "animation-direction: reverse;"}
  ${({ playAnimation }) => !playAnimation && "animation-iteration-count: 1;"}
`;

const Palm = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 20% 100% 100% 20%;
  background-color: ${color_hand};
  border: ${BorderWidth} solid ${color_hand_border};
`;

const StyledFinger = styled.div`
  position: absolute;
  background-color: ${color_hand};
  border: ${BorderWidth} solid ${color_hand_border};
`;

const FingerThumb = styled(StyledFinger)`
  width: 30%;
  height: 60%;

  top: -${BorderWidth};
  right: 50%;

  z-index: 10;
  border-radius: 100px;
  transition: ${transition};

  ${({ sign }) => {
    if (sign === "lizard") {
      return `
      width: 30%;
      height: 75%;

      top: -10%;
      right: 70%;
      
      transform: rotateZ(80deg);
      `;
    }
  }}

  &:after {
    content: "";
    position: absolute;
    width: calc(70% + 4px);
    height: 40%;

    border-radius: 0 5px 0 0;
    left: 50%;
    background-color: inherit;
    transition: ${transition};

    ${({ sign }) => {
      if (sign === "lizard") {
        return `
          width: 140%;
          height: 47%;
          left: 28%;
          top: -15%;
      }
        `;
      }
    }}
  }
`;

const FingerIndex = styled(StyledFinger)`
  width: 87%;
  height: calc(25% + 5px);

  top: -${BorderWidth};

  border-radius: 100px 0 0 100px;
  border-right-width: 0;

  transition-property: width, top, right, transform;
  transition-duration: ${transition};

  ${({ sign }) => {
    if (sign === "rock") {
      return `
        width: 63%;
        right: 52%;
        border-radius: 100px; 
        border-right-width: 4px;
      `;
    } else if (sign === "scissor" || sign === "spock") {
      return `
        top: calc(-9% - 1px);
        right: 92%;
        transform: rotate(10deg);
      `;
    } else if (sign === "paper" || sign === "lizard") {
      return `
        right: 90%;
      `;
    }
  }}
`;

const FingerMiddle = styled(StyledFinger)`
  width: 89.6%;
  height: calc(25% + 5px);

  top: calc(25% - 3px);
  right: 92%;

  border-radius: 100px 0 0 100px;
  border-right-width: 0;

  transition-property: width, top, right, transform;
  transition-duration: ${transition};

  ${({ sign }) => {
    if (sign === "rock") {
      return `
        right: 56%;
        width: 63%;
        border-radius: 100px;
        border-right-width: 4px;
      `;
    } else if (sign === "scissor") {
      return `
        top: calc(33% - 4px * 2);
        transform: rotate(-10deg);
        `;
    } else if (sign === "spock") {
      return `
        top: calc(18.5% - 4px);
        transform: rotate(10deg);
        `;
    }
  }}
`;

const FingerRing = styled(StyledFinger)`
  top: calc(50% - 2px);

  height: calc(25% + 5px);

  border-radius: 100px 0 0 100px;
  border-right-width: 0;

  transition-property: width, top, right, transform;
  transition-duration: ${transition};

  ${({ sign }) => {
    if (sign === "rock" || sign === "scissor") {
      return `
        width: 61%;
        right: 56%;
        border-radius: 100px;
        border-right-width: 4px;
      `;
    } else if (sign === "spock") {
      return `
        width: 84%;
        top: auto;
        right: 92%;
        bottom: 17%;
        transform: rotate(-10deg);
      `;
    } else if (sign === "paper" || sign === "lizard") {
      return `
        width: 89.6%;
        right: 88%;
      `;
    }
  }}
`;

const FingerLittle = styled(StyledFinger)`
  top: calc(75% - 1px);
  height: calc(25% + 5px);

  border-radius: 100px 0 0 100px;
  border-right-width: 0;

  transition-property: width, top, right, transform;
  transition-duration: ${transition};

  ${({ sign }) => {
    if (sign === "rock" || sign === "scissor") {
      return `
        width: 59%;
        right: 54%;
        border-radius: 100px; 
        border-right-width: 4px;
      `;
    } else if (sign === "spock") {
      return `
        width: 80%;
        top: auto;
        right: 90%;
        bottom: -8%;
        transform: rotateZ(-10deg);
      `;
    } else if (sign === "paper" || sign === "lizard") {
      return `
        width: 89.6%;
        right: 82%;
      `;
    }
  }}
`;

export default Hand;
