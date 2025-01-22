import React, { useEffect, useState } from "react";
import styled from "styled-components";

function FGMKPR00305({ setSelNewFilters, newFilters }) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  useEffect(() => {
    if (newFilters) setSelNewFilters(newFilters.list[0].keyword);
  }, []);
  const handleCategoryItem = (e, keyword, index) => {
    e.preventDefault();
    setSelNewFilters(keyword);
    setSelectedIndex(index);
  };

  return (
    <ProductCategoryLayout>
      <StyledTitle>{newFilters && newFilters.title}</StyledTitle>
      <StyledList>
        {newFilters &&
          newFilters.list.map((categoryItem, index) => (
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
  font-weight: ${(props) => (props.$isSelected ? "bold" : "")};
  &:hover {
    color: #5f0080;
  }
`;

export default FGMKPR00305;
