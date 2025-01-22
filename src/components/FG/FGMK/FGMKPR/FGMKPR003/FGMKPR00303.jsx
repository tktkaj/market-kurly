import React from "react";
import styled from "styled-components";
import FGMKPR00304 from "./FGMKPR00304";
function FGMKPR00303({ totalCount, setSelSimpleFilter, simpleFilter }) {
  return (
    <SimpleFilterBox>
      <StyledCount>총{totalCount || null}건</StyledCount>
      <FGMKPR00304
        setSelSimpleFilter={setSelSimpleFilter}
        simpleFilter={simpleFilter}
      />
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
