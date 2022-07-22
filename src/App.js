import React, { useState, useEffect } from "react";
import styled from "styled-components";

import Statistics from "./components/Statistics";
import Buttons from "./components/Buttons";
import Hand from "./components/Hand";
import ResultTitle from "./components/ResultTitle";
import History from "./components/History";

import Fade from "react-reveal/Fade";

import { color_background } from "./Constants";

function App() {
  const signs = ["rock", "scissor", "paper", "lizard", "spock"];

  const [statistics, setStatistics] = useState({
    wins: 0,
    ties: 0,
    losses: 0,
    total: 0,
  });

  const [cpuSign, setCpuSign] = useState("");
  const [userSign, setUserSign] = useState("");

  const [resultTitle, setResultTitle] = useState("Start game!!!");
  const [history, setHistory] = useState([]);

  const [playAnimation, setPlayAnimation] = useState(true);

  const clickBtn = (sign) => {
    setPlayAnimation(false);

    setUserSign(sign);
    setCpuSign(signs[Math.floor(Math.random() * signs.length)]);
  };

  function getResult(userSign, cpuSign) {
    // 1-wins; 2-ties; 3-losses;
    if (userSign === cpuSign) {
      return 2;
    } else if (
      (userSign === "rock" &&
        (cpuSign === "lizard" || cpuSign === "scissor")) ||
      (userSign === "scissor" &&
        (cpuSign === "lizard" || cpuSign === "paper")) ||
      (userSign === "paper" && (cpuSign === "rock" || cpuSign === "spock")) ||
      (userSign === "lizard" && (cpuSign === "paper" || cpuSign === "spock")) ||
      (userSign === "paper" && (cpuSign === "rock" || cpuSign === "spock"))
    ) {
      return 1;
    } else return 3;
  }

  useEffect(() => {
    if (!(signs.includes(userSign) && signs.includes(cpuSign))) return;

    let result = getResult(userSign, cpuSign);
    if (result === 1) {
      setStatistics((prev) => ({
        ...prev,
        wins: prev.wins + 1,
        total: prev.total + 1,
      }));
      setResultTitle("Win");
    } else if (result === 2) {
      setStatistics((prev) => ({
        ...prev,
        ties: prev.ties + 1,
        total: prev.total + 1,
      }));
      setResultTitle("Tie");
    } else if (result === 3) {
      setStatistics((prev) => ({
        ...prev,
        losses: prev.losses + 1,
        total: prev.total + 1,
      }));
      setResultTitle("Loss");
    }

    setHistory((prev) => {
      return [
        {
          result,
          userSign,
          cpuSign,
        },
        ...prev,
      ];
    });
  }, [userSign, cpuSign]);

  return (
    <Wrap>
      <Сontainer>
        <Fade top>
          <Header>
            <Statistics statistics={statistics} />
            <History history={history} />
          </Header>
        </Fade>

        <ResultTitle result={resultTitle} />
        <Hands>
          <Hand
            sign={cpuSign}
            signs={signs}
            reverse={true}
            playAnimation={playAnimation}
          />
          <Hand sign={userSign} signs={signs} playAnimation={playAnimation} />
        </Hands>
        <Fade bottom>
          <Buttons signs={signs} clickBtn={clickBtn} />
        </Fade>
      </Сontainer>
    </Wrap>
  );
}

const Wrap = styled.div`
  min-height: 100%;
  min-width: 100%;
  background-color: ${color_background};
`;

const Сontainer = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 15px;
  max-width: 1320px;

  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: space-between;

  @media screen and (max-width: 1399px) {
    max-width: 1140px;
  }
  @media screen and (max-width: 1199px) {
    max-width: 960px;
  }
  @media screen and (max-width: 991px) {
    max-width: 720px;
  }
  @media screen and (max-width: 767px) {
    max-width: 540px;
  }
  @media screen and (max-width: 480px) {
    max-width: none;
    padding: 7px;
  }
`;

const Header = styled.header`
  display: flex;
  @media screen and (max-width: 767px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Hands = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10%;
  margin: -2% 0;
  @media screen and (max-width: 767px) {
    padding: 0;
  }
`;

export default App;
