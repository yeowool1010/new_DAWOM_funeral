import Image from 'next/image';

export default function Hall() {
  return (
    <div className="max-w-2xl mx-auto text-center">
      <h1 className="text-3xl font-bold mb-6">장례식장</h1>
      <Image src="/img/main/brand01_bg.jpg" alt="장례식장 이미지" width={300} height={120} className="mx-auto mb-4 rounded" />
      <p className="text-lg mb-4">전국의 다양한 장례식장 정보를 안내해드립니다.<br />
        가까운 장례식장 위치와 시설을 확인하세요.
      </p>
    </div>
  );
} 