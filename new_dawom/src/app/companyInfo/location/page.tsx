import Image from 'next/image';

export default function Location() {
  return (
    <div className="max-w-2xl mx-auto text-center px-2 sm:px-4 py-8 sm:py-12">
      <h1 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">오시는길</h1>
      <Image src="/img/main/ms_pdt_bg.jpg" alt="오시는길 이미지" width={300} height={120} className="mx-auto mb-3 sm:mb-4 rounded" />
      <p className="text-base sm:text-lg mb-3 sm:mb-4">서울시 서대문구 연대동문길 65, (대신동) 3층<br />
        Tel. 1588-1029<br />
        Fax. 02-334-1028
      </p>
      <p className="text-gray-500 text-xs sm:text-sm">지하철 2호선 신촌역 3번 출구에서 도보 10분</p>
    </div>
  );
} 