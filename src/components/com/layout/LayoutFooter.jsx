import React from "react";
import styled from "styled-components";
import CustomFooterButton from "../custom/CustomFooterButton";
function LayoutFooter() {
  return (
    <FooterContainer>
      <FooterWrapper>
        <LeftContentWrapper>
          <h3 style={{ fontSize: "1.4rem" }}>고객행복센터</h3>
          <strong style={{ fontSize: "2rem", fontWeight: "bold" }}>
            1644-1107
            <p
              style={{
                display: "inline-block",
                fontSize: "1.1rem",
                marginLeft: "10px",
              }}
            >
              월~토요일 오전 7시~ 오후 6시
            </p>
          </strong>
          <InqueryContainer>
            <InqueryWrapper>
              <CustomFooterButton btnText={"카카오톡 문의"}></CustomFooterButton>
              <InqeuryTextBox>
                월~토요일
                <svg
                  style={{ margin: "0 7px" }}
                  width="1"
                  height="10"
                  viewBox="0 0 1 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <line
                    x1="0.5"
                    y1="2.18557e-08"
                    x2="0.5"
                    y2="10"
                    stroke="#ccc"
                  ></line>
                </svg>
                오전 7시 - 오후 6시
                <br />
                일/공휴일
                <svg
                  style={{ margin: "0 7px" }}
                  width="1"
                  height="10"
                  viewBox="0 0 1 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <line
                    x1="0.5"
                    y1="2.18557e-08"
                    x2="0.5"
                    y2="10"
                    stroke="#ccc"
                  ></line>
                </svg>
                오전 7시 - 오후 1시
              </InqeuryTextBox>
            </InqueryWrapper>
            <InqueryWrapper>
              <CustomFooterButton btnText={"1:1문의"}></CustomFooterButton>
              <InqeuryTextBox>
                365일
                <br />
                고객센터 운영시간에 순차적으로 답변드리겠습니다.
              </InqeuryTextBox>
            </InqueryWrapper>
            <InqueryWrapper>
              <CustomFooterButton btnText={"대량주문 문의"}></CustomFooterButton>
              <InqeuryTextBox>
                월~금요일
                <svg
                  style={{ margin: "0 7px" }}
                  width="1"
                  height="10"
                  viewBox="0 0 1 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <line
                    x1="0.5"
                    y1="2.18557e-08"
                    x2="0.5"
                    y2="10"
                    stroke="#ccc"
                  ></line>
                </svg>
                오전 9시 - 오후 6시
                <br />
                점심시간
                <svg
                  style={{ margin: "0 7px" }}
                  width="1"
                  height="10"
                  viewBox="0 0 1 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <line
                    x1="0.5"
                    y1="2.18557e-08"
                    x2="0.5"
                    y2="10"
                    stroke="#ccc"
                  ></line>
                </svg>
                낮 12시 - 오후 1시
              </InqeuryTextBox>
            </InqueryWrapper>
            <div style={{ color: "#999", marginTop: "20px" }}>
              비회원 문의 :
              <a href="mailto:help@kurlycorp.com" style={{ color: "#999" }}>
                {" "}
                help@kurlycorp.com
              </a>
            </div>
          </InqueryContainer>
        </LeftContentWrapper>
        <RightContentWrapper>
          <RightContentUl>
            <li style={{fontSize:"0.7rem", width:"50px"}}>컬리소개</li>
            <li style={{fontSize:"0.7rem", width:"70px"}}>컬리소개영상</li>
            <li style={{fontSize:"0.7rem", width:"50px"}}>투자정보</li>
            <li style={{fontSize:"0.7rem", width:"50px"}}>인재채용</li>
            <li style={{fontSize:"0.7rem", width:"50px"}}>이용약관</li>
            <li style={{fontSize:"0.7rem", width:"90px"}}>개인정보처리방침</li>
            <li style={{fontSize:"0.7rem", width:"50px"}}>이용안내</li>
          </RightContentUl>
          <CompanyInfo>
            법인명 (상호) : 주식회사 컬리
            <svg
              style={{ margin: "0 7px" }}
              width="1"
              height="10"
              viewBox="0 0 1 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line
                x1="0.5"
                y1="2.18557e-08"
                x2="0.5"
                y2="10"
                stroke="#ccc"
              ></line>
            </svg>
            사업자 등록번호 : 261-81-23567
            <a>사업자정보 확인</a>
            <br />
            통신판매업:제 2018-서울강남-01646 호
            <br />
            주소 : 서울특별시 강남구 테헤란로 133, 18총(역삼동)
            <svg
              style={{ margin: "0 7px" }}
              width="1"
              height="10"
              viewBox="0 0 1 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line
                x1="0.5"
                y1="2.18557e-08"
                x2="0.5"
                y2="10"
                stroke="#ccc"
              ></line>
            </svg>
            대표이사 : 김슬아
            <br />
            채용문의 :<a href="">recruit@kurlycorp.com</a>
            팩스 : 070 - 7500 - 6098
          </CompanyInfo>
          <SnsIconWrapper>
            <a href="a">
              <SnsIcon src="https://res.kurly.com/pc/ico/1810/ico_instagram.png" />
            </a>
            <a href="a">
              <SnsIcon src="https://res.kurly.com/pc/ico/1810/ico_fb.png" />
            </a>
            <a href="a">
              <SnsIcon src="https://res.kurly.com/pc/ico/1810/ico_blog.png" />
            </a>
            <a href="a">
              <SnsIcon src="https://res.kurly.com/pc/ico/1810/ico_naverpost.png" />
            </a>
            <a href="a">
              <SnsIcon src="https://res.kurly.com/pc/ico/1810/ico_youtube.png" />
            </a>
          </SnsIconWrapper>
        </RightContentWrapper>
      </FooterWrapper>
      <CertificationWrapper>
        <Certification>
          <CertImg src="https://res.kurly.com/pc/ico/2208/logo_isms.svg"></CertImg>
          <CertDescription>
            [인증범위] 컬리 쇼핑몰 서비스 개발·운영
            <br />
            (심사받지 않은 물리적 인프라 제외)
            <br />
            [유효기간] 2022.01.19 ~ 2025.01.18
          </CertDescription>
        </Certification>
        <Certification>
          <CertImg src="https://www.eprivacy.or.kr/images/mng/sub/mark1_eprivacy_plus.png"></CertImg>
          <CertDescription>
            개인정보보호 우수 웹사이트 ·
            <br />
            개인정보처리시스템 인증 (ePRIVACY PLUS)
          </CertDescription>
        </Certification>
        <Certification>
          <CertImg
            src="https://res.kurly.com/pc/ico/2208/logo_tosspayments.svg"
            style={{ width: "102px", height: "32px" }}
          ></CertImg>
          <CertDescription>
            토스페이먼츠 구매안전(에스크로)
            <br />
            서비스를 이용하실 수 있습니다.
          </CertDescription>
        </Certification>
        <Certification>
          <CertImg src="https://res.kurly.com/pc/ico/2208/logo_wooriBank.svg"></CertImg>
          <CertDescription>
            고객님이 현금으로 결제한 금액에 대해 우리은행과
            <br />
            채무지급보증 계약을 체결하여 안전거래를 보장하고
            <br />
            있습니다.
          </CertDescription>
        </Certification>
      </CertificationWrapper>
      <LicenseWrapper>
        <div style={{ color: "#999", fontSize: "0.7rem" }}>
          컬리에서 판매되는 상품 중에는 컬리에 입점한 개별 판매자가 판매하는
          마켓플레이스(오픈마켓) 상품이 포함되어 있습니다.
          <br />
          마켓플레이스(오픈마켓) 상품의 경우 컬리는 통신판매중개자로서
          통신판매의 당사자가 아닙니다. 컬리는 해당 상품의 주문, 품질, 교환/환불
          등 의무와 책임을 부담하지 않습니다.
        </div>
        <div style={{ marginTop: "10px", color: "#999", fontSize: "0.7rem" }}>
          © KURLY CORP. ALL RIGHTS RESERVED
        </div>
      </LicenseWrapper>
    </FooterContainer>
  );
}

const FooterContainer = styled.div`
  width: 1040px;
  margin: 0 auto;
  padding-top: 20px;
  border-top: 1px solid #f7f7f7;
`;

const FooterWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const LeftContentWrapper = styled.div``;

const RightContentWrapper = styled.div``;

const InqueryContainer = styled.div``;
const InqueryWrapper = styled.div`
  margin-top: 15px;
  display: flex;
  align-items: center;
  gap: 15px;
`;

const InqeuryTextBox = styled.div`
  color: #999;
`;

const RightContentUl = styled.ul`
  padding-left: 0;
  list-style: none;
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 15px;
`;

const CompanyInfo = styled.div`
  margin-top: 30px;
  color: #999;
  font-size: 0.9rem;
`;
const SnsIconWrapper = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  margin-top: 50px;
`;
const SnsIcon = styled.img`
  width: 30px;
  height: 30px;
`;

const CertificationWrapper = styled.div`
  margin-top: 30px;
  padding-top: 30px;
  display: flex;
  justify-content: space-between;
  border-top: 1px solid #e2e2e2;
`;
const Certification = styled.a`
  display: flex;
  gap: 10px;
`;
const CertImg = styled.img`
  width: 34px;
  height: 34px;
`;
const CertDescription = styled.div`
  font-size: 0.8rem;
  color: #999;
`;

const LicenseWrapper = styled.div`
  margin-top: 40px;
  background-color: #f7f7f7;
  text-align: center;
  padding-top: 20px;
  padding-bottom: 30px;
`;
export default LayoutFooter;
