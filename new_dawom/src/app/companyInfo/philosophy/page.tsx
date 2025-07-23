import React from 'react';
import Image from 'next/image';

export default function Philosophy() {
  return (
    <div className="max-w-2xl mx-auto text-center px-2 sm:px-4 py-8 sm:py-12">
      <h1 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">경영이념</h1>
      <Image src="/img/main/company_ico2.png" alt="경영이념 이미지" width={120} height={120} className="mx-auto mb-3 sm:mb-4" />
      <p className="text-base sm:text-lg mb-3 sm:mb-4">고객 감동, 신뢰, 정직을 바탕으로<br />
        최고의 장례서비스를 실현합니다.<br />
        항상 고객의 입장에서 생각하며, 사회에 공헌하는 기업이 되겠습니다.
      </p>
    </div>
  );
} 