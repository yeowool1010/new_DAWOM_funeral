'use client';
import React, { useState, useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import Image from 'next/image';

const tabList = [
  { label: '초인스상조서비스', value: 'main' },
  { label: '후불제상조', value: 'postpaid' },
  { label: '협력업체', value: 'partners' },
];

export default function ServiceMain() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pageParam = searchParams.get('page');
  const [tab, setTab] = useState('main');
  const [showTitle, setShowTitle] = useState(false);
  const [showTabContent, setShowTabContent] = useState(false);

  // 쿼리스트링에 따라 탭 초기값 설정
  useEffect(() => {
    if (pageParam && tabList.some(t => t.value === pageParam)) {
      setTab(pageParam);
    } else {
      setTab('main');
    }
  }, [pageParam]);

  // 타이틀 애니메이션 (좌→우)
  useEffect(() => {
    setShowTitle(false);
    const timer = setTimeout(() => setShowTitle(true), 100);
    return () => clearTimeout(timer);
  }, [tab]);

  // 탭 내용 애니메이션 (좌→우)
  useEffect(() => {
    setShowTabContent(false);
    const timer = setTimeout(() => setShowTabContent(true), 150);
    return () => clearTimeout(timer);
  }, [tab]);

  // 탭 클릭 시 쿼리스트링 변경
  const handleTab = (value: string) => {
    setTab(value);
    if (value === 'main') {
      router.replace('/service/main');
    } else {
      router.replace(`/service/main?page=${value}`);
    }
  };

  return (
    <div className="w-full min-h-screen bg-white/80">
      {/* 상단 비주얼 영역 */}
      <div className="relative w-full h-56 sm:h-72 flex items-center justify-center">
        <Image src="/img/main/brand01_bg.jpg" alt="비주얼" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-black bg-opacity-40" />
        <div className="relative z-10 flex flex-col items-center w-full">
          <div className={`text-white text-2xl sm:text-3xl font-bold mb-2 mt-8 transition-all duration-700 animate-fadeInSlideRight ${showTitle ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            초인스서비스
          </div>
          <div className={`h-1 w-12 bg-white rounded-full mb-2 transition-all duration-700 ${showTitle ? 'opacity-80 scale-x-100' : 'opacity-0 scale-x-50'}`}></div>
          <div className={`text-white text-sm flex items-center gap-1 transition-all duration-700 delay-200 ${showTitle ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}>
            <span className="mr-1">🏠</span> 홈 &gt; 초인스서비스 &gt; {tabList.find(t=>t.value===tab)?.label}
          </div>
        </div>
      </div>

      {/* 탭 메뉴 */}
      <div className="w-full flex justify-center border-b border-gray-200 bg-white/90">
        <div className="flex gap-2 sm:gap-6 mt-2">
          {tabList.map((t) => (
            <button
              key={t.value}
              onClick={() => handleTab(t.value)}
              className={`px-4 py-2 font-semibold rounded-t-md transition-all duration-200 ${
                tab === t.value
                  ? 'bg-white border-b-2 border-blue-600 text-blue-700 shadow'
                  : 'bg-transparent text-gray-600 hover:text-blue-600'
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>
      </div>

      {/* 탭 내용 */}
      <div className={`max-w-4xl mx-auto py-10 px-4 transition-all duration-700 animate-fadeInSlideRight ${showTabContent ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
        {tab === 'main' && (
          <div>
            <h2 className="text-xl font-bold mb-4">초인스상조서비스</h2>
            <blockquote className="border-l-4 border-blue-600 pl-4 mb-6 text-lg font-semibold text-gray-700">
              회원가입 할 필요없이 <span className="text-blue-600 font-bold">누구나 언제든지</span> 전화주시면 합리적 장례서비스 이용가능합니다.
            </blockquote>
            <div className="text-gray-700 mb-6">
              초인스상조는 3가지의 상조상품으로 고객의 상황에 맞춰 무리한 추가비용을 요구하지 않는 후불제 상조와 안심된 고품질의 장례서비스를 제공합니다.<br/>
              <br/>
              <b>비싼 가입비와 불안한 선불상조?</b> → 연회비/가입비 없음, 해약/환불 자유, 상품권/경품 도입, 청약철회 우려 無<br/>
              <b>초과가산금이 없는 후불제상조!</b> → 장례 종료 후 정산, 투명한 견적, 무리한 추가비용 無<br/>
              <b>합리적 상품구성 초인스상조</b> → 누구나 이용가능, 다양한 상품, 전국망, 신속/정확/친절 서비스
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="border-2 border-blue-200 rounded-xl p-4 text-center">
                <div className="font-bold text-blue-700 mb-2">비싼 가입비와 불안한 선불상조?</div>
                <div className="text-sm text-gray-600">연회비/가입비 없음, 해약/환불 자유, 상품권/경품 도입, 청약철회 우려 無</div>
              </div>
              <div className="border-2 border-blue-200 rounded-xl p-4 text-center">
                <div className="font-bold text-blue-700 mb-2">초과가산금이 없는 후불제상조!</div>
                <div className="text-sm text-gray-600">장례 종료 후 정산, 투명한 견적, 무리한 추가비용 無</div>
              </div>
              <div className="border-2 border-blue-200 rounded-xl p-4 text-center">
                <div className="font-bold text-blue-700 mb-2">합리적 상품구성 초인스상조</div>
                <div className="text-sm text-gray-600">누구나 이용가능, 다양한 상품, 전국망, 신속/정확/친절 서비스</div>
              </div>
            </div>
          </div>
        )}
        {tab === 'postpaid' && (
          <div>
            <h2 className="text-xl font-bold mb-4">후불제상조</h2>
            <div className="mb-4 text-gray-700">
              상품을 미리 선택할 필요가 없고 <b>장례행사 종료 후 고객에게 맞는 상품을 추천</b>해 드리는 방식입니다.<br/>
              <br/>
              <b>후불제상조 장점</b><br/>
              - 장례 종료 후 정산, 투명한 견적, 무리한 추가비용 無<br/>
              - 수수료/위약금 없음, 해약/환불 자유, 청약철회 우려 無
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full border text-sm">
                <thead>
                  <tr className="bg-blue-100 text-blue-900">
                    <th className="border px-2 py-1">구분</th>
                    <th className="border px-2 py-1">선불상조</th>
                    <th className="border px-2 py-1">후불제상조</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border px-2 py-1">예약부담금</td>
                    <td className="border px-2 py-1">납입 1년마다 시책적립금 0%</td>
                    <td className="border px-2 py-1">전혀없음</td>
                  </tr>
                  <tr>
                    <td className="border px-2 py-1">무드/페널티</td>
                    <td className="border px-2 py-1">선정사별 무드, 페널티, 반환금 피해</td>
                    <td className="border px-2 py-1">수수료/위약금 없음</td>
                  </tr>
                  <tr>
                    <td className="border px-2 py-1">관리비용</td>
                    <td className="border px-2 py-1">연회비/적립금 10~15%</td>
                    <td className="border px-2 py-1">관리비용 없음</td>
                  </tr>
                  <tr>
                    <td className="border px-2 py-1">장례정보/혜택</td>
                    <td className="border px-2 py-1">업체별 상이</td>
                    <td className="border px-2 py-1">최신 혜택/정보 제공</td>
                  </tr>
                  <tr>
                    <td className="border px-2 py-1">납입금 보증</td>
                    <td className="border px-2 py-1">상조보증</td>
                    <td className="border px-2 py-1">사전상담/정산</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}
        {tab === 'partners' && (
          <div>
            <h2 className="text-xl font-bold mb-4">협력업체</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-4">
              {['연대총동문회','AJ토탈','연세대 치과대학 교수평의회','아주그룹','대한간호협회','영풍제지','연세대학교 여자총동문회','대한간호협회'].map((name, idx) => (
                <div key={idx} className="border rounded-lg flex items-center justify-center h-20 bg-white text-blue-900 font-bold text-center">
                  {name}
                </div>
              ))}
            </div>
            <div className="flex justify-center gap-2 mt-4">
              {[1,2,3,4,5].map((n) => (
                <button key={n} className="w-8 h-8 rounded border border-gray-300 flex items-center justify-center text-gray-600 hover:bg-blue-100">{n}</button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
} 