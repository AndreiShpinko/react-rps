import React from "react";
import styled from "styled-components";

const ResultTitle = ({ result }) => {
  return (
    <Wrapper>
      <Title>{result}</Title>
    </Wrapper>
  );
};

const Title = styled.h2`
  font-size: 32px;
  font-weight: 500;
  font-family: "Albert Sans", sans-serif;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 15px;
  margin-top: 3%;
`;

export default ResultTitle;
