import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-200 py-8 mt-auto">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4">
        <div className="mb-4 md:mb-0">
          <span className="font-bold">초인스상조</span> | 서울시 서대문구 연대동문길 65, (대신동) 3층<br />
          사업자등록번호: 774-86-00202 | Tel. 1588-1029 | Fax. 02-334-1028<br />
          E-mail: choins@choins.co.kr
        </div>
        <div className="text-sm">COPYRIGHT(C) CHOINS. ALL RIGHTS RESERVED.</div>
      </div>
    </footer>
  );
} 