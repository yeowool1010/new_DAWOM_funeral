import Image from 'next/image';

export default function Park() {
  return (
    <div className="max-w-2xl mx-auto text-center">
      <h1 className="text-3xl font-bold mb-6">공원묘지</h1>
      <Image src="/img/main/brand02_bg.jpg" alt="공원묘지 이미지" width={300} height={120} className="mx-auto mb-4 rounded" />
      <p className="text-lg mb-4">쾌적한 환경의 공원묘지 정보를 제공합니다.<br />
        전국 어디서나 이용 가능한 공원묘지를 안내해드립니다.
      </p>
    </div>
  );
} 