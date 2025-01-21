import React, { useEffect, useState } from "react";
import styled from "styled-components";
import UtilItem from "../header/UtilItem";
import useCore from "../../../../hooks/useCore";
import { useSelector } from "react-redux";
function UtilMenu() {
  const [loginText, SetLoginText] = useState("로그인");
  const user = useSelector((state) => state.userInfo.id);
  const core = useCore();
  const utils = [
    { name: "회원가입", url: "/signup" },
    { name: loginText, url: "/FG/FGMK/FGMKLO/FGMKLO002" },
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

    } else {
      core.goPage(url);
    }
  };
  

  useEffect(() => {
    if (user) SetLoginText("로그아웃");
  }, [user]);

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
