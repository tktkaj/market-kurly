import React from "react";
import styled from "styled-components";

/**
 * GetCartBtn 컴포넌트는 장바구니에 추가하는 버튼을 렌더링합니다.
 *
 * @param {string} size - 버튼의 크기 ('sm', 'ml', 'lg').
 * @param {string} btnText - 버튼에 표시될 텍스트.
 * @param {string} type - 버튼의 타입 (예: 'button', 'submit').
 * @param {function} onClick - 버튼 클릭 시 호출될 함수.
 */
function CustomCartButton({ size, btnText, type, onClick, product }) {
  const sizeObj = {
    sm: { width: "166px", fontSize: "1rem" },
    ml: { width: "249px", fontSize: "1.1rem" },
    lg: { width: "694px", fontSize: "1.1rem" },
  };

  const selectfontsize = sizeObj[size].font || size.ml;
  const selectwidth = sizeObj[size].width || size.ml;

  return (
    <ButtonWrapper selectwidth={selectwidth}>
      <StyledButton
        selectfontsize={selectfontsize}
        type={type}
        onClick={() => {
          if (onClick) onClick(product);
        }}
      >
        <svg
          width="22"
          height="22"
          style={{ marginRight: "2px" }}
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.53516 2.70001H3.93316L5.76816 10.609H13.6482L15.2992 4.35901H4.86916M12.8582 14.933C13.0098 14.9375 13.1609 14.9115 13.3024 14.8566C13.4438 14.8017 13.5728 14.7189 13.6817 14.6132C13.7906 14.5075 13.8771 14.381 13.9363 14.2412C13.9954 14.1015 14.0258 13.9513 14.0258 13.7995C14.0258 13.6478 13.9954 13.4975 13.9363 13.3578C13.8771 13.218 13.7906 13.0915 13.6817 12.9858C13.5728 12.8801 13.4438 12.7974 13.3024 12.7424C13.1609 12.6875 13.0098 12.6615 12.8582 12.666C12.5634 12.6748 12.2836 12.798 12.0782 13.0096C11.8727 13.2213 11.7578 13.5046 11.7578 13.7995C11.7578 14.0944 11.8727 14.3778 12.0782 14.5894C12.2836 14.801 12.5634 14.9243 12.8582 14.933ZM6.49316 14.933C6.64484 14.9375 6.79589 14.9115 6.93735 14.8566C7.07881 14.8017 7.20781 14.7189 7.31669 14.6132C7.42558 14.5075 7.51214 14.381 7.57126 14.2412C7.63037 14.1015 7.66083 13.9513 7.66083 13.7995C7.66083 13.6478 7.63037 13.4975 7.57126 13.3578C7.51214 13.218 7.42558 13.0915 7.31669 12.9858C7.20781 12.8801 7.07881 12.7974 6.93735 12.7424C6.79589 12.6875 6.64484 12.6615 6.49316 12.666C6.19836 12.6748 5.91858 12.798 5.71315 13.0096C5.50773 13.2213 5.39283 13.5046 5.39283 13.7995C5.39283 14.0944 5.50773 14.3778 5.71315 14.5894C5.91858 14.801 6.19836 14.9243 6.49316 14.933Z"
            stroke="#333333"
            strokeLinecap="square"
            strokeLinejoin="round"
          ></path>
        </svg>
        {btnText}
      </StyledButton>
    </ButtonWrapper>
  );
}
const ButtonWrapper = styled.div`
  width: ${(props) => props.selectwidth};
  border: 1px solid #dfe4eb;
  border-radius: 4px;
  overflow: hidden;
`;

const StyledButton = styled.button`
  width: 100%;
  height: 30px;
  background-color: #fff;
  border: none;
  margin-top: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  padding-bottom: 6px;
  font-size: ${(props) => props.selectfontsize};
  cursor: pointer;
`;
export default CustomCartButton;
