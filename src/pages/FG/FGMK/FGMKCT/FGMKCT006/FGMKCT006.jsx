import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ApiUtils from "../../../../../utils/ApiUtils";
import useAuth from "../../../../../hooks/useAuth";
import FGMKCT00601 from "../../../../../components/FG/FGMK/FGMKCT/FGMKCT006/FGMKCT00601";
import FGMKCT00602 from "../../../../../components/FG/FGMK/FGMKCT/FGMKCT006/FGMKCT00602";
import FGMKCT00603 from "../../../../../components/FG/FGMK/FGMKCT/FGMKCT006/FGMKCT00603";
function FGMKCT006() {
  const auth = useAuth();
  const user = auth.userInfo();
  const [myCart, setMyCart] = useState(null);
  const [totalOriPrice, setTotaOriPrice] = useState(0);
  const [totalDisPrice, setOriPrice] = useState(0);
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
      <StyledBox>
        <TitleDiv>
          <StyledTitle>장바구니</StyledTitle>
        </TitleDiv>
        <CartBox>
          <ProductBox>
            <FGMKCT00601 onClick={deleteAllCart} />
            <FGMKCT00602 product={myCart} onClick={deleteCart} />
          </ProductBox>
          <PriceBox>
            <FGMKCT00603 />
          </PriceBox>
        </CartBox>
      </StyledBox>
    </StyledLayout>
  );
}
const StyledLayout = styled.div`
  margin: 0;
  background-color: #f2f5f8;
  padding-bottom: 70px;
`;
const StyledBox = styled.div`
  width: 1040px;
  margin: auto;
  padding-top: 50px;
`;

const TitleDiv = styled.div`
  text-align: center;

  font-weight: bold;
  padding-bottom: 50px;
`;
const StyledTitle = styled.h2`
  font-size: 1.5rem;
  margin: 0;
`;
const CartBox = styled.div`
  display: flex;
  gap: 50px;
`;
const ProductBox = styled.div`
  width: 500px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
const PriceBox = styled.div``;
export default FGMKCT006;

// {myCart &&
//   myCart.map((item, index) => (
//     <div
//       key={item + index}
//       style={{
//         cursor: "pointer",
//         padding: "15px",
//         backgroundColor: "#eee",
//         marginTop: "10px",
//       }}
//       onClick={() => deleteCart(index)}
//     >
//       {item.product.title}
//     </div>
//   ))}
// <div style={{ cursor: "pointer" }} onClick={null}>
//   장바구니추가
// </div>
// <div style={{ cursor: "pointer" }} onClick={() => deleteCart()}>
//   장바구니부분삭제
// </div>
// <div style={{ cursor: "pointer" }} onClick={() => deleteAllCart()}>
//   장바구니전체삭제
// </div>
