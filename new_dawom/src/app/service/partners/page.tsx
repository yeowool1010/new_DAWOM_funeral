import Image from 'next/image';
import React from 'react';

export default function Partners() {
  return (
    <div className="max-w-2xl mx-auto text-center">
      <h1 className="text-3xl font-bold mb-6">협력업체</h1>
      <Image src="/img/main/company_ico1.png" alt="협력업체 이미지" width={120} height={120} className="mx-auto mb-4" />
      <p className="text-lg mb-4">초인스상조와 함께하는 다양한 협력업체가 있습니다.<br />
        신뢰와 협력으로 최고의 서비스를 제공합니다.
      </p>
      <ul className="mt-4 text-left inline-block">
        <li>연대총동문회</li>
        <li>AJ토탈</li>
        <li>연세대 치과대학 교수평의회</li>
        <li>아주그룹</li>
        <li>대한간호협회</li>
        <li>...</li>
      </ul>
    </div>
  );
} 