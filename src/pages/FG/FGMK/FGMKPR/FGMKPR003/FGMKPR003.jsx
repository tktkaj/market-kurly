import React, { useEffect, useState } from "react";
import styled from "styled-components";
import FGMKPR00301 from "../../../../../components/FG/FGMK/FGMKPR/FGMKPR003/FGMKPR00301";
import FGMKPR00305 from "../../../../../components/FG/FGMK/FGMKPR/FGMKPR003/FGMKPR00305";
import FGMKPR00308 from "../../../../../components/FG/FGMK/FGMKPR/FGMKPR003/FGMKPR00308";
import { useSelector } from "react-redux";
import useCore from "../../../../../hooks/useCore";
function NewProduct() {
  const user = useSelector((state) => state.userInfo?.id);
  const core = useCore();
  const [totalCount, setTotalcount] = useState(0);
  const [category, setCategory] = useState("");
  const [detailFilter, setDetailFilter] = useState([]);
  const [simpleFilter, setSimpleFilter] = useState("");
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(0);

  // json사용할 카테고리
  const categories = [
    {
      type: "product",
      title: "카테고리1",
      list: [
        { name: "2025 설선물", count: 0 },
        { name: "스킨케어·메이크업", count: 0 },
        { name: "1월 뷰컬페", count: 0 },
        { name: "주방용품", count: 0 },
        { name: "간식·과자·떡", count: 0 },
        { name: "건강식품", count: 0 },
        { name: "럭셔리뷰티", count: 0 },
        { name: "패션", count: 0 },
        { name: "헤어·바디·구강", count: 0 },
      ],
    },
    {
      type: "price",
      title: "가격",
      list: [
        { name: "11,900 미만", count: 0 },
        { name: "11,900원 ~ 26,000원", count: 0 },
        { name: "26,000원 ~ 57,900원", count: 0 },
        { name: "57,900원 이상", count: 0 },
      ],
    },
  ];

  useEffect(() => {
    setProducts(null);
    if (!user) {
      core.goPage("/FG/FGMK/FGMKLO/FGMKLO002");
    }
    // 2번째인자로 product값을 줄것.
  }, []);
  return (
    <NewProductLayout>
      <FGMKPR00305 setCategory={setCategory} />
      <NewProductbox>
        <FGMKPR00301 setDetailFilter={setDetailFilter} categories={null} />
        <FGMKPR00308
          totalCount={totalCount}
          setSimpleFilter={setSimpleFilter}
          products={null}
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
