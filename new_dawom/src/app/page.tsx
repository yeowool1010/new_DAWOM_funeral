'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [showFloatingWidget, setShowFloatingWidget] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const [showPhoneBox, setShowPhoneBox] = useState(false);
  const [showKakaoBox, setShowKakaoBox] = useState(false);

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

  // 모바일 화면 여부
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    if (!isClient) return;
    const checkMobile = () => setIsMobile(window.innerWidth <= 640);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
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
              className="object-cover"
              priority={index === 0}
            />
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          </div>
        ))}
        
        {/* 슬라이더 콘텐츠 - 여백 없이 화면 전체 사용 */}
        <div className="relative z-10 flex flex-col items-center justify-center w-full h-full">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-white animate-fadeIn">
            {slides[currentSlide].title}
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 text-white animate-fadeIn animation-delay-200">
            {slides[currentSlide].subtitle}
          </p>
          
          {/* 슬라이더 인디케이터 */}
          <div className="flex space-x-3 mb-8">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-4 h-4 rounded-full transition-all duration-300 focus:outline-none ${
                  index === currentSlide ? 'bg-white scale-125' : 'bg-white bg-opacity-50 hover:bg-opacity-75'
                }`}
              />
            ))}
          </div>

          {/* 하단 정보 박스들 */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center w-full">
            <span className="bg-white bg-opacity-90 backdrop-blur-sm px-6 py-3 rounded-lg shadow-lg text-blue-700 font-semibold text-base sm:text-lg transform hover:scale-105 transition-all duration-200">
              전국 모든지역 이용 가능
            </span>
            <span className="bg-white bg-opacity-90 backdrop-blur-sm px-6 py-3 rounded-lg shadow-lg text-blue-700 font-semibold text-base sm:text-lg transform hover:scale-105 transition-all duration-200">
              서비스 완료 후 정산
            </span>
          </div>
        </div>
      </section>

      {/* 서비스/상품 소개 - 호버 효과 */}
      <section className="w-full py-8 sm:py-12 px-4 sm:px-8">
        <h2 className="text-xl sm:text-2xl font-bold text-center mb-6 sm:mb-8 animate-fadeIn">
          초인스상조의 맞춤상품
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 max-w-7xl mx-auto">
          {[
            { title: '보급형', price: '230만원', img: '/img/main/company_ico1.png' },
            { title: '일반형', price: '330만원', img: '/img/main/company_ico2.png' },
            { title: '고급형', price: '430만원', img: '/img/main/ms_pdt_ico.png' },
            { title: '회사장', price: '상담 후 결정', img: '/img/main/brand02_txt.png' },
          ].map((item, idx) => (
            <div 
              key={idx} 
              className="bg-white rounded-lg shadow p-4 sm:p-6 flex flex-col items-center transform hover:scale-105 hover:shadow-xl transition-all duration-300 cursor-pointer group"
            >
              {/* <Image 
                src={item.img} 
                alt={item.title} 
                width={80} 
                height={80} 
                className="mb-2 sm:mb-4 group-hover:scale-110 transition-transform duration-300" 
              /> */}
              <h3 className="text-lg sm:text-xl font-semibold mb-1 sm:mb-2 group-hover:text-blue-600 transition-colors duration-300">
                {item.title}
              </h3>
              <p className="text-blue-700 font-bold text-base sm:text-lg mb-1 sm:mb-2">
                {item.price}
              </p>
              <p className="text-gray-600 text-xs sm:text-sm mb-2 sm:mb-4 text-center">
                해당 상품에 대한 간략한 설명이 들어갑니다.
              </p>
              <button className="bg-blue-600 text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded hover:bg-blue-700 text-sm sm:text-base transform hover:scale-105 transition-all duration-200">
                자세히 보기
              </button>
            </div>
          ))}
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

      {/* 장례시설 안내, 고객센터, 협력업체 - 스크롤 인터랙션 */}
      <section className={`w-full py-8 sm:py-12 px-4 sm:px-8 grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-8 max-w-7xl mx-auto transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}>
        {/* 장례시설 */}
        <div className="bg-white rounded-lg shadow p-4 sm:p-6 mb-4 md:mb-0 hover:shadow-xl transition-shadow duration-300">
          <h3 className="text-base sm:text-lg font-bold mb-2 sm:mb-4">전국 장례시설 안내</h3>
          <ul className="space-y-1 sm:space-y-2 text-gray-700 text-sm sm:text-base">
            <li className="hover:text-blue-600 transition-colors duration-200 cursor-pointer">장례식장</li>
            <li className="hover:text-blue-600 transition-colors duration-200 cursor-pointer">공원묘지</li>
            <li className="hover:text-blue-600 transition-colors duration-200 cursor-pointer">화장장</li>
            <li className="hover:text-blue-600 transition-colors duration-200 cursor-pointer">납골묘</li>
          </ul>
        </div>
        {/* 고객센터 */}
        <div className="bg-white rounded-lg shadow p-4 sm:p-6 mb-4 md:mb-0 hover:shadow-xl transition-shadow duration-300">
          <h3 className="text-base sm:text-lg font-bold mb-2 sm:mb-4">고객센터</h3>
          <ul className="space-y-1 sm:space-y-2 text-gray-700 text-sm sm:text-base">
            <li className="hover:text-blue-600 transition-colors duration-200 cursor-pointer">FAQ</li>
            <li className="hover:text-blue-600 transition-colors duration-200 cursor-pointer">공지사항</li>
            <li className="hover:text-blue-600 transition-colors duration-200 cursor-pointer">문의사항</li>
            <li>24시간 긴급전화: <span className="font-bold text-blue-700">1588-1029</span></li>
          </ul>
        </div>
        {/* 협력업체 */}
        <div className="bg-white rounded-lg shadow p-4 sm:p-6 hover:shadow-xl transition-shadow duration-300">
          <h3 className="text-base sm:text-lg font-bold mb-2 sm:mb-4">협력업체</h3>
          <ul className="space-y-1 sm:space-y-2 text-gray-700 text-sm sm:text-base">
            <li className="hover:text-blue-600 transition-colors duration-200 cursor-pointer">연대총동문회</li>
            <li className="hover:text-blue-600 transition-colors duration-200 cursor-pointer">AJ토탈</li>
            <li className="hover:text-blue-600 transition-colors duration-200 cursor-pointer">연세대 치과대학 교수평의회</li>
            <li className="hover:text-blue-600 transition-colors duration-200 cursor-pointer">아주그룹</li>
            <li className="hover:text-blue-600 transition-colors duration-200 cursor-pointer">대한간호협회</li>
            <li className="hover:text-blue-600 transition-colors duration-200 cursor-pointer">...</li>
          </ul>
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

      {/* [NEW] 장례진행절차 (가로 스텝) */}
      <section className="w-full py-10 bg-gray-100/80 flex flex-col items-center">
        <h2 className="text-xl font-bold mb-6">초인스상조 장례진행절차</h2>
        <div className="flex flex-wrap justify-center gap-2 max-w-4xl">
          {['사전상담','고인임종','전화','이송','빈소준비','인력배치','조문','입관','입관의식','종교의식','발인','장지이동','하관'].map((step, idx) => (
            <div key={idx} className="flex flex-col items-center mx-1">
              <div className="w-10 h-10 flex items-center justify-center bg-blue-200 rounded-full font-bold text-blue-700 mb-1">{idx+1}</div>
              <span className="text-xs text-gray-700 text-center w-16">{step}</span>
            </div>
          ))}
        </div>
      </section>

      {/* [NEW] 장례진행 갤러리 */}
      <section className="w-full py-10 bg-white/80 flex flex-col items-center">
        <h2 className="text-xl font-bold mb-6">초인스상조 장례진행 갤러리</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl">
          {[1,2,3,4,5,6,7,8].map((n) => (
            <div key={n} className="rounded-lg overflow-hidden shadow">
              <Image src={`/img/main/review_img${(n%3)+1}.jpg`} alt={`갤러리${n}`} width={200} height={120} className="object-cover w-full h-28" />
            </div>
          ))}
        </div>
      </section>

      {/* [NEW] 전국 장례시설 안내 */}
      <section className="w-full py-10 bg-blue-100/80 flex flex-col items-center">
        <h2 className="text-xl font-bold mb-6">전국 장례시설 안내</h2>
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="w-64 h-40 bg-white rounded-lg shadow flex items-center justify-center text-blue-700 font-bold text-lg">지도/이미지</div>
          <ul className="flex flex-wrap gap-2 text-sm text-blue-900">
            {['서울','경기','인천','강원','충북','충남','대전','경북','경남','대구','울산','부산','전북','전남','광주','제주'].map((r, i) => (
              <li key={i} className="bg-white rounded px-3 py-1 shadow">{r}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* [NEW] 정보 안내 (FAQ, 공지, 문의, 상담전화) */}
      <section className="w-full py-10 bg-white/80 flex flex-col items-center">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 w-full max-w-5xl">
          <div className="flex flex-col items-center p-4 bg-gray-50 rounded shadow">
            <div className="font-bold mb-2">FAQ</div>
            <div className="text-xs text-gray-500 mb-2">자주 묻는 질문</div>
            <button className="text-blue-600 font-semibold">바로가기</button>
          </div>
          <div className="flex flex-col items-center p-4 bg-gray-50 rounded shadow">
            <div className="font-bold mb-2">공지사항</div>
            <div className="text-xs text-gray-500 mb-2">최신 소식 안내</div>
            <button className="text-blue-600 font-semibold">바로가기</button>
          </div>
          <div className="flex flex-col items-center p-4 bg-gray-50 rounded shadow">
            <div className="font-bold mb-2">문의사항</div>
            <div className="text-xs text-gray-500 mb-2">궁금한 점 문의</div>
            <button className="text-blue-600 font-semibold">바로가기</button>
          </div>
          <div className="flex flex-col items-center p-4 bg-blue-600 rounded shadow text-white">
            <div className="font-bold mb-2">상담전화</div>
            <div className="text-2xl font-extrabold mb-2">1588-1029</div>
            <button className="bg-white text-blue-600 font-semibold rounded px-4 py-1">전화상담</button>
          </div>
        </div>
      </section>

      {/* [NEW] 협력업체 섹션 */}
      <section className="w-full py-10 bg-blue-900/80 flex flex-col items-center">
        <h2 className="text-xl font-bold mb-6 text-white">CHOINS PARTNERS</h2>
        <div className="flex flex-wrap gap-4 justify-center">
          {[1,2,3,4,5,6,7,8].map((n) => (
            <div key={n} className="bg-white rounded shadow px-6 py-3 text-blue-900 font-bold">협력업체 {n}</div>
          ))}
        </div>
      </section>
    </div>
  );
}
