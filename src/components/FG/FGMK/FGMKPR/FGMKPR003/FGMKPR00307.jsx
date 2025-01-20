import React from "react";
import styled from "styled-components";
import PagenationBtn from "./PagenationBtn";
function FGMKPR00307({ setPage }) {
  const btnContents = [
    <img
      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAHCAQAAABwkq/rAAAAHUlEQVR42mNgAIPi/8X/kWkwA8SE0UQIMJAsCKMBBzk27fqtkcYAAAAASUVORK5CYII="
      alt="처음 페이지로 이동하기 아이콘"
    />,
    <img
      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAHCAQAAABqrk9lAAAAGElEQVR42mNgAIPi/8X/4QwwE5PBQJADAAKSG3cyVhtXAAAAAElFTkSuQmCC"
      alt="이전 페이지로 이동하기 아이콘"
    />,
    <img
      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAHCAQAAABqrk9lAAAAGUlEQVR42mMo/l/8nwECQEwCHEwGhAlRBgA2mht3SwgzrwAAAABJRU5ErkJggg=="
      alt="다음 페이지로 이동하기 아이콘"
    />,
    <img
      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAHCAQAAABwkq/rAAAAIElEQVR42mMo/l/8n4GBgQFGQ5kgDowmQZCwAMImhDkAb0k27Zcisn8AAAAASUVORK5CYII="
      alt="마지막 페이지로 이동하기 아이콘"
    />,
  ];
  const handlePage = (page) => {
    setPage(page);
  };
  return (
    <PagenationBox>
      {btnContents.map((btnContent, index) => (
        <PagenationBtn
          key={`btnContent + ${index}`}
          children={btnContent}
          onClick={handlePage}
        />
      ))}
    </PagenationBox>
  );
}
const PagenationBox = styled.div`
  display: flex;
`;
export default FGMKPR00307;
