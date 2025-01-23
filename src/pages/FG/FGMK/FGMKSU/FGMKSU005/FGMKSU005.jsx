import React, { useEffect, useState } from "react";
import styled from "styled-components";
import BaseInput from "../../../../../components/com/base/BaseInput";
import useCore from "../../../../../hooks/useCore";
import ApiUtils from "../../../../../utils/ApiUtils";
import LayerUtils from "../../../../../utils/LayerUtils";
import BaseButton from "../../../../../components/com/base/BaseButton";
function FGMKSU005() {
  const core = useCore();
  const [userId, setUserId] = useState(null);
  const [userPw, setUserPw] = useState(null);
  const [userPwCheck, setUserPwCheck] = useState(null);
  const [userName, setUserName] = useState(null);
  const [userEmail, setUserEmail] = useState(null);
  const [userRole, setUserRole] = useState("admin");
  const [checkPassword, setCheckPassword] = useState(true);

  const handleUserId = (value) => {
    setUserId(value);
  };

  const handleUserPw = (value) => {
    setUserPw(value);
  };

  const handleUserPwCheck = (value) => {
    setUserPwCheck(value);
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
  const checkPw = () => {
    if (userPw && userPwCheck)
      userPw !== userPwCheck ? setCheckPassword(false) : setCheckPassword(true);
  };
  //   input에 공란이 있는지 검증
  const checkInput = () => {
    if (!userId || !userPw || !userName || !userEmail || !userRole) {
      return false;
    }
    return true;
  };
  //   회원가입
  const fetchSignup = async () => {
    if (checkInput()) {
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
    } else {
      LayerUtils.showAlert("모든 정보를 입력해주세요.");
    }
  };

  useEffect(() => {
    checkPw();
  }, [userPw, userPwCheck]);
  return (
    <StyledLayout>
      <TitleBox>회원가입</TitleBox>
      <StyledBox>
        <LineBox>필수입력사항</LineBox>
        <StyledDiv>
          <TextDiv>
            <StyledLabel>아이디</StyledLabel>
          </TextDiv>
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
          <TextDiv>
            <StyledLabel>비밀번호</StyledLabel>
          </TextDiv>
          <InputDiv>
            <BaseInput
              type="password"
              size="ml"
              onChange={handleUserPw}
              placeholder="비밀번호를 입력해주세요"
            />
          </InputDiv>
          <SpareDiv></SpareDiv>
        </StyledDiv>
        <StyledDiv>
          <TextDiv>
            <StyledLabel>비밀번호확인</StyledLabel>
          </TextDiv>
          <InputDiv>
            <BaseInput
              type="password"
              size="ml"
              onChange={handleUserPwCheck}
              placeholder="비밀번호를 한번 더 입력해주세요"
            />
          </InputDiv>
          <SpareDiv></SpareDiv>
        </StyledDiv>
        <CheckPwDiv check={checkPassword}>
          비밀번호가 일치하지 않습니다.
        </CheckPwDiv>
        <StyledDiv>
          <TextDiv>
            <StyledLabel>이름</StyledLabel>
          </TextDiv>
          <InputDiv>
            <BaseInput
              size="ml"
              onChange={handleUserName}
              placeholder="이름을 입력해주세요"
            />
          </InputDiv>
          <SpareDiv></SpareDiv>
        </StyledDiv>
        <StyledDiv>
          <TextDiv>
            <StyledLabel>이메일</StyledLabel>
          </TextDiv>
          <InputDiv>
            <BaseInput
              type="email"
              size="ml"
              onChange={handleUserEmail}
              placeholder="이메일을 입력해주세요"
            />
          </InputDiv>
          <SpareDiv></SpareDiv>
        </StyledDiv>
        <StyledDiv>
          <TextDiv>
            <StyledLabel>Role</StyledLabel>
          </TextDiv>
          <InputDiv>
            <RadioDiv>
              <input
                style={{ paddingRight: "20px" }}
                type="radio"
                value="admin"
                name="role"
                id="admin"
                onChange={handleRoleChange}
              />
              <RoleLabel htmlFor="admin">admin</RoleLabel>
            </RadioDiv>
            <RadioDiv>
              <input
                type="radio"
                value="user"
                name="role"
                id="user"
                onChange={handleRoleChange}
              />
              <RoleLabel htmlFor="user">user</RoleLabel>
            </RadioDiv>
            <RadioDiv>
              <input
                type="radio"
                value="developer"
                name="role"
                id="developer"
                onChange={handleRoleChange}
              />
              <RoleLabel htmlFor="developer">developer</RoleLabel>
            </RadioDiv>
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
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const TitleBox = styled.div`
  text-align: center;
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 50px;
`;
const LineBox = styled.div`
  width: 100%;
  border-bottom: 2px solid black;
  display: flex;
  justify-content: end;
  margin-bottom: 10px;
  padding-bottom: 10px;
  font-size: 0.7rem;
  font-weight: bold;
  color: #666;

  &::before {
    content: "*";
    color: red;
  }
`;
const StyledBox = styled.div``;
const StyledDiv = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;
const TextDiv = styled.div`
  width: 150px;
  padding-left: 20px;
`;
const StyledLabel = styled.label`
  font-size: 0.8rem;
  font-weight: bold;

  &::after {
    content: "*";
    color: red;
  }
`;
const InputDiv = styled.div`
  width: 300px;
  display: flex;
  justify-content: space-between;
`;
const SpareDiv = styled.div`
  width: 150px;
`;
const RadioDiv = styled.div`
  display: flex;
`;
const ButtonDiv = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;
`;
const RoleLabel = styled.label``;
const CheckPwDiv = styled.div`
  margin: 0px;
  color: red;
  display: ${(props) => (props.check ? "none" : "block")};
`;
export default FGMKSU005;
