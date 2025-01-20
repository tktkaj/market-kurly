import React from "react";
import SimpleFilter from "./SimpleFilter";
import styled from "styled-components";
import Card from "../../card/Card";
import Pagenation from "./Pagenation";

function FGMKPR00308({ totalCount, setSimpleFilter, products, setPage }) {
  return (
    <ProductListLayout>
      <SimpleFilter totalCount={totalCount} setSimpleFilter={setSimpleFilter} />
      <ProductListBox>
        {products &&
          products.map((product, index) => (
            <Card key={product + index} product={product} />
          ))}
      </ProductListBox>
      <ProductPagenationBox>
        <Pagenation setPage={setPage} />
      </ProductPagenationBox>
    </ProductListLayout>
  );
}

const ProductListLayout = styled.div`
  width: 100%;
`;

const ProductListBox = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 250px);
  gap: 20px;
  padding: 20px 0;
`;
const ProductPagenationBox = styled.div`
  display: flex;
  justify-content: center;
`;

export default FGMKPR00308;
