import React from "react";
import styled from "styled-components";
import CategoryItem from "./CategoryItem";
import useCore from "../../../../hooks/useCore";
function CategoryNav({ menu }) {
  const core = useCore();
  return (
    <CategoryNavLayout>
      {menu && (
        <CategoryNavList>
          {menu.map((item, index) => (
            <CategoryItem
              key={item.name + index}
              categoryName={item.name}
              onClick={() => {
                core.goPage(item.url);
              }}
            />
          ))}
        </CategoryNavList>
      )}
    </CategoryNavLayout>
  );
}

const CategoryNavLayout = styled.div``;

const CategoryNavList = styled.div`
  display: flex;
  gap: 80px;
  align-items: center;
`;

export default CategoryNav;
