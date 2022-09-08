import React from "react";
import styled from "styled-components";
import { color_second } from "../../core/constants/constants";

const Subtitle = ({ children, styles }) => {
  return <SubtitleStyled styles={styles}>{children}</SubtitleStyled>;
};

const SubtitleStyled = styled.span`
  font-size: 20px;
  font-weight: 400;
  font-family: "Albert Sans", sans-serif;
  color: ${color_second};
  ${({ styles }) => styles};
`;

export default Subtitle;
