import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div``;
const StyledA = styled.a`
  display: flex;
  align-content: center;
`;

const StyledInput = styled.input``;

const StyledNameLabel = styled.label`
  margin-left: 5px;
  color: #333;
  font-size: 1.05rem;
`;
const StyledCountLabel = styled.label`
  margin-left: 5px;
  font-size: 0.95rem;
  color: #ccc;
`;
function BaseRadio({ productName, ProductCount, name, value, onClick, checked, id }) {
  return (
    <StyledDiv>
      <StyledA>
        <StyledInput
        id={id}
          type="radio"
          name={name || "name"}
          value={value || "value"}
          onClick={() => onClick && onClick(value)}
          checked={checked}
        ></StyledInput>
        <StyledNameLabel htmlFor={id}>{productName || "productName"}</StyledNameLabel>
        <StyledCountLabel>{ProductCount || "productCount"}</StyledCountLabel>
      </StyledA>
    </StyledDiv>
  );
}

export default BaseRadio;
