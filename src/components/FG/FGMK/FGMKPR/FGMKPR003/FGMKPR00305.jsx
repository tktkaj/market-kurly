import React, { useEffect, useState } from "react";
import styled from "styled-components";

function FGMKPR00305({ setCategory }) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const category = {
    title: "신상품",
    list: [
      { name: "인기신상랭킹", keyword: "rank" },
      { name: "입점특가", keyword: "sale" },
      { name: "요즘간식", keyword: "snack" },
      { name: "간편한끼", keyword: "once" },
      { name: "주방·리빙", keyword: "living" },
      { name: "뷰티", keyword: "beuty" },
      { name: "패션·잡화", keyword: "fashion" },
    ],
  };
  useEffect(() => {
    setCategory(category.list[0].keyword);
  }, []);
  const handleCategoryItem = (e, keyword, index) => {
    e.preventDefault();
    setCategory(keyword);
    setSelectedIndex(index);
  };

  return (
    <ProductCategoryLayout>
      <StyledTitle>{category && category.title}</StyledTitle>
      <StyledList>
        {category &&
          category.list.map((categoryItem, index) => (
            <StyledItem
              key={categoryItem + index}
              $isSelected={index === selectedIndex}
            >
              <StyledLink
                onClick={(e) =>
                  handleCategoryItem(e, categoryItem.keyword, index)
                }
                $isSelected={index === selectedIndex}
              >
                {categoryItem.name}
              </StyledLink>
            </StyledItem>
          ))}
      </StyledList>
    </ProductCategoryLayout>
  );
}

const ProductCategoryLayout = styled.div`
  width: 1040px;
  margin: 0 auto;
  margin-top: 50px;
`;

const StyledTitle = styled.h3`
  text-align: center;
  font-size: 2rem;
`;

const StyledList = styled.ul`
  list-style: none;
  margin: 0 auto;
  display: grid;
  padding: 30px;
  border: 1px solid #eee;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, auto);
  gap: 20px;
`;

const StyledItem = styled.li`
  cursor: pointer;
`;

const StyledLink = styled.a`
  color: ${(props) => (props.$isSelected ? "#5f0080" : "inherit")};
  &:hover {
    color: #5f0080;
  }
`;

export default FGMKPR00305;
