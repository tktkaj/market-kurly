import React from "react";
import styled from "styled-components";
function FGMKCT00601({ onClick }) {
  return (
    <StyledLayout>
      <StyledButton onClick={onClick && onClick}>전체삭제</StyledButton>
    </StyledLayout>
  );
}
const StyledLayout = styled.div`
  display: flex;
  justify-content: end;
  background-color: #fff;
  width: 100%;
  height: 34px;
  padding: 15px;
  border-radius: 20px;
`;
const StyledButton = styled.button`
  border: 1px solid #e2e2e2;
  background-color: #fff;
  border-radius: 6px;
  font-weight: bold;
  padding: 5px 10px;
  cursor: pointer;
`;

export default FGMKCT00601;
