'use client';
import { useState, useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import Image from 'next/image';

const tabList = [
  { label: '인사말', value: 'greeting' },
  { label: '경영이념', value: 'philosophy' },
  { label: '조직도', value: 'organization' },
  { label: '오시는길', value: 'location' },
];

export default function CompanyInfoMain() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pageParam = searchParams.get('page');
  const [tab, setTab] = useState('greeting');
  const [showTitle, setShowTitle] = useState(false);
  const [showTabContent, setShowTabContent] = useState(false);

  // 쿼리스트링에 따라 탭 초기값 설정
  useEffect(() => {
    if (pageParam && tabList.some(t => t.value === pageParam)) {
      setTab(pageParam);
    } else {
      setTab('greeting');
    }
  }, [pageParam]);

  // 탭 클릭 시 쿼리스트링 변경
  const handleTab = (value: string) => {
    setTab(value);
    if (value === 'greeting') {
      router.replace('/companyInfo');
    } else {
      router.replace(`/companyInfo?page=${value}`);
    }
  };

  useEffect(() => {
    setShowTitle(false);
    const timer = setTimeout(() => setShowTitle(true), 100);
    return () => clearTimeout(timer);
  }, [tab]);
  useEffect(() => {
    setShowTabContent(false);
    const timer = setTimeout(() => setShowTabContent(true), 150);
    return () => clearTimeout(timer);
  }, [tab]);

  return (
    <div className="w-full min-h-screen bg-white/80">
      {/* 상단 비주얼 영역 */}
      <div className="relative w-full h-56 sm:h-72 flex items-center justify-center">
        <Image src="/img/main/company_ico1.png" alt="비주얼" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-black bg-opacity-40" />
        <div className="relative z-10 flex flex-col items-center w-full">
          <div className={`text-white text-2xl sm:text-3xl font-bold mb-2 mt-8 transition-all duration-700 animate-fadeInSlideRight ${showTitle ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>회사소개</div>
          <div className={`h-1 w-12 bg-white rounded-full mb-2 transition-all duration-700 ${showTitle ? 'opacity-80 scale-x-100' : 'opacity-0 scale-x-50'}`}></div>
          <div className={`text-white text-sm flex items-center gap-1 transition-all duration-700 delay-200 ${showTitle ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}>🏠 홈 &gt; 회사소개 &gt; {tabList.find(t=>t.value===tab)?.label}</div>
        </div>
      </div>
      {/* 탭 메뉴 */}
      <div className="w-full flex justify-center border-b border-gray-200 bg-white/90">
        <div className="flex gap-2 sm:gap-6 mt-2">
          {tabList.map((t) => (
            <button
              key={t.value}
              onClick={() => handleTab(t.value)}
              className={`px-4 py-2 font-semibold rounded-t-md transition-all duration-200 ${tab === t.value ? 'bg-white border-b-2 border-blue-600 text-blue-700 shadow' : 'bg-transparent text-gray-600 hover:text-blue-600'}`}
            >
              {t.label}
            </button>
          ))}
        </div>
      </div>
      {/* 탭 내용 */}
      <div className={`max-w-4xl mx-auto py-10 px-4 transition-all duration-700 animate-fadeInSlideRight ${showTabContent ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
        {tab === 'greeting' && (
          <div>
            <h2 className="text-xl font-bold mb-4">인사말</h2>
            <p className="mb-4">안녕하세요. 초인스상조를 찾아주셔서 감사합니다.<br/>저희는 고객님께 최고의 장례서비스를 제공하기 위해 항상 최선을 다하고 있습니다.<br/>믿음과 신뢰로 보답하겠습니다.</p>
            <div className="text-right font-semibold">대표이사 홍길동</div>
          </div>
        )}
        {tab === 'philosophy' && (
          <div>
            <h2 className="text-xl font-bold mb-4">경영이념</h2>
            <p className="mb-4">고객 감동, 신뢰, 정직을 바탕으로 최고의 장례서비스를 실현합니다.<br/>항상 고객의 입장에서 생각하며, 사회에 공헌하는 기업이 되겠습니다.</p>
          </div>
        )}
        {tab === 'organization' && (
          <div>
            <h2 className="text-xl font-bold mb-4">조직도</h2>
            <p className="mb-4">초인스상조는 전문 인력과 체계적인 조직으로 신속하고 정확한 장례서비스를 제공합니다.</p>
          </div>
        )}
        {tab === 'location' && (
          <div>
            <h2 className="text-xl font-bold mb-4">오시는길</h2>
            <p className="mb-4">서울시 서대문구 연대동문길 65, (대신동) 3층<br/>Tel. 1588-1029<br/>Fax. 02-334-1028</p>
            <p className="text-gray-500">지하철 2호선 신촌역 3번 출구에서 도보 10분</p>
          </div>
        )}
      </div>
    </div>
  );
}
