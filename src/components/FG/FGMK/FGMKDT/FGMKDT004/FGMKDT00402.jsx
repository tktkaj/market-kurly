import React from "react";
import styled from "styled-components";
function FGMKDT00402({ price }) {
  return (
    <SaleNowCouponLayout>
      <StyledSpan>
        첫구매하면
        <StyledImpactSpan> {price}원 </StyledImpactSpan>
        즉시 할인
      </StyledSpan>
    </SaleNowCouponLayout>
  );
}
const SaleNowCouponLayout = styled.div`
  background-color: #bd76ff14;
  padding: 10px 14px 10px 16px;
  width: 350px;
`;
const StyledSpan = styled.span`
  font-size: 0.8rem;
`;
const StyledImpactSpan = styled.span`
  color: #5f0080;
  font-weight: bold;
  font-size: 0.8rem;
`;

export default FGMKDT00402;
