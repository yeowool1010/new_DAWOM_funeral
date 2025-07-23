import Image from 'next/image';
import React from 'react';

export default function ProductCompany() {
  return (
    <div className="max-w-2xl mx-auto text-center">
      <h1 className="text-3xl font-bold mb-6">회사장 상품</h1>
      <Image src="/img/main/brand02_txt.png" alt="회사장 이미지" width={120} height={120} className="mx-auto mb-4" />
      <p className="text-lg mb-4">기업 및 단체를 위한 맞춤형 회사장 상품입니다.<br />
        상담 후 가격이 결정됩니다.<br />
        자세한 내용은 문의해 주세요.
      </p>
    </div>
  );
} 