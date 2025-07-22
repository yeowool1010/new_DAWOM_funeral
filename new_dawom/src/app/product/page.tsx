'use client';
import { useState, useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import Image from 'next/image';

const tabList = [
  { label: '보급형', value: 'basic' },
  { label: '일반형', value: 'standard' },
  { label: '고급형', value: 'premium' },
  { label: '회사장', value: 'company' },
];

export default function ProductMain() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pageParam = searchParams.get('page');
  const [tab, setTab] = useState('basic');
  const [showTitle, setShowTitle] = useState(false);
  const [showTabContent, setShowTabContent] = useState(false);

  useEffect(() => {
    if (pageParam && tabList.some(t => t.value === pageParam)) {
      setTab(pageParam);
    } else {
      setTab('basic');
    }
  }, [pageParam]);

  const handleTab = (value: string) => {
    setTab(value);
    if (value === 'basic') {
      router.replace('/product');
    } else {
      router.replace(`/product?page=${value}`);
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
        <Image src="/img/main/ms_pdt_bg.jpg" alt="비주얼" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-black bg-opacity-40" />
        <div className="relative z-10 flex flex-col items-center w-full">
          <div className={`text-white text-2xl sm:text-3xl font-bold mb-2 mt-8 transition-all duration-700 animate-fadeInSlideRight ${showTitle ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>초인스상품</div>
          <div className={`h-1 w-12 bg-white rounded-full mb-2 transition-all duration-700 ${showTitle ? 'opacity-80 scale-x-100' : 'opacity-0 scale-x-50'}`}></div>
          <div className={`text-white text-sm flex items-center gap-1 transition-all duration-700 delay-200 ${showTitle ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}>🏠 홈 &gt; 초인스상품 &gt; {tabList.find(t=>t.value===tab)?.label}</div>
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
        {tab === 'basic' && (
          <div>
            <h2 className="text-xl font-bold mb-4">보급형</h2>
            {/* 상품 설명 */}
            <div className="bg-gray-50 rounded-lg p-6 flex flex-col sm:flex-row gap-6 mb-6 items-center">
              <div className="flex-1">
                <div className="font-bold text-lg mb-2">초인스 보급형 230상품</div>
                <div className="text-gray-700 mb-2">실제 가입비나 부담 없이 언제든지 연락 주시면 정직하고 합리적인 후불제상품을 상세히 안내드리며, 엄선된 상품과 시기/지역에 따라 차이가 없는 합리적인 가격으로 정직한 단체 경제공동체를 지향합니다.</div>
              </div>
              <div className="w-40 h-24 relative">
                <Image src="/img/main/brand01_bg.jpg" alt="상품 이미지" fill className="object-cover rounded" />
              </div>
            </div>
            {/* 상세 테이블 */}
            <div className="overflow-x-auto mb-8">
              <table className="min-w-full border text-sm bg-white">
                <thead>
                  <tr className="bg-gray-100 text-gray-900">
                    <th className="border px-2 py-1">구분</th>
                    <th className="border px-2 py-1">지원항목</th>
                    <th className="border px-2 py-1">보급형 230상품</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-gray-50">
                    <td className="border px-2 py-1" rowSpan={2}>고인용품</td>
                    <td className="border px-2 py-1">수의</td>
                    <td className="border px-2 py-1">일반 (면마 100%)</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border px-2 py-1">관</td>
                    <td className="border px-2 py-1">오동나무 1.0치 관<br/>화장/불교/신교(규격)</td>
                  </tr>
                  <tr>
                    <td className="border px-2 py-1" rowSpan={3}>의전용품</td>
                    <td className="border px-2 py-1">현대식/전통식 상복</td>
                    <td className="border px-2 py-1">(남) 양복 4벌 대여<br/>(여) 개량 한복 5벌 대여</td>
                  </tr>
                  <tr>
                    <td className="border px-2 py-1">기타용품</td>
                    <td className="border px-2 py-1">부의록, 위패, 초 등 위령품 일체 제공</td>
                  </tr>
                  <tr>
                    <td className="border px-2 py-1">염습용품</td>
                    <td className="border px-2 py-1">수시포, 손띠, 보자기, 소창 등 염습용품 일체 제공</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border px-2 py-1" rowSpan={2}>장례차량</td>
                    <td className="border px-2 py-1">앰뷸런스</td>
                    <td className="border px-2 py-1">관내(시/구/군) 무료 제공</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border px-2 py-1">캐딜락리무진/장례버스</td>
                    <td className="border px-2 py-1">리무진/버스(45인승), 버스이동시 왕복 200km 기준(국한)</td>
                  </tr>
                  <tr>
                    <td className="border px-2 py-1">제단</td>
                    <td className="border px-2 py-1">제단장식</td>
                    <td className="border px-2 py-1">현장 30회</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border px-2 py-1" rowSpan={2}>인력지원</td>
                    <td className="border px-2 py-1">장례지도사</td>
                    <td className="border px-2 py-1">1명 3일 파견</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border px-2 py-1">장례도우미</td>
                    <td className="border px-2 py-1">3명 8시간</td>
                  </tr>
                </tbody>
              </table>
            </div>
            {/* 이미지 그리드 */}
            <div className="mb-8">
              <div className="font-bold mb-2">보급형 230상품 이미지</div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {[
                  { src: '/img/main/brand01_bg.jpg', label: '초인스표 수의' },
                  { src: '/img/main/brand02_bg.jpg', label: '오동나무관(1.0치)' },
                  { src: '/img/main/ms_pdt_bg.jpg', label: '유골함' },
                  { src: '/img/main/company_ico1.png', label: '현대식 상복' },
                  { src: '/img/main/company_ico2.png', label: '전통식 상복' },
                  { src: '/img/main/ms_pdt_ico.png', label: '기타용품' },
                  { src: '/img/main/brand02_txt.png', label: '앰뷸런스' },
                  { src: '/img/main/brand01_bg.jpg', label: '장례버스(45인승)' },
                ].map((item, idx) => (
                  <div key={idx} className="flex flex-col items-center">
                    <div className="w-24 h-20 relative mb-1">
                      <Image src={item.src} alt={item.label} fill className="object-cover rounded" />
                    </div>
                    <div className="text-xs text-gray-700 text-center">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>
            {/* 상품 유의사항 */}
            <div className="bg-gray-50 rounded-lg p-4 text-xs text-gray-700">
              <div className="font-bold mb-2">상품유의사항</div>
              <ul className="list-disc pl-5 space-y-1">
                <li>상기 품목 및 이미지는 상황에 따라 변경 및 실제와 다를 수 있습니다.</li>
                <li>수의, 관, 상복 등은 실제로 고인 및 고별례 진행 시점에 따라 다소 차이가 있을 수 있습니다.</li>
                <li>조화/고인용품/차량 등은 사용처와 상황에 따라 기준/거리/지역에 따라 추가요금이 발생할 수 있습니다.</li>
                <li>장례식장/화장장 등 외부시설 사용에 따른 비용은 별도입니다.</li>
                <li>상조서비스에 속하지 않으며 행사 메세지는 행사 진행에 어려울 수도 있으므로 행사실시 전 반드시 연락처에 고지해 주셔야 합니다.</li>
                <li>일부 서비스: 고인전용, 의전용품, 장례차량, 제단장식, 인력지원, 행사메세지, 부의록, 위패, 초 등 위령품 일체 제공</li>
                <li>면마 100%수의/오동나무관(1.0치)/현대식상복/전통식상복/기타용품/염습용품/앰뷸런스/장례버스/제단장식/장례지도사/장례도우미</li>
              </ul>
            </div>
          </div>
        )}
        {tab === 'standard' && (
          <div>
            <h2 className="text-xl font-bold mb-4">일반형</h2>
            {/* 상품 설명 */}
            <div className="bg-gray-50 rounded-lg p-6 flex flex-col sm:flex-row gap-6 mb-6 items-center">
              <div className="flex-1">
                <div className="font-bold text-lg mb-2">초인스 일반형 330상품</div>
                <div className="text-gray-700 mb-2">실제 가입비나 부담 없이 언제든지 연락 주시면 정직하고 합리적인 후불제상품을 상세히 안내드리며, 엄선된 상품과 시기/지역에 따라 차이가 없는 합리적인 가격으로 정직한 단체 경제공동체를 지향합니다.</div>
              </div>
              <div className="w-40 h-24 relative">
                <Image src="/img/main/brand01_bg.jpg" alt="상품 이미지" fill className="object-cover rounded" />
              </div>
            </div>
            {/* 상세 테이블 */}
            <div className="overflow-x-auto mb-8">
              <table className="min-w-full border text-sm bg-white">
                <thead>
                  <tr className="bg-gray-100 text-gray-900">
                    <th className="border px-2 py-1">구분</th>
                    <th className="border px-2 py-1">지원항목</th>
                    <th className="border px-2 py-1">일반형 330상품</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-gray-50">
                    <td className="border px-2 py-1" rowSpan={2}>고인용품</td>
                    <td className="border px-2 py-1">수의</td>
                    <td className="border px-2 py-1">고급 (면마 100%)</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border px-2 py-1">관</td>
                    <td className="border px-2 py-1">오동나무 1.5치 관<br/>화장/불교/신교(규격)</td>
                  </tr>
                  <tr>
                    <td className="border px-2 py-1" rowSpan={3}>의전용품</td>
                    <td className="border px-2 py-1">현대식/전통식 상복</td>
                    <td className="border px-2 py-1">(남) 전통상복/셋트 5벌 대여<br/>(여) 개량한복 5벌 대여</td>
                  </tr>
                  <tr>
                    <td className="border px-2 py-1">기타용품</td>
                    <td className="border px-2 py-1">부의록, 위패, 초 등 위령품 일체 제공</td>
                  </tr>
                  <tr>
                    <td className="border px-2 py-1">염습용품</td>
                    <td className="border px-2 py-1">수시포, 손띠, 보자기, 소창 등 염습용품 일체 제공</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border px-2 py-1" rowSpan={2}>장례차량</td>
                    <td className="border px-2 py-1">앰뷸런스</td>
                    <td className="border px-2 py-1">관내(시/구/군) 무료 제공</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border px-2 py-1">캐딜락리무진/장례버스</td>
                    <td className="border px-2 py-1">리무진/버스(45인승), 버스이동시 왕복 200km 기준(국한)</td>
                  </tr>
                  <tr>
                    <td className="border px-2 py-1">제단</td>
                    <td className="border px-2 py-1">제단장식</td>
                    <td className="border px-2 py-1">현장 30회 제공</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border px-2 py-1" rowSpan={2}>인력지원</td>
                    <td className="border px-2 py-1">장례지도사</td>
                    <td className="border px-2 py-1">1명 3일 파견</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border px-2 py-1">장례도우미</td>
                    <td className="border px-2 py-1">5명 8시간</td>
                  </tr>
                  <tr>
                    <td className="border px-2 py-1">발인도우미</td>
                    <td className="border px-2 py-1">-</td>
                    <td className="border px-2 py-1">1명 파견 (별도 협의)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}
        {tab === 'premium' && (
          <div>
            <h2 className="text-xl font-bold mb-4">고급형</h2>
            {/* 상품 설명 */}
            <div className="bg-gray-50 rounded-lg p-6 flex flex-col sm:flex-row gap-6 mb-6 items-center">
              <div className="flex-1">
                <div className="font-bold text-lg mb-2">초인스 고급형 430상품</div>
                <div className="text-gray-700 mb-2">실제 가입비나 부담 없이 언제든지 연락 주시면 정직하고 합리적인 후불제상품을 상세히 안내드리며, 엄선된 상품과 시기/지역에 따라 차이가 없는 합리적인 가격으로 정직한 단체 경제공동체를 지향합니다.</div>
              </div>
              <div className="w-40 h-24 relative">
                <Image src="/img/main/brand01_bg.jpg" alt="상품 이미지" fill className="object-cover rounded" />
              </div>
            </div>
            {/* 상세 테이블 */}
            <div className="overflow-x-auto mb-8">
              <table className="min-w-full border text-sm bg-white">
                <thead>
                  <tr className="bg-gray-100 text-gray-900">
                    <th className="border px-2 py-1">구분</th>
                    <th className="border px-2 py-1">지원항목</th>
                    <th className="border px-2 py-1">고급형 430상품</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-gray-50">
                    <td className="border px-2 py-1" rowSpan={2}>고인용품</td>
                    <td className="border px-2 py-1">수의</td>
                    <td className="border px-2 py-1">고급 (면마 100%)</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border px-2 py-1">관</td>
                    <td className="border px-2 py-1">오동나무 1.5치(이하관)<br/>화장/불교/신교(규격)</td>
                  </tr>
                  <tr>
                    <td className="border px-2 py-1" rowSpan={3}>의전용품</td>
                    <td className="border px-2 py-1">현대식/전통식 상복</td>
                    <td className="border px-2 py-1">(남) 전통상복/셋트 10벌 대여<br/>(여) 개량한복 10벌 대여</td>
                  </tr>
                  <tr>
                    <td className="border px-2 py-1">기타용품</td>
                    <td className="border px-2 py-1">부의록, 위패, 초 등 위령품 일체 제공</td>
                  </tr>
                  <tr>
                    <td className="border px-2 py-1">염습용품</td>
                    <td className="border px-2 py-1">수시포, 손띠, 보자기, 소창 등 염습용품 일체 제공</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border px-2 py-1" rowSpan={2}>장례차량</td>
                    <td className="border px-2 py-1">앰뷸런스</td>
                    <td className="border px-2 py-1">관내(시/구/군) 무료 제공</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border px-2 py-1">캐딜락리무진/장례버스</td>
                    <td className="border px-2 py-1">리무진 5대, 버스45인승 왕복 300km 기준(국한)</td>
                  </tr>
                  <tr>
                    <td className="border px-2 py-1">제단</td>
                    <td className="border px-2 py-1">제단장식</td>
                    <td className="border px-2 py-1">현장 50회 이상<br/>제단 자재조 30건</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border px-2 py-1" rowSpan={2}>인력지원</td>
                    <td className="border px-2 py-1">장례지도사</td>
                    <td className="border px-2 py-1">1명 3일 파견</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border px-2 py-1">장례도우미</td>
                    <td className="border px-2 py-1">8명 8시간</td>
                  </tr>
                  <tr>
                    <td className="border px-2 py-1">발인도우미</td>
                    <td className="border px-2 py-1">-</td>
                    <td className="border px-2 py-1">1명 파견 (별도 협의)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}
        {tab === 'company' && (
          <div className="bg-white rounded-lg py-10 px-2 sm:px-8">
            <h2 className="text-2xl font-bold text-center mb-6">회사장</h2>
            <div className="text-center text-base text-gray-800 mb-6 leading-relaxed">
              회사장은 각 기업 및 단체의 특성 그리고 유가족의 의견에 따라 규모로 결정하고,<br/>
              장례식장의 빈소, 분향소의 설치, 영결식장 건정, 양장지의 결정 등 여러가지 상황을 고려하여 <span className="font-bold text-blue-700">상담 후 결정하게 됩니다.</span>
            </div>
            <div className="flex justify-center mb-10">
              <div className="w-full max-w-2xl aspect-[3/2] bg-white rounded-lg shadow overflow-hidden border border-gray-200 flex items-center justify-center relative">
                <Image src="/img/290/123_list04_5_img.jpg" alt="회사장 대표사진" fill className="object-cover" />
              </div>
            </div>
            <div className="bg-[#f5f6f7] rounded-lg p-4 sm:p-6 flex justify-center">
              <div className="w-full max-w-5xl">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {[
                    '/img/290/123_list01_1_img.jpg',
                    '/img/290/123_list01_2_img.jpg',
                    '/img/290/123_list01_3_img.jpg',
                    '/img/290/123_list01_4_img.jpg',
                    '/img/290/123_list01_5_img.jpg',
                    '/img/390/123_list01_3_img.jpg',
                    '/img/390/123_list01_4_img.jpg',
                    '/img/390/123_list01_5_img.jpg',
                  ].map((src, i) => (
                    <div key={src} className="w-full aspect-[4/3] bg-white rounded overflow-hidden border border-gray-200 flex items-center justify-center relative">
                      <Image src={src} alt={`회사장 갤러리${i+1}`} fill className="object-cover" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
} 