import Link from 'next/link';
import React, { useState, useRef, useEffect } from 'react';

const nav = [
  {
    label: '회사소개',
    href: '/companyInfo',
    sub: [
      { label: '인사말', href: '/companyInfo?page=greeting' },
      { label: '경영이념', href: '/companyInfo?page=philosophy' },
      { label: '조직도', href: '/companyInfo?page=organization' },
      { label: '오시는길', href: '/companyInfo?page=location' },
    ],
  },
  {
    label: '초인스서비스',
    href: '/service/main',
    sub: [
      { label: '초인스상조서비스', href: '/service/main' },
      { label: '후불제상조', href: '/service/main?page=postpaid' },
      { label: '협력업체', href: '/service/main?page=partners' },
    ],
  },
  {
    label: '초인스상품',
    href: '/product',
    sub: [
      { label: '보급형', href: '/product?page=basic' },
      { label: '일반형', href: '/product?page=standard' },
      { label: '고급형', href: '/product?page=premium' },
      { label: '회사장', href: '/product?page=company' },
    ],
  },
  {
    label: '장의정보',
    href: '/funeralInfo',
    sub: [
      { label: '장례절차', href: '/funeralInfo?page=procedure' },
      { label: '종교별장례절차', href: '/funeralInfo?page=religion' },
      { label: '장례행정', href: '/funeralInfo?page=admin' },
    ],
  },
  {
    label: '장례시설',
    href: '/facility',
    sub: [
      { label: '장례식장', href: '/facility?page=hall' },
      { label: '공원묘지', href: '/facility?page=park' },
      { label: '화장장', href: '/facility?page=crematory' },
      { label: '납골묘', href: '/facility?page=columbarium' },
    ],
  },
  {
    label: '고객센터',
    href: '/customer',
    sub: [
      { label: 'FAQ', href: '/customer?page=faq' },
      { label: '공지사항', href: '/customer?page=notice' },
      { label: '문의사항', href: '/customer?page=inquiry' },
    ],
  },
];

export default function Navigation() {
  const [open, setOpen] = useState(false);
  const [dropdown, setDropdown] = useState<number | null>(null);
  const [hoverIdx, setHoverIdx] = useState<number | null>(null);
  const [barStyle, setBarStyle] = useState({ left: 0, width: 0, opacity: 0 });
  const [isScrolled, setIsScrolled] = useState(false);
  const menuRefs = useRef<(HTMLDivElement | null)[]>([]);
  const navBarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (hoverIdx !== null && menuRefs.current[hoverIdx]) {
      const menu = menuRefs.current[hoverIdx];
      const navBar = navBarRef.current;
      if (menu && navBar) {
        const menuRect = menu.getBoundingClientRect();
        const navRect = navBar.getBoundingClientRect();
        setBarStyle({
          left: menuRect.left - navRect.left,
          width: menuRect.width,
          opacity: 1,
        });
      }
    } else {
      setBarStyle({ left: 0, width: 0, opacity: 0 });
    }
  }, [hoverIdx]);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-40 border-b transition-colors duration-500 ease-in-out ${hoverIdx !== null || isScrolled ? 'bg-white border-gray-200' : 'bg-transparent border-white/30'}`} ref={navBarRef}>
      <div className="max-w-7xl mx-auto flex items-center px-6 relative min-h-[64px] border-b border-white/30">
        {/* 로고+텍스트 */}
        <Link href="/" className="flex items-center min-w-[220px]">
          <img src="/img/main/logo.png" alt="로고" className="h-12 w-auto mr-2" />
          <div className="flex flex-col leading-tight">
            <span className="text-white font-bold text-lg tracking-widest">초인소상조</span>
            <span className="text-white font-bold text-base -mt-1 tracking-widest">CHOINS</span>
          </div>
        </Link>
        {/* PC/태블릿 메뉴 (오른쪽 정렬) */}
        <div className="hidden md:flex flex-1 items-center justify-end gap-12 relative">
          {nav.map((menu, idx) => (
            <div
              key={idx}
              className="relative flex flex-col items-center z-10"
              ref={el => menuRefs.current[idx] = el}
              onMouseEnter={() => setHoverIdx(idx)}
              onMouseLeave={e => {
                const related = e.relatedTarget;
                if (!related || !(related instanceof Node) || !e.currentTarget.contains(related)) {
                  setHoverIdx(null);
                }
              }}
            >
              {menu.href ? (
                <Link
                  href={menu.href}
                  className={`min-h-[64px] font-bold text-base px-3 py-2 transition-all duration-150 flex flex-col items-center justify-center relative ${hoverIdx === idx ? 'bg-white text-[#17427b]' : hoverIdx !== null || isScrolled ? 'bg-transparent text-[#22201b]' : 'bg-transparent text-white'}`}
                  style={{ borderRadius: hoverIdx === idx ? '0 0 0 0' : undefined, position: 'relative', zIndex: 20 }}
                >
                  <span className="relative z-10">{menu.label}</span>
                  {/* 하단 애니메이션 바 */}
                  <span
                    className="absolute left-0 right-0 bottom-0 h-[3px] bg-[#17427b] rounded-t-sm transition-transform duration-200 z-10"
                    style={{
                      transform: (hoverIdx === idx || dropdown === idx) ? 'scaleX(1)' : 'scaleX(0)',
                      transformOrigin: 'center',
                      opacity: (hoverIdx === idx || dropdown === idx) ? 1 : 0,
                      zIndex: 10,
                    }}
                  />
                </Link>
              ) : (
                <span
                  className={`font-bold text-base px-3 py-2 transition-all duration-150 flex flex-col items-center relative ${hoverIdx === idx ? 'bg-white text-[#17427b]' : hoverIdx !== null || isScrolled ? 'bg-transparent text-[#22201b]' : 'bg-transparent text-white'}`}
                  style={{ borderRadius: hoverIdx === idx ? '0 0 0 0' : undefined, position: 'relative', zIndex: 20 }}
                >
                  <span className="relative z-10">{menu.label}</span>
                  {/* 하단 애니메이션 바 */}
                  <span
                    className="absolute left-0 right-0 bottom-0 h-[3px] bg-[#17427b] rounded-t-sm transition-transform duration-200 z-10"
                    style={{
                      transform: (hoverIdx === idx || dropdown === idx) ? 'scaleX(1)' : 'scaleX(0)',
                      transformOrigin: 'center',
                      opacity: (hoverIdx === idx || dropdown === idx) ? 1 : 0,
                      zIndex: 10,
                    }}
                  />
                </span>
              )}
              {/* 드롭다운 */}
              {hoverIdx === idx && (
                <div
                  className="absolute left-1/2 -translate-x-1/2 top-full bg-white text-[#22201b] shadow-[0_2px_8px_0_rgba(0,0,0,0.08)] mt-0 opacity-100 transition-opacity z-20 min-w-[150px] border border-gray-200 rounded-none"
                  style={{marginTop: 0}}
                >
                  {menu.sub.map((item, subIdx) => (
                    <Link
                      key={subIdx}
                      href={item.href}
                      className={`block px-5 py-2 text-base border-b border-gray-200 last:border-b-0 hover:bg-gray-50 hover:text-[#17427b]`}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
        {/* 햄버거 버튼 (모바일) */}
        <button
          className="md:hidden ml-auto focus:outline-none"
          onClick={() => setOpen((v) => !v)}
          aria-label="메뉴 열기"
        >
          <svg width="32" height="32" fill="none" viewBox="0 0 24 24" stroke={hoverIdx !== null || isScrolled ? 'black' : 'white'}>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        {/* 모바일 메뉴 */}
        {open && (
          <div className={`absolute left-0 top-full w-full shadow-lg z-30 animate-fadeIn border-b border-white/30 transition-colors duration-200 ${hoverIdx !== null || isScrolled ? 'bg-white' : 'bg-transparent'}`}>
            {nav.map((menu, idx) => (
              <div key={idx}>
                <button
                  className={`w-full text-left px-4 py-3 font-bold ${hoverIdx !== null || isScrolled ? 'text-[#22201b]' : 'text-white'} hover:bg-[#2d2a1f] focus:outline-none flex justify-between items-center`}
                  onClick={() => setDropdown(dropdown === idx ? null : idx)}
                >
                  {menu.label}
                  <span>{dropdown === idx ? '▲' : '▼'}</span>
                </button>
                {dropdown === idx && (
                  <div className="bg-[#2d2a1f]">
                    {menu.sub.map((item, subIdx) => (
                      <Link
                        key={subIdx}
                        href={item.href}
                        className="block px-8 py-2 text-base text-white hover:bg-[#ffe9b3] hover:text-[#22201b] border-b border-gray-700 last:border-b-0"
                        onClick={() => { setOpen(false); setDropdown(null); }}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className={`px-4 py-3 font-bold border-t border-white/20 ${hoverIdx !== null || isScrolled ? 'text-[#22201b]' : 'text-white'}`}>24시간 상담 1588-1029</div>
          </div>
        )}
      </div>
    </nav>
  );
} 