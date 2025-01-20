import React from "react";
import styled from "styled-components";

function CategoryToggle() {
  const categoryImg = (
    <img
      src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTQiIHZpZXdCb3g9IjAgMCAxNiAxNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwYXRoIGQ9Ik0wIDBoMTZ2MS43SDBWMHptMCA2LjE1aDE2djEuN0gwdi0xLjd6bTAgNi4xNWgxNlYxNEgwdi0xLjd6IiBmaWxsPSIjMzMzIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz4KPC9zdmc+Cg=="
      alt=""
    />
  );
  const categoryText = "카테고리";
  // const url = "";
  return (
    <CategoryToggleLayout onMouseEnter={() => {}}>
      <CategoryIconSpan>{categoryImg}</CategoryIconSpan>
      <CategoryTextSpan>{categoryText}</CategoryTextSpan>
    </CategoryToggleLayout>
  );
}

const CategoryToggleLayout = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 10px;
`;
const CategoryIconSpan = styled.span`
  display: flex;
`;
const CategoryTextSpan = styled.span``;
export default CategoryToggle;
