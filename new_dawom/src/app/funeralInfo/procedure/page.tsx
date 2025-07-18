import Image from 'next/image';

export default function Procedure() {
  return (
    <div className="max-w-2xl mx-auto text-center">
      <h1 className="text-3xl font-bold mb-6">장례절차</h1>
      <Image src="/img/main/brand01_bg.jpg" alt="장례절차 이미지" width={300} height={120} className="mx-auto mb-4 rounded" />
      <p className="text-lg mb-4">초인스상조의 장례진행절차는 총 15단계로 구성되어 있습니다.<br />
        사전상담부터 하관까지 체계적으로 안내해드립니다.
      </p>
      <ol className="text-left inline-block mt-4">
        <li>1. 사전상담</li>
        <li>2. 고인 임종</li>
        <li>3. 초인스상조 전화</li>
        <li>4. 고인 이송</li>
        <li>5. 빈소 준비</li>
        <li>6. 인력 배치</li>
        <li>7. 조문 준비</li>
        <li>8. 입관 준비</li>
        <li>9. 입관</li>
        <li>10. 입관 의식</li>
        <li>11. 종교 의식</li>
        <li>12. 종교별 발인의식</li>
        <li>13. 발인</li>
        <li>14. 장지 이동</li>
        <li>15. 하관</li>
      </ol>
    </div>
  );
} 