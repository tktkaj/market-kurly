import React, { useEffect, useState } from "react";
import styled from "styled-components";
import FGMKPR00301 from "../../../../../components/FG/FGMK/FGMKPR/FGMKPR003/FGMKPR00301";
import FGMKPR00305 from "../../../../../components/FG/FGMK/FGMKPR/FGMKPR003/FGMKPR00305";
import FGMKPR00308 from "../../../../../components/FG/FGMK/FGMKPR/FGMKPR003/FGMKPR00308";
import { useSelector } from "react-redux";
import useCore from "../../../../../hooks/useCore";
import ApiUtils from "../../../../../utils/ApiUtils";
function NewProduct() {
  // json에재사용
  const newFil = {
    title: "신상품",
    list: [
      { name: "인기신상랭킹", keyword: "rank" },
      { name: "입점특가", keyword: "sale" },
      { name: "요즘간식", keyword: "snack" },
      { name: "간편한끼", keyword: "once" },
      { name: "주방·리빙", keyword: "living" },
      { name: "뷰티", keyword: "beuty" },
      { name: "패션·잡화", keyword: "fashion" },
    ],
  };
  // json사용할 카테고리
  const detail = [
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
  // json에 재사용
  const simple = [
    "추천순",
    "신상품",
    "판매량순",
    "혜택순",
    "낮은 가격순",
    "높은 가격순",
  ];
  const user = useSelector((state) => state.userInfo?.id);
  const core = useCore();
  const [totalCount, setTotalcount] = useState(0);
  const [newFilters, setNewFilters] = useState(null);
  const [selNewFilters, setSelNewFilters] = useState("");
  const [detailFilter, setDetailFilter] = useState(null);
  const [selDetailFilter, setSelDetailFilter] = useState([]);
  const [SelPriceFilter, setSelPriceFilter] = useState("");
  const [simpleFilter, setSimpleFilter] = useState(null);
  const [selSimpleFilter, setSelSimpleFilter] = useState("");
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(0);

  const handleDeatilFilter = (filterName) => {
    setSelDetailFilter((prevItems) => {
      // 배열에 fileterName 이미 존재하는지 확인
      const itemIndex = prevItems.indexOf(filterName);

      if (itemIndex === -1) {
        // newItem이 배열에 없으면 추가
        return [...prevItems, filterName];
      } else {
        // newItem이 배열에 있으면 제거
        return prevItems.filter((item, index) => index !== itemIndex);
      }
    });
  };

  const handleDetailFilter = (price) => {
    setSelPriceFilter(price);
  };

  useEffect(() => {
    if (!user) {
      core.goPage("/FG/FGMK/FGMKLO/FGMKLO002");
    }
  }, [user]);

  useEffect(() => {
    const fetchProductMenuInfo = async () => {
      const menu = await ApiUtils.sendGet("/productMenu");
      if (menu) {
        setNewFilters(menu.newFilter);
        setDetailFilter(menu.detailFilter);
        setSimpleFilter(menu.simpleFilter);
      }
    };
    fetchProductMenuInfo();
  }, [user]);

  useEffect(() => {
    const fetchProductInfo = async () => {
      const productList = await ApiUtils.sendPost("/products");
      if (productList) {
        setProducts(productList);
      }
    };
    fetchProductInfo();
  }, [detailFilter]);
  return (
    <NewProductLayout>
      <FGMKPR00305
        setSelNewFilters={setSelNewFilters}
        newFilters={newFilters}
      />
      <NewProductbox>
        <FGMKPR00301
          handleDeatilFilter={handleDeatilFilter}
          handleDetailFilter={handleDetailFilter}
          detailFilter={detailFilter}
        />
        <FGMKPR00308
          totalCount={totalCount}
          setSelSimpleFilter={setSelSimpleFilter}
          simpleFilter={simpleFilter}
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
