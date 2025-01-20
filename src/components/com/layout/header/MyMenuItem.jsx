import React from "react";
import styled from "styled-components";

function MyMenuItem({ type, children, onClick }) {
  return (
    <MyMenuItemBox>
      <StyledButton type={type} onClick={onClick}>
        {children}
      </StyledButton>
    </MyMenuItemBox>
  );
}

const MyMenuItemBox = styled.div``;
const StyledButton = styled.button`
  border: none;
  background-color: #fff;
  cursor: pointer;
`;
export default MyMenuItem;
