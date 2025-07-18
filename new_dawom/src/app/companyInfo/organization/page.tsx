import Image from 'next/image';

export default function Organization() {
  return (
    <div className="max-w-2xl mx-auto text-center px-2 sm:px-4 py-8 sm:py-12">
      <h1 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">조직도</h1>
      <Image src="/img/main/brand02_txt.png" alt="조직도 이미지" width={200} height={80} className="mx-auto mb-3 sm:mb-4" />
      <p className="text-base sm:text-lg mb-3 sm:mb-4">초인스상조는 전문 인력과 체계적인 조직으로<br />
        신속하고 정확한 장례서비스를 제공합니다.
      </p>
    </div>
  );
} 