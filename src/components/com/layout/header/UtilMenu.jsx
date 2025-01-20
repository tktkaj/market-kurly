import React from "react";
import styled from "styled-components";
import UtilItem from "./UtilItem";
import useMovePage from "../../../hooks/useMovePage";
function UtilMenu() {
  const { makeRequest } = useMovePage();
  const utils = [
    { name: "회원가입", url: "" },
    { name: "로그인", url: "/FG/FGMK/FGMKLO/FGMKLO002" },
    { name: "고객센터", url: "" },
  ];
  const downArrowIcon = (
    <img
      style={{ width: "10px" }}
      src="https://res.kurly.com/pc/ico/1908/ico_down_16x10.png"
      alt="아래화살표_icon"
    />
  );
  return (
    <UtilMenuLayout>
      {utils.map((util, index) => (
        <UtilItem
          key={util.name + index}
          linkName={util.name}
          url={util.url}
          color={index === 0 ? "#5f0080" : null}
          onClick={() => {
            makeRequest(util.url);
          }}
          children={index === 2 ? downArrowIcon : null}
        />
      ))}
    </UtilMenuLayout>
  );
}
const UtilMenuLayout = styled.div`
  display: flex;
  gap: 15px;
`;
export default UtilMenu;
