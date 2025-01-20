import React from "react";
import styled from "styled-components";
import SimpleFilterList from "./SimpleFilterList";
function FGMKPR00303({ totalCount, setSimpleFilter }) {
  return (
    <SimpleFilterBox>
      <StyledCount>총{totalCount || null}건</StyledCount>
      <SimpleFilterList setSimpleFilter={setSimpleFilter} />
    </SimpleFilterBox>
  );
}
const SimpleFilterBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const StyledCount = styled.div``;
export default FGMKPR00303;
