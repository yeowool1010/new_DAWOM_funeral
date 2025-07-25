'use client';

import Image from 'next/image';
import React, { useState, useEffect } from 'react';

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [showFloatingWidget, setShowFloatingWidget] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const [showPhoneBox, setShowPhoneBox] = useState(false);
  const [showKakaoBox, setShowKakaoBox] = useState(false);
  const [galleryTab, setGalleryTab] = useState(0);
  const [galleryImages, setGalleryImages] = useState([
    [
      '/img/main/gallery/day1_1.jpg',
      '/img/main/gallery/day1_2.jpg',
      '/img/main/gallery/day1_3.jpg',
    ],
    [
      '/img/main/gallery/day2_1.jpg',
      '/img/main/gallery/day2_2.jpg',
      '/img/main/gallery/day2_3.jpg',
    ],
    [
      '/img/main/gallery/day3_1.jpg',
      '/img/main/gallery/day3_2.jpg',
      '/img/main/gallery/day3_3.jpg',
    ],
  ]);

  // 협력업체(파트너) 캐러셀 상태/핸들러/데이터
  const [partnerIndex, setPartnerIndex] = useState(0);
  const visiblePartnerCount = 4;
  // partnerLogos 20개 예시로 확장
  const partnerLogos = [
    {name:'연세체육회', img:'/img/companyInfo/intro01_img1.jpg'},
    {name:'대한아이스하키협회', img:'/img/companyInfo/intro01_img2.jpg'},
    {name:'JESTERS', img:'/img/companyInfo/intro01_img3.jpg'},
    {name:'보성자동차정비', img:'/img/companyInfo/intro02_bg.jpg'},
    {name:'파트너5', img:'/img/main/review_img1.jpg'},
    {name:'파트너6', img:'/img/main/review_img2.jpg'},
    {name:'파트너7', img:'/img/main/review_img3.jpg'},
    {name:'파트너8', img:'/img/main/brand01_bg.jpg'},
    {name:'파트너9', img:'/img/main/brand02_bg.jpg'},
    {name:'파트너10', img:'/img/main/ms_pdt_bg.jpg'},
    {name:'파트너11', img:'/img/main/review_img1.jpg'},
    {name:'파트너12', img:'/img/main/review_img2.jpg'},
    {name:'파트너13', img:'/img/main/review_img3.jpg'},
    {name:'파트너14', img:'/img/main/brand01_bg.jpg'},
    {name:'파트너15', img:'/img/main/brand02_bg.jpg'},
    {name:'파트너16', img:'/img/main/ms_pdt_bg.jpg'},
    {name:'파트너17', img:'/img/main/review_img1.jpg'},
    {name:'파트너18', img:'/img/main/review_img2.jpg'},
    {name:'파트너19', img:'/img/main/review_img3.jpg'},
    {name:'파트너20', img:'/img/main/brand01_bg.jpg'},
  ];
  // 무한루프 캐러셀을 위해 앞뒤로 복제
  const extendedLogos = [
    ...partnerLogos.slice(-visiblePartnerCount),
    ...partnerLogos,
    ...partnerLogos.slice(0, visiblePartnerCount),
  ];
  const [carouselIndex, setCarouselIndex] = useState(visiblePartnerCount);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // 자동 슬라이드
  useEffect(() => {
    const timer = setInterval(() => {
      handleNextPartner();
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const handlePrevPartner = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCarouselIndex(idx => idx - 1);
  };
  const handleNextPartner = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCarouselIndex(idx => idx + 1);
  };
  // 트랜지션 끝나면 무한루프 위치 조정
  const handleTransitionEnd = () => {
    setIsTransitioning(false);
    if (carouselIndex === 0) {
      setCarouselIndex(partnerLogos.length);
    } else if (carouselIndex === partnerLogos.length + visiblePartnerCount) {
      setCarouselIndex(visiblePartnerCount);
    }
  };

  // 클라이언트 사이드 확인
  useEffect(() => {
    setIsClient(true);
  }, []);

  // 자동 슬라이더
  useEffect(() => {
    if (!isClient) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 3);
    }, 5000);
    return () => clearInterval(timer);
  }, [isClient]);

  // 스크롤 인터랙션
  useEffect(() => {
    if (!isClient) return;
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      setIsVisible(scrollY > windowHeight * 0.3);
      setShowFloatingWidget(scrollY > 100); // 스크롤 100px 후 위젯 표시
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isClient]);

  const slides = [
    {
      title: '완전후불식 장례토탈서비스',
      subtitle: '합리적인 가격과 고품질 상품으로 고객 감동의 서비스를 추구합니다.',
      image: '/img/main/visual01.jpg'
    },
    {
      title: '전국 모든지역 이용 가능',
      subtitle: '국가공인1급 장례지도사들로 전국네트워크망을 구축하여 24시간 운영하고 있습니다.',
      image: '/img/main/brand01_bg.jpg'
    },
    {
      title: '서비스 완료 후 정산',
      subtitle: '회원 가입비나 월 납입금에 대한 부담이 전혀 없는 완전후불제를 실시하고 있습니다.',
      image: '/img/main/brand02_bg.jpg'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 w-full">
      {/* 메인 비주얼/배너 - 전체 화면 슬라이더 */}
      <section className="relative w-full h-screen flex flex-col items-center justify-center text-center overflow-hidden">
        {/* 슬라이더 배경 */}
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Image 
              src={slide.image} 
              alt={`슬라이드 ${index + 1}`} 
              fill
              className="object-cover blur-sm scale-105"
              priority={index === 0}
            />
            <div className="absolute inset-0 bg-black bg-opacity-60"></div>
          </div>
        ))}
        {/* 슬라이더 컨텐츠 */}
        <div className="relative z-10 flex flex-col items-center justify-center w-full h-full">
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 text-white drop-shadow-lg tracking-widest animate-fadeIn">
            초인소상조
          </h1>
          <p className="text-2xl sm:text-3xl md:text-4xl mb-10 text-white font-semibold animate-fadeIn animation-delay-200 drop-shadow">
            전국 모든지역 이용이 가능합니다.
          </p>
          {/* 슬라이더 인디케이터 */}
          <div className="flex space-x-3 mb-8">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-6 h-2 rounded-full transition-all duration-300 focus:outline-none border border-white ${
                  index === currentSlide ? 'bg-white' : 'bg-white bg-opacity-30 hover:bg-opacity-60'
                }`}
                aria-label={`슬라이드 ${index + 1}로 이동`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* [NEW] 완전후불제 초인스상조 4박스 섹션 */}
      <section className="w-full max-w-6xl mx-auto flex flex-col items-center py-12 px-4">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-center mb-10">
          완전후불제 <span className="text-[#17427b]">초인스상조</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 w-full">
          {/* 1 */}
          <div className="flex flex-col items-center text-center">
            <img src="/img/main/company_ico1.png" alt="합리적인 가격" className="w-40 h-32 object-cover mb-4 rounded" />
            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#17427b] text-white font-bold text-lg mb-2">1</div>
            <div className="font-bold text-[#17427b] text-lg mb-1">합리적인 가격으로 모십니다</div>
            <div className="text-gray-600 text-sm">합리적인 가격과 고품질 생모로 고객감동의 서비스를 추구합니다.</div>
          </div>
          {/* 2 */}
          <div className="flex flex-col items-center text-center">
            <img src="/img/main/company_ico2.png" alt="전국 모든지역 이용" className="w-40 h-32 object-cover mb-4 rounded" />
            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#17427b] text-white font-bold text-lg mb-2">2</div>
            <div className="font-bold text-[#17427b] text-lg mb-1">전국 모든지역 이용이 가능합니다.</div>
            <div className="text-gray-600 text-sm">국가공인과 경제지도사들을 전국네트워크망을 구축하여 24시간 운영하고 있습니다.</div>
          </div>
          {/* 3 */}
          <div className="flex flex-col items-center text-center">
            <img src="/img/main/ms_pdt_ico.png" alt="서비스 완료 후 정산" className="w-40 h-32 object-cover mb-4 rounded" />
            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#17427b] text-white font-bold text-lg mb-2">3</div>
            <div className="font-bold text-[#17427b] text-lg mb-1">서비스 완료 후 정산합니다</div>
            <div className="text-gray-600 text-sm">회원 가입비나 월 납입금에 대한 부담이 전혀 없는 완전후불제를 실시하고 있습니다.</div>
          </div>
          {/* 4 */}
          <div className="flex flex-col items-center text-center">
            <img src="/img/main/brand02_txt.png" alt="신뢰성 자랑" className="w-40 h-32 object-cover mb-4 rounded" />
            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#17427b] text-white font-bold text-lg mb-2">4</div>
            <div className="font-bold text-[#17427b] text-lg mb-1">신뢰성을 자랑합니다</div>
            <div className="text-gray-600 text-sm">기업, 단체들과 협약하고 있으며, 믿고 맡길 수 있는 신뢰의 서비스를 제공합니다.</div>
          </div>
        </div>
      </section>

      {/* [NEW] 초인스상조의 완전후불제 맞춤상품 섹션 */}
      <section className="relative w-full py-16 flex flex-col items-center justify-center" style={{minHeight:'340px'}}>
        {/* 배경 이미지 + 오버레이 */}
        <div className="absolute inset-0 w-full h-full">
          <img src="/img/main/use_bg.jpg" alt="배경" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-[#17427b]/70" />
        </div>
        <div className="relative z-10 max-w-7xl w-full mx-auto flex flex-col items-center">
          <h2 className="text-xl sm:text-2xl font-extrabold text-center text-white mb-2">초인스상조의 완전후불제 맞춤상품</h2>
          <p className="text-white text-center mb-10 text-sm sm:text-base">초인스상조는 기업의 수익만을 생각하지 않고 합리적 상품과 고품격 서비스를 제공합니다.</p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 w-full px-4">
            {/* 상품 카드 1 */}
            <div className="flex flex-col items-center">
              <div className="w-48 h-48 bg-white rounded-full flex flex-col items-center justify-center shadow-lg mb-4">
                <div className="text-[#17427b] font-bold text-lg mb-1">보급형</div>
                <div className="text-3xl font-extrabold text-[#17427b]">230 <span className="text-xl font-bold">만원</span></div>
                <div className="text-gray-500 text-xs mt-2">해당 메뉴에 대한 간략한 설명이 들어갑니다.</div>
                <a href="#" className="mt-4 text-xs text-[#17427b] font-bold flex items-center gap-1 hover:underline">MORE VIEW <span className="inline-block">→</span></a>
              </div>
            </div>
            {/* 상품 카드 2 */}
            <div className="flex flex-col items-center">
              <div className="w-48 h-48 bg-white rounded-full flex flex-col items-center justify-center shadow-lg mb-4">
                <div className="text-[#17427b] font-bold text-lg mb-1">일반형</div>
                <div className="text-3xl font-extrabold text-[#17427b]">330 <span className="text-xl font-bold">만원</span></div>
                <div className="text-gray-500 text-xs mt-2">해당 메뉴에 대한 간략한 설명이 들어갑니다.</div>
                <a href="#" className="mt-4 text-xs text-[#17427b] font-bold flex items-center gap-1 hover:underline">MORE VIEW <span className="inline-block">→</span></a>
              </div>
            </div>
            {/* 상품 카드 3 */}
            <div className="flex flex-col items-center">
              <div className="w-48 h-48 bg-white rounded-full flex flex-col items-center justify-center shadow-lg mb-4">
                <div className="text-[#17427b] font-bold text-lg mb-1">고급형</div>
                <div className="text-3xl font-extrabold text-[#17427b]">430 <span className="text-xl font-bold">만원</span></div>
                <div className="text-gray-500 text-xs mt-2">해당 메뉴에 대한 간략한 설명이 들어갑니다.</div>
                <a href="#" className="mt-4 text-xs text-[#17427b] font-bold flex items-center gap-1 hover:underline">MORE VIEW <span className="inline-block">→</span></a>
              </div>
            </div>
            {/* 상품 카드 4 */}
            <div className="flex flex-col items-center">
              <div className="w-48 h-48 bg-white rounded-full flex flex-col items-center justify-center shadow-lg mb-4">
                <div className="text-[#17427b] font-bold text-lg mb-1">회사장</div>
                <div className="text-2xl font-extrabold text-[#17427b]">상담 후 결정</div>
                <div className="text-gray-500 text-xs mt-2">해당 메뉴에 대한 간략한 설명이 들어갑니다.</div>
                <a href="#" className="mt-4 text-xs text-[#17427b] font-bold flex items-center gap-1 hover:underline">MORE VIEW <span className="inline-block">→</span></a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 장례진행절차 - 순차 애니메이션 */}
      <section className="w-full bg-white py-8 sm:py-12">
        <h2 className="text-xl sm:text-2xl font-bold text-center mb-6 sm:mb-8 animate-fadeIn">
          장례진행절차
        </h2>
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 max-w-6xl mx-auto px-4">
          {[
            '사전상담', '고인 임종', '초인스상조 전화', '고인 이송', '빈소 준비', '인력 배치', '조문 준비', '입관 준비', '입관', '입관 의식', '종교 의식', '종교별 발인의식', '발인', '장지 이동', '하관'
          ].map((step, idx) => (
            <div 
              key={idx} 
              className="flex flex-col items-center w-1/4 sm:w-1/6 md:w-auto min-w-[70px] animate-fadeIn"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-blue-100 rounded-full font-bold text-blue-700 mb-1 sm:mb-2 hover:bg-blue-200 hover:scale-110 transition-all duration-300">
                {idx+1}
              </div>
              <span className="text-xs sm:text-sm text-gray-700 text-center w-full sm:w-20 hover:text-blue-600 transition-colors duration-300">
                {step}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* 장례진행절차 갤러리 & 전국의 장례시설 */}
      <section className="w-full max-w-7xl mx-auto px-4 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* 장례진행 갤러리 */}
          <div className="bg-white rounded-lg shadow p-6 flex flex-col">
            <h3 className="text-lg font-bold mb-4"><span className="text-[#22201b]">초인스상조</span> <span className="text-[#17427b]">장례진행 갤러리</span></h3>
            {/* 탭 */}
            <div className="flex border-b mb-4">
              {['1일차','2일차','3일차'].map((tab, idx) => (
                <button
                  key={tab}
                  className={`flex-1 py-2 text-sm font-semibold border-b-2 transition-colors duration-150 ${galleryTab===idx ? 'border-[#17427b] text-[#17427b] bg-gray-50' : 'border-transparent text-gray-700 bg-white hover:bg-gray-50'}`}
                  onClick={()=>setGalleryTab(idx)}
                >
                  {tab}
                </button>
              ))}
            </div>
            {/* 이미지 그리드 */}
            <div className="grid grid-cols-3 gap-2">
              {galleryImages[galleryTab].map((img, i) => (
                <div key={i} className="aspect-[4/3] bg-gray-100 rounded overflow-hidden flex items-center justify-center">
                  <img src={img} alt={`장례진행${galleryTab+1}일차${i+1}`} className="object-cover w-full h-full" />
                </div>
              ))}
            </div>
          </div>
          {/* 전국의 장례시설 */}
          <div className="bg-[#f5f8fa] rounded-lg shadow p-6 flex flex-col items-center">
            <h3 className="text-lg font-bold mb-4">전국의 <span className="text-[#17427b]">장례시설</span></h3>
            <div className="flex flex-col md:flex-row items-center w-full">
              {/* 지도 이미지 */}
              <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-6">
                <img src="/img/main/korea_map_sample.png" alt="전국지도" className="w-48 h-56 object-contain" />
              </div>
              {/* 설명+범례 */}
              <div className="flex-1 flex flex-col justify-center">
                <p className="text-gray-700 text-sm mb-4">장례시설 검색으로 전국의 장례시설을 초인스상조가 안내해 드립니다.</p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2"><span className="inline-block w-4 h-4 rounded-full bg-[#17427b]"></span> 장례식장</li>
                  <li className="flex items-center gap-2"><span className="inline-block w-4 h-4 rounded-full bg-[#2e8bc0]"></span> 공원묘지</li>
                  <li className="flex items-center gap-2"><span className="inline-block w-4 h-4 rounded-full bg-[#fbb034]"></span> 화장장</li>
                  <li className="flex items-center gap-2"><span className="inline-block w-4 h-4 rounded-full bg-[#e94e77]"></span> 납골묘</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* 플로팅 위젯들 - 클라이언트 사이드에서만 렌더링 */}
      {isClient && (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3 items-end">
          {/* PC/태블릿: 기존 박스 */}
          <div className="hidden sm:flex flex-col gap-3">
            {/* 긴급전화 위젯 */}
            <div className={`transition-all duration-500 ease-in-out ${
              showFloatingWidget ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              <div className="bg-blue-600 text-white rounded-lg shadow-2xl p-4 w-64 transform hover:scale-105 transition-transform duration-200">
                {/* 전화 아이콘 */}
                <div className="flex items-center justify-center mb-3">
                  <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                </div>
                <div className="text-center mb-3">
                  <p className="text-sm mb-1">사전상담 및 24시간 긴급전화</p>
                  <p className="text-2xl font-bold">1588-1029</p>
                </div>
                <button className="w-full bg-white text-blue-600 py-2 px-4 rounded font-semibold hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center">
                  문의하기
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
            {/* 카카오톡 위젯 */}
            <div className={`transition-all duration-500 ease-in-out delay-200 ${
              showFloatingWidget ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              <div className="bg-yellow-400 text-yellow-800 rounded-lg shadow-2xl p-4 w-64 transform hover:scale-105 transition-transform duration-200 relative">
                <div className="flex items-center justify-center mb-3">
                  <div className="w-12 h-12 bg-yellow-800 rounded-full flex items-center justify-center">
                    <div className="text-white text-xs font-bold">TALK</div>
                  </div>
                </div>
                <div className="text-center mb-3">
                  <p className="text-lg font-semibold">카카오톡문의</p>
                </div>
                <button className="w-full bg-yellow-800 text-white py-2 px-4 rounded font-semibold hover:bg-yellow-900 transition-colors duration-200 flex items-center justify-center">
                  문의하기
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* 모바일: 작은 아이콘 + 토글 */}
          <div className="sm:hidden flex flex-col gap-3 items-end">
            {/* 전화 아이콘 */}
            <div>
              {showPhoneBox ? (
                <div className="bg-blue-600 text-white rounded-lg shadow-2xl p-4 w-64 mb-2 animate-fadeIn">
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <button onClick={() => setShowPhoneBox(false)} className="text-white text-xl ml-2">×</button>
                  </div>
                  <div className="text-center mb-3">
                    <p className="text-sm mb-1">사전상담 및 24시간 긴급전화</p>
                    <p className="text-2xl font-bold">1588-1029</p>
                  </div>
                  <button className="w-full bg-white text-blue-600 py-2 px-4 rounded font-semibold hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center">
                    문의하기
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              ) : (
                <button
                  className="w-14 h-14 bg-blue-600 rounded-full shadow-2xl flex items-center justify-center mb-2 focus:outline-none"
                  onClick={() => { setShowPhoneBox(true); setShowKakaoBox(false); }}
                  aria-label="전화상담 열기"
                >
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </button>
              )}
            </div>
            {/* 카카오톡 아이콘 */}
            <div>
              {showKakaoBox ? (
                <div className="bg-yellow-400 text-yellow-800 rounded-lg shadow-2xl p-4 w-64 mb-2 animate-fadeIn">
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-10 h-10 bg-yellow-800 rounded-full flex items-center justify-center">
                      <div className="text-white text-xs font-bold">TALK</div>
                    </div>
                    <button onClick={() => setShowKakaoBox(false)} className="text-yellow-800 text-xl ml-2">×</button>
                  </div>
                  <div className="text-center mb-3">
                    <p className="text-lg font-semibold">카카오톡문의</p>
                  </div>
                  <button className="w-full bg-yellow-800 text-white py-2 px-4 rounded font-semibold hover:bg-yellow-900 transition-colors duration-200 flex items-center justify-center">
                    문의하기
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              ) : (
                <button
                  className="w-14 h-14 bg-yellow-400 rounded-full shadow-2xl flex items-center justify-center focus:outline-none"
                  onClick={() => { setShowKakaoBox(true); setShowPhoneBox(false); }}
                  aria-label="카카오톡 문의 열기"
                >
                  <div className="w-7 h-7 bg-yellow-800 rounded-full flex items-center justify-center">
                    <div className="text-white text-xs font-bold">TALK</div>
                  </div>
                </button>
              )}
            </div>
          </div>
        </div>
      )}



      {/* [NEW] 장의정보 안내 섹션 */}
      <section className="relative w-full py-16 flex flex-col items-center justify-center" style={{minHeight:'280px'}}>
        {/* 배경 이미지+블루 오버레이 */}
        <div className="absolute inset-0 w-full h-full">
          <img src="/img/main/use_bg.jpg" alt="배경" className="w-full h-full object-cover blur-sm scale-105" />
          <div className="absolute inset-0 bg-[#17427b]/80" />
        </div>
        <div className="relative z-10 max-w-5xl w-full mx-auto flex flex-col items-center">
          <h2 className="text-xl sm:text-2xl font-extrabold text-center text-white mb-10">
            초인스상조가 각종 <span className="text-[#ffe066]">장의정보에 대해</span> 알려드립니다.
          </h2>
          <div className="w-full flex flex-col md:flex-row items-center justify-center gap-8">
            {/* 장례절차 */}
            <div className="flex flex-col items-center text-white flex-1 min-w-[120px]">
              <div className="mb-4">
                <img src="/img/svg/procedure.svg" alt="장례절차" className="w-14 h-14" />
              </div>
              <div className="font-bold text-lg">장례절차</div>
            </div>
            {/* 종교별 장례절차 */}
            <div className="flex flex-col items-center text-white flex-1 min-w-[120px]">
              <div className="mb-4">
                <img src="/img/svg/religion.svg" alt="종교별 장례절차" className="w-14 h-14" />
              </div>
              <div className="font-bold text-lg">종교별 장례절차</div>
            </div>
            {/* 장례행정 */}
            <div className="flex flex-col items-center text-white flex-1 min-w-[120px]">
              <div className="mb-4">
                <img src="/img/svg/admin.svg" alt="장례행정" className="w-14 h-14" />
              </div>
              <div className="font-bold text-lg">장례행정</div>
            </div>
          </div>
        </div>
      </section>

      {/* [NEW] 정보 안내 (FAQ, 공지, 문의, 상담전화) */}
      <section className="w-full max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {/* FAQ */}
          <div className="border rounded bg-white flex flex-col h-full min-h-[350px]">
            <img src="/img/main/review_img1.jpg" alt="FAQ" className="w-full h-32 object-cover rounded-t" />
            <div className="p-5 flex flex-col flex-1">
              <div className="font-bold text-lg mb-2">FAQ</div>
              <div className="text-gray-600 text-sm mb-6">초인스상조에 관해 자주 묻는 질문과 답변을 보실 수 있습니다.</div>
              <a href="/customer/faq" className="mt-auto text-xs font-bold text-[#17427b] flex items-center gap-1 hover:underline">MORE VIEW <span className="inline-block w-4 h-4"><svg fill="none" stroke="#17427b" strokeWidth="2" viewBox="0 0 24 24"><path d="M5 12h14M13 6l6 6-6 6"/></svg></span></a>
            </div>
          </div>
          {/* 공지사항 */}
          <div className="border rounded bg-white flex flex-col h-full min-h-[350px]">
            <img src="/img/main/review_img2.jpg" alt="공지사항" className="w-full h-32 object-cover rounded-t" />
            <div className="p-5 flex flex-col flex-1">
              <div className="font-bold text-lg mb-2">공지사항</div>
              <div className="text-gray-600 text-sm mb-6">초인스상조의 최근 소식과 정보들을 보실 수 있습니다.</div>
              <a href="/customer/notice" className="mt-auto text-xs font-bold text-[#17427b] flex items-center gap-1 hover:underline">MORE VIEW <span className="inline-block w-4 h-4"><svg fill="none" stroke="#17427b" strokeWidth="2" viewBox="0 0 24 24"><path d="M5 12h14M13 6l6 6-6 6"/></svg></span></a>
            </div>
          </div>
          {/* 문의사항 */}
          <div className="border rounded bg-white flex flex-col h-full min-h-[350px]">
            <img src="/img/main/review_img3.jpg" alt="문의사항" className="w-full h-32 object-cover rounded-t" />
            <div className="p-5 flex flex-col flex-1">
              <div className="font-bold text-lg mb-2">문의사항</div>
              <div className="text-gray-600 text-sm mb-6">초인스상조에게 궁금한 사항을 문의해 주세요.</div>
              <a href="/customer/inquiry" className="mt-auto text-xs font-bold text-[#17427b] flex items-center gap-1 hover:underline">MORE VIEW <span className="inline-block w-4 h-4"><svg fill="none" stroke="#17427b" strokeWidth="2" viewBox="0 0 24 24"><path d="M5 12h14M13 6l6 6-6 6"/></svg></span></a>
            </div>
          </div>
          {/* 24시간 상담 */}
          <div className="rounded bg-[#17427b] flex flex-col h-full justify-between p-6 text-white min-h-[350px]">
            <div>
              <div className="font-bold text-lg mb-2">사전 상담 및<br/>24시간 긴급전화</div>
              <div className="text-sm mb-8">고객센터는 언제나 연락이 열려있습니다.</div>
            </div>
            <div className="mt-auto">
              <div className="font-bold text-2xl mb-1">Tel. 1588-1029</div>
            </div>
          </div>
        </div>
      </section>

      {/* [NEW] 협력업체(파트너) 캐러셀 섹션 */}
      <section className="relative w-full py-16 bg-[#eaf3fb] flex flex-col items-center justify-center">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-center mb-2">CHOINS PARTNERS</h2>
        <p className="text-gray-600 text-center mb-8">초인스상조와 함께하는 협력업체 입니다.</p>
        <div className="relative w-full max-w-4xl mx-auto flex items-center">
          {/* 왼쪽 화살표 (박스 안쪽) */}
          <button onClick={handlePrevPartner} className="absolute left-4 z-10 w-10 h-10 rounded-full bg-white shadow flex items-center justify-center text-2xl text-gray-500 hover:bg-gray-100 transition-all duration-150 top-1/2 -translate-y-1/2">
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M15 19l-7-7 7-7"/></svg>
          </button>
          {/* 캐러셀 */}
          <div className="w-full bg-white rounded shadow overflow-hidden py-2">
            <div className={`flex ${isTransitioning ? 'transition-transform duration-500' : ''}`} style={{transform:`translateX(-${carouselIndex * (100/visiblePartnerCount)}%)`}} onTransitionEnd={handleTransitionEnd}>
              {extendedLogos.map((logo, idx) => (
                <div key={idx} className="flex-shrink-0 w-1/4 px-4 flex items-center justify-center h-24">
                  <img src={logo.img} alt={logo.name} className="max-h-16 object-contain" />
                </div>
              ))}
            </div>
          </div>
          {/* 오른쪽 화살표 (박스 안쪽) */}
          <button onClick={handleNextPartner} className="absolute right-4 z-10 w-10 h-10 rounded-full bg-white shadow flex items-center justify-center text-2xl text-gray-500 hover:bg-gray-100 transition-all duration-150 top-1/2 -translate-y-1/2">
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7"/></svg>
          </button>
        </div>
      </section>
    </div>
  );
}
