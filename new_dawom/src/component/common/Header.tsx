import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const navItems = [
  { label: '회사소개', href: '/companyInfo' },
  { label: '초인소서비스', href: '/service/main' },
  { label: '초인소상품', href: '/product' },
  { label: '장례정보', href: '/funeralInfo' },
  { label: '장례시설', href: '/facility' },
  { label: '고객센터', href: '/customer' },
];

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black bg-opacity-40 backdrop-blur-md flex items-center justify-between px-8 py-3 h-20">
      {/* 로고 */}
      <Link href="/" className="flex items-center min-w-[180px]">
        <Image src="/img/main/logo.png" alt="로고" width={60} height={60} />
        <span className="ml-3 font-bold text-2xl text-white tracking-widest">초인소장조</span>
      </Link>
      {/* 네비게이션 (오른쪽 정렬) */}
      <nav className="hidden md:flex items-center gap-8 ml-auto">
        {navItems.map((item) => (
          <Link key={item.label} href={item.href} className="text-white text-lg font-semibold hover:text-yellow-200 transition-colors duration-200">
            {item.label}
          </Link>
        ))}
      </nav>
      {/* 햄버거 메뉴 (모바일에서만) */}
      <button className="md:hidden flex flex-col justify-center items-center w-10 h-10 ml-auto">
        <span className="block w-7 h-1 bg-white mb-1 rounded"></span>
        <span className="block w-7 h-1 bg-white mb-1 rounded"></span>
        <span className="block w-7 h-1 bg-white rounded"></span>
      </button>
    </header>
  );
} 