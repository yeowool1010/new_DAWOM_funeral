'use client'

import '../styles/globals.css';
import Header from '../component/common/Header';
import Navigation from '../component/common/Navigation';
import Footer from '../component/common/Footer';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="bg-gray-50 min-h-screen flex flex-col">
        <Header />
        <Navigation />
        <main className="flex-1 container mx-auto px-4 py-8">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
