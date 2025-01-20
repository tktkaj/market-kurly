import React from "react";
import styled from "styled-components";
import CustomCard from "./../../../../com/custom/CustomCard";
import FGMKPR00307 from "./FGMKPR00307";
import FGMKPR00303 from "./FGMKPR00303";
function FGMKPR00308({ totalCount, setSimpleFilter, products, setPage }) {
  return (
    <ProductListLayout>
      <FGMKPR00303 totalCount={totalCount} setSimpleFilter={setSimpleFilter} />
      <ProductListBox>
        {products &&
          products.map((product, index) => (
            <CustomCard key={product + index} product={product} />
          ))}
      </ProductListBox>
      <ProductPagenationBox>
        <FGMKPR00307 setPage={setPage} />
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
