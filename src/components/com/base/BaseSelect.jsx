import React, { useState } from "react";
import styled from "styled-components";

function BaseSelect({ products, initialValue, onClick }) {
  const [show, setShow] = useState(false);
  const [selectedValue, setSelectedValue] = useState(
    initialValue || "선택하세요"
  );
  const formatPrice = (price) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };
  const handleSelectorClick = () => {
    setShow(!show);
  };

  const handleProductSelect = (product) => {
    setSelectedValue(product.name);
    if (onClick) onClick(product.salePrice);
    setShow(false);
  };

  return (
    <StyledContainerDiv>
      <StyledSelectDiv onClick={handleSelectorClick}>
        {selectedValue}
        <StyledSvg
          focusable="false"
          aria-hidden="true"
          viewBox="0 0 24 24"
          data-testid="ArrowDropDownIcon"
        >
          <path d="M7 10l5 5 5-5z"></path>
        </StyledSvg>
      </StyledSelectDiv>
      <StyledProductUl show={show}>
        {products &&
          products.map((product, index) => (
            <StyledProductLi
              key={product.name + index}
              onClick={() => {
                handleProductSelect(product);
              }}
            >
              <StyledSpan>{product.name}</StyledSpan>
              <StyldPriceWrapper>
                <StyledOrigianlPriceDiv>
                  {formatPrice(product.originalPrice)}원
                </StyledOrigianlPriceDiv>
                <StyledDiscountPriceDiv>
                  {formatPrice(product.salePrice)}원
                </StyledDiscountPriceDiv>
              </StyldPriceWrapper>
            </StyledProductLi>
          ))}
      </StyledProductUl>
    </StyledContainerDiv>
  );
}

const StyledContainerDiv = styled.div`
  width: 432px;
  border: 1px solid #f4f4f4;
  position: relative;
`;

const StyledSelectDiv = styled.div`
  position: relative;
  padding: 14px 16px 12px 15px;
  font-size: 0.9rem;
  border: 1px solid #f4f4f4;
`;
const StyledProductUl = styled.ul`
  width: 100%;
  padding: 0;
  position: absolute;
  z-index: 10;
  background-color: #fff;
  display: ${(props) => (props.show ? "block" : "none")};
`;

const StyledProductLi = styled.li`
  padding: 16.5px 22px 16.5px 14px;
  font-size: 0.9rem;
  border: 1px solid #f4f4f4;
  list-style: none;
  display: flex;
  justify-content: space-between;
`;
const StyledSvg = styled.svg`
  position: absolute;
  top: 11px;
  right: 10px;
  width: 20px;
`;
const StyledSpan = styled.span`
  font-size: 0.9rem;
`;
const StyldPriceWrapper = styled.div`
  display: flex;
  gap: 10px;
`;
const StyledOrigianlPriceDiv = styled.div`
  font-size: 0.9rem;
  text-decoration: line-through;
  color: #b5b5b5;
`;
const StyledDiscountPriceDiv = styled.div`
  font-size: 0.9rem;
`;
export default BaseSelect;
