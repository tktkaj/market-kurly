import React, { useEffect, useState } from "react";
import styled from "styled-components";
import UtilItem from "../header/UtilItem";
import useCore from "../../../../hooks/useCore";
import { useSelector } from "react-redux";
import useAuth from "../../../../hooks/useAuth";
function UtilMenu({ utilItems }) {
  const [menuItems, setMenuItems] = useState(utilItems);
  const user = useSelector((state) => state.userInfo.id);
  const core = useCore();
  const auth = useAuth();

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
  const handleLogout = () => {
    if (user) {
      auth.logout();
      core.goPage("/FG/FGMK/FGMKHM/FGMKHM001");
    }
  };
  useEffect(() => {
    if (user) {
      const updatedMenuItems = utilItems
        .map((util) => {
          if (util.name === "로그인") {
            return { ...util, name: "로그아웃" };
          }
          if (util.name === "회원가입") {
            return null;
          }
          return util;
        })
        .filter(Boolean);

      setMenuItems(updatedMenuItems);
    } else {
      setMenuItems(utilItems);
    }
  }, [user, utilItems]);

  return (
    <UtilMenuLayout>
      {menuItems &&
        menuItems.map((util, index) => (
          <UtilItem
            key={util.name}
            linkName={util.name}
            url={util.url}
            color={index === 0 ? "#5f0080" : null}
            onClick={
              util.name === "로그아웃" ? handleLogout : handleClick(util.url)
            }
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
