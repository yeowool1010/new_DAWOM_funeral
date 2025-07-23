import Image from 'next/image';
import React from 'react';

export default function ProductPremium() {
  return (
    <div className="max-w-2xl mx-auto text-center">
      <h1 className="text-3xl font-bold mb-6">고급형 상품</h1>
      <Image src="/img/main/ms_pdt_ico.png" alt="고급형 이미지" width={120} height={120} className="mx-auto mb-4" />
      <p className="text-lg mb-4">프리미엄 서비스를 제공하는 고급형 상품입니다.<br />
        최고의 품질과 서비스를 경험하실 수 있습니다.<br />
        가격: 430만원
      </p>
    </div>
  );
} 