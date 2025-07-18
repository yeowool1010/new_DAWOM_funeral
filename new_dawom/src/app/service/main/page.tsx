import Image from 'next/image';

export default function ServiceMain() {
  return (
    <div className="max-w-2xl mx-auto text-center">
      <h1 className="text-3xl font-bold mb-6">초인스상조서비스</h1>
      <Image src="/img/main/brand01_bg.jpg" alt="초인스상조서비스 이미지" width={300} height={120} className="mx-auto mb-4 rounded" />
      <p className="text-lg mb-4">전문 장례지도사와 함께하는 믿을 수 있는 상조서비스.<br />
        전국 어디서나 24시간 상담 및 서비스를 제공합니다.
      </p>
    </div>
  );
} 