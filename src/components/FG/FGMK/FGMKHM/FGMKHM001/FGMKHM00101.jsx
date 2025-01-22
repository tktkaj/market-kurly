import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function FGMKHM00101({ product }) {
  const [currentIndex, setCurrentIndex] = useState(1);
  const prevButtonRef = useRef(null);
  const nextButtonRef = useRef(null);

  const leftBtnIcon = (
    <img
      src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTIiIGhlaWdodD0iNTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxIDEpIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxjaXJjbGUgZmlsbC1vcGFjaXR5PSIuMiIgZmlsbD0iIzAwMCIgY3g9IjI1IiBjeT0iMjUiIHI9IjI1Ii8+CiAgICAgICAgPHBhdGggZD0iTTIyLjI4NSAzMy42OTlhMSAxIDAgMCAwIDEuMzE5LjA5OGwuMDk1LS4wODIgOC03LjgxN2ExIDEgMCAwIDAgLjEwOC0xLjMwNmwtLjA4LS4wOTYtNy43MjMtOC4xODJhMSAxIDAgMCAwLTEuNTM1IDEuMjc2bC4wOC4wOTYgNy4wNDkgNy40NjktNy4yOTcgNy4xM2ExIDEgMCAwIDAtLjA5OCAxLjMxOWwuMDgyLjA5NXoiIGZpbGw9IiNGRkYiIGZpbGwtcnVsZT0ibm9uemVybyIvPgogICAgPC9nPgo8L3N2Zz4K"
      width="50px"
      style={{ transform: "rotate(180deg)" }}
      alt=""
    />
  );
  const rightBtnIcon = (
    <img
      src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTIiIGhlaWdodD0iNTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxIDEpIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxjaXJjbGUgZmlsbC1vcGFjaXR5PSIuMiIgZmlsbD0iIzAwMCIgY3g9IjI1IiBjeT0iMjUiIHI9IjI1Ii8+CiAgICAgICAgPHBhdGggZD0iTTIyLjI4NSAzMy42OTlhMSAxIDAgMCAwIDEuMzE5LjA5OGwuMDk1LS4wODIgOC03LjgxN2ExIDEgMCAwIDAgLjEwOC0xLjMwNmwtLjA4LS4wOTYtNy43MjMtOC4xODJhMSAxIDAgMCAwLTEuNTM1IDEuMjc2bC4wOC4wOTYgNy4wNDkgNy40NjktNy4yOTcgNy4xM2ExIDEgMCAwIDAtLjA5OCAxLjMxOWwuMDgyLjA5NXoiIGZpbGw9IiNGRkYiIGZpbGwtcnVsZT0ibm9uemVybyIvPgogICAgPC9nPgo8L3N2Zz4K"
      width="50px"
      alt=""
    />
  );

  return (
    <MainBannerLayout>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        navigation={{
          prevEl: prevButtonRef.current,
          nextEl: nextButtonRef.current,
        }}
        loop
        onInit={(swiper) => {
          swiper.params.navigation.prevEl = prevButtonRef.current;
          swiper.params.navigation.nextEl = nextButtonRef.current;
          swiper.navigation.init();
          swiper.navigation.update();
        }}
        onSlideChange={(swiper) => setCurrentIndex(swiper.realIndex + 1)}
        // style={{ width: "1900px" }}
      >
        {product &&
          product.map((banner, index) => (
            <SwiperSlide key={banner + index}>
              <BannerImage src={banner.src} alt={banner.alt} />
            </SwiperSlide>
          ))}
      </Swiper>
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "1200px",
          zIndex: 1040,
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <PrevButton ref={prevButtonRef}>{leftBtnIcon}</PrevButton>
        <NextButton ref={nextButtonRef}>{rightBtnIcon}</NextButton>
      </div>
      <BannerCounterBox>
        {currentIndex} / {product && product.length}
      </BannerCounterBox>
    </MainBannerLayout>
  );
}

const MainBannerLayout = styled.div`
  position: relative;
  margin: 0 auto;
`;

const BannerImage = styled.img`
  width: 100%;
`;

const PrevButton = styled.button`
  background-color: rgba(0, 0, 0, 0);
  border: none;
  cursor: pointer;
`;
const NextButton = styled.button`
  background-color: rgba(0, 0, 0, 0);
  border: none;
  cursor: pointer;
`;
const BannerCounterBox = styled.div`
  position: absolute;
  z-index: 90;
  bottom: 50px;
  right: 500px;
  color: #ffff;
  background-color: rgba(0, 0, 0, 0.3);
  padding: 5px 10px;
  border-radius: 50px;
`;
export default FGMKHM00101;
