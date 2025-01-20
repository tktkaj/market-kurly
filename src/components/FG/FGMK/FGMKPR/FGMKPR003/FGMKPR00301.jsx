import React from "react";
import styled from "styled-components";
import FGMKPR00302 from "./FGMKPR00302";

function FGMKPR00301({ categories }) {
  return (
    <DetailFiterLayout>
      {categories.map((category, index) => (
        <FGMKPR00302 key={category.title + index} category={category} />
      ))}
    </DetailFiterLayout>
  );
}

const DetailFiterLayout = styled.div`
  width: 260px;
  margin-right: 47px;
  /* 높이 조절 필요 */
  max-height: 700px;
  overflow-y: scroll;
  position: sticky;
  top: 0px;
  &::-webkit-scrollbar {
    width: 0;
    background: transparent;
  }
`;

export default FGMKPR00301;
