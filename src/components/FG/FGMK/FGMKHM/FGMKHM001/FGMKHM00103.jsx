import React from "react";
import styled from "styled-components";
import CustomCard from "../../../../com/custom/CustomCard";

function FGMKHM00103({ product }) {
  if (!product) return null;
  return (
    <RecommandProductLayout>
      <TitleBox>
        <h2 style={{ fontSize: "2.2rem", marginBottom: "15px" }}>
          {product.title}
        </h2>
        <h3 style={{ fontSize: "1.1rem", marginBottom: "30px", color: "#999" }}>
          {product.subTitle}
        </h3>
        <p style={{ color: "#ccc" }}>{product.primaryText}</p>
      </TitleBox>
      <ProductBox>
        {product.list.map((item, index) => (
          <CustomCard key={item + index} product={item} />
        ))}
      </ProductBox>
    </RecommandProductLayout>
  );
}

const RecommandProductLayout = styled.div`
  display: flex;
  justify-content: space-between;
`;
const TitleBox = styled.div``;
const ProductBox = styled.div`
  display: flex;
  gap: 20px;
`;

export default FGMKHM00103;
