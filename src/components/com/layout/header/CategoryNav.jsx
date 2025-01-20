import React from "react";
import styled from "styled-components";
import CategoryItem from "./CategoryItem";
import useMovePage from "../../../hooks/useMovePage";

function CategoryNav() {
  const { makeRequest } = useMovePage();
  const categoryItems = [
    {
      name: "신상품",
      url: "/FG/FGMK/FGMKPR/FGMKPR003",
    },
    {
      name: "베스트",
      url: "/FG/FGMK/FGMKPR/FGMKPR003",
    },
    {
      name: "알뜰쇼핑",
      url: "/FG/FGMK/FGMKPR/FGMKPR003",
    },
    {
      name: "특가/혜택",
      url: "/FG/FGMK/FGMKPR/FGMKPR003",
    },
  ];

  return (
    <CategoryNavLayout>
      <CategoryNavList>
        {categoryItems.map((categoryItem, index) => (
          <CategoryItem
            key={categoryItem.name + index}
            categoryName={categoryItem.name}
            onClick={() => {
              makeRequest(categoryItem.url);
            }}
          />
        ))}
      </CategoryNavList>
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
