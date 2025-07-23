import React from 'react';
export default function FAQ() {
  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">자주 묻는 질문(FAQ)</h1>
      <div className="mb-6">
        <h2 className="font-semibold text-lg mb-2">Q. 서비스 신청은 어떻게 하나요?</h2>
        <p className="text-gray-700">A. 홈페이지 또는 24시간 상담전화(1588-1029)로 신청하실 수 있습니다.</p>
      </div>
      <div className="mb-6">
        <h2 className="font-semibold text-lg mb-2">Q. 후불제 상조란 무엇인가요?</h2>
        <p className="text-gray-700">A. 서비스가 모두 완료된 후 비용을 정산하는 방식입니다.</p>
      </div>
      <div className="mb-6">
        <h2 className="font-semibold text-lg mb-2">Q. 전국 어디서나 이용 가능한가요?</h2>
        <p className="text-gray-700">A. 네, 전국 어디서나 24시간 이용 가능합니다.</p>
      </div>
    </div>
  );
} 