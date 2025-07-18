import Image from 'next/image';

export default function ProductStandard() {
  return (
    <div className="max-w-2xl mx-auto text-center">
      <h1 className="text-3xl font-bold mb-6">일반형 상품</h1>
      <Image src="/img/main/company_ico2.png" alt="일반형 이미지" width={120} height={120} className="mx-auto mb-4" />
      <p className="text-lg mb-4">고객의 다양한 요구를 반영한 일반형 상품입니다.<br />
        표준 장례서비스와 추가 혜택이 포함되어 있습니다.<br />
        가격: 330만원
      </p>
    </div>
  );
} 