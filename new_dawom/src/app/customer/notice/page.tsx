export default function Notice() {
  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">공지사항</h1>
      <ul className="space-y-4">
        <li>
          <div className="font-semibold">[공지] 홈페이지 리뉴얼 안내</div>
          <div className="text-gray-600 text-sm">2024-06-01</div>
          <div className="text-gray-700">초인스상조 홈페이지가 새롭게 리뉴얼되었습니다.</div>
        </li>
        <li>
          <div className="font-semibold">[공지] 24시간 상담 서비스 운영</div>
          <div className="text-gray-600 text-sm">2024-05-15</div>
          <div className="text-gray-700">언제든지 1588-1029로 문의해 주세요.</div>
        </li>
      </ul>
    </div>
  );
} 