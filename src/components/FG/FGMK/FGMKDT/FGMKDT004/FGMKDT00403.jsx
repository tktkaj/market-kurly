import React from "react";
import styled from "styled-components";
import FGMKDT00402 from "./FGMKDT00402";
import BaseSelect from "../../../../com/base/BaseSelect";
import BaseButton from "../../../../com/base/BaseButton";
function FGMKDT00403({ setTotalPrice }) {
  const product = {
    dileveryType: "샛별배송",
    title: "[일본디저트여행] 인기 디저트 모아보기(택1)",
    subtitle: "방방곡곡 떠나는 일본 디저트 여행",
    disPercent: "7%",
    disPrice: "12,920원~",
    oriPrice: "13,900원",
    origin: "원산지: 상품설명/상세정보 참조",
    coupon: true,
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
        name: "[일본디저트여행] 와카야마 백도 젤리",
        originalPrice: 15000,
        salePrice: 12000,
      },
      {
        name: "[일본디저트여행] 훗카이도 멜론 젤리",
        originalPrice: 13000,
        salePrice: 11000,
      },
      {
        name: "[일본디저트여행] 도쿄 버터 크로와상 파이",
        originalPrice: 8000,
        salePrice: 6000,
      },
      {
        name: "[일본디저트여행] 교토 아라시야마 말차 당고",
        originalPrice: 20000,
        salePrice: 16000,
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
  return (
    <ShoppingOptionsLayout>
      <ProductTitle>
        <div>
          <DeliveryDiv>{product.dileveryType}</DeliveryDiv>
          <h3>{product.title}</h3>
          <h1>{product.subtitle}</h1>
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>{shareIcon}</div>
      </ProductTitle>
      <DisPriceDiv>
        <span>{product.disPercent}</span>
        <span>{product.disPrice}</span>
      </DisPriceDiv>
      <OriPriceDiv>{product.oriPrice}</OriPriceDiv>
      <OriginDiv>{product.origin}</OriginDiv>
      <FGMKDT00402 price="10000" />
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
            <BaseSelect products={product.list} />
          </StyledDd>
        </DetailItem>
      </DetailList>
      <TotalPriceDiv>
        총 상품금액:
        {/* 변수로 바꿀것 */}
        <span>10,965원</span>
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
          onClick={() => {}}
        />
      </UtilButtonDiv>
    </ShoppingOptionsLayout>
  );
}
const ShoppingOptionsLayout = styled.div``;
const DeliveryDiv = styled.div``;
const ProductTitle = styled.div`
  display: flex;
  align-items: center;
`;
const DisPriceDiv = styled.div``;
const OriPriceDiv = styled.div``;
const OriginDiv = styled.div``;
const DetailList = styled.ul`
  list-style: none;
`;
const DetailItem = styled.li`
  display: flex;
  gap: 10px;
`;
const StyledDt = styled.dt``;
const StyledDd = styled.dd``;
const TotalPriceDiv = styled.div``;
const UtilButtonDiv = styled.div`
  display: flex;
  gap: 10px;
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
