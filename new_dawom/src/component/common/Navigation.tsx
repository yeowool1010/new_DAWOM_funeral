import Link from 'next/link';
import { useState } from 'react';

const nav = [
  {
    label: '회사소개',
    sub: [
      { label: '인사말', href: '/companyInfo/greeting' },
      { label: '경영이념', href: '/companyInfo/philosophy' },
      { label: '조직도', href: '/companyInfo/organization' },
      { label: '오시는길', href: '/companyInfo/location' },
    ],
  },
  {
    label: '초인스서비스',
    sub: [
      { label: '초인스상조서비스', href: '/service/main' },
      { label: '후불제상조', href: '/service/postpaid' },
      { label: '협력업체', href: '/service/partners' },
    ],
  },
  {
    label: '초인스상품',
    sub: [
      { label: '보급형', href: '/product/basic' },
      { label: '일반형', href: '/product/standard' },
      { label: '고급형', href: '/product/premium' },
      { label: '회사장', href: '/product/company' },
    ],
  },
  {
    label: '장의정보',
    sub: [
      { label: '장례절차', href: '/funeralInfo/procedure' },
      { label: '종교별장례절차', href: '/funeralInfo/religion' },
      { label: '장례행정', href: '/funeralInfo/admin' },
    ],
  },
  {
    label: '장례시설',
    sub: [
      { label: '장례식장', href: '/facility/hall' },
      { label: '공원묘지', href: '/facility/park' },
      { label: '화장장', href: '/facility/crematory' },
      { label: '납골묘', href: '/facility/columbarium' },
    ],
  },
  {
    label: '고객센터',
    sub: [
      { label: 'FAQ', href: '/customer/faq' },
      { label: '공지사항', href: '/customer/notice' },
      { label: '문의사항', href: '/customer/inquiry' },
    ],
  },
];

export default function Navigation() {
  const [open, setOpen] = useState(false);
  const [dropdown, setDropdown] = useState<number | null>(null);

  return (
    <nav className="bg-blue-700 text-white sticky top-0 z-20">
      <div className="container mx-auto flex items-center px-4 py-2 relative">
        {/* 햄버거 버튼 (모바일) */}
        <button
          className="md:hidden mr-2 focus:outline-none"
          onClick={() => setOpen((v) => !v)}
          aria-label="메뉴 열기"
        >
          <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        {/* PC/태블릿 메뉴 */}
        <div className="hidden md:flex flex-1 items-center">
          {nav.map((menu, idx) => (
            <div key={idx} className="relative group mr-6">
              <span className="font-semibold cursor-pointer hover:underline">
                {menu.label}
              </span>
              <div className="absolute left-0 top-full bg-white text-gray-800 shadow-lg rounded mt-2 opacity-0 group-hover:opacity-100 transition-opacity z-20 min-w-[140px]">
                {menu.sub.map((item, subIdx) => (
                  <Link key={subIdx} href={item.href} className="block px-4 py-2 hover:bg-blue-100 whitespace-nowrap">{item.label}</Link>
                ))}
              </div>
            </div>
          ))}
          <div className="ml-auto font-bold">24시간 상담 1588-1029</div>
        </div>
        {/* 모바일 메뉴 */}
        {open && (
          <div className="absolute left-0 top-full w-full bg-blue-800 md:hidden shadow-lg z-30 animate-fadeIn">
            {nav.map((menu, idx) => (
              <div key={idx}>
                <button
                  className="w-full text-left px-4 py-3 font-semibold hover:bg-blue-600 focus:outline-none flex justify-between items-center"
                  onClick={() => setDropdown(dropdown === idx ? null : idx)}
                >
                  {menu.label}
                  <span>{dropdown === idx ? '▲' : '▼'}</span>
                </button>
                {dropdown === idx && (
                  <div className="bg-blue-700">
                    {menu.sub.map((item, subIdx) => (
                      <Link
                        key={subIdx}
                        href={item.href}
                        className="block px-8 py-2 text-sm hover:bg-blue-600"
                        onClick={() => { setOpen(false); setDropdown(null); }}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="px-4 py-3 font-bold border-t border-blue-600">24시간 상담 1588-1029</div>
          </div>
        )}
      </div>
    </nav>
  );
} 