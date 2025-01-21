import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import FGMKHM00101 from "../../../../../components/FG/FGMK/FGMKHM/FGMKHM001/FGMKHM00101";
import FGMKHM00102 from "../../../../../components/FG/FGMK/FGMKHM/FGMKHM001/FGMKHM00102";
import FGMKHM00104 from "../../../../../components/FG/FGMK/FGMKHM/FGMKHM001/FGMKHM00104";
import FGMKHM00103 from "../../../../../components/FG/FGMK/FGMKHM/FGMKHM001/FGMKHM00103";
import useCore from "../../../../../hooks/useCore";
import useAuth from "../../../../../hooks/useAuth";
function MainPage() {
  const core = useCore();
  const user = useSelector((state) => state.userInfo?.id);
  const testData = {
    title: "✨주목! 설 선물 베스트",
    subTitle: "실패 없는 설 인기 선물만 모았어요!",
    list: [
      {
        sale: "50%",
        disable: false,
        img: "https://product-image.kurly.com/hdims/resize/%5E%3E360x%3E468/cropcenter/360x468/quality/85/src/product/image/bbf4ea2d-c7e8-4b19-90cf-9021cefcee05.jpg",
        title: "[일본디저트여행] 인기 디저트 모아보기(택1)",
        oriPrice: "15,900원",
        disPercent: "50%",
        disPrice: "7,950원",
        review: "999+",
        url: "/FG/FGMK/FGMKDT/FGMKDT004",
      },
      {
        sale: "50%",
        disable: false,
        img: "https://product-image.kurly.com/hdims/resize/%5E%3E360x%3E468/cropcenter/360x468/quality/85/src/product/image/bbf4ea2d-c7e8-4b19-90cf-9021cefcee05.jpg",
        title: "[일본디저트여행] 인기 디저트 모아보기(택1)",
        oriPrice: "15,900원",
        disPercent: "50%",
        disPrice: "7,950원",
        review: "999+",
        url: "/FG/FGMK/FGMKDT/FGMKDT004",
      },
      {
        sale: "50%",
        disable: false,
        img: "https://product-image.kurly.com/hdims/resize/%5E%3E360x%3E468/cropcenter/360x468/quality/85/src/product/image/bbf4ea2d-c7e8-4b19-90cf-9021cefcee05.jpg",
        title: "[일본디저트여행] 인기 디저트 모아보기(택1)",
        oriPrice: "15,900원",
        disPercent: "50%",
        disPrice: "7,950원",
        review: "999+",
        url: "/FG/FGMK/FGMKDT/FGMKDT004",
      },
      {
        sale: "50%",
        disable: false,
        img: "https://product-image.kurly.com/hdims/resize/%5E%3E360x%3E468/cropcenter/360x468/quality/85/src/product/image/bbf4ea2d-c7e8-4b19-90cf-9021cefcee05.jpg",
        title: "[일본디저트여행] 인기 디저트 모아보기(택1)",
        oriPrice: "15,900원",
        disPercent: "50%",
        disPrice: "7,950원",
        review: "999+",
        url: "/FG/FGMK/FGMKDT/FGMKDT004",
      },
      {
        sale: "50%",
        disable: false,
        img: "https://product-image.kurly.com/hdims/resize/%5E%3E360x%3E468/cropcenter/360x468/quality/85/src/product/image/bbf4ea2d-c7e8-4b19-90cf-9021cefcee05.jpg",
        title: "[일본디저트여행] 인기 디저트 모아보기(택1)",
        oriPrice: "15,900원",
        disPercent: "50%",
        disPrice: "7,950원",
        review: "999+",
        url: "/FG/FGMK/FGMKDT/FGMKDT004",
      },
      {
        sale: "50%",
        disable: false,
        img: "https://product-image.kurly.com/hdims/resize/%5E%3E360x%3E468/cropcenter/360x468/quality/85/src/product/image/bbf4ea2d-c7e8-4b19-90cf-9021cefcee05.jpg",
        title: "[일본디저트여행] 인기 디저트 모아보기(택1)",
        oriPrice: "15,900원",
        disPercent: "50%",
        disPrice: "7,950원",
        review: "999+",
        url: "/FG/FGMK/FGMKDT/FGMKDT004",
      },
      {
        sale: "50%",
        disable: false,
        img: "https://product-image.kurly.com/hdims/resize/%5E%3E360x%3E468/cropcenter/360x468/quality/85/src/product/image/bbf4ea2d-c7e8-4b19-90cf-9021cefcee05.jpg",
        title: "[일본디저트여행] 인기 디저트 모아보기(택1)",
        oriPrice: "15,900원",
        disPercent: "50%",
        disPrice: "7,950원",
        review: "999+",
        url: "/FG/FGMK/FGMKDT/FGMKDT004",
      },
      {
        sale: "50%",
        disable: false,
        img: "https://product-image.kurly.com/hdims/resize/%5E%3E360x%3E468/cropcenter/360x468/quality/85/src/product/image/bbf4ea2d-c7e8-4b19-90cf-9021cefcee05.jpg",
        title: "[일본디저트여행] 인기 디저트 모아보기(택1)",
        oriPrice: "15,900원",
        disPercent: "50%",
        disPrice: "7,950원",
        review: "999+",
        url: "/FG/FGMK/FGMKDT/FGMKDT004",
      },
    ],
  };
  const subBanner = {
    img: "https://product-image.kurly.com/hdims/resize/%3E1050x%3E140/quality/85/src/banner/random-band/pc/img/7770c137-bccd-4532-95e8-ea1a8ab7e837.jpg",

    url: "/FG/FGMK/FGMKPR/FGMKPR003",
  };
  const recommandProduct = {
    title: "💝선물특가",
    subTitle: "특가로 똑똑하게 설 준비!",
    primaryText: "망설이면 늦어요!",
    list: [
      {
        sale: "10%할인",
        disable: false,
        img: "https://product-image.kurly.com/hdims/resize/%5E%3E360x%3E468/cropcenter/360x468/quality/85/src/product/image/bbf4ea2d-c7e8-4b19-90cf-9021cefcee05.jpg",
        title: "[일본디저트여행] 인기 디저트 모아보기(택1)",
        oriPrice: "15,900원",
        disPercent: "50%",
        disPrice: "7,950원",
        review: "999+",
        url: "/FG/FGMK/FGMKDT/FGMKDT004",
      },
      {
        sale: "10%할인",
        disable: false,
        img: "https://product-image.kurly.com/hdims/resize/%5E%3E360x%3E468/cropcenter/360x468/quality/85/src/product/image/bbf4ea2d-c7e8-4b19-90cf-9021cefcee05.jpg",
        title: "[일본디저트여행] 인기 디저트 모아보기(택1)",
        oriPrice: "15,900원",
        disPercent: "50%",
        disPrice: "7,950원",
        review: "999+",
        url: "/FG/FGMK/FGMKDT/FGMKDT004",
      },
      {
        sale: "10%할인",
        disable: false,
        img: "https://product-image.kurly.com/hdims/resize/%5E%3E360x%3E468/cropcenter/360x468/quality/85/src/product/image/bbf4ea2d-c7e8-4b19-90cf-9021cefcee05.jpg",
        title: "[일본디저트여행] 인기 디저트 모아보기(택1)",
        oriPrice: "15,900원",
        disPercent: "50%",
        disPrice: "7,950원",
        review: "999+",
        url: "/FG/FGMK/FGMKDT/FGMKDT004",
      },
    ],
  };

  useEffect(() => {
    if (!user) {
      core.goPage("/FG/FGMK/FGMKLO/FGMKLO002");
    }
  }, [user, core]);
  return (
    <MainPageLayout>
      <FGMKHM00101 />
      <ProductSection>
        <FGMKHM00102 product={testData} />
      </ProductSection>
      <ProductSection>
        <FGMKHM00104 subBanner={subBanner} />
      </ProductSection>
      <ProductSection>
        <FGMKHM00103 product={recommandProduct}></FGMKHM00103>
      </ProductSection>
    </MainPageLayout>
  );
}

const MainPageLayout = styled.div`
  margin-bottom: 100px;
`;
const ProductSection = styled.div`
  width: 1040px;
  margin: 0 auto;
  margin-top: 100px;
`;
export default MainPage;
