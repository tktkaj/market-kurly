import React from "react";
import styled from "styled-components";
function BrandSlector({ url, btnText, onClick, $active }) {
  return (
    <BrandSelectorButton
      href={url && url}
      onClick={(e) => {
        e.preventDefault();
        if (onClick) onClick();
      }}
      active={$active.toString()}
    >
      {btnText}
    </BrandSelectorButton>
  );
}
const BrandSelectorButton = styled.a`
  color: ${(props) => (props.active === "true" ? "#5f0080" : "#b5b5b5")};
  background-color: #fff;
  border: none;
  font-size: 1.2rem;

  &:hover {
    color: #5f0080;
  }
`;

export default BrandSlector;
