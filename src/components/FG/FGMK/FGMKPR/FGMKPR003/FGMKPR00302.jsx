import React from "react";
import styled from "styled-components";
import BaseRadio from "../../../../com/base/BaseRadio";
import BaseCheckBox from "../../../../com/base/BaseCheckBox";
function FGMKPR00302({ category }) {
  const upArrowIcon = (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      stroke="#999"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M5 11L9 7L13 11" stroke="#999" strokeWidth="1.2"></path>
    </svg>
  );
  const rightArrowIcon = (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      stroke="#999"
      xmlns="http://www.w3.org/2000/svg"
      style={{ transform: "rotate(90deg)" }}
    >
      <path d="M5 11L9 7L13 11" stroke="#999" stroke-width="1.2"></path>
    </svg>
  );
  return (
    <DetailFiterItemLayout>
      {category && (
        <DetailFiterItemButton>
          <TitleDiv>{category.title}</TitleDiv>
          <IconDiv>{upArrowIcon}</IconDiv>
        </DetailFiterItemButton>
      )}
      <StyledDiv>
        {category.type === "product" &&
          category.list.map((item, index) => (
            <BaseCheckBox
              key={item.name + index}
              name={item.name}
              count={item.count}
              value={item.name}
            />
          ))}
        {category.type === "price" &&
          category.list.map((item, index) => (
            <BaseRadio
              key={item.name + index}
              productName={item.name}
              ProductCount={item.count}
              name="price"
              value={item.name}
            />
          ))}
      </StyledDiv>
      <MoreBtn>카테고리 더보기{rightArrowIcon}</MoreBtn>
    </DetailFiterItemLayout>
  );
}

const DetailFiterItemLayout = styled.div``;

const DetailFiterItemButton = styled.button`
  border: none;
  background-color: #fff;
  display: flex;
`;

const TitleDiv = styled.div``;

const IconDiv = styled.div``;

const StyledDiv = styled.div``;

const MoreBtn = styled.button`
  border: none;
  background-color: #fff;
  display: flex;
  align-items: center;
`;

export default FGMKPR00302;
