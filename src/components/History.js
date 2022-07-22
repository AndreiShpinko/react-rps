import React from "react";
import styled from "styled-components";

import {
  color_second,
  color_history_win,
  color_history_tie,
  color_history_lose,
} from "../Constants";

const History = ({ history }) => {
  return (
    <Wrap>
      {!history.length ? (
        <Parag>No history yet</Parag>
      ) : (
        <ItemsWrap>
          <Item>
            <Parag>CPU</Parag>
            <Parag>User</Parag>
          </Item>
          {history.slice(0, 15).map((obj, i) => {
            return (
              <Item result={obj.result} key={i}>
                <ImageWrap>
                  <Image
                    src={require(`../../public/imgs/${obj.cpuSign}.svg`)}
                    alt={obj.cpuSign}
                  />
                </ImageWrap>
                <ImageWrap>
                  <Image
                    src={require(`../../public/imgs/${obj.userSign}.svg`)}
                    alt={obj.userSign}
                  />
                </ImageWrap>
              </Item>
            );
          })}
        </ItemsWrap>
      )}
    </Wrap>
  );
};

const Wrap = styled.div`
  width: 100%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 85px;

  @media screen and (max-width: 767px) {
    height: 75px;
  }

  padding: 4px;
  overflow: hidden;
  border-radius: 10px;
  background-color: ${color_second};
  box-shadow: 0px 3px 15px -10px #000;

  @media screen and (max-width: 767px) {
    margin-top: 10px;
  }
`;

const ItemsWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: 100%;
  width: 100%;
  overflow: hidden;
  position: relative;

  &:after {
    content: "";
    position: absolute;
    width: 80px;
    height: 100%;
    top: 0;
    right: 0;
    background: linear-gradient(
      90deg,
      rgba(238, 238, 238, 0) 0%,
      rgba(238, 238, 238, 1) 80%
    );
  }
`;

const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  height: 100%;
  border-radius: 5px;
  padding: 0px 15px;
  margin: 0 2px;
  ${({ result }) => {
    if (result === 1) return `background-color: ${color_history_win};`;
    else if (result === 2) return `background-color: ${color_history_tie};`;
    else if (result === 3) return `background-color: ${color_history_lose};`;
  }}

  @media screen and (max-width: 767px) {
    padding: 0px 10px;
  }
`;

const ImageWrap = styled.div`
  width: 20px;
  height: 20px;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const Parag = styled.p`
  font-size: 20px;
  font-family: "Albert Sans", sans-serif;
`;


export default History;
