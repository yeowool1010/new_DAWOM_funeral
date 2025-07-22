'use client';
import { useState, useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import Image from 'next/image';

const tabList = [
  { label: 'FAQ', value: 'faq' },
  { label: '공지사항', value: 'notice' },
  { label: '문의사항', value: 'inquiry' },
];

export default function CustomerMain() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pageParam = searchParams.get('page');
  const [tab, setTab] = useState('faq');
  const [showTitle, setShowTitle] = useState(false);
  const [showTabContent, setShowTabContent] = useState(false);

  useEffect(() => {
    if (pageParam && tabList.some(t => t.value === pageParam)) {
      setTab(pageParam);
    } else {
      setTab('faq');
    }
  }, [pageParam]);

  const handleTab = (value: string) => {
    setTab(value);
    if (value === 'faq') {
      router.replace('/customer');
    } else {
      router.replace(`/customer?page=${value}`);
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
          <div className={`text-white text-2xl sm:text-3xl font-bold mb-2 mt-8 transition-all duration-700 animate-fadeInSlideRight ${showTitle ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>고객센터</div>
          <div className={`h-1 w-12 bg-white rounded-full mb-2 transition-all duration-700 ${showTitle ? 'opacity-80 scale-x-100' : 'opacity-0 scale-x-50'}`}></div>
          <div className={`text-white text-sm flex items-center gap-1 transition-all duration-700 delay-200 ${showTitle ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}>🏠 홈 &gt; 고객센터 &gt; {tabList.find(t=>t.value===tab)?.label}</div>
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
        {tab === 'faq' && (
          <div>
            <h2 className="text-xl font-bold mb-4">FAQ</h2>
            <div className="mb-4">Q. 서비스 신청은 어떻게 하나요?<br/>A. 홈페이지 또는 24시간 상담전화(1588-1029)로 신청하실 수 있습니다.</div>
            <div className="mb-4">Q. 후불제 상조란 무엇인가요?<br/>A. 서비스가 모두 완료된 후 비용을 정산하는 방식입니다.</div>
          </div>
        )}
        {tab === 'notice' && (
          <div>
            <h2 className="text-xl font-bold mb-4">공지사항</h2>
            <div className="mb-4">[공지] 홈페이지 리뉴얼 안내 - 초인스상조 홈페이지가 새롭게 리뉴얼되었습니다.</div>
            <div className="mb-4">[공지] 24시간 상담 서비스 운영 - 언제든지 1588-1029로 문의해 주세요.</div>
          </div>
        )}
        {tab === 'inquiry' && (
          <div>
            <h2 className="text-xl font-bold mb-4">문의사항</h2>
            <div className="mb-4">궁금하신 점은 언제든 문의해 주세요.<br/>빠르고 친절하게 답변드리겠습니다.</div>
            <form className="bg-white p-6 rounded shadow max-w-md mx-auto">
              <div className="mb-4">
                <label className="block mb-1 font-semibold">이름</label>
                <input type="text" className="w-full border rounded px-3 py-2" placeholder="이름을 입력하세요" />
              </div>
              <div className="mb-4">
                <label className="block mb-1 font-semibold">연락처</label>
                <input type="text" className="w-full border rounded px-3 py-2" placeholder="연락처를 입력하세요" />
              </div>
              <div className="mb-4">
                <label className="block mb-1 font-semibold">문의내용</label>
                <textarea className="w-full border rounded px-3 py-2" rows={4} placeholder="문의하실 내용을 입력하세요" />
              </div>
              <button type="submit" className="bg-blue-700 text-white px-6 py-2 rounded font-bold hover:bg-blue-800">문의하기</button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
} 