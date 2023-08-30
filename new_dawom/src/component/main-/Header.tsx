'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export function Header() {
  const [isScrollDown, setIsScrollDown] = useState(true)

  useEffect(() => {
    // 스크롤 위치 감지 함수
    const handleScroll = () => {
      if (window.pageYOffset > 0) {
        setIsScrollDown(false)
      } else {
        setIsScrollDown(true)
      }
    }

    // 스크롤 이벤트 리스너 추가
    window.addEventListener('scroll', handleScroll)

    // 컴포넌트 언마운트 시, 스크롤 이벤트 리스너 제거
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])


  return (
    <>
      <nav
        className={`${
          isScrollDown ? 'opacity-100' : 'opacity-70'
        } transition-opacity duration-300 sticky top-0 z-50 flex flex-wrap items-center justify-between p-6 bg-stone-600 PC:px-64 pt-10`}
      >
        <Link href="/">
          <div className="flex items-center flex-shrink-0 mr-6 text-white">
            {/* <svg
              className="w-8 h-8 mr-2 fill-current"
              width="54"
              height="54"
              viewBox="0 0 54 54"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" />
            </svg> */}
            <span className="text-4xl font-semibold tracking-tight">로고</span>
          </div>
        </Link>
        <div className="block Tab:hidden">
          <button className="flex items-center px-3 py-2 border rounded text-mainBrown1 border-mainBrown2 hover:text-white hover:border-white">
            <svg className="w-3 h-3 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div className="flex-grow block w-full Tab:flex Tab:items-center Tab:w-auto">
          <div className="text-lg Tab:flex-grow">
            <Link href="/companyInfo">
              <p className="block mt-4 mr-4 text-mainBrown1 Tab:inline-block Tab:mt-0 hover:text-white">회사소개</p>
            </Link>
            <Link href="/funeralContent">
              <p className="block mt-4 mr-4 text-mainBrown1 Tab:inline-block Tab:mt-0 hover:text-white">장례상품</p>
            </Link>
            <Link href="/review">
              <p className="block mt-4 mr-4 text-mainBrown1 Tab:inline-block Tab:mt-0 hover:text-white">장례후기</p>
            </Link>
            <Link href="/funeralInfo">
              <p className="block mt-4 text-mainBrown1 Tab:inline-block Tab:mt-0 hover:text-white">장례정보</p>
            </Link>
          </div>
          <div>
            <p className="inline-block px-4 py-2 mt-4 text-sm leading-none text-white border border-white rounded hover:border-transparent hover:text-mainBrown2 hover:bg-white Tab:mt-0">
              문의하기
            </p>
          </div>
        </div>
      </nav>
    </>
  )
}
