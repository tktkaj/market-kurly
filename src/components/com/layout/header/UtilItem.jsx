import React from "react";
import styled from "styled-components";

function UtilItem({ linkName, url, color, children, onClick }) {
  return (
    <StyledLink
      href={url}
      color={color || "#333"}
      onClick={(e) => {
        e.preventDefault();
        if (onClick) {
          onClick(e);
        }
      }}
    >
      {linkName}
      {children && children}
    </StyledLink>
  );
}

const StyledLink = styled.a`
  color: ${(props) => props.color};
  background-color: #fff;
  border: none;
  font-size: 0.8rem;
`;
export default UtilItem;
