import Image from 'next/image';

export default function Greeting() {
  return (
    <div className="max-w-2xl mx-auto text-center px-2 sm:px-4 py-8 sm:py-12">
      <h1 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">인사말</h1>
      <Image src="/img/main/company_ico1.png" alt="인사말 이미지" width={120} height={120} className="mx-auto mb-3 sm:mb-4" />
      <p className="text-base sm:text-lg mb-3 sm:mb-4">안녕하세요. 초인스상조를 찾아주셔서 감사합니다.<br />
        저희는 고객님께 최고의 장례서비스를 제공하기 위해 항상 최선을 다하고 있습니다.<br />
        믿음과 신뢰로 보답하겠습니다.
      </p>
      <div className="text-right font-semibold text-sm sm:text-base">대표이사 홍길동</div>
    </div>
  );
} 