import React from "react";
import styled from "styled-components";
function FGMKDT00402({ price }) {
  return (
    <SaleNowCouponLayout>
      <StyledSpan>첫구매하면
        <StyledImpactSpan> { price }원 </StyledImpactSpan>
        즉시 할인
      </StyledSpan>
    </SaleNowCouponLayout>
  );
}
const SaleNowCouponLayout = styled.div``;
const StyledSpan = styled.span``;
const StyledImpactSpan = styled.span`
  color: #5f0080;
`;

export default FGMKDT00402;
