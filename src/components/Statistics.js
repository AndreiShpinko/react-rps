import React from "react";
import styled from "styled-components";

import { color_second } from "../Constants";

const Statistics = ({ statistics }) => {
  const { wins, ties, losses, total } = statistics;

  return (
    <Wrap>
      <Row>
        <Parag>
          Wins:&nbsp;
          {wins}
        </Parag>
        <Parag>
          Ties:&nbsp;
          {ties}
        </Parag>
      </Row>
      <Row>
        <Parag>
          Losses:&nbsp;
          {losses}
        </Parag>
        <Parag>
          Total:&nbsp;
          {total}
        </Parag>
      </Row>
    </Wrap>
  );
};

const Wrap = styled.div`
  display: inline-flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 85px;

  @media screen and (max-width: 767px) {
    height: 75px;
  }

  border-radius: 10px;
  padding: 15px;
  margin-right: 10px;
  background-color: ${color_second};
  box-shadow: 0px 3px 15px -10px #000;

  max-width: 250px;
  width: 100%;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
`;

const Parag = styled.p`
  font-size: 20px;
  font-weight: 400;
  font-family: "Albert Sans", sans-serif;
  margin: 0 10px;
`;

export default Statistics;
