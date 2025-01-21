import React, { useState } from "react";
import styled from "styled-components";

function FGMKDT00401() {
  const navNames = ["상품설명", "상세정보", "후기(29)", "문의"];
  const [selectedNav, setSelectedNav] = useState(null);

  return (
    <DetailNavBox>
      {navNames.map((navName, index) => (
        <DetailButton
          key={navName + index}
          onClick={() => setSelectedNav(index)}
          isSelected={selectedNav === index}
        >
          {navName}
        </DetailButton>
      ))}
    </DetailNavBox>
  );
}

const DetailNavBox = styled.div`
  display: flex;
  margin-top: 100px;
  margin-bottom: 40px;
  position: sticky;
  top: 61px;
  z-index: 1000;
`;

const DetailButton = styled.button`
  background-color: ${(props) => (props.isSelected ? "#ffffff" : "#fafafa")};
  border: 1px solid #eee;
  width: 253px;
  padding: 20px 0;
  font-weight: ${(props) => (props.isSelected ? "bold" : "normal")};
  color: ${(props) => (props.isSelected ? "#5f0080" : "#666666")};
  border-bottom: ${(props) =>
    props.isSelected ? "none" : "1px solid #eee"};
`;

export default FGMKDT00401;
