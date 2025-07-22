'use client';
import { useState, useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import Image from 'next/image';

const tabList = [
  { label: '장례식장', value: 'hall' },
  { label: '공원묘지', value: 'park' },
  { label: '화장장', value: 'crematory' },
  { label: '납골묘', value: 'columbarium' },
];

export default function FacilityMain() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pageParam = searchParams.get('page');
  const [tab, setTab] = useState('hall');
  const [showTitle, setShowTitle] = useState(false);
  const [showTabContent, setShowTabContent] = useState(false);

  useEffect(() => {
    if (pageParam && tabList.some(t => t.value === pageParam)) {
      setTab(pageParam);
    } else {
      setTab('hall');
    }
  }, [pageParam]);

  const handleTab = (value: string) => {
    setTab(value);
    if (value === 'hall') {
      router.replace('/facility');
    } else {
      router.replace(`/facility?page=${value}`);
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
        <Image src="/img/main/brand02_bg.jpg" alt="비주얼" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-black bg-opacity-40" />
        <div className="relative z-10 flex flex-col items-center w-full">
          <div className={`text-white text-2xl sm:text-3xl font-bold mb-2 mt-8 transition-all duration-700 animate-fadeInSlideRight ${showTitle ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>장례시설</div>
          <div className={`h-1 w-12 bg-white rounded-full mb-2 transition-all duration-700 ${showTitle ? 'opacity-80 scale-x-100' : 'opacity-0 scale-x-50'}`}></div>
          <div className={`text-white text-sm flex items-center gap-1 transition-all duration-700 delay-200 ${showTitle ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}>🏠 홈 &gt; 장례시설 &gt; {tabList.find(t=>t.value===tab)?.label}</div>
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
        {tab === 'hall' && (
          <div>
            <h2 className="text-xl font-bold mb-4">장례식장</h2>
            <p className="mb-4">전국의 다양한 장례식장 정보를 안내해드립니다.<br/>가까운 장례식장 위치와 시설을 확인하세요.</p>
          </div>
        )}
        {tab === 'park' && (
          <div>
            <h2 className="text-xl font-bold mb-4">공원묘지</h2>
            <p className="mb-4">쾌적한 환경의 공원묘지 정보를 제공합니다.<br/>전국 어디서나 이용 가능한 공원묘지를 안내해드립니다.</p>
          </div>
        )}
        {tab === 'crematory' && (
          <div>
            <h2 className="text-xl font-bold mb-4">화장장</h2>
            <p className="mb-4">전국의 화장장 위치와 이용 방법을 안내해드립니다.<br/>예약 및 절차에 대해 궁금하신 점은 문의해 주세요.</p>
          </div>
        )}
        {tab === 'columbarium' && (
          <div>
            <h2 className="text-xl font-bold mb-4">납골묘</h2>
            <p className="mb-4">다양한 형태의 납골묘 정보를 제공합니다.<br/>위치, 이용 방법 등 자세한 사항은 고객센터로 문의해 주세요.</p>
          </div>
        )}
      </div>
    </div>
  );
} 