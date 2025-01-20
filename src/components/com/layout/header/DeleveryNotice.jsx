import React from "react";
import styled from "styled-components";

function DeleveryNotice() {
  const impactText = "샛별·하루";
  const text = "배송안내";
  return (
    <DeleveryNoticeBox onClick={() => {}}>
      <StyledImpactSpan>{impactText}</StyledImpactSpan>
      <StyledSpan>{text}</StyledSpan>
    </DeleveryNoticeBox>
  );
}

const DeleveryNoticeBox = styled.div`
  cursor: pointer;
  display: flex;
  gap: 5px;
  padding: 6px 16px;
  border: 1px solid #eee;
  border-radius: 50px;
`;
const StyledImpactSpan = styled.span`
  color: #5f0080;
`;
const StyledSpan = styled.span`
  color: #666;
`;
export default DeleveryNotice;
