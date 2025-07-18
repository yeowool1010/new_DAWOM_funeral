import Image from 'next/image';

export default function Admin() {
  return (
    <div className="max-w-2xl mx-auto text-center">
      <h1 className="text-3xl font-bold mb-6">장례행정</h1>
      <Image src="/img/main/company_ico2.png" alt="장례행정 이미지" width={120} height={120} className="mx-auto mb-4" />
      <p className="text-lg mb-4">사망신고, 화장허가 등 장례와 관련된 행정절차를 안내해드립니다.<br />
        복잡한 행정업무도 초인스상조가 도와드립니다.
      </p>
    </div>
  );
} 