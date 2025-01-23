import React from "react";
import styled from "styled-components";
function FGMKCT00603({
  totalOriPrice,
  totalDisPrice,
}) {
  const formatPrice = (price) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };
  return (
    <StyledLayout>
      <TitleDiv>
        <span style={{ fontSize: "1.1rem", fontWeight: "bold" }}>결제금액</span>
      </TitleDiv>
      <PriceDiv>
        <StyledDiv>
          <span style={{ color: "#333" }}>상품금액</span>
          <span style={{ fontWeight: "bold" }}>
            {formatPrice(`${totalOriPrice}원`)}
          </span>
        </StyledDiv>
        <StyledDiv>
          <span style={{ color: "#333" }}>상품할인금액</span>
          <span style={{ color: "#fa622f", fontWeight: "bold" }}>
            {formatPrice(`${totalDisPrice - totalOriPrice}원`)}
          </span>
        </StyledDiv>
        <StyledDiv>
          <span style={{ color: "#333" }}>배송비</span>
          <span style={{ fontWeight: "bold" }}>0원</span>
        </StyledDiv>
      </PriceDiv>
      <PreDeterDiv>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <span style={{ color: "#333" }}>결제예정금액</span>
          <span style={{ fontWeight: "bold", fontSize: "1.5rem" }}>
            {formatPrice(`${totalDisPrice}원`)}
          </span>
        </div>
        <div style={{ display: "flex", justifyContent: "end" }}>
          <span style={{ fontSize: "0.7rem", color: "#333" }}>
            쿠폰/적립금은 주문서에서 사용 가능합니다.
          </span>
        </div>
      </PreDeterDiv>
    </StyledLayout>
  );
}
const StyledLayout = styled.div`
  padding: 16px 20px;
  width: 350px;
  background-color: #fff;
  border-radius: 20px;
`;
const TitleDiv = styled.div`
  margin-bottom: 15px;
`;
const PriceDiv = styled.div``;
const StyledDiv = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;
const PreDeterDiv = styled.div`
  padding-top: 10px;
  border-top: 1px solid #eceff3;
`;
export default FGMKCT00603;
