'use client'

import '../styles/globals.css';
import Header from '../component/common/Header';
import Navigation from '../component/common/Navigation';
import Footer from '../component/common/Footer';
import Image from 'next/image';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="bg-gray-50 min-h-screen flex flex-col relative w-full h-full overflow-x-hidden">
        {/* 전체 배경 이미지 */}
        <div className="fixed inset-0 -z-10 w-full h-full">
          <Image 
            src="/img/main/visual01.jpg" 
            alt="배경" 
            fill 
            className="object-cover w-full h-full" 
            priority
          />
          {/* 어두운 오버레이 */}
          <div className="absolute inset-0 bg-black bg-opacity-40" />
        </div>
        <Header />
        <Navigation />
        <main className="flex-1 w-full">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
