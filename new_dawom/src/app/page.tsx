import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* 네비게이션 바는 layout.tsx에서 공통 적용 */}

      {/* 메인 비주얼/배너 */}
      <section className="relative bg-blue-100 py-10 sm:py-14 md:py-16 flex flex-col items-center text-center px-2 sm:px-4">
        <Image src="/img/main/visual01.jpg" alt="메인 비주얼" width={900} height={300} className="rounded-lg shadow mb-4 sm:mb-6 w-full max-w-3xl object-cover" />
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">완전후불식 장례토탈서비스</h1>
        <p className="text-base sm:text-lg text-gray-700 mb-4">합리적인 가격과 고품질 상품으로 고객 감동의 서비스를 추구합니다.</p>
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 justify-center">
          <span className="bg-white px-4 py-2 rounded shadow text-blue-700 font-semibold text-sm sm:text-base">전국 모든지역 이용 가능</span>
          <span className="bg-white px-4 py-2 rounded shadow text-blue-700 font-semibold text-sm sm:text-base">서비스 완료 후 정산</span>
        </div>
      </section>

      {/* 서비스/상품 소개 */}
      <section className="container mx-auto py-8 sm:py-12 px-2 sm:px-4">
        <h2 className="text-xl sm:text-2xl font-bold text-center mb-6 sm:mb-8">초인스상조의 맞춤상품</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {[
            { title: '보급형', price: '230만원', img: '/img/main/company_ico1.png' },
            { title: '일반형', price: '330만원', img: '/img/main/company_ico2.png' },
            { title: '고급형', price: '430만원', img: '/img/main/ms_pdt_ico.png' },
            { title: '회사장', price: '상담 후 결정', img: '/img/main/brand02_txt.png' },
          ].map((item, idx) => (
            <div key={idx} className="bg-white rounded-lg shadow p-4 sm:p-6 flex flex-col items-center">
              <Image src={item.img} alt={item.title} width={80} height={80} className="mb-2 sm:mb-4" />
              <h3 className="text-lg sm:text-xl font-semibold mb-1 sm:mb-2">{item.title}</h3>
              <p className="text-blue-700 font-bold text-base sm:text-lg mb-1 sm:mb-2">{item.price}</p>
              <p className="text-gray-600 text-xs sm:text-sm mb-2 sm:mb-4">해당 상품에 대한 간략한 설명이 들어갑니다.</p>
              <button className="bg-blue-600 text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded hover:bg-blue-700 text-sm sm:text-base">자세히 보기</button>
            </div>
          ))}
        </div>
      </section>

      {/* 장례진행절차 */}
      <section className="bg-white py-8 sm:py-12 px-2 sm:px-0">
        <h2 className="text-xl sm:text-2xl font-bold text-center mb-6 sm:mb-8">장례진행절차</h2>
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 max-w-4xl mx-auto">
          {[
            '사전상담', '고인 임종', '초인스상조 전화', '고인 이송', '빈소 준비', '인력 배치', '조문 준비', '입관 준비', '입관', '입관 의식', '종교 의식', '종교별 발인의식', '발인', '장지 이동', '하관'
          ].map((step, idx) => (
            <div key={idx} className="flex flex-col items-center w-1/4 sm:w-1/6 md:w-auto min-w-[70px]">
              <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-blue-100 rounded-full font-bold text-blue-700 mb-1 sm:mb-2">{idx+1}</div>
              <span className="text-xs sm:text-sm text-gray-700 text-center w-full sm:w-20">{step}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 장례시설 안내, 고객센터, 협력업체 */}
      <section className="container mx-auto py-8 sm:py-12 px-2 sm:px-4 grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-8">
        {/* 장례시설 */}
        <div className="bg-white rounded-lg shadow p-4 sm:p-6 mb-4 md:mb-0">
          <h3 className="text-base sm:text-lg font-bold mb-2 sm:mb-4">전국 장례시설 안내</h3>
          <ul className="space-y-1 sm:space-y-2 text-gray-700 text-sm sm:text-base">
            <li>장례식장</li>
            <li>공원묘지</li>
            <li>화장장</li>
            <li>납골묘</li>
          </ul>
        </div>
        {/* 고객센터 */}
        <div className="bg-white rounded-lg shadow p-4 sm:p-6 mb-4 md:mb-0">
          <h3 className="text-base sm:text-lg font-bold mb-2 sm:mb-4">고객센터</h3>
          <ul className="space-y-1 sm:space-y-2 text-gray-700 text-sm sm:text-base">
            <li>FAQ</li>
            <li>공지사항</li>
            <li>문의사항</li>
            <li>24시간 긴급전화: <span className="font-bold text-blue-700">1588-1029</span></li>
          </ul>
        </div>
        {/* 협력업체 */}
        <div className="bg-white rounded-lg shadow p-4 sm:p-6">
          <h3 className="text-base sm:text-lg font-bold mb-2 sm:mb-4">협력업체</h3>
          <ul className="space-y-1 sm:space-y-2 text-gray-700 text-sm sm:text-base">
            <li>연대총동문회</li>
            <li>AJ토탈</li>
            <li>연세대 치과대학 교수평의회</li>
            <li>아주그룹</li>
            <li>대한간호협회</li>
            <li>...</li>
          </ul>
        </div>
      </section>

      {/* 푸터는 layout.tsx에서 공통 적용 */}
    </div>
  );
}
