import React, { useState } from "react";
import styled from "styled-components";

function CustomSearchBar() {
  const [searchValue, setSearchValue] = useState("");

  const searchIcon = (
    <img
      src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAiIGhlaWdodD0iMzAiIHZpZXdCb3g9IjAgMCAzMCAzMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBhdGggZD0iTTI0IDI0SDZWNmgxOHoiLz4KICAgICAgICA8cGF0aCBkPSJNMjIuNSAyMi41aC0xNXYtMTVoMTV6Ii8+CiAgICAgICAgPGcgc3Ryb2tlPSIjMzMzIiBzdHJva2UtbGluZWNhcD0ic3F1YXJlIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjEuNiI+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik0xOC44MjUgMTMuMzUyYzAgMS43MjUtLjc1IDMuMjI1LTEuOTUgNC4yLS45NzUuODI1LTIuMTc1IDEuMjc1LTMuNTI1IDEuMjc1YTUuNDU3IDUuNDU3IDAgMCAxLTUuNDc1LTUuNDc1IDUuNDU3IDUuNDU3IDAgMCAxIDUuNDc1LTUuNDc1YzMtLjA3NSA1LjQ3NSAyLjQgNS40NzUgNS40NzV6TTIxLjM3NSAyMS4zNzVsLTMuNzUtMy43NSIvPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+Cg=="
      alt=""
    />
  );

  const handleInputChange = (event) => {
    setSearchValue(event.target.value);
  };
  const handleButtonClick = () => {
    console.log(searchValue);
  };

  return (
    <SearchBarBox>
      <StyledInput
        type="text"
        value={searchValue}
        onChange={handleInputChange}
      />
      <SearchIconButton type="button" onClick={handleButtonClick}>
        {searchIcon}
      </SearchIconButton>
    </SearchBarBox>
  );
}

const SearchBarBox = styled.div`
  display: flex;
  padding: 3px 5px 3px 10px;
  background-color: #f7f7f7;
  border-radius: 6px;
`;

const StyledInput = styled.input`
  outline: none;
  border: none;
  background-color: #f7f7f7;
`;

const SearchIconButton = styled.button`
  cursor: pointer;
  background-color: #f7f7f7;
  border: none;
  display: flex;
`;

export default CustomSearchBar;
