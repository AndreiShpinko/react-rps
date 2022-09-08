import React from "react";
import styled from "styled-components";

import Subtitle from "../ui/Subtitle";
import {
  color_first,
  color_second,
  color_history_win,
  color_history_tie,
  color_history_lose,
} from "../../core/constants/constants";

const History = ({ history }) => {
  return (
    <Wrapper>
      <NamingWrapper>
        <Subtitle>CPU</Subtitle>
        <Subtitle>User</Subtitle>
      </NamingWrapper>
      {!history.length ? (
        <SubtitleWrapper>
          <Subtitle>No history yet</Subtitle>
        </SubtitleWrapper>
      ) : (
        <ItemsList>
          {history.slice(0, 15).map((obj, i) => {
            return (
              <Item result={obj.result} key={i}>
                <ItemInner>
                  <ImageWrap>
                    <Image
                      src={require(`../../../public/imgs/${obj.cpuSign}.png`)}
                      alt={obj.cpuSign}
                    />
                  </ImageWrap>
                  <ImageWrap>
                    <Image
                      src={require(`../../../public/imgs/${obj.userSign}.png`)}
                      alt={obj.userSign}
                    />
                  </ImageWrap>
                </ItemInner>
              </Item>
            );
          })}
        </ItemsList>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 85px;

  padding: 5px 10px 5px 5px;
  overflow: hidden;
  border-radius: 10px;
  background-color: ${color_first};
  color: ${color_second};
  box-shadow: 0px 5px 5px -4px ${color_first};

  @media screen and (max-width: 767px) {
    margin-top: 10px;
  }
`;

const NamingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  height: 100%;
  padding: 5px;
  margin: 0 10px 0 5px;
`;

const SubtitleWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ItemsList = styled.div`
  height: 100%;
  display: flex;
  justify-content: flex-start;
  flex-grow: 1;
  overflow: hidden;
  position: relative;

  &:before {
    content: "";
    display: inline-block;
    width: 70px;
    height: 100%;
    position: absolute;
    top: 0;
    right: -1px;
    background: #fff;
    background: linear-gradient(
      90deg,
      rgba(255, 255, 255, 0) 0%,
      ${color_first} 80%
    );
  }
`;

const Item = styled.div`
  height: 100%;
  border-radius: 5px;
  padding: 3px;
  margin: 0 2px;
  ${({ result }) => {
    if (result === 1) return `background-color: ${color_history_win};`;
    else if (result === 2) return `background-color: ${color_history_tie};`;
    else if (result === 3) return `background-color: ${color_history_lose};`;
  }}
`;

const ItemInner = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  padding: 0px 10px;
  border-radius: 5px;
  background-color: ${color_first};
`;

const ImageWrap = styled.div`
  width: 24px;
  height: 24px;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

export default History;
