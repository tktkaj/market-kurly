import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ApiUtils from "../../../../../utils/ApiUtils";
import useAuth from "../../../../../hooks/useAuth";

function FGMKCT006() {
  const auth = useAuth();
  const user = auth.userInfo();
  const [myCart, setMyCart] = useState(null);
// 장바구니 전체삭제
  const deleteAllCart = async () => {
    const res = await ApiUtils.sendPost("/delete-all-cart", { userId: user });
    if (res) setMyCart(res);
  };
// 장바구니 선택삭제
  const deleteCart = async (idx) => {
    const res = await ApiUtils.sendPost("/delete-cart", { index: idx });
    if (res) setMyCart(res);
  };
// 장바구니 조회
  useEffect(() => {
    const fetchMyCart = async () => {
      const res = await ApiUtils.sendGet("/cart", { userId: user });
      if (res) setMyCart(res);
    };
    fetchMyCart();
  }, []);

  return (
    <StyledLayout>
      <StyledBox>장바구니 내역</StyledBox>
      {myCart &&
        myCart.map((item, index) => (
          <div
            key={item + index}
            style={{ cursor: "pointer" }}
            onClick={() => deleteCart(index)}
          >
            {item.product.title}
          </div>
        ))}
      <div style={{ cursor: "pointer" }} onClick={null}>
        장바구니추가
      </div>
      <div style={{ cursor: "pointer" }} onClick={() => deleteCart()}>
        장바구니부분삭제
      </div>
      <div style={{ cursor: "pointer" }} onClick={() => deleteAllCart()}>
        장바구니전체삭제
      </div>
    </StyledLayout>
  );
}
const StyledLayout = styled.div`
  width: 1040px;
  margin: 0 auto;
`;
const StyledBox = styled.div``;
export default FGMKCT006;
