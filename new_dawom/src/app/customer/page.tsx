'use client';
import { useState, useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

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
          <div className="max-w-2xl mx-auto">
            {/* 상단 제목/비주얼 */}
            <div className="relative h-32 mb-8 flex items-center justify-center bg-gray-200 rounded-lg overflow-hidden">
              <span className="text-2xl font-bold text-white drop-shadow-lg z-10">자주 묻는 질문(FAQ)</span>
              <div className="absolute inset-0 bg-blue-900 bg-opacity-40" />
            </div>
            {/* 안내문구 */}
            <div className="text-center text-gray-700 mb-8">초인스상조에 자주 문의하시는 질문과 답변을 모았습니다.<br/>궁금하신 점은 언제든 고객센터로 문의해 주세요.</div>
            {/* FAQ 리스트 */}
            <FAQAccordion />
          </div>
        )}
        {tab === 'notice' && (
          <div className="max-w-3xl mx-auto">
            {/* 상단 제목/비주얼 */}
            <div className="relative h-32 mb-8 flex items-center justify-center bg-gray-200 rounded-lg overflow-hidden">
              <span className="text-2xl font-bold text-white drop-shadow-lg z-10">공지사항</span>
              <div className="absolute inset-0 bg-blue-900 bg-opacity-40" />
            </div>
            {/* 안내문구 */}
            <div className="text-center text-gray-700 mb-8">초인스상조의 새로운 소식과 공지사항을 안내해드립니다.</div>
            {/* 공지사항 리스트 */}
            <NoticeList />
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

// FAQAccordion 컴포넌트 구현
function FAQAccordion() {
  const faqList = [
    {
      q: '서비스 신청은 어떻게 하나요?',
      a: '홈페이지 또는 24시간 상담전화(1588-1029)로 신청하실 수 있습니다.',
    },
    {
      q: '후불제 상조란 무엇인가요?',
      a: '서비스가 모두 완료된 후 비용을 정산하는 방식으로, 부담 없이 이용하실 수 있습니다.',
    },
    {
      q: '장례 절차는 어떻게 진행되나요?',
      a: '임종부터 발인, 하관까지 장례지도사가 전 과정을 안내해드립니다. 자세한 절차는 장례정보 메뉴를 참고하세요.',
    },
    {
      q: '상담은 무료인가요?',
      a: '네, 모든 상담은 무료로 제공됩니다. 언제든 문의해 주세요.',
    },
    {
      q: '상품 및 서비스 비용은 어떻게 되나요?',
      a: '상품별로 상이하며, 상담 시 상세 견적을 안내해드립니다.',
    },
    {
      q: '장례용품은 직접 준비해야 하나요?',
      a: '아니요, 모든 장례용품은 초인스상조에서 준비해드립니다.',
    },
    {
      q: '계약 후 취소 및 환불이 가능한가요?',
      a: '계약 후에도 관련 법령에 따라 취소 및 환불이 가능합니다. 자세한 내용은 고객센터로 문의해 주세요.',
    },
  ];
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  return (
    <div className="divide-y divide-gray-200">
      {faqList.map((item, idx) => (
        <div key={idx}>
          <button
            className="w-full text-left py-4 px-2 font-semibold flex justify-between items-center focus:outline-none"
            onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
            aria-expanded={openIdx === idx}
          >
            <span>{item.q}</span>
            <span className={`ml-2 transition-transform ${openIdx === idx ? 'rotate-180' : ''}`}>▼</span>
          </button>
          {openIdx === idx && (
            <div className="bg-gray-50 px-4 pb-4 text-gray-700 animate-fadeIn">
              {item.a}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

// NoticeList 컴포넌트 구현
function NoticeList() {
  const noticeList = [
    { id: 1, title: '홈페이지 리뉴얼 안내', date: '2023-10-27', views: 123 },
    { id: 2, title: '24시간 상담 서비스 운영 안내', date: '2023-10-26', views: 89 },
    { id: 3, title: '장례지도사 오픈 안내', date: '2023-10-25', views: 150 },
    { id: 4, title: '새로운 장례용품 출시', date: '2023-10-24', views: 200 },
    { id: 5, title: '고객센터 전화번호 변경 안내', date: '2023-10-23', views: 100 },
    { id: 6, title: '홈페이지 접속 속도 개선 안내', date: '2023-10-22', views: 180 },
    { id: 7, title: '새로운 장례정보 메뉴 추가', date: '2023-10-21', views: 130 },
    { id: 8, title: '고객센터 운영시간 변경 안내', date: '2023-10-20', views: 95 },
  ];
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = noticeList.slice(startIndex, endIndex);

  const totalPages = Math.ceil(noticeList.length / itemsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="divide-y divide-gray-200">
      {currentItems.map((notice) => (
        <Link key={notice.id} href={`/customer/notice/${notice.id}`}>
          <div className="py-4 px-2 hover:bg-gray-100 cursor-pointer">
            <div className="flex justify-between items-center">
              <span className="font-semibold text-lg">{notice.title}</span>
              <span className="text-sm text-gray-600">{notice.date}</span>
            </div>
            <div className="text-sm text-gray-500 mt-1">조회수: {notice.views}</div>
          </div>
        </Link>
      ))}

      {totalPages > 1 && (
        <div className="flex justify-center mt-6">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-3 py-1 border border-gray-300 rounded-md mr-2 text-gray-700 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            이전
          </button>
          <span className="px-3 py-1 border border-gray-300 rounded-md text-gray-700">
            {currentPage} / {totalPages}
          </span>
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="px-3 py-1 border border-gray-300 rounded-md ml-2 text-gray-700 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            다음
          </button>
        </div>
      )}
    </div>
  );
} 