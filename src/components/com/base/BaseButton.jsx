import React from "react";
import styled from "styled-components";

const Button = styled.button`
  background-color: ${(props) => props.$selectedcolor.bg};
  color: ${(props) => props.$selectedcolor.fc};
  border: 1px solid #5f0080;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  width: ${(props) => props.$selectedsize.width};
  height: ${(props) => props.$selectedsize.height};
  font-size: 1.15rem;
  cursor: pointer;
  border-radius: 4px;
`;

function BaseButtonw({ variant, type, btnText, size, onClick }) {
  const form = {
    sm: { width: "240px", height: "56px" },
    ml: { width: "350px", height: "54px" },
    lg: { width: "432px", height: "56px" },
  };
  
  const color = {
    purple: { bg: "#5f0080", fc: "#fff" },
    outlinePurple: { bg: "#fff", fc: "#5f0080" },
  };

  const selectedcolor = color[variant] || color.purple;
  const selectedsize = form[size] || form.sm;

  return (
    <Button
      type={type}
      $selectedsize={selectedsize} 
      $selectedcolor={selectedcolor}
      onClick={onClick}
    >
      {btnText}
    </Button>
  );
}

export default BaseButton;
