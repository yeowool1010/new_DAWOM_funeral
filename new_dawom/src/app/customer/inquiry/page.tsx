import React from 'react';

export default function Inquiry() {
  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">문의사항</h1>
      <form className="bg-white p-6 rounded shadow">
        <div className="mb-4">
          <label className="block mb-1 font-semibold">이름</label>
          <input type="text" className="w-full border rounded px-3 py-2" placeholder="이름을 입력하세요" />
        </div>
        <div className="mb-4">
          <label className="block mb-1 font-semibold">연락처</label>
          <input type="text" className="w-full border rounded px-3 py-2" placeholder="연락처를 입력하세요" />
        </div>
        <div className="mb-4">
          <label className="block mb-1 font-semibold">문의내용</label>
          <textarea className="w-full border rounded px-3 py-2" rows={4} placeholder="문의하실 내용을 입력하세요" />
        </div>
        <button type="submit" className="bg-blue-700 text-white px-6 py-2 rounded font-bold hover:bg-blue-800">문의하기</button>
      </form>
    </div>
  );
} 