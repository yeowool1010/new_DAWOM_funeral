import Image from 'next/image';
import React from 'react';

export default function Religion() {
  return (
    <div className="max-w-2xl mx-auto text-center">
      <h1 className="text-3xl font-bold mb-6">종교별 장례절차</h1>
      <Image src="/img/main/brand02_bg.jpg" alt="종교별 장례절차 이미지" width={300} height={120} className="mx-auto mb-4 rounded" />
      <p className="text-lg mb-4">불교, 기독교, 천주교 등 종교별로 상이한 장례절차를 안내해드립니다.<br />
        각 종교의 전통과 예법을 존중하여 맞춤 서비스를 제공합니다.
      </p>
    </div>
  );
} 