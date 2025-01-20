import React from "react";
import styled from "styled-components";
import BaseInput from "../../../../com/base/BaseInput";
import BaseButton from "../../../../com/base/BaseButton"

function FGMKLO00201({ onClick, onChangeUserId, onChangeUserPw }) {
  return (
    <LoginFormLayout>
      <LoginFormBox>
        <BaseInput
          type="text"
          placeholder="아이디를 입력해주세요"
          size="lg"
          onChange={onChangeUserId}
        />
        <BaseInput
          type="password"
          placeholder="비밀번호를 입력해주세요"
          size="lg"
          onChange={onChangeUserPw}
        />
      </LoginFormBox>
      <LoginUtilBox>
        <StyledLink href="/find-id" onClick={handleFindId}>
          아이디 찾기
        </StyledLink>
        <StyledLink href="/find-password" onClick={handleFindPass}>
          비밀번호 찾기
        </StyledLink>
      </LoginUtilBox>
      <StyledButtonBox>
        <BaseButton
          type="button"
          variant="purple"
          btnText="로그인"
          size="ml"
          onClick={onClick}
        >
          로그인
        </BaseButton>{" "}
        <BaseButton
          type="button"
          variant="outlinePurple"
          btnText="회원가입"
          size="ml"
          onClick={handleJoinUser}
        >
          로그인
        </BaseButton>{" "}
      </StyledButtonBox>
    </LoginFormLayout>
  );
}

const LoginFormLayout = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const LoginFormBox = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const LoginUtilBox = styled.div`
  display: flex;
  justify-content: end;
  gap: 5px;
  margin-top: 20px;
`;

const StyledLink = styled.a`
  cursor: pointer;
  color: #333;
`;

const StyledButtonBox = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export default FGMKLO00201;
