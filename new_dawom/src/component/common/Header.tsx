import Image from 'next/image';

export default function Header() {
  return (
    <header className="bg-white shadow py-4 px-6 flex items-center">
      <Image src="/img/main/logo.png" alt="로고" width={40} height={40} />
      <span className="ml-3 font-bold text-xl text-gray-800">초인스상조</span>
    </header>
  );
} 