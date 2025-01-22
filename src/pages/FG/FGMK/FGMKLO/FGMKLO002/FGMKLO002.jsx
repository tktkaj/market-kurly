import React, { useState, useEffect } from "react";
import styled from "styled-components";
import FGMKLO00201 from "../../../../../components/FG/FGMK/FGMKLO/FGMKLO002/FGMKLO00201";
import LayerUtils from "../../../../../utils/LayerUtils";
import useAuth from "../../../../../hooks/useAuth";
import { useSelector } from "react-redux";
import useCore from "../../../../../hooks/useCore";
import ApiUtils from "../../../../../utils/ApiUtils";
function LoginPage() {
  const [userId, setUserId] = useState("");
  const [userPw, setUserPw] = useState("");
  const { login } = useAuth();
  const user = useSelector((state) => state.userInfo?.id);

  const core = useCore();
  const onOpenAlert = async () => {
    const res = await LayerUtils.showAlert(
      "아이디 또는 비밀번호를 입력해주세요."
    );

    console.log("alert callback 실행", res);
  };

  const onWrongAlert = async () => {
    const res = await LayerUtils.showAlert("아이디 또는 비밀번호가 다릅니다.");
  };

  const validateLogin = () => {
    if (!userId || !userPw) {
      onOpenAlert();
      return false;
    }
    return true;
  };

  const handleSetUserId = (inputText) => {
    setUserId(inputText);
  };

  const handleSetUserPw = (inputText) => {
    setUserPw(inputText);
  };

  const loginCheck = async () => {
    const user = await ApiUtils.sendPost("/login", { id: userId, pw: userPw });
    if (user) {
      login(user.id);
      core.goPage("/FG/FGMK/FGMKHM/FGMKHM001");
    } else {
      onWrongAlert();
    }
  };
  const handleUserLogin = () => {
    if (validateLogin()) {
      loginCheck();
    }
  };
  const IsLoginCheck = async () => {
    const res = await LayerUtils.showAlert("이미 로그인된 아이디입니다.");
    if (res) core.goPage("/FG/FGMK/FGMKHM/FGMKHM001");
  };
  useEffect(() => {
    if (user) {
      IsLoginCheck();
    }
  }, []);

  return (
    <LoginPageLayout>
      <LoginSection>
        <LoginTitle>로그인</LoginTitle>
        <FGMKLO00201
          onChangeUserId={handleSetUserId}
          onChangeUserPw={handleSetUserPw}
          onClick={handleUserLogin}
        />
      </LoginSection>
    </LoginPageLayout>
  );
}

const LoginPageLayout = styled.div`
  width: 100%;
`;

const LoginSection = styled.div`
  margin-top: 100px;
  margin-bottom: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LoginTitle = styled.h3`
  text-align: center;
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 30px;
`;

export default LoginPage;
