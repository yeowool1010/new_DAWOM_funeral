'use client';
import React, { useState, useEffect, useMemo } from 'react';
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
  const [facilityRegion, setFacilityRegion] = useState('서울'); // 장례식장 지역 필터
  const [facilityList, setFacilityList] = useState<Record<string, { name: string; address: string; tel: string }[]>>({
    '서울': [
      { name: '서울 장례식장', address: '서울특별시 종로구 종로 100', tel: '02-123-4567' },
      { name: '서울 장례식장', address: '서울특별시 종로구 종로 200', tel: '02-123-4568' },
    ],
    '경기': [
      { name: '경기 장례식장', address: '경기도 수원시 팔달구 팔달로 100', tel: '031-123-4567' },
      { name: '경기 장례식장', address: '경기도 수원시 팔달구 팔달로 200', tel: '031-123-4568' },
    ],
    '인천': [
      { name: '인천 장례식장', address: '인천광역시 연수구 연수로 100', tel: '032-123-4567' },
      { name: '인천 장례식장', address: '인천광역시 연수구 연수로 200', tel: '032-123-4568' },
    ],
    '강원': [
      { name: '강원 장례식장', address: '강원도 춘천시 춘천로 100', tel: '033-123-4567' },
      { name: '강원 장례식장', address: '강원도 춘천시 춘천로 200', tel: '033-123-4568' },
    ],
    '충청': [
      { name: '충청 장례식장', address: '충청북도 청주시 청주로 100', tel: '043-123-4567' },
      { name: '충청 장례식장', address: '충청북도 청주시 청주로 200', tel: '043-123-4568' },
    ],
    '전라': [
      { name: '전라 장례식장', address: '전라남도 목포시 목포로 100', tel: '061-123-4567' },
      { name: '전라 장례식장', address: '전라남도 목포시 목포로 200', tel: '061-123-4568' },
    ],
    '경상': [
      { name: '경상 장례식장', address: '경상남도 부산시 해운대구 해운대로 100', tel: '051-123-4567' },
      { name: '경상 장례식장', address: '경상남도 부산시 해운대구 해운대로 200', tel: '051-123-4568' },
    ],
    '제주': [
      { name: '제주 장례식장', address: '제주특별자치도 제주시 제주로 100', tel: '064-123-4567' },
      { name: '제주 장례식장', address: '제주특별자치도 제주시 제주로 200', tel: '064-123-4568' },
    ],
  });

  const regionGroups = [
    ['서울', '경기', '인천', '강원', '충북', '충남', '대전'],
    ['경북', '경남', '부산', '대구', '울산', '전북', '전남', '광주', '제주'],
  ];
  const cityOptions: Record<string, string[]> = {
    '서울': ['강남구', '서초구', '종로구'],
    '경기': ['수원시', '성남시', '고양시'],
    '인천': ['연수구', '남동구', '부평구'],
    '강원': ['춘천시', '원주시'],
    '충북': ['청주시', '충주시'],
    '충남': ['천안시', '아산시'],
    '대전': ['서구', '유성구'],
    '경북': ['포항시', '경주시'],
    '경남': ['창원시', '진주시'],
    '부산': ['해운대구', '부산진구'],
    '대구': ['달서구', '수성구'],
    '울산': ['남구', '동구'],
    '전북': ['전주시', '군산시'],
    '전남': ['목포시', '여수시'],
    '광주': ['동구', '서구'],
    '제주': ['제주시', '서귀포시'],
  };

  const [searchName, setSearchName] = useState('');
  const [searchRegion, setSearchRegion] = useState('서울');
  const [searchCity, setSearchCity] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // 필터링된 리스트
  const filteredList = useMemo(() => {
    let list = facilityList[facilityRegion] || [];
    if (searchName.trim()) {
      list = list.filter(item => item.name.includes(searchName.trim()));
    }
    if (searchCity) {
      list = list.filter(item => item.address.includes(searchCity));
    }
    return list;
  }, [facilityList, facilityRegion, searchName, searchCity]);

  const totalPages = Math.ceil(filteredList.length / itemsPerPage);
  const paginatedList = filteredList.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const handleRegionClick = (region: string) => {
    setFacilityRegion(region);
    setSearchRegion(region);
    setSearchCity('');
    setCurrentPage(1);
  };
  const handleNameSearch = () => {
    setCurrentPage(1);
  };
  const handleRegionSearch = () => {
    setFacilityRegion(searchRegion);
    setCurrentPage(1);
  };
  const handleCitySearch = () => {
    setFacilityRegion(searchRegion);
    setSearchCity(searchCity);
    setCurrentPage(1);
  };

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

  // facilityTab 상태 추가 (hall, park, crematory, columbarium)
  // 탭별 데이터
  const facilityData: Record<string, Record<string, { name: string; address: string; tel: string }[]>> = {
    hall: facilityList,
    park: {
      '서울': [
        { name: '서울공원묘지', address: '서울특별시 강남구 공원로 100', tel: '02-555-1111' },
        { name: '서울추모공원', address: '서울특별시 강남구 추모로 200', tel: '02-555-2222' },
      ],
      '경기': [
        { name: '경기공원묘지', address: '경기도 용인시 공원로 100', tel: '031-555-1111' },
        { name: '경기추모공원', address: '경기도 용인시 추모로 200', tel: '031-555-2222' },
      ],
      '인천': [
        { name: '인천공원묘지', address: '인천광역시 남동구 공원로 100', tel: '032-555-1111' },
      ],
      '강원': [], '충북': [], '충남': [], '대전': [], '경북': [], '경남': [], '부산': [], '대구': [], '울산': [], '전북': [], '전남': [], '광주': [], '제주': [],
    },
    crematory: {
      '서울': [
        { name: '서울화장장', address: '서울특별시 강남구 화장로 100', tel: '02-666-1111' },
        { name: '서울시립화장장', address: '서울특별시 강남구 시립로 200', tel: '02-666-2222' },
      ],
      '경기': [
        { name: '경기화장장', address: '경기도 수원시 화장로 100', tel: '031-666-1111' },
      ],
      '인천': [
        { name: '인천화장장', address: '인천광역시 남동구 화장로 100', tel: '032-666-1111' },
      ],
      '강원': [], '충북': [], '충남': [], '대전': [], '경북': [], '경남': [], '부산': [], '대구': [], '울산': [], '전북': [], '전남': [], '광주': [], '제주': [],
    },
    columbarium: {
      '서울': [
        { name: '서울납골묘', address: '서울특별시 강남구 납골로 100', tel: '02-777-1111' },
        { name: '서울추모납골당', address: '서울특별시 강남구 추모로 300', tel: '02-777-2222' },
      ],
      '경기': [
        { name: '경기납골묘', address: '경기도 용인시 납골로 100', tel: '031-777-1111' },
      ],
      '인천': [
        { name: '인천납골묘', address: '인천광역시 남동구 납골로 100', tel: '032-777-1111' },
      ],
      '강원': [], '충북': [], '충남': [], '대전': [], '경북': [], '경남': [], '부산': [], '대구': [], '울산': [], '전북': [], '전남': [], '광주': [], '제주': [],
    },
  };

  const facilityTitles: Record<string, string> = {
    hall: '장례식장',
    park: '공원묘지',
    crematory: '화장장',
    columbarium: '납골묘',
  };
  const facilityDescriptions: Record<string, string> = {
    hall: '전국의 장례시설을 초인스 의전이 안내 해 드립니다.',
    park: '전국의 공원묘지 정보를 안내해 드립니다.',
    crematory: '전국의 화장장 정보를 안내해 드립니다.',
    columbarium: '전국의 납골묘 정보를 안내해 드립니다.',
  };

  // facilityList, facilityRegion 등 기존 상태를 facilityTab에 따라 facilityData[facilityTab]로 대체
  // facilityRegion, searchName, searchRegion, searchCity, currentPage 등은 그대로 사용
  // filteredList, paginatedList 등에서 facilityData[facilityTab][facilityRegion] 사용
  // 상단 제목/안내문구도 facilityTitles[facilityTab], facilityDescriptions[facilityTab]로 대체

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
        {['hall','park','crematory','columbarium'].includes(tab) && (
          <div className="max-w-4xl mx-auto">
            {/* 상단 제목/안내 */}
            <h2 className="text-2xl font-bold text-center mt-6 mb-2">{facilityTitles[tab]}</h2>
            <div className="text-center text-blue-700 font-semibold mb-1">{facilityDescriptions[tab]}</div>
            <div className="text-center text-gray-600 text-sm mb-6">아래에서 지역을 선택 후, 검색을 누르시면 해당지역의 {facilityTitles[tab]}을 확인하실 수 있습니다.</div>
            {/* 지역 버튼 2줄 */}
            <div className="flex flex-wrap justify-center gap-2 mb-6">
              {regionGroups.flat().map(region => (
                <button
                  key={region}
                  className={`px-4 py-2 rounded font-semibold border ${facilityRegion === region ? 'bg-blue-600 text-white' : 'bg-white text-gray-700 border-gray-300 hover:bg-blue-50'}`}
                  onClick={() => handleRegionClick(region)}
                >
                  {region}
                </button>
              ))}
            </div>
            {/* 검색 박스 */}
            <div className="bg-gray-50 border rounded-lg p-4 mb-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4 relative">
              {/* 명칭 검색 */}
              <div className="flex items-center gap-2 flex-1">
                <span className="font-semibold whitespace-nowrap">명칭 검색</span>
                <input
                  type="text"
                  className="border rounded px-2 py-1 w-40"
                  placeholder="검색어를 입력해주세요"
                  value={searchName}
                  onChange={e => setSearchName(e.target.value)}
                />
                <button className="bg-blue-600 text-white px-3 py-1 rounded ml-1" onClick={handleNameSearch}>검색</button>
              </div>
              {/* 지역 검색 */}
              <div className="flex items-center gap-2 flex-1">
                <span className="font-semibold whitespace-nowrap">지역 검색</span>
                <select
                  className="border rounded px-2 py-1"
                  value={searchRegion}
                  onChange={e => { setSearchRegion(e.target.value); setSearchCity(''); }}
                >
                  {regionGroups.flat().map(region => (
                    <option key={region} value={region}>{region}</option>
                  ))}
                </select>
                <button className="bg-blue-600 text-white px-3 py-1 rounded" onClick={handleRegionSearch}>검색</button>
                <select
                  className="border rounded px-2 py-1 ml-2"
                  value={searchCity}
                  onChange={e => setSearchCity(e.target.value)}
                >
                  <option value="">시/군/구</option>
                  {(cityOptions[searchRegion] || []).map(city => (
                    <option key={city} value={city}>{city}</option>
                  ))}
                </select>
                <button className="bg-blue-600 text-white px-3 py-1 rounded" onClick={handleCitySearch}>검색</button>
              </div>
              {/* 꽃 이미지(오른쪽 하단) */}
              <div className="absolute right-4 bottom-2 opacity-20 pointer-events-none select-none hidden md:block">
                <svg width="80" height="40" fill="none" viewBox="0 0 80 40"><ellipse cx="20" cy="20" rx="20" ry="20" fill="#fff"/><ellipse cx="60" cy="20" rx="20" ry="20" fill="#fff"/></svg>
              </div>
            </div>
            {/* 장례식장 리스트 + 페이지네이션 */}
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-t">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="py-2 px-2 font-bold border-b">장례식장명</th>
                    <th className="py-2 px-2 font-bold border-b">주소</th>
                    <th className="py-2 px-2 font-bold border-b">전화번호</th>
                  </tr>
                </thead>
                <tbody>
                  {paginatedList.map((item: { name: string; address: string; tel: string }, idx: number) => (
                    <tr key={item.name + idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      <td className="py-2 px-2 border-b">{item.name}</td>
                      <td className="py-2 px-2 border-b">{item.address}</td>
                      <td className="py-2 px-2 border-b">{item.tel}</td>
                    </tr>
                  ))}
                  {paginatedList.length === 0 && (
                    <tr><td colSpan={3} className="text-center py-8 text-gray-400">검색 결과가 없습니다.</td></tr>
                  )}
                </tbody>
              </table>
              {/* 페이지네이션 */}
              {totalPages > 1 && (
                <div className="flex justify-center items-center gap-2 mt-4">
                  <button
                    className="px-2 py-1 rounded border text-sm disabled:opacity-40"
                    onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                    disabled={currentPage === 1}
                  >이전</button>
                  {Array.from({ length: totalPages }).map((_, i) => (
                    <button
                      key={i}
                      className={`px-3 py-1 rounded border text-sm ${currentPage === i + 1 ? 'bg-blue-600 text-white' : 'bg-white text-gray-700'}`}
                      onClick={() => setCurrentPage(i + 1)}
                    >{i + 1}</button>
                  ))}
                  <button
                    className="px-2 py-1 rounded border text-sm disabled:opacity-40"
                    onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                    disabled={currentPage === totalPages}
                  >다음</button>
                </div>
              )}
            </div>
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