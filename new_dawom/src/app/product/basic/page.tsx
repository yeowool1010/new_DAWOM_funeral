import Image from 'next/image';

export default function ProductBasic() {
  return (
    <div className="max-w-2xl mx-auto text-center">
      <h1 className="text-3xl font-bold mb-6">보급형 상품</h1>
      <Image src="/img/main/company_ico1.png" alt="보급형 이미지" width={120} height={120} className="mx-auto mb-4" />
      <p className="text-lg mb-4">합리적인 가격의 보급형 상품입니다.<br />
        기본 장례서비스를 포함하여 부담 없이 이용하실 수 있습니다.<br />
        가격: 230만원
      </p>
    </div>
  );
} 