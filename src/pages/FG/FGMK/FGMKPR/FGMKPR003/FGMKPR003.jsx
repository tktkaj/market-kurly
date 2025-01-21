import React, { useEffect, useState } from "react";
import styled from "styled-components";
import FGMKPR00301 from "../../../../../components/FG/FGMK/FGMKPR/FGMKPR003/FGMKPR00301";
import FGMKPR00305 from "../../../../../components/FG/FGMK/FGMKPR/FGMKPR003/FGMKPR00305";
import FGMKPR00308 from "../../../../../components/FG/FGMK/FGMKPR/FGMKPR003/FGMKPR00308";
import { useSelector } from "react-redux";
import useCore from "../../../../../hooks/useCore";
function NewProduct() {
  const user = useSelector((state)=>state.userInfo?.id);
  const core = useCore();
  const [totalCount, setTotalcount] = useState(0);
  const [category, setCategory] = useState("");
  const [detailFilter, setDetailFilter] = useState([]);
  const [simpleFilter, setSimpleFilter] = useState("");
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(0);
  const testData = Array.from({ length: 30 }, (_, index) => ({
    sale: "50%",
    disable: false,
    img: "https://product-image.kurly.com/hdims/resize/%5E%3E360x%3E468/cropcenter/360x468/quality/85/src/product/image/bbf4ea2d-c7e8-4b19-90cf-9021cefcee05.jpg",
    title: `[일본디저트여행] 인기 디저트 모아보기(택1) - ${index + 1}`,
    oriPrice: "15,900원",
    disPercent: "50%",
    disPrice: "7,950원",
    review: "999+",
    url: "/FG/FGMK/FGMKDT/FGMKDT004",
  }));

  const categories = [
    {
      type: "product",
      title: "카테고리1",
      list: [
        { name: "2025 설선물", count: 72 },
        { name: "스킨케어·메이크업", count: 79 },
        { name: "1월 뷰컬페", count: 45 },
        { name: "주방용품", count: 40 },
        { name: "간식·과자·떡", count: 40 },
        { name: "건강식품", count: 34 },
        { name: "럭셔리뷰티", count: 32 },
        { name: "패션", count: 31 },
        { name: "헤어·바디·구강", count: 30 },
      ],
    },
    {
      type: "product",
      title: "카테고리2",
      list: [
        { name: "2025 설선물", count: 72 },
        { name: "스킨케어·메이크업", count: 79 },
        { name: "1월 뷰컬페", count: 45 },
        { name: "주방용품", count: 40 },
        { name: "간식·과자·떡", count: 40 },
        { name: "건강식품", count: 34 },
        { name: "럭셔리뷰티", count: 32 },
        { name: "패션", count: 31 },
        { name: "헤어·바디·구강", count: 30 },
      ],
    },
    {
      type: "price",
      title: "가격",
      list: [
        { name: "11,900 미만", count: 72 },
        { name: "11,900원 ~ 26,000원", count: 79 },
        { name: "26,000원 ~ 57,900원", count: 45 },
        { name: "57,900원 이상", count: 40 },
      ],
    },
    {
      type: "product",
      title: "카테고리3",
      list: [
        { name: "2025 설선물", count: 72 },
        { name: "스킨케어·메이크업", count: 79 },
        { name: "1월 뷰컬페", count: 45 },
        { name: "주방용품", count: 40 },
        { name: "간식·과자·떡", count: 40 },
        { name: "건강식품", count: 34 },
        { name: "럭셔리뷰티", count: 32 },
        { name: "패션", count: 31 },
        { name: "헤어·바디·구강", count: 30 },
      ],
    },
  ];

  useEffect(() => {
    setProducts(testData);
    if (!user) {
      core.goPage("/FG/FGMK/FGMKLO/FGMKLO002"); 
    }
  }, []);
  return (
    <NewProductLayout>
      <FGMKPR00305 setCategory={setCategory} />
      <NewProductbox>
        <FGMKPR00301
          setDetailFilter={setDetailFilter}
          categories={categories}
        />
        <FGMKPR00308
          totalCount={totalCount}
          setSimpleFilter={setSimpleFilter}
          products={products}
          setPage={setPage}
        />
      </NewProductbox>
    </NewProductLayout>
  );
}

const NewProductLayout = styled.div``;
const NewProductbox = styled.div`
  width: 1040px;
  margin: 0 auto;
  margin-top: 50px;
  margin-bottom: 100px;
  display: flex;
  justify-content: space-between;
`;
export default NewProduct;
