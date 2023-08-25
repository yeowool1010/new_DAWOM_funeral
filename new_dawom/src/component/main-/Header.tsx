import Link from 'next/link'

export function Header() {
  return (
    <nav>
      <Link href="/">
        <p>로고</p>
      </Link>
      <Link href="/companyInfo">
        <p>회사소개</p>
      </Link>
      <Link href="/funeralContent">
        <p>장례상품</p>
      </Link>
      <Link href="/review">
        <p>장례후기</p>
      </Link>
      <Link href="/funeralInfo">
        <p>장례정보</p>
      </Link>
    </nav>
  )
}
