import React from "react";
import styled from "styled-components";
import UtilMenu from "../header/UtilMenu";
import BrandNavigator from "./BrandNavigator";
import SearchBar from "./SearchBar";
import MyMenu from "./MyMenu";
import CategoryToggle from "./CategoryToggle";
import CategoryNav from "./CategoryNav";
import DeleveryNotice from "./DeleveryNotice";
function Header() {
  const handleButtonClick = (value) => {
    console.log(value);
  };

  return (
    <HeaderLayout>
      <HeaderBox>
        <UtilMenuBox>
          <UtilMenu />
        </UtilMenuBox>
        <HeaderMiddleBox>
          <BrandNavigator />
          <SearchBar
            placeholder="검색어를 입력해주세요."
            onClick={handleButtonClick}
          />
          <MyMenu />
        </HeaderMiddleBox>
        <CategoryBox>
          <CategoryToggle />
          <CategoryNav />
          <DeleveryNotice />
        </CategoryBox>
      </HeaderBox>
    </HeaderLayout>
  );
}
const HeaderLayout = styled.header`
  width: 100%;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  padding: 10px 0;
`;
const HeaderBox = styled.div`
  width: 1040px;
  margin: 0 auto;
`;
const UtilMenuBox = styled.div`
  display: flex;
  justify-content: end;
`;
const HeaderMiddleBox = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const CategoryBox = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export default Header;
