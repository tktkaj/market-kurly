import React from "react";
import styled from "styled-components";
function ServiceBox() {
  return (
    <StyledDiv>
      <div>공지사항</div>
      <div>자주하는 질문</div>
      <div>1:1 문의</div>
      <div>대량주문 문의</div>
    </StyledDiv>
  );
}
const StyledDiv = styled.div`
  position: absolute;
  z-index: 1035;
  top: 20px;
  background-color: #fff;
`;
export default ServiceBox;
