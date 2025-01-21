import React,{useEffect} from "react";
import styled from "styled-components";
import FGMKDT00403 from "../../../../../components/FG/FGMK/FGMKDT/FGMKDT004/FGMKDT00403";
import FGMKDT00401 from "../../../../../components/FG/FGMK/FGMKDT/FGMKDT004/FGMKDT00401";
import useCore from "../../../../../hooks/useCore";
import { useSelector } from "react-redux";
function ProductDetail() {
  const core = useCore();
  const user = useSelector((state) => state.userInfo?.id);
  const src =
    "https://product-image.kurly.com/hdims/resize/%5E%3E360x%3E468/cropcenter/360x468/quality/85/src/product/image/bbf4ea2d-c7e8-4b19-90cf-9021cefcee05.jpg";

  useEffect(() => {
    if (!user) {
      core.goPage("/FG/FGMK/FGMKLO/FGMKLO002");
    }
  }, []);
  return (
    <ProductDetailLayout>
      <ProductDetailbox>
        <div
          style={{
            borderRadius: "6px",
            overflow: "hidden",
            width: "430px",
            height: "550px",
          }}
        >
          <img src={src} alt="" width="100%" height="100%" />
        </div>
        <FGMKDT00403 />
      </ProductDetailbox>
      <FGMKDT00401 />
      <ProductDetailDescription>
        <GoodsWrap>
          <GoodsDesc>
            <Context>
              <Pic>
                <Image
                  src="https://img-cf.kurly.com/hdims/resize/%3E1010x/quality/90/src/shop/data/goodsview/20250110/gv00001632853_1.jpg"
                  alt=""
                />
              </Pic>
              <Words></Words>
            </Context>
            <Context>
              <Pic>
                <Image
                  src="https://img-cf.kurly.com/hdims/resize/%3E1010x/quality/90/src/shop/data/goodsview/20250110/gv10001632854_1.jpg"
                  alt=""
                />
              </Pic>
              <Words></Words>
            </Context>
            <Context>
              <Pic>
                <Image
                  src="https://img-cf.kurly.com/hdims/resize/%3E1010x/quality/90/src/shop/data/goodsview/20250110/gv00001632856_1.jpg"
                  alt=""
                />
              </Pic>
              <Words></Words>
            </Context>
            <Context>
              <Pic>
                <Image
                  src="https://img-cf.kurly.com/hdims/resize/%3E1010x/quality/90/src/shop/data/goodsview/20250110/gv10001632857_1.jpg"
                  alt=""
                />
              </Pic>
              <Words></Words>
            </Context>
            <Context>
              <Pic>
                <Image
                  src="https://img-cf.kurly.com/hdims/resize/%3E1010x/quality/90/src/shop/data/goodsview/20250110/gv00001632858_1.jpg"
                  alt=""
                />
              </Pic>
              <Words></Words>
            </Context>
            <Context>
              <Pic>
                <Image
                  src="https://img-cf.kurly.com/hdims/resize/%3E1010x/quality/90/src/shop/data/goodsview/20250110/gv30001632859_1.jpg"
                  alt=""
                />
              </Pic>
              <Words></Words>
            </Context>
            <Context>
              <Pic>
                <StyledLink href="https://www.kurly.com/shop/introduce/qualityStandard/standard/japanese_food.php">
                  <Image
                    src="https://img-cf.kurly.com/hdims/resize/%3E1010x/quality/90/src/shop/data/goodsview/20250110/gv40001632860_1.jpg"
                    alt=""
                  />
                </StyledLink>
              </Pic>
              <Words></Words>
            </Context>
            <Context>
              <Pic>
                <StyledLink href="https://www.kurly.com/shop/introduce/qualityStandard/standard/gmo_food.php">
                  <Image
                    src="https://img-cf.kurly.com/hdims/resize/%3E1010x/quality/90/src/shop/data/goodsview/20250110/gv20001632861_1.jpg"
                    alt=""
                  />
                </StyledLink>
              </Pic>
              <Words></Words>
            </Context>
          </GoodsDesc>
        </GoodsWrap>
        <Detail>
          <ProductImage
            src="https://img-cf.kurly.com/hdims/resize/%3E1010x/quality/90/src/shop/data/goodsview/20250110/gv10001632863_1.jpg"
            alt="자세히보기 이미지"
          />
          <ProductInfo>
            <InfoTitle>상품고시정보</InfoTitle>
            <InfoList>
              <InfoItem>제품명</InfoItem>
              <InfoItem>상품설명 및 상품이미지 참조</InfoItem>
            </InfoList>
          </ProductInfo>
          <WhyKurly>
            <WhyKurlyTitle>WHY KURLY</WhyKurlyTitle>
            <WhyKurlyContent>
              <WhyKurlyItem>
                <WhyKurlyItemTitle>깐깐한 상품위원회</WhyKurlyItemTitle>
                <WhyKurlyItemDescription>
                  나와 내 가족이 먹고 쓸 상품을 고르는
                  <br />
                  마음으로 매주 상품을 직접 먹어보고,
                  <br />
                  경험해보고 성분, 맛, 안정성 등 다각도의
                  <br />
                  기준을 통과한 상품만을 판매합니다.
                </WhyKurlyItemDescription>
              </WhyKurlyItem>
            </WhyKurlyContent>
          </WhyKurly>
          <CustomerService></CustomerService>
          <ExchangeRefund>
            <SectionTitle>교환 및 환불 안내</SectionTitle>
            <SectionContent>
              교환 및 환불이 필요하신 경우 [마이컬리 &lt; 주문내역]에서 직접
              반품 접수하거나 고객행복센터로 문의해 주시기 바랍니다.
            </SectionContent>
          </ExchangeRefund>
        </Detail>
      </ProductDetailDescription>
    </ProductDetailLayout>
  );
}
const ProductDetailLayout = styled.div`
  width: 1040px;
  margin: 0 auto;
  margin-bottom: 500px;
`;
const ProductDetailbox = styled.div`
  display: flex;
  margin-top: 30px;
  gap: 60px;
`;
const ProductDetailDescription = styled.div``;

const GoodsWrap = styled.div``;

const GoodsDesc = styled.div``;

const Context = styled.div``;

const Pic = styled.div``;

const Image = styled.img`
  max-width: 100%;
  height: auto;
`;

const Words = styled.p``;

const StyledLink = styled.a``;

const Detail = styled.div``;

const ProductImage = styled.img``;

const ProductInfo = styled.div``;

const InfoTitle = styled.h3``;

const InfoList = styled.ul``;

const InfoItem = styled.li``;

const WhyKurly = styled.div``;

const WhyKurlyTitle = styled.div``;

const WhyKurlyContent = styled.div``;

const WhyKurlyItem = styled.dl``;

const WhyKurlyItemTitle = styled.dt``;

const WhyKurlyItemDescription = styled.dd``;

const CustomerService = styled.div``;

const ExchangeRefund = styled.div``;

const SectionTitle = styled.strong``;

const SectionContent = styled.p``;

export default ProductDetail;
