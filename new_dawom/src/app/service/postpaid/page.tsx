import Image from 'next/image';

export default function Postpaid() {
  return (
    <div className="max-w-2xl mx-auto text-center">
      <h1 className="text-3xl font-bold mb-6">후불제상조</h1>
      <Image src="/img/main/brand02_bg.jpg" alt="후불제상조 이미지" width={300} height={120} className="mx-auto mb-4 rounded" />
      <p className="text-lg mb-4">서비스 완료 후 정산하는 합리적인 후불제 상조서비스.<br />
        가입비, 월 납입금 부담 없이 이용 가능합니다.
      </p>
    </div>
  );
} 