import React, { useEffect, useState } from "react";
import styled from "styled-components";
import FGMKDT00402 from "./FGMKDT00402";
import BaseSelect from "../../../../com/base/BaseSelect";
import BaseButton from "../../../../com/base/BaseButton";
import ApiUtils from "../../../../../utils/ApiUtils";
import LayerUtils from "../../../../../utils/LayerUtils";
import { useSelector } from "react-redux";
function FGMKDT00403({ productInfo }) {
  const [totalPrice, setTotalPrice] = useState(0);
  const [selPrice, setSelPrice] = useState(0);
  const user = useSelector((state) => state.userInfo.id);
  const formatPrice = (price) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };
  const product = {
    productDetail: [
      {
        title: "배송",
        content: [
          "샛별배송",
          "23시 전 주문 시 수도권/충청 내일 아침 7시 전 도착",
        ],
      },
      {
        title: "판매자",
        content: "컬리",
      },
      {
        title: "포장",
        content: [
          "상온 (종이포장)",
          "23시 전 주문 시 수도권/충청 내일 아침 7시 전 도착",
        ],
      },
      {
        title: "알레르기",
        content:
          "* 제품별로 알레르기 성분이 상이하오니 아래 상세 표시사항 참고 부탁드립니다.",
      },
    ],
    list: [
      {
        name: productInfo.title,
        originalPrice: productInfo.oriPrice,
        salePrice: productInfo.disPrice,
      },
    ],
  };
  const shareIcon = (
    <img
      src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGNpcmNsZSBzdHJva2U9IiNEREQiIGN4PSIyMCIgY3k9IjIwIiByPSIxOS41Ii8+CiAgICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTAuNSAxMSkiIHN0cm9rZT0iIzMzMyIgc3Ryb2tlLXdpZHRoPSIxLjgiPgogICAgICAgICAgICA8Y2lyY2xlIGN4PSIzIiBjeT0iOSIgcj0iMi4xIi8+CiAgICAgICAgICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDUuMTM3KSI+CiAgICAgICAgICAgICAgICA8Y2lyY2xlIGN4PSI4Ljg2MyIgY3k9IjMiIHI9IjIuMSIvPgogICAgICAgICAgICAgICAgPHBhdGggc3Ryb2tlLWxpbmVjYXA9InNxdWFyZSIgZD0iTTAgOC4xMzYgNi4zNjMgNC41Ii8+CiAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgPGcgdHJhbnNmb3JtPSJtYXRyaXgoMSAwIDAgLTEgNS4xMzcgMTgpIj4KICAgICAgICAgICAgICAgIDxjaXJjbGUgY3g9IjguODYzIiBjeT0iMyIgcj0iMi4xIi8+CiAgICAgICAgICAgICAgICA8cGF0aCBzdHJva2UtbGluZWNhcD0ic3F1YXJlIiBkPSJNMCA4LjEzNiA2LjM2MyA0LjUiLz4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+Cg=="
      alt=""
    />
  );
  const heartIconSrc =
    "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwYXRoIGQ9Ik0yNS44MDcgNy44NjNhNS43NzcgNS43NzcgMCAwIDAtOC4xNzIgMEwxNiA5LjQ5N2wtMS42MzUtMS42MzRhNS43NzkgNS43NzkgMCAxIDAtOC4xNzMgOC4xNzJsMS42MzQgMS42MzQgNy40NjYgNy40NjdhMSAxIDAgMCAwIDEuNDE1IDBzMCAwIDAgMGw3LjQ2Ni03LjQ2N2gwbDEuNjM0LTEuNjM0YTUuNzc3IDUuNzc3IDAgMCAwIDAtOC4xNzJ6IiBzdHJva2U9IiM1RjAwODAiIHN0cm9rZS13aWR0aD0iMS42IiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPgo8L3N2Zz4K";

  const bellIconSrc =
    "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxnIHN0cm9rZT0iI0NDQyIgc3Ryb2tlLXdpZHRoPSIxLjYiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBhdGggZD0iTTEyLjY2NiAyM2EzLjMzMyAzLjMzMyAwIDEgMCA2LjY2NiAwIi8+CiAgICAgICAgPHBhdGggZD0iTTI1Ljk5OCAyMi43MzhINmwuMDEzLS4wM2MuMDc2LS4xMzUuNDcxLS43MDQgMS4xODYtMS43MDlsLjc1LTEuMDV2LTYuNjM1YzAtNC40ODUgMy40MzgtOC4xNCA3Ljc0MS04LjMwOEwxNiA1YzQuNDQ2IDAgOC4wNSAzLjcyMiA4LjA1IDguMzE0djYuNjM0bDEuNzA3IDIuNDExYy4xNzMuMjUzLjI1NC4zOC4yNDIuMzh6IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KICAgIDwvZz4KPC9zdmc+Cg==";

  const fetchMyCart = async (value) => {
    const res = await ApiUtils.sendPost("/cart", {
      userId: user,
      product: value,
    });
    if (res) {
      LayerUtils.showAlert(`${value.title}상품이 장바구니 추가되었습니다.`);
    }
  };
  useEffect(() => {
    setTotalPrice(totalPrice + selPrice);
  }, [selPrice]);
  return (
    <ShoppingOptionsLayout>
      <ProductTitle>
        <div>
          <DeliveryDiv>샛별배송</DeliveryDiv>
          <h3 style={{ fontSize: "1.3rem", margin: "0px", marginTop: "10px" }}>
            {productInfo && productInfo.title}
          </h3>
          <h1
            style={{
              margin: "0px",
              marginTop: "10px",
              fontSize: "0.8rem",
              color: "#b5b5b5",
            }}
          >
            {productInfo && productInfo.subtitle}
          </h1>
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>{shareIcon}</div>
      </ProductTitle>
      <DisPriceDiv>
        <span
          style={{ fontSize: "1.6rem", color: "#fa622f", fontWeight: "bold" }}
        >
          {productInfo && productInfo.disPercent}
        </span>
        <span style={{ fontSize: "1.6rem", fontWeight: "bold" }}>
          {productInfo && `${formatPrice(productInfo.disPrice)}원`}
        </span>
      </DisPriceDiv>
      <OriPriceDiv>
        {productInfo && `${formatPrice(productInfo.oriPrice)}원`}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="21"
          height="21"
          viewBox="0 0 21 21"
          fill="none"
        >
          <circle
            cx="10.5"
            cy="10.5"
            r="6.9"
            stroke="#ccc"
            strokeWidth="1.2"
          ></circle>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9.19735 8.7317H7.80005C7.84762 7.32251 8.81681 6.2998 10.5828 6.2998C12.2119 6.2998 13.3 7.23926 13.3 8.55332C13.3 9.46305 12.8482 10.0993 12.0395 10.5809C11.2606 11.0387 11.0406 11.342 11.0406 11.9306V12.2695H9.66113L9.65518 11.8652C9.60167 10.9733 9.94654 10.4382 10.7671 9.95656L10.9414 9.84757C11.5443 9.45619 11.7541 9.14643 11.7541 8.60683C11.7541 7.98845 11.2546 7.54251 10.5055 7.54251C9.73843 7.54251 9.24491 8.00629 9.19735 8.7317ZM9.42924 14.1603C9.42924 14.7312 9.82167 15.1058 10.4163 15.1058C11.0228 15.1058 11.4033 14.7312 11.4033 14.1603C11.4033 13.5836 11.0228 13.209 10.4163 13.209C9.82167 13.209 9.42924 13.5836 9.42924 14.1603Z"
            fill="#CCCCCC"
          ></path>
        </svg>
      </OriPriceDiv>
      <OriginDiv>{productInfo && product.origin}</OriginDiv>
      <div style={{ marginTop: "10px" }}>
        <FGMKDT00402 price="10000" />
      </div>
      <DetailList>
        {product.productDetail.map((item, index) => (
          <DetailItem key={item + index}>
            <StyledDt>{item.title}</StyledDt>
            <StyledDd>{item.content}</StyledDd>
          </DetailItem>
        ))}
        <DetailItem>
          <StyledDt>상품선택</StyledDt>
          <StyledDd>
            <BaseSelect
              products={product.list}
              onClick={(price) => setSelPrice(price)}
            />
          </StyledDd>
        </DetailItem>
      </DetailList>
      <TotalPriceDiv>
        <span style={{ fontSize: "0.7rem" }}>
          총 상품금액:
          <span
            style={{
              fontSize: "1.8rem",
              fontWeight: "bold",
              marginLeft: "10px",
            }}
          >
            {formatPrice(totalPrice)}
          </span>
          <span
            style={{
              fontSize: "1.3rem",
              fontWeight: "bold",
              marginLeft: "5px",
            }}
          >
            원
          </span>
        </span>
      </TotalPriceDiv>
      <UtilButtonDiv>
        <IconButtonDiv>
          <img src={heartIconSrc} alt="" />
        </IconButtonDiv>
        <IconButtonDiv>
          <img src={bellIconSrc} alt="" />
        </IconButtonDiv>
        <BaseButton
          btnText="장바구니 담기"
          size="lg"
          variant="purple"
          type="button"
          onClick={() => {
            fetchMyCart(productInfo);
          }}
        />
      </UtilButtonDiv>
    </ShoppingOptionsLayout>
  );
}
const ShoppingOptionsLayout = styled.div``;
const DeliveryDiv = styled.div`
  font-size: 0.8rem;
  color: #999;
`;
const ProductTitle = styled.div`
  display: flex;
  align-items: center;
`;
const DisPriceDiv = styled.div`
  margin-top: 20px;
  display: flex;
  align-items: center;
  gap: 10px;
`;
const OriPriceDiv = styled.div`
  text-decoration: line-through;
  color: #b5b5b5;
`;
const OriginDiv = styled.div`
  margin-top: 10px;
  font-size: 1.4rem;
`;
const DetailList = styled.ul`
  list-style: none;
  padding: 0;
  border-bottom: 1px solid #f4f4f4;
`;
const DetailItem = styled.li`
  border-top: 1px solid #f4f4f4;
  padding: 15px 0px;
  display: flex;
  gap: 10px;
`;
const StyledDt = styled.dt`
  font-size: 0.8rem;
  width: 80px;
  color: #666;
`;
const StyledDd = styled.dd`
  font-size: 0.8rem;
  width: 300px;
  color: #666;
`;
const TotalPriceDiv = styled.div`
  display: flex;
  justify-content: end;
`;
const UtilButtonDiv = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 20px;
`;
const IconButtonDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 10px;
  padding-right: 10px;
  border: 1px solid #e2e2e2;
  border-radius: 4px;
`;
export default FGMKDT00403;
