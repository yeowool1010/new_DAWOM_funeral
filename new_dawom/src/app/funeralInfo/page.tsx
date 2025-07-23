'use client';
import React, { useState, useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import Image from 'next/image';

const tabList = [
  { label: '장례절차', value: 'procedure' },
  { label: '종교별장례절차', value: 'religion' },
  { label: '장례행정', value: 'admin' },
];

export default function FuneralInfoMain() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pageParam = searchParams.get('page');
  const [tab, setTab] = useState('procedure');
  const [showTitle, setShowTitle] = useState(false);
  const [showTabContent, setShowTabContent] = useState(false);
  const [religionTab, setReligionTab] = useState('기독교');

  useEffect(() => {
    if (pageParam && tabList.some(t => t.value === pageParam)) {
      setTab(pageParam);
    } else {
      setTab('procedure');
    }
  }, [pageParam]);

  const handleTab = (value: string) => {
    setTab(value);
    if (value === 'procedure') {
      router.replace('/funeralInfo');
    } else {
      router.replace(`/funeralInfo?page=${value}`);
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
        <Image src="/img/main/brand01_bg.jpg" alt="비주얼" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-black bg-opacity-40" />
        <div className="relative z-10 flex flex-col items-center w-full">
          <div className={`text-white text-2xl sm:text-3xl font-bold mb-2 mt-8 transition-all duration-700 animate-fadeInSlideRight ${showTitle ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>장의정보</div>
          <div className={`h-1 w-12 bg-white rounded-full mb-2 transition-all duration-700 ${showTitle ? 'opacity-80 scale-x-100' : 'opacity-0 scale-x-50'}`}></div>
          <div className={`text-white text-sm flex items-center gap-1 transition-all duration-700 delay-200 ${showTitle ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}>🏠 홈 &gt; 장의정보 &gt; {tabList.find(t=>t.value===tab)?.label}</div>
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
        {tab === 'procedure' && (
          <div className="max-w-2xl mx-auto">
            <h2 className="text-xl font-bold text-center mb-8">장례절차</h2>
            {/* 1일차 */}
            <div className="rounded-t-lg pt-6 pb-2">
              <div className="text-lg font-bold text-center mb-2">1일차</div>
              <div className="border-t border-black mb-2" />
              <table className="w-full text-sm mb-4">
                <tbody>
                  <tr className="align-top">
                    <td className="font-bold w-24 py-2">임종</td>
                    <td className="py-2">
                      <ul className="list-disc pl-4 space-y-1">
                        <li>임종확인, 사망진단서, 119, 경찰 신고</li>
                        <li>장례식장, 장례지도사, 장례용품 상담 및 장례식장 예약</li>
                        <li>장례식장 도착, 빈소 설치, 상주/조문객 동선 안내</li>
                        <li>고인 안치, 장례지도사 도착 시 장례절차 상세 안내 및 상담</li>
                      </ul>
                    </td>
                  </tr>
                  <tr className="align-top">
                    <td className="font-bold w-24 py-2">장례식장 도착</td>
                    <td className="py-2">
                      <ul className="list-disc pl-4 space-y-1">
                        <li>고인 안치(입관실/안치실), 빈소 설치(영정, 위패, 조화, 분향소, 장의용품)</li>
                        <li>상주/가족/친지/조문객 동선 안내, 장례일정 협의</li>
                        <li>장례지도사 도착 시 장례절차 상세 안내 및 상담</li>
                        <li>상주/가족/친지/조문객 안내, 빈소/장례식장/장례용품/장례절차 안내</li>
                      </ul>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            {/* 2일차 */}
            <div className="pt-6 pb-2">
              <div className="text-lg font-bold text-center mb-2">2일차</div>
              <div className="border-t border-black mb-2" />
              <table className="w-full text-sm mb-4">
                <tbody>
                  <tr className="align-top">
                    <td className="font-bold w-24 py-2">입관 및 염습</td>
                    <td className="py-2">
                      <ul className="list-disc pl-4 space-y-1">
                        <li>입관(수의, 관, 입관용품, 염습, 입관지도사, 상복, 장의용품)</li>
                        <li>염습(수시포, 손띠, 보자기, 소창 등 염습용품 일체 제공)</li>
                        <li>입관 후 빈소 정리, 상주/가족/친지/조문객 안내</li>
                      </ul>
                    </td>
                  </tr>
                  <tr className="align-top">
                    <td className="font-bold w-24 py-2">성복</td>
                    <td className="py-2">
                      <ul className="list-disc pl-4 space-y-1">
                        <li>성복(상복 착용, 상주/가족/친지/조문객 안내, 상복/장의용품/장례지도사/장례용품 안내)</li>
                        <li>장례지도사 도착 시 장례절차 상세 안내 및 상담</li>
                        <li>장례지도사, 상복, 장례용품, 장례지도사, 상주/가족/친지/조문객 안내</li>
                      </ul>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            {/* 3일차 */}
            <div className="pt-6 pb-2">
              <div className="text-lg font-bold text-center mb-2">3일차</div>
              <div className="border-t border-black mb-2" />
              <table className="w-full text-sm mb-4">
                <tbody>
                  <tr className="align-top">
                    <td className="font-bold w-24 py-2">발인제</td>
                    <td className="py-2">
                      <ul className="list-disc pl-4 space-y-1">
                        <li>발인제 진행</li>
                        <li>장례지도사 도착 시 장례절차 상세 안내, 발인제, 장례지도사, 차량운행, 화장장/묘지/납골당 안내</li>
                      </ul>
                    </td>
                  </tr>
                  <tr className="align-top">
                    <td className="font-bold w-24 py-2">발인</td>
                    <td className="py-2">
                      <ul className="list-disc pl-4 space-y-1">
                        <li>모든 가족/친지/조문객 인사 및 출발 준비</li>
                      </ul>
                    </td>
                  </tr>
                  <tr className="align-top">
                    <td className="font-bold w-24 py-2">하관</td>
                    <td className="py-2">
                      <ul className="list-disc pl-4 space-y-1">
                        <li>하관(묘지/화장장/납골당 등), 장례지도사 도착 시 장례절차 상세 안내</li>
                        <li>장례지도사, 차량운행, 화장장/묘지/납골당 안내</li>
                      </ul>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            {/* 장례후의식 */}
            <div className="pt-6 pb-2 rounded-b-lg">
              <div className="text-lg font-bold text-center mb-2">장례후의식</div>
              <div className="border-t border-black mb-2" />
              <table className="w-full text-sm mb-4">
                <tbody>
                  <tr className="align-top">
                    <td className="font-bold w-24 py-2">반혼제</td>
                    <td className="py-2">반혼제 진행(장례지도사 도착 시 장례절차 상세 안내, 반혼제, 차량운행, 화장장/묘지/납골당 안내, 장례지도사, 차량운행, 화장장/묘지/납골당 안내)</td>
                  </tr>
                  <tr className="align-top">
                    <td className="font-bold w-24 py-2">삼우제</td>
                    <td className="py-2">삼우제 진행(장례지도사 도착 시 장례절차 상세 안내)</td>
                  </tr>
                  <tr className="align-top">
                    <td className="font-bold w-24 py-2">49제</td>
                    <td className="py-2">49제 진행(장례지도사 도착 시 장례절차 상세 안내, 반혼제, 차량운행, 화장장/묘지/납골당 안내)</td>
                  </tr>
                  <tr className="align-top">
                    <td className="font-bold w-24 py-2">기타</td>
                    <td className="py-2">기타 후속의식 진행</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}
        {tab === 'religion' && (
          <div className="max-w-2xl mx-auto">
            <h2 className="text-xl font-bold text-center mb-8">종교별장례절차</h2>
            {/* 탭 */}
            <div className="flex justify-center mb-8">
              {['기독교', '불교', '천주교'].map((t, idx) => (
                <button
                  key={t}
                  className={`flex-1 border px-4 py-2 text-center font-semibold ${religionTab === t ? 'bg-gray-100 border-b-2 border-black' : 'bg-white border-b'} ${idx === 0 ? 'rounded-l' : ''} ${idx === 2 ? 'rounded-r' : ''}`}
                  onClick={() => setReligionTab(t)}
                >
                  {t}
                </button>
              ))}
            </div>
            {/* 탭별 내용 */}
            {religionTab === '기독교' && (
              <>
                <div className="text-lg font-bold text-center mb-4">기독교 장례절차</div>
                <table className="w-full text-sm mb-6">
                  <tbody>
                    <tr>
                      <td className="font-bold w-32 align-top py-2">기독교 장례</td>
                      <td className="py-2">기독교 장례는 사랑과 희망의 메시지를 전하며, 사망한 신자의 부활과 영생을 강조합니다. 예배와 찬송, 기도, 성경봉독, 설교, 추모사, 조가, 축도, 하관예배 등으로 진행됩니다.</td>
                    </tr>
                    <tr>
                      <td className="font-bold w-32 align-top py-2">기독교 장례 특징</td>
                      <td className="py-2">예배 중심, 소박함, 절제, 부활 신앙 강조. 예식은 교회나 장례식장에서 진행하며, 기독교식 장례지도사가 예배를 인도합니다.</td>
                    </tr>
                  </tbody>
                </table>
                <div className="bg-gray-100 p-4 rounded mb-4">
                  <div className="font-bold mb-2">입관예배</div>
                  <div>고인의 시신을 관에 모시기 전 예배를 드립니다. 예배에는 찬송, 기도, 성경봉독, 설교, 추모사, 조가, 축도 등이 포함됩니다.</div>
                </div>
                <div className="bg-gray-100 p-4 rounded mb-4">
                  <div className="font-bold mb-2">발인예배 (출관 전 드리는 예배)</div>
                  <ul className="list-decimal pl-6 space-y-1">
                    <li>찬송: 1곡(임의)</li>
                    <li>기도: 가족 또는 교역자</li>
                    <li>성경봉독: 시편 23편, 요한복음 14장 등</li>
                    <li>설교: 교역자</li>
                    <li>추모사: 가족, 친지, 교우</li>
                    <li>조가: 1곡(임의)</li>
                    <li>축도: 교역자</li>
                    <li>출관: 교역자 인도 하에 출관</li>
                  </ul>
                </div>
                <div className="bg-gray-100 p-4 rounded mb-4">
                  <div className="font-bold mb-2">하관예배</div>
                  <ul className="list-decimal pl-6 space-y-1">
                    <li>찬송: 1곡(임의)</li>
                    <li>기도: 가족 또는 교역자</li>
                    <li>성경봉독: 고린도전서 15장 등</li>
                    <li>설교: 교역자</li>
                    <li>조가: 1곡(임의)</li>
                    <li>축도: 교역자</li>
                  </ul>
                </div>
              </>
            )}
            {religionTab === '불교' && (
              <>
                <div className="text-lg font-bold text-center mb-4">불교 장례절차</div>
                <table className="w-full text-sm mb-6">
                  <tbody>
                    <tr>
                      <td className="font-bold w-32 align-top py-2">불교 장례</td>
                      <td className="py-2">불교 장례는 윤회와 해탈의 의미를 담고 있습니다. 염불, 독경, 법문, 천도재, 발인, 하관, 회향 등으로 진행됩니다.</td>
                    </tr>
                  </tbody>
                </table>
                <div className="bg-gray-100 p-4 rounded mb-4">
                  <div className="font-bold mb-2">염불/독경</div>
                  <div>스님이 염불과 독경을 하며 고인의 극락왕생을 기원합니다.</div>
                </div>
                <div className="bg-gray-100 p-4 rounded mb-4">
                  <div className="font-bold mb-2">입관식</div>
                  <div>고인의 시신을 관에 모시고, 가족과 친지들이 마지막 인사를 나눕니다.</div>
                </div>
                <div className="bg-gray-100 p-4 rounded mb-4">
                  <div className="font-bold mb-2">발인식</div>
                  <div>고인을 장지로 모시기 전 마지막 예를 올립니다.</div>
                </div>
                <div className="bg-gray-100 p-4 rounded mb-4">
                  <div className="font-bold mb-2">하관식</div>
                  <div>고인을 장지에 모시고, 회향(마무리 의식)으로 장례를 마칩니다.</div>
                </div>
              </>
            )}
            {religionTab === '천주교' && (
              <>
                <div className="text-lg font-bold text-center mb-4">천주교 장례절차</div>
                <table className="w-full text-sm mb-6">
                  <tbody>
                    <tr>
                      <td className="font-bold w-32 align-top py-2">천주교 장례</td>
                      <td className="py-2">천주교 장례는 하느님의 자비와 사랑을 강조하며, 임종, 연도, 입관, 장례미사, 발인, 하관, 위령미사 등으로 진행됩니다.</td>
                    </tr>
                  </tbody>
                </table>
                <div className="bg-gray-100 p-4 rounded mb-4">
                  <div className="font-bold mb-2">임종/연도</div>
                  <div>임종 시 가족과 신부님이 함께 기도하며, 연도를 바칩니다.</div>
                </div>
                <div className="bg-gray-100 p-4 rounded mb-4">
                  <div className="font-bold mb-2">입관식</div>
                  <div>고인의 시신을 관에 모시고, 가족과 신부님이 기도합니다.</div>
                </div>
                <div className="bg-gray-100 p-4 rounded mb-4">
                  <div className="font-bold mb-2">장례미사</div>
                  <div>고인을 위해 미사를 봉헌하며, 하느님의 자비를 기원합니다.</div>
                </div>
                <div className="bg-gray-100 p-4 rounded mb-4">
                  <div className="font-bold mb-2">발인/하관</div>
                  <div>고인을 장지로 모시고, 하관 예식을 진행합니다.</div>
                </div>
                <div className="bg-gray-100 p-4 rounded mb-4">
                  <div className="font-bold mb-2">위령미사</div>
                  <div>장례 후 위령미사를 봉헌하여 고인을 추모합니다.</div>
                </div>
              </>
            )}
          </div>
        )}
        {tab === 'admin' && (
          <div className="max-w-3xl mx-auto">
            <h2 className="text-xl font-bold text-center mb-8">장례행정</h2>
            {/* 사망신고 */}
            <div className="border-t-4 border-blue-600 bg-gray-50 rounded mb-6">
              <div className="font-bold text-base px-4 pt-4 pb-2">사망신고</div>
              <table className="w-full text-sm px-4 pb-4">
                <tbody>
                  <tr>
                    <td className="font-bold w-24 py-1 align-top">신고기한</td>
                    <td className="py-1">사망일로부터 1개월 이내(지연시 과태료 부과)</td>
                  </tr>
                  <tr>
                    <td className="font-bold w-24 py-1 align-top">신고장소</td>
                    <td className="py-1">사망자의 본적지 또는 신고인의 주소지 시/군/구청</td>
                  </tr>
                  <tr>
                    <td className="font-bold w-24 py-1 align-top">신고인</td>
                    <td className="py-1">호주, 친족, 동거자 또는 사망장소를 관리하는 자, 기타 이해관계인·대표로 권한을 가진 자</td>
                  </tr>
                  <tr>
                    <td className="font-bold w-24 py-1 align-top">준비서류</td>
                    <td className="py-1">사망신고서 1부(구청 비치), 사망진단서(시체검안서) 1부, 신고인 신분증, 고인의 주민등록 등본 1부(고인 사망시는 조주신고에 필요), (외국인) 외국인등록사실증명서 등, 이해관계인: 증명서류 첨부, 증인이면 인감증명서 또는 주민등록증 사본 각 1부 첨부</td>
                  </tr>
                </tbody>
              </table>
            </div>
            {/* 상속신고 */}
            <div className="border-t-4 border-blue-600 bg-gray-50 rounded mb-6">
              <div className="font-bold text-base px-4 pt-4 pb-2">상속신고</div>
              <table className="w-full text-sm px-4 pb-4">
                <tbody>
                  <tr>
                    <td className="font-bold w-24 py-1 align-top">상속개시</td>
                    <td className="py-1">상속은 사망으로부터 시작되며 재산상속(부동산 등기 등)은 일정한 개별법에 따라 가능</td>
                  </tr>
                  <tr>
                    <td className="font-bold w-24 py-1 align-top">포기신고</td>
                    <td className="py-1">상속개시 3개월 이내에 주소지 관할 가정법원에 한다. 상속포기는 상속개시가 있어 상속인이 사망을 안 때로부터 3개월 이내에 포기신고를 하여야 하며, 그 시점을 넘기면 3개월 이내에 하였더라도 포기신고로서의 효력이 없다. (상속포기 등기는 해당자 모두에게 받아야 효력 발생. 혼인 별거 자녀도 마찬가지)</td>
                  </tr>
                </tbody>
              </table>
            </div>
            {/* 자동차이전등록신고 */}
            <div className="border-t-4 border-blue-600 bg-gray-50 rounded mb-6">
              <div className="font-bold text-base px-4 pt-4 pb-2">자동차이전등록신고</div>
              <table className="w-full text-sm px-4 pb-4">
                <tbody>
                  <tr>
                    <td className="font-bold w-24 py-1 align-top">상속개시</td>
                    <td className="py-1">상속은 사망으로부터 시작되며 재산상속(부동산 등기 등)은 일정한 개별법에 따라 가능</td>
                  </tr>
                  <tr>
                    <td className="font-bold w-24 py-1 align-top">포기신고</td>
                    <td className="py-1">상속개시 3개월 이내에 주소지 관할 가정법원에 한다. 상속포기는 상속개시가 있어 상속인이 사망을 안 때로부터 3개월 이내에 포기신고를 하여야 하며, 그 시점을 넘기면 3개월 이내에 하였더라도 포기신고로서의 효력이 없다. (상속포기 등기는 해당자 모두에게 받아야 효력 발생. 혼인 별거 자녀도 마찬가지)</td>
                  </tr>
                </tbody>
              </table>
            </div>
            {/* 국민연금급여신청 */}
            <div className="border-t-4 border-blue-600 bg-gray-50 rounded mb-6">
              <div className="font-bold text-base px-4 pt-4 pb-2">국민연금급여신청</div>
              <table className="w-full text-sm px-4 pb-4">
                <tbody>
                  <tr>
                    <td className="font-bold w-24 py-1 align-top">대상</td>
                    <td className="py-1">고인이 국민연금 가입자인 경우</td>
                  </tr>
                  <tr>
                    <td className="font-bold w-24 py-1 align-top">신청인</td>
                    <td className="py-1">고인의 유족(배우자, 자녀 등)</td>
                  </tr>
                  <tr>
                    <td className="font-bold w-24 py-1 align-top">내용</td>
                    <td className="py-1">사망연금, 유족연금, 사망일시금 등 지급. 신청서류: 사망진단서, 혼인관계증명서, 가족관계증명서, 기본증명서, 신분증, 통장사본, 상속인 동의서 등</td>
                  </tr>
                </tbody>
              </table>
            </div>
            {/* 금융거래 조회 */}
            <div className="border-t-4 border-blue-600 bg-gray-50 rounded mb-6">
              <div className="font-bold text-base px-4 pt-4 pb-2">금융거래 조회</div>
              <table className="w-full text-sm px-4 pb-4">
                <tbody>
                  <tr>
                    <td className="font-bold w-24 py-1 align-top">대상</td>
                    <td className="py-1">고인의 금융거래가 존재할 경우</td>
                  </tr>
                  <tr>
                    <td className="font-bold w-24 py-1 align-top">조회기관</td>
                    <td className="py-1">금융감독원 소비자보호센터</td>
                  </tr>
                  <tr>
                    <td className="font-bold w-24 py-1 align-top">확인내용</td>
                    <td className="py-1">예금·대출, 신용카드, 보험계약, 거래내역확인, 보험계약 유무 등</td>
                  </tr>
                  <tr>
                    <td className="font-bold w-24 py-1 align-top">준비서류</td>
                    <td className="py-1">사망자 본인서류(사망진단서 1부, 가족관계증명서 1부, 혼인관계증명서 1부, 신분증 사본 1부, 인감증명서(사본) 1부, 위임장(상속인) 1부, 조회신청서(금감원양식) 1부, 신분증(상속인) 1부, 인감증명서(상속인) 1부, 신분증(상속인) 1부, 신청인(상속인) 신분증)</td>
                  </tr>
                </tbody>
              </table>
              <div className="text-xs text-gray-500 px-4 pb-4">※ 문의전화 : 1332 (인터넷/전화 가능)</div>
            </div>
            {/* 각종보험금 */}
            <div className="border-t-4 border-blue-600 bg-gray-50 rounded mb-6">
              <div className="font-bold text-base px-4 pt-4 pb-2">각종보험금</div>
              <table className="w-full text-sm px-4 pb-4">
                <tbody>
                  <tr>
                    <td className="font-bold w-24 py-1 align-top">대상</td>
                    <td className="py-1">고인이 보험사에 가입한 경우</td>
                  </tr>
                  <tr>
                    <td className="font-bold w-24 py-1 align-top">지급</td>
                    <td className="py-1">보험사에 따라 상이함</td>
                  </tr>
                  <tr>
                    <td className="font-bold w-24 py-1 align-top">준비서류</td>
                    <td className="py-1">사망진단서 1부, 보험금 청구서(보험사 양식), 사고경위서, 청구자 신분증(사본), 가족관계증명서, 혼인관계증명서, 수취자 주민등록증, 수취자 통장 사본, 수취자 도장, 사망경위에 따른 기타 서류, 위임장, 위임자 인감 증명서, 신분증</td>
                  </tr>
                </tbody>
              </table>
            </div>
            {/* 화장장려금 */}
            <div className="border-t-4 border-blue-600 bg-gray-50 rounded mb-6">
              <div className="font-bold text-base px-4 pt-4 pb-2">화장장려금</div>
              <table className="w-full text-sm px-4 pb-4">
                <tbody>
                  <tr>
                    <td className="font-bold w-24 py-1 align-top">내용</td>
                    <td className="py-1">화장으로 장례하고자 지자체별로 육아지원금이 지급되는 장려금</td>
                  </tr>
                  <tr>
                    <td className="font-bold w-24 py-1 align-top">장려금액</td>
                    <td className="py-1">지자체별로 차이 있음(10만원~42만원)</td>
                  </tr>
                  <tr>
                    <td className="font-bold w-24 py-1 align-top">준비서류</td>
                    <td className="py-1">화장장려금 신청서, 사망진단서, 화장증명서, 수취자통장, 주민등록등본, 가족관계증명서, (지자체별로 상이: 고인의 주민등록 등본, 사후 30일 이내 신청)</td>
                  </tr>
                  <tr>
                    <td className="font-bold w-24 py-1 align-top">기타</td>
                    <td className="py-1">5년 이내에만 신청 가능</td>
                  </tr>
                  <tr>
                    <td className="font-bold w-24 py-1 align-top">장려금 사용 지자체</td>
                    <td className="py-1">예: 강원도, 도청, 원주시, 강릉시, 고성, 인제, 양양, 정선, 철원, 춘천, 태백, 평창, 홍천, 화천, 횡성, 동해, 삼척, 속초, 서울, 부산, 대구, 인천, 광주, 대전, 울산, 세종, 경기, 강원, 충북, 충남, 전북, 전남, 경북, 경남, 제주</td>
                  </tr>
                  <tr>
                    <td className="font-bold w-24 py-1 align-top">준비서류-참고</td>
                    <td className="py-1">-참고: 도청, 시청</td>
                  </tr>
                </tbody>
              </table>
            </div>
            {/* 기초수급대상자 장제비 지원 */}
            <div className="border-t-4 border-blue-600 bg-gray-50 rounded mb-6">
              <div className="font-bold text-base px-4 pt-4 pb-2">기초수급대상자 장제비 지원</div>
              <table className="w-full text-sm px-4 pb-4">
                <tbody>
                  <tr>
                    <td className="font-bold w-24 py-1 align-top">내용</td>
                    <td className="py-1">국민기초생활보장법에 의거 수급대상자가 사망할 경우 장제비 지원</td>
                  </tr>
                  <tr>
                    <td className="font-bold w-24 py-1 align-top">지원금액</td>
                    <td className="py-1">근로능력 없는 자는 1구당 80만원(최대 2구까지 160만원)</td>
                  </tr>
                  <tr>
                    <td className="font-bold w-24 py-1 align-top">준비서류</td>
                    <td className="py-1">장제비신청서, 사망진단서, 통장사본(고인의 주민등록 등본, 읍/면/동 주민센터에 신청)</td>
                  </tr>
                  <tr>
                    <td className="font-bold w-24 py-1 align-top">기타</td>
                    <td className="py-1">5년 이내에 신청 지자체</td>
                  </tr>
                </tbody>
              </table>
            </div>
            {/* 국가유공자 장제비 지원 */}
            <div className="border-t-4 border-blue-600 bg-gray-50 rounded mb-6">
              <div className="font-bold text-base px-4 pt-4 pb-2">국가유공자 장제비 지원</div>
              <table className="w-full text-sm px-4 pb-4">
                <tbody>
                  <tr>
                    <td className="font-bold w-24 py-1 align-top">내용</td>
                    <td className="py-1">국립묘지 안장대상자(국가유공자)가 사망하여 국립묘지에 안장되지 않은 경우</td>
                  </tr>
                  <tr>
                    <td className="font-bold w-24 py-1 align-top">신청인</td>
                    <td className="py-1">국가가족</td>
                  </tr>
                  <tr>
                    <td className="font-bold w-24 py-1 align-top">신청장소</td>
                    <td className="py-1">국가보훈처</td>
                  </tr>
                  <tr>
                    <td className="font-bold w-24 py-1 align-top">지원금액</td>
                    <td className="py-1">15만원</td>
                  </tr>
                  <tr>
                    <td className="font-bold w-24 py-1 align-top">준비서류</td>
                    <td className="py-1">장제비신청서, 사망진단서, 가족관계증명서, 리턴동의서 사본</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
