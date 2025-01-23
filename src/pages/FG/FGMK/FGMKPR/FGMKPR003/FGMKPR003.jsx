import React, { useEffect, useState } from "react";
import styled from "styled-components";
import FGMKPR00301 from "../../../../../components/FG/FGMK/FGMKPR/FGMKPR003/FGMKPR00301";
import FGMKPR00305 from "../../../../../components/FG/FGMK/FGMKPR/FGMKPR003/FGMKPR00305";
import FGMKPR00308 from "../../../../../components/FG/FGMK/FGMKPR/FGMKPR003/FGMKPR00308";
import { useSelector } from "react-redux";
import useCore from "../../../../../hooks/useCore";
import ApiUtils from "../../../../../utils/ApiUtils";
import LayerUtils from "../../../../../utils/LayerUtils";
function NewProduct() {
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

  // 카트추가
  const fetchMyCart = async (value) => {
    const res = await ApiUtils.sendPost("/cart", {
      userId: user,
      product: value,
    });
    if(res){
      LayerUtils.showAlert(`${value.title}상품이 장바구니 추가되었습니다.`)
    }
  };

  useEffect(() => {
    if (!user) {
      core.goPage("/FG/FGMK/FGMKLO/FGMKLO002");
    }
    const fetchProductMenuInfo = async () => {
      const menu = await ApiUtils.sendGet("/productMenu");
      if (menu) {
        setNewFilters(menu.newFilter);
        setDetailFilter(menu.detailFilter);
        setSimpleFilter(menu.simpleFilter);
      }
    };
    fetchProductMenuInfo();
  }, []);


  useEffect(() => {
    const fetchProductInfo = async () => {
      const productList = await ApiUtils.sendPost("/products", {
        filter: selDetailFilter,
      });
      if (productList) {
        setProducts(productList);
        setTotalcount(productList.length);
      }
    };
    fetchProductInfo();
  }, [selDetailFilter]);

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
          fetchMyCart={fetchMyCart}
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
