import React, { useRef, useState } from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function FGMKHM00101() {
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
  const banners = [
    {
      id: 1,
      src: "https://product-image.kurly.com/hdims/resize/%3E1900x%3E370/quality/85/src/banner/main/pc/img/e1b08aaa-300c-413b-9ebf-27742320ae21.jpg",
      alt: "Banner 1",
    },
    {
      id: 2,
      src: "https://product-image.kurly.com/hdims/resize/%3E1900x%3E370/quality/85/src/banner/main/pc/img/e8dc84ae-5b08-48d9-a5a6-c82ba81b5ca8.jpg",
      alt: "Banner 2",
    },
    {
      id: 3,
      src: "https://product-image.kurly.com/hdims/resize/%3E1900x%3E370/quality/85/src/banner/main/pc/img/7946e37f-6db0-408c-89e0-668d3c1a086a.jpg",
      alt: "Banner 3",
    },
  ];

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
        {banners.map((banner) => (
          <SwiperSlide key={banner.id}>
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
        {currentIndex} / {banners.length}
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
