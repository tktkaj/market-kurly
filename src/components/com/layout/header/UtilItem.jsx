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

      <div style={{display:"flex",alignItems:"center"}}>{children && children}</div>
    </StyledLink>
  );
}

const StyledLink = styled.a`
  cursor: pointer;
  color: ${(props) => props.color};
  background-color: #fff;
  border: none;
  font-size: 0.8rem;
  text-decoration: none;
  display: flex;
  gap: 3px;
`;
export default UtilItem;
