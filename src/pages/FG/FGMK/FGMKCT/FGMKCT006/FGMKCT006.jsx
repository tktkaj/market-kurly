import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ApiUtils from "../../../../../utils/ApiUtils";
import useAuth from "../../../../../hooks/useAuth";
import FGMKCT00601 from "../../../../../components/FG/FGMK/FGMKCT/FGMKCT006/FGMKCT00601";
import FGMKCT00602 from "../../../../../components/FG/FGMK/FGMKCT/FGMKCT006/FGMKCT00602";
import FGMKCT00603 from "../../../../../components/FG/FGMK/FGMKCT/FGMKCT006/FGMKCT00603";
import LayerUtils from "../../../../../utils/LayerUtils";
function FGMKCT006() {
  const auth = useAuth();
  const user = auth.userInfo();
  const [myCart, setMyCart] = useState(null);
  const [totalOriPrice, setTotalOriPrice] = useState(0);
  const [totalDisPrice, setTotalDisPrice] = useState(0);

  const formatPrice = (price) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };
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

  const calculateTotalOriPrice = (cart) => {
    if (!cart) return 0;
    return cart.reduce((total, item) => {
      const price = item.product ? item.product.oriPrice * item.count : 0;
      return total + (price || 0);
    }, 0);
  };

  // 할인 가격의 총합을 계산하는 함수
  const calculateTotalDisPrice = (cart) => {
    if (!cart) return 0;
    return cart.reduce((total, item) => {
      const price = item.product
        ? item.product.disPrice * item.count
        : 0;
      return total + (price || 0);
    }, 0);
  };
  // 상품 수량 증가
  const countUp = async (idx) => {
    await ApiUtils.sendPost("cart-count-up", { index: idx });
    const res = await ApiUtils.sendGet("/cart", { userId: user });
    if (res) {
      setMyCart(res);
      setTotalOriPrice(calculateTotalOriPrice(res));
      setTotalDisPrice(calculateTotalDisPrice(res));
    }
  };
  const countDown = async (idx) => {
    await ApiUtils.sendPost("cart-count-down", { index: idx });
    const res = await ApiUtils.sendGet("/cart", { userId: user });
    if (res) {
      setMyCart(res);
      setTotalOriPrice(calculateTotalOriPrice(res));
      setTotalDisPrice(calculateTotalDisPrice(res));
    }
  };
  // 장바구니 조회
  useEffect(() => {
    const fetchMyCart = async () => {
      const res = await ApiUtils.sendGet("/cart", { userId: user });
      if (res) {
        setMyCart(res);
        setTotalOriPrice(calculateTotalOriPrice(res));
        setTotalDisPrice(calculateTotalDisPrice(res));
      }
    };
    fetchMyCart();
  }, []);

  useEffect(() => {
    if (myCart) {
      setTotalOriPrice(calculateTotalOriPrice(myCart));
      setTotalDisPrice(calculateTotalDisPrice(myCart));
    }
  }, [myCart]);

  return (
    <StyledLayout>
      <StyledBox>
        <TitleDiv>
          <StyledTitle>장바구니</StyledTitle>
        </TitleDiv>
        <CartBox>
          <ProductBox>
            <FGMKCT00601 onClick={deleteAllCart} />
            <FGMKCT00602
              product={myCart}
              onClick={deleteCart}
              countUp={countUp}
              countDown={countDown}
            />
          </ProductBox>
          <PriceBox>
            <FGMKCT00603
              totalOriPrice={totalOriPrice}
              totalDisPrice={totalDisPrice}
            />
            <button
              style={{
                backgroundColor: "#672091",
                color: "#fff",
                width: "390px",
                padding: "15px 16px",
                borderRadius: "10px",
                fontSize: "1.1rem",
                fontWeight: "bold",
                marginTop: "15px",
                cursor: "pointer",
              }}
              onClick={() => LayerUtils.showAlert("주문 기능은 아직 없어요.")}
            >
              {formatPrice(`${totalDisPrice}원 주문하기`)}
            </button>
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
