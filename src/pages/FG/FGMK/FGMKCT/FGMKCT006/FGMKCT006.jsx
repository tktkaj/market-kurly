import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ApiUtils from "../../../../../utils/ApiUtils";
import useAuth from "../../../../../hooks/useAuth";

function FGMKCT006() {
  const auth = useAuth();
  const user = auth.userInfo();
  const [myCart, setMyCart] = useState(null);
  useEffect(() => {
    const fetchMyCart = async () => {
      const res = await ApiUtils.sendGet("/cart");
      if (res) setMyCart(res);
    };
    fetchMyCart();
  }, []);

  return (
    <StyledLayout>
      <StyledBox>장바구니 내역</StyledBox>
      {myCart && myCart.map((item, index) => <div>{item.product.title}</div>)}
    </StyledLayout>
  );
}
const StyledLayout = styled.div`
  width: 1040px;
  margin: 0 auto;
`;
const StyledBox = styled.div``;
export default FGMKCT006;
