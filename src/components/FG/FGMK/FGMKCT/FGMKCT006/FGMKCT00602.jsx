import React, { useEffect } from "react";
import styled from "styled-components";

function FGMKCT00602({ product, onClick }) {
  const formatPrice = (price) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };
  useEffect(() => {
    console.log("여기야");
    console.log(product);
  });
  return (
    <StyledLayout>
      {product &&
        product.map((item, index) => (
          <ProductBox key={item + index}>
            <StyledBox>
              <TitleBox>
                <div style={{ color: "#222" }}>{item.product.title}</div>
                <div
                  style={{
                    color: "#848f9a",
                    fontSize: "0.9rem",
                    marginTop: "5px",
                  }}
                >
                  {item.product.category}
                </div>
              </TitleBox>
              <button
                style={{
                  backgroundColor: "#fff",
                  border: "none",
                  cursor: "pointer",
                  position: "absolute",
                  right: "0px",
                  fontSize: "1.2rem",
                }}
                type="button"
                onClick={() => onClick(index)}
              >
                x
              </button>
            </StyledBox>
            <Countbox>
              <ImgBox>
                <img src={item.product.img} alt="" width="100%" />
              </ImgBox>
              <CountDiv>
                <div>
                  <span style={{ fontWeight: "bold", paddingRight: "5px" }}>
                    {product && `${formatPrice(item.product.disPrice)}원`}
                  </span>
                  <span
                    style={{
                      textDecoration: "line-through",
                      color: "#bcc4cc",
                      fontSize: "0.9rem",
                    }}
                  >
                    {product && `${formatPrice(item.product.oriPrice)}원`}
                  </span>
                </div>
                <div
                  style={{
                    backgroundColor: "#ECEEF3",
                    padding: "5px 10px",
                    display: "flex",
                    gap: "10px",
                    alignItems: "center",
                    width: "fit-content",
                    borderRadius: "50px",
                  }}
                >
                  <CountButton>-</CountButton>
                  <span style={{fontWeight:"bold"}}>1</span>
                  <CountButton>+</CountButton>
                </div>
              </CountDiv>
            </Countbox>
          </ProductBox>
        ))}
    </StyledLayout>
  );
}
const StyledLayout = styled.div`
  padding: 16px 20px 16px;
  width: 98%;
  background-color: #fff;
  border-radius: 20px;
  margin-bottom: 10px;
`;
const ProductBox = styled.div`
  padding-bottom: 20px;
`;
const StyledBox = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
`;
const TitleBox = styled.div``;
const Countbox = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 20px;
`;
const ImgBox = styled.div`
  width: 64px;
  height: 83px;
  overflow: hidden;
  border-radius: 10px;
`;
const CountDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const CountButton = styled.button`
  cursor: pointer;
  font-size: 1.3rem;
  border: none;
`;
export default FGMKCT00602;
