import React from "react";
import styled from "styled-components";
import UtilItem from "../header/UtilItem";

function UtilMenu() {
  const utils = [
    { name: "회원가입", url: "/signup" },
    { name: "로그인", url: "/FG/FGMK/FGMKLO/FGMKLO002" },
    { name: "고객센터", url: "/customer-service" },
  ];

  const downArrowIcon = (
    <img
      style={{ width: "10px" }}
      src="https://res.kurly.com/pc/ico/1908/ico_down_16x10.png"
      alt="아래화살표_icon"
    />
  );

  const handleClick = (url) => (e) => {
    if (url === "*") {
      e.preventDefault();
      // 여기에 "*" URL에 대한 특별한 처리를 추가할 수 있습니다.
      console.log("특별한 처리가 필요한 메뉴 클릭됨");
    } else {
      window.location.href = url;
    }
  };

  return (
    <UtilMenuLayout>
      {utils.map((util, index) => (
        <UtilItem
          key={util.name}
          linkName={util.name}
          url={util.url}
          color={index === 0 ? "#5f0080" : null}
          onClick={handleClick(util.url)}
        >
          {index === 2 && downArrowIcon}
        </UtilItem>
      ))}
    </UtilMenuLayout>
  );
}

const UtilMenuLayout = styled.div`
  display: flex;
  gap: 15px;
`;

export default UtilMenu;
