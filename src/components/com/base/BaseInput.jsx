import React from "react";
import styled from "styled-components";

/**
 * BasicInput 컴포넌트는 기본적인 입력 필드를 렌더링합니다.
 *
 * @param {string} size - 입력 필드의 크기 ('lg', 'ml' 등).
 * @param {string} type - 입력 필드의 타입 (예: 'text', 'password').
 * @param {string} placeholder - 입력 필드에 표시될 플레이스홀더 텍스트.
 * @param {function} onChange - 입력 값이 변경될 때 호출될 함수.
 */
function BaseInput({ size, type, placeholder, onChange, value, require }) {
  const inputSize = {
    lg: { width: "350px", height: "46px", fontSize: "1.1rem" },
    ml: { width: "340px", height: "48px", fontSize: "1.05rem" },
  };

  const SelectInputSize = inputSize[size] || inputSize.lg;

  return (
    <InputOutline $selectInputSize={SelectInputSize}>
      <Input
        placeholder={placeholder || "placeholder"}
        $selectInputSize={SelectInputSize}
        maxLength="20"
        type={type}
        onChange={(e) => onChange(e.target.value)}
        value={value}
        required={require}
      />
    </InputOutline>
  );
}

const InputOutline = styled.div`
  width: ${(props) => props.$selectInputSize.width};
  height: ${(props) => props.$selectInputSize.height};
  border: 1px solid #e2e2e2;
  border-radius: 5px;
  overflow: hidden;
`;

const Input = styled.input`
  margin-top: 2px;
  outline: none;
  border: none;
  width: 100%;
  height: 100%;
  padding: 0 11px 1px 15px;
  font-size: ${(props) => props.$selectInputSize.fontSize};
`;

export default BaseInput;
