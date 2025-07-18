import Image from 'next/image';

export default function Crematory() {
  return (
    <div className="max-w-2xl mx-auto text-center">
      <h1 className="text-3xl font-bold mb-6">화장장</h1>
      <Image src="/img/main/ms_pdt_bg.jpg" alt="화장장 이미지" width={300} height={120} className="mx-auto mb-4 rounded" />
      <p className="text-lg mb-4">전국의 화장장 위치와 이용 방법을 안내해드립니다.<br />
        예약 및 절차에 대해 궁금하신 점은 문의해 주세요.
      </p>
    </div>
  );
} 