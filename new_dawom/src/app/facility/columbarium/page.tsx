import Image from 'next/image';

export default function Columbarium() {
  return (
    <div className="max-w-2xl mx-auto text-center">
      <h1 className="text-3xl font-bold mb-6">납골묘</h1>
      <Image src="/img/main/company_ico2.png" alt="납골묘 이미지" width={120} height={120} className="mx-auto mb-4" />
      <p className="text-lg mb-4">다양한 형태의 납골묘 정보를 제공합니다.<br />
        위치, 이용 방법 등 자세한 사항은 고객센터로 문의해 주세요.
      </p>
    </div>
  );
} 