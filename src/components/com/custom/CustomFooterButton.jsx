import React from "react";
import styled from "styled-components";

const Button = styled.button`
  background-color: #fff;
  color: #333;
  border: 1px solid #eeeeee;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  width: 138px;
  height: 38px;
  font-size: 1.17rem;
  cursor: pointer;
  border-radius: 4px;
`;
/**
 * SmallWhiteBtn 컴포넌트는 작은 흰색 버튼을 렌더링합니다.
 *
 * @param {string} btnText - 버튼에 표시될 텍스트.
 * @param {string} type - 버튼의 타입 (예: 'button', 'submit').
 * @param {function} onClick - 버튼 클릭 시 호출될 함수.
 */
function CustomFooterButton({ btnText, type, onClick }) {
  return (
    <Button type={type} onClick={onClick}>
      {btnText}
    </Button>
  );
}

export default CustomFooterButton;
