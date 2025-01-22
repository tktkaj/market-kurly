import React from "react";
import styled from "styled-components";
import BaseRadio from "../../../../com/base/BaseRadio";
import BaseCheckBox from "../../../../com/base/BaseCheckBox";
function FGMKPR00302({ category, handleDeatilFilter, handleDetailFilter }) {
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
        {category &&
          category.type === "product" &&
          category.list.map((item, index) => (
            <BaseCheckBox
              onClick={() => handleDeatilFilter(item.name)}
              key={item.name + index}
              name={item.name}
              count={item.count}
              value={item.name}
            />
          ))}
        {category &&
          category.type === "price" &&
          category.list.map((item, index) => (
            <BaseRadio
              onClick={() => handleDetailFilter(item.name)}
              key={item.name + index}
              productName={item.name}
              ProductCount={item.count}
              name="price"
              value={item.name}
            />
          ))}
        {category && category.type !== "price" && (
          <MoreBtn>
            <span style={{ color: "#999" }}>카테고리 더보기</span>
            <div style={{ display: "flex", alignItems: "center" }}>
              {rightArrowIcon}
            </div>
          </MoreBtn>
        )}
      </StyledDiv>
    </DetailFiterItemLayout>
  );
}

const DetailFiterItemLayout = styled.div`
  border-top: 1px solid #eee;
  width: 250px;
  padding-bottom: 20px;
`;

const DetailFiterItemButton = styled.button`
  width: 80%;
  border: none;
  background-color: #fff;
  display: flex;
  padding: 20px 0;
  justify-content: space-between;
  cursor: pointer;
`;

const TitleDiv = styled.div`
  font-size: 0.9rem;
`;

const IconDiv = styled.div``;

const StyledDiv = styled.div``;

const MoreBtn = styled.button`
  width: 80%;
  border: none;
  background-color: #fff;
  display: flex;
  justify-content: center;
  padding-top: 20px;
`;

export default FGMKPR00302;
