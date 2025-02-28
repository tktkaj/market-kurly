import React from "react";
import styled from "styled-components";
import FGMKPR00302 from "./FGMKPR00302";

function FGMKPR00301({ detailFilter, handleDeatilFilter, handleDetailFilter }) {
  return (
    <DetailFiterLayout>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          paddingBottom: "20px",
          cursor: "pointer",
        }}
      >
        <StyledSpan>필터</StyledSpan>
        <StyledButton>
          <svg
            width="12"
            height="12"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ marginRight: "3px" }}
          >
            <path
              d="M13.78 3.96303C12.504 2.16973 10.4086 1 8.04 1C4.15192 1 1 4.15192 1 8.04C1 11.9281 4.15192 15.08 8.04 15.08C11.9281 15.08 15.08 11.9281 15.08 8.04"
              stroke="#ddd"
              strokeWidth="1.6"
              strokeLinecap="square"
              strokeLinejoin="round"
            ></path>
            <path
              d="M14.4933 1L14.4933 4.52H10.9733"
              stroke="#ddd"
              strokeWidth="1.6"
              strokeLinecap="square"
              strokeLinejoin="round"
            ></path>
          </svg>
          초기화
        </StyledButton>
      </div>
      {detailFilter &&
        detailFilter.map((item, index) => (
          <FGMKPR00302
            key={item.title + index}
            category={item}
            handleDeatilFilter={handleDeatilFilter}
            handleDetailFilter={handleDetailFilter}
          />
        ))}
    </DetailFiterLayout>
  );
}

const DetailFiterLayout = styled.div`
  width: 260px;
  margin-right: 47px;
  /* 높이 조절 필요 */
  position: sticky;
  top: 80px;
  overflow-y: scroll;
  max-height: 880px;
  &::-webkit-scrollbar {
    width: 0;
    background: transparent;
  }
`;
const StyledSpan = styled.span``;
const StyledButton = styled.button`
  cursor: pointer;
  background-color: #fff;
  border: none;
  display: flex;
  align-items: center;
  color: #ddd;
`;
export default FGMKPR00301;
