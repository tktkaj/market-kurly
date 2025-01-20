import React from "react";
import styled from "styled-components";

function CategoryItem({ categoryName, onClick }) {
  return (
    <CategoryItemBox onClick={onClick}>
      <StyledSpan>{categoryName}</StyledSpan>
    </CategoryItemBox>
  );
}

const CategoryItemBox = styled.li`
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 1px;
  border-bottom: 1px solid transparent;

  &:hover {
    color: #5f0080;
    border-bottom: 1px solid #5f0080;
  }
`;

const StyledSpan = styled.span`
  font-size: 1.1rem;
`;

export default CategoryItem;
