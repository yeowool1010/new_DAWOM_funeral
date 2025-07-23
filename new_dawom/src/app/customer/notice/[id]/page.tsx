'use client';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { useState } from 'react';

const noticeList = [
  { id: 1, title: '연세대학교 총동문회 웹사이트 경조사페이지에 초인스상조 게시', date: '2021.01.07', views: 2149, author: '초인스상조', content: `연세대학교 총동문회 웹사이트 경조사페이지에\n상조회 협력사인 '초인스상조'가 게시되었습니다.\n\n연세대학교 동문여러분들의 많은 격려와 이용 부탁드립니다.\n항상 가족과 같은 마음으로 함께 하겠습니다.\n\n[연세대학교 총동문회 홈페이지 바로가기](https://www.yonsei.or.kr/)`, file: '첨부파일.pdf', prev: null, next: { id: 2, title: '카카오톡채널 개설' } },
  { id: 2, title: '카카오톡채널 개설', date: '2021.01.05', views: 1020, author: '초인스상조', content: `초인스상조 카카오톡채널이 개설되었습니다.\n\n카카오톡에서 '초인스상조'를 검색해 친구추가 하시면\n실시간 상담 및 다양한 소식을 받아보실 수 있습니다.`, file: '', prev: { id: 1, title: '연세대학교 총동문회 웹사이트 경조사페이지에 초인스상조 게시' }, next: null },
];

export default function NoticeDetail() {
  const params = useParams();
  const id = Number(params?.id);
  const notice = noticeList.find(n => n.id === id);

  if (!notice) {
    return <div className="max-w-2xl mx-auto py-20 text-center text-gray-500">존재하지 않는 게시글입니다.</div>;
  }

  // 본문 내 링크 변환
  const renderContent = (text: string) => {
    // [텍스트](링크) 패턴 변환
    const regex = /\[([^\]]+)\]\(([^)]+)\)/g;
    const parts: (string | JSX.Element)[] = [];
    let lastIndex = 0;
    let match;
    let key = 0;
    while ((match = regex.exec(text)) !== null) {
      if (match.index > lastIndex) {
        parts.push(text.slice(lastIndex, match.index));
      }
      parts.push(
        <a
          key={key++}
          href={match[2]}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-blue-700 text-white px-2 py-1 rounded font-bold my-2"
        >
          {match[1]}
        </a>
      );
      lastIndex = regex.lastIndex;
    }
    if (lastIndex < text.length) {
      parts.push(text.slice(lastIndex));
    }
    // 줄바꿈 처리
    return parts.flatMap((part, i) =>
      typeof part === 'string'
        ? part.split('\n').map((line, j) => <span key={i + '-' + j}>{line}{j < part.split('\n').length - 1 ? <br /> : null}</span>)
        : [part]
    );
  };

  return (
    <div className="max-w-3xl mx-auto py-10 px-4">
      {/* 상단 제목 */}
      <h1 className="text-2xl font-bold text-center mb-8">공지사항</h1>
      {/* 제목/작성자/날짜/조회수 */}
      <div className="border-b pb-4 mb-6 flex flex-col md:flex-row md:items-center md:justify-between gap-2">
        <div className="font-semibold text-lg">{notice.title}</div>
        <div className="flex flex-wrap gap-4 text-sm text-gray-500 md:justify-end">
          <span>작성자: {notice.author}</span>
          <span>등록일: {notice.date}</span>
          <span>조회수: {notice.views}</span>
        </div>
      </div>
      {/* 첨부파일 */}
      {notice.file && (
        <div className="flex items-center gap-2 border rounded bg-gray-50 px-4 py-3 mb-6">
          <span className="text-lg">📄</span>
          <span className="font-medium">{notice.file}</span>
        </div>
      )}
      {/* 본문 */}
      <div className="mb-12 text-gray-800 min-h-[120px] leading-relaxed">
        {renderContent(notice.content)}
      </div>
      {/* 이전/다음글 */}
      <div className="border-t divide-y divide-gray-200 mb-8">
        <AccordionNav label="이전글" item={notice.prev} />
        <AccordionNav label="다음글" item={notice.next} />
      </div>
      {/* 목록으로 버튼 */}
      <div className="flex justify-end">
        <Link href="/customer?page=notice" className="inline-block border border-gray-400 px-8 py-2 rounded hover:bg-gray-100">목록으로</Link>
      </div>
    </div>
  );
}

function AccordionNav({ label, item }: { label: string; item: any }) {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <button
        className="w-full flex items-center justify-between py-3 px-2 text-left text-gray-700 font-semibold focus:outline-none"
        onClick={() => setOpen(o => !o)}
        aria-expanded={open}
      >
        <span>▾ {label}</span>
        <span className="truncate ml-2 text-gray-500">{item ? item.title : '없음'}</span>
      </button>
      {open && item && (
        <div className="bg-gray-50 px-4 py-3">
          <Link href={`/customer/notice/${item.id}`} className="text-blue-700 hover:underline">{item.title}</Link>
        </div>
      )}
    </div>
  );
} 