import React, { useState, useEffect } from "react";
import styled from "styled-components";
import CustomSearchBar from "../custom/CustomSearchBar";
import CategoryToggle from "./header/CategoryToggle";
import CategoryNav from "./header/CategoryNav";
import MyMenu from "./header/MyMenu";
function StickyHeader() {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (!isSticky) return null;
  return (
    <StickyHeaderLayout>
      <StyickHeaderBox>
        <CategoryToggle />
        <CategoryNav />
        <CustomSearchBar />
        <MyMenu />
      </StyickHeaderBox>
    </StickyHeaderLayout>
  );
}

const StickyHeaderLayout = styled.div`
  width: 100%;
  position: fixed;
  top: 0px;
  z-index: 1050;
  background-color: #fff;
  padding: 10px 0;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
`;
const StyickHeaderBox = styled.div`
  margin: 0 auto;
  width: 1050px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export default StickyHeader;
