import React from "react";
import styled from "styled-components";

function FGMKPR00306({ children, onClick }) {
  return <PagenationBtnLink onClick={onClick}>{children}</PagenationBtnLink>;
}
const PagenationBtnLink = styled.a`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 34px;
  height: 34px;
  color: #333;
  border: 1px solid #e2e2e2;
`;
export default FGMKPR00306;
