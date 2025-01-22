import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import FGMKHM00101 from "../../../../../components/FG/FGMK/FGMKHM/FGMKHM001/FGMKHM00101";
import FGMKHM00102 from "../../../../../components/FG/FGMK/FGMKHM/FGMKHM001/FGMKHM00102";
import FGMKHM00104 from "../../../../../components/FG/FGMK/FGMKHM/FGMKHM001/FGMKHM00104";
import FGMKHM00103 from "../../../../../components/FG/FGMK/FGMKHM/FGMKHM001/FGMKHM00103";
import useCore from "../../../../../hooks/useCore";
import ApiUtils from "../../../../../utils/ApiUtils";
function MainPage() {
  const [mainPageInfo, setMainPage] = useState(null);
  const core = useCore();
  const user = useSelector((state) => state.userInfo?.id);
 
  const fetchMainPageInfo = async () => {
    const res = await ApiUtils.sendGet("/mainPageInfo");
    if(res)
      setMainPage(res.mainPageInfo);
  };

  useEffect(() => {
    if (!user) {
      core.goPage("/FG/FGMK/FGMKLO/FGMKLO002");
    }
  }, [user, core]);

  useEffect(() => {
    fetchMainPageInfo();
  }, [user]);
  return (
    <MainPageLayout>
      <FGMKHM00101 product={mainPageInfo && mainPageInfo.mainBanners} />
      <ProductSection>
        <FGMKHM00102 product={mainPageInfo && mainPageInfo.productCarousel.sulBest} />
      </ProductSection>
      <ProductSection>
        <FGMKHM00104 subBanner={mainPageInfo && mainPageInfo.subBanner.kurlyBanner} />
      </ProductSection>
      <ProductSection>
        <FGMKHM00103 product={mainPageInfo && mainPageInfo.recommandCarousel.presentSale}></FGMKHM00103>
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
