import Link from 'next/link'
import SocialIcon from './social-icons'
import siteMetadata from '../../data/siteMetadata'

export function Footer() {
  return (
    <footer>
      <div className="flex flex-col items-center mt-5">
        <div className="flex mb-3 space-x-4">
          <SocialIcon kind="mail" href={`mailto:${siteMetadata.email}`} size={6} />
          {/* <SocialIcon kind="github" href={siteMetadata.github} size={6} /> */}
          {/* <SocialIcon kind="facebook" href={siteMetadata.facebook} size={6} /> */}
          {/* <SocialIcon kind="youtube" href={siteMetadata.youtube} size={6} /> */}
          {/* <SocialIcon kind="linkedin" href={siteMetadata.linkedin} size={6} /> */}
          {/* <SocialIcon kind="twitter" href={siteMetadata.twitter} size={6} /> */}
        </div>
        <div className="flex mb-2 space-x-2 text-sm text-gray-500 dark:text-gray-400">
          <div>{'다움상조'}</div>
          <div>{` • `}</div>
          <div>{`© ${new Date().getFullYear()}`}</div>
          <div>{` • `}</div>
          <Link href="/">{`Tel : 032-344-4446 | Fax : 032-341-4447`}</Link>
        </div>
        <div className="mb-8 text-sm text-gray-500 dark:text-gray-400">
          <Link href="https://github.com/timlrx/tailwind-nextjs-starter-blog">
            주소 : 인천광역시 남동구 구월로 336번길 63-23 | E-mail : yr4417@naver.com
          </Link>
        </div>
      </div>
    </footer>
  )
}
