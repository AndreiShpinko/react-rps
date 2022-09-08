import React from "react";
import styled from "styled-components";

import { color_first, color_second } from "../../core/constants/constants";
import Subtitle from "../ui/Subtitle";

const Statistics = ({ statistics: { wins, ties, losses, total } }) => {
  return (
    <Wrapper>
      <Row>
        <Subtitle>
          Wins:&nbsp;
          {wins}
        </Subtitle>
        <Subtitle>
          Ties:&nbsp;
          {ties}
        </Subtitle>
      </Row>
      <Row>
        <Subtitle>
          Losses:&nbsp;
          {losses}
        </Subtitle>
        <Subtitle>
          Total:&nbsp;
          {total}
        </Subtitle>
      </Row>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: inline-flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  
  max-width: 250px;
  width: 100%;
  height: 85px;
  padding: 15px;
  margin-right: 10px;
  border-radius: 10px;
  background-color: ${color_first};
  color: ${color_second};
  box-shadow: 0px 5px 5px -4px ${color_first};

  @media screen and (max-width: 767px) {
    height: 75px;
  }
`;

const Row = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
`;

export default Statistics;
