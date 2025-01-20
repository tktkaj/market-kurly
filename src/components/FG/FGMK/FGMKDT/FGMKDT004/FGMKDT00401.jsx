import React from "react";
import styled from "styled-components";

function FGMKDT00401() {
  const navNames = ["상품설명", "상세정보", "후기(29)", "문의"];
  return (
    <DetailNavBox>
      {navNames.map((navName, index) => (
        <DetailButton key={navName + index}>{navName}</DetailButton>
      ))}
    </DetailNavBox>
  );
}

const DetailNavBox = styled.div`
  display: flex;
`;

const DetailButton = styled.button`
  background-color: #fafafa;
  border: 1px solid #eee;
  width: 250px;
  padding: 20px 0;
`;

export default FGMKDT00401;
