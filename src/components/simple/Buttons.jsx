import React from "react";
import styled from "styled-components";

import { color_first } from "../../core/constants/constants";

const Buttons = ({ signs, clickBtn }) => {
  return (
    <ButtonsWrap>
      {signs.map((sign, i) => {
        return (
          <Button key={i} onClick={() => clickBtn(sign)}>
            <ImageWrap>
              <Image src={require(`../../../public/imgs/${sign}.png`)} />
            </ImageWrap>
          </Button>
        );
      })}
    </ButtonsWrap>
  );
};

const Button = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;

  max-width: 90px;
  max-height: 90px;
  width: 100%;
  height: 100%;
  aspect-ratio: 1;

  border-radius: 10px;
  border: none;
  outline: none;

  margin: 5px;
  padding: 10px;
  box-shadow: 0px 5px 5px -4px ${color_first};
  background-color: ${color_first};

  @media screen and (max-width: 767px) {
    margin: 2px;
  }
`;

const ButtonsWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
`;

const ImageWrap = styled.div`
  width: 100%;
  height: 100%;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

export default Buttons;
