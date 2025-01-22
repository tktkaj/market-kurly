import React, { useEffect, useState } from "react";
import styled from "styled-components";
import BaseInput from "../../../../../components/com/base/BaseInput";
import useCore from "../../../../../hooks/useCore";
import ApiUtils from "../../../../../utils/ApiUtils";
import LayerUtils from "../../../../../utils/LayerUtils";
import BaseButton from "../../../../../components/com/base/BaseButton";
function FGMKSU005() {
  const core = useCore();
  const [userId, setUserId] = useState("");
  const [userPw, setUserPw] = useState("");
  const [userPwCheck, setUserPwCheck] = useState("");
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userRole, setUserRole] = useState("admin");
  const [checkPassword, setCheckPassword] = useState(true);

  const handleUserId = (value) => {
    setUserId(value);
  };

  const handleUserPw = (value) => {
    setUserPw(value);
  };

  const handleUserPwCheck = (value) => {
    setUserPw(value);
  };

  const handleUserName = (value) => {
    setUserName(value);
  };

  const handleUserEmail = (value) => {
    setUserEmail(value);
  };

  const handleRoleChange = (e) => {
    const selectedRole = e.target.value;
    setUserRole(selectedRole);
  };

  //   비밀번호 & 비밀번호 확인 검증
  const checkPw = () => {};
  //   input에 빈값이 있는지 검증
  const checkInput = () => {
    if (!userId || !userPw || !userName || !userEmail || !userRole) {
      return false;
    }
    return true;
  };
  //   회원가입
  const fetchSignup = async () => {
    const res = await ApiUtils.sendPost("/signup", {
      id: userId,
      pw: userPw,
      name: userName,
      email: userEmail,
      role: userRole,
    });
    if (res) {
      const result = await LayerUtils.showAlert("회원가입이 완료되었습니다.");
      if (result) core.goPage("/FG/FGMK/FGMKLO/FGMKLO002");
    }
  };
  return (
    <StyledLayout>
      <TitleBox>회원가입</TitleBox>
      <LineBox>필수입력사항</LineBox>
      <StyledBox>
        <StyledDiv>
          <TextDiv>아이디</TextDiv>
          <InputDiv>
            <BaseInput
              size="ml"
              placeholder="아이디입력해주세요"
              onChange={handleUserId}
            />
          </InputDiv>
          <SpareDiv></SpareDiv>
        </StyledDiv>
        <StyledDiv>
          <TextDiv>비밀번호</TextDiv>
          <InputDiv>
            <BaseInput size="ml" onChange={handleUserPw} />
          </InputDiv>
          <SpareDiv></SpareDiv>
        </StyledDiv>
        <StyledDiv>
          <TextDiv>비밀번호확인</TextDiv>
          <InputDiv>
            <BaseInput size="ml" onChange={handleUserPwCheck} />
          </InputDiv>
          <SpareDiv></SpareDiv>
        </StyledDiv>
        <StyledDiv>
          <CheckPwDiv check={checkPassword}>
            비밀번호가 일치하지 않습니다.
          </CheckPwDiv>
        </StyledDiv>
        <StyledDiv>
          <TextDiv>이름</TextDiv>
          <InputDiv>
            <BaseInput size="ml" onChange={handleUserName} />
          </InputDiv>
          <SpareDiv></SpareDiv>
        </StyledDiv>
        <StyledDiv>
          <TextDiv>이메일</TextDiv>
          <InputDiv>
            <BaseInput size="ml" onChange={handleUserEmail} />
          </InputDiv>
          <SpareDiv></SpareDiv>
        </StyledDiv>
        <StyledDiv>
          <TextDiv>Role</TextDiv>
          <InputDiv>
            <input
              type="radio"
              value="admin"
              name="role"
              onChange={handleRoleChange}
              checked
            />
            admin
            <input
              type="radio"
              value="user"
              name="role"
              onChange={handleRoleChange}
            />
            user
            <input
              type="radio"
              value="developer"
              name="role"
              onChange={handleRoleChange}
            />
            developer
          </InputDiv>
          <SpareDiv></SpareDiv>
        </StyledDiv>
        <ButtonDiv>
          <BaseButton
            btnText="회원가입"
            size="sm"
            type="button"
            variant="purple"
            onClick={fetchSignup}
          />
        </ButtonDiv>
      </StyledBox>
    </StyledLayout>
  );
}
const StyledLayout = styled.div`
  width: 1040px;
  margin: 0 auto;
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const TitleBox = styled.div`
  text-align: center;
`;
const LineBox = styled.div`
  width: 100%;
  border-bottom: 2px solid black;
  display: flex;
  justify-content: end;
`;
const StyledBox = styled.div``;
const StyledDiv = styled.div`
  display: flex;
  align-items: center;
`;
const TextDiv = styled.div``;
const InputDiv = styled.div``;
const SpareDiv = styled.div``;
const ButtonDiv = styled.div``;
const CheckPwDiv = styled.div`
  color: red;
  display: ${(props) => (props.check ? "none" : "block")};
`;
export default FGMKSU005;
