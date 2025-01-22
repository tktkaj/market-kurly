import React, { useState } from "react";
import styled from "styled-components";

const StyledLi = styled.div`
  list-style: none;
  margin-bottom: 5px;
`;
const StyledA = styled.a`
  text-decoration: none;
`;
const StyledDiv = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 2px;
`;

const StyledSvg = styled.svg`
  margin-right: 5px;
`;
const StyledCateogrySpan = styled.span`
  font-size: 1.05rem;
  color: #333;
  margin-right: 4px;
`;
const StyledCountSpan = styled.span`
  font-size: 0.9rem;
  color: #ccc;
`;

function BaseCheckBox({ name, count, onClick, active }) {
  let [isChecked, setIsChecked] = useState(active);

  const handleIsChecked = (e) => {
    setIsChecked(isChecked ? false : true);
  };

  return (
    <StyledLi
      onClick={() => {
        handleIsChecked();
        if (onClick) onClick();
      }}
    >
      <StyledA href="#;">
        <StyledDiv>
          <StyledSvg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{marginRight:"5px"}}
          >
            <path
              d={
                isChecked
                  ? "M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z"
                  : "M23.5 12C23.5 18.3513 18.3513 23.5 12 23.5C5.64873 23.5 0.5 18.3513 0.5 12C0.5 5.64873 5.64873 0.5 12 0.5C18.3513 0.5 23.5 5.64873 23.5 12Z"
              }
              fill={isChecked ? "#5f0080" : "none"}
              stroke={isChecked ? "none" : "#ddd"}
            />
            <path
              d="M7 12.6667L10.3846 16L18 8.5"
              stroke={isChecked ? "#fff" : "#ddd"}
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </StyledSvg>
          <StyledCateogrySpan>{name || ""}</StyledCateogrySpan>
          <StyledCountSpan>{count || 0}</StyledCountSpan>
        </StyledDiv>
      </StyledA>
    </StyledLi>
  );
}

export default BaseCheckBox;
