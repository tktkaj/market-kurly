import React, { useEffect } from "react";
import styled from "styled-components";

function FGMKCT00602({ myCart, onClick, countUp, countDown }) {
  const formatPrice = (price) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };
  return (
    <StyledLayout>
      {myCart &&
        myCart[0].product.map((item, index) => (
          <ProductBox key={item + index}>
            <StyledBox>
              <TitleBox>
                <div style={{ color: "#222" }}>{item.title}</div>
                <div
                  style={{
                    color: "#2b4258",
                    fontSize: "0.9rem",
                    marginTop: "5px",
                  }}
                >
                  {item.category}
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
                onClick={() => onClick(item)}
              >
                x
              </button>
            </StyledBox>
            <Countbox>
              <ImgBox>
                <img src={item.img} alt="" width="100%" />
              </ImgBox>
              <CountDiv>
                <div>
                  <span style={{ fontWeight: "bold", paddingRight: "5px" }}>
                    {`${formatPrice(item.disPrice)}원`}
                  </span>
                  <span
                    style={{
                      textDecoration: "line-through",
                      color: "#bcc4cc",
                      fontSize: "0.9rem",
                    }}
                  >
                    {`${formatPrice(item.oriPrice)}원`}
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
                  <CountButton
                    disabled={item.count === 1}
                    onClick={() => countDown(index)}
                  >
                    -
                  </CountButton>
                  <span style={{ fontWeight: "bold" }}>{item.count}</span>
                  <CountButton onClick={() => countUp(index)}>+</CountButton>
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
