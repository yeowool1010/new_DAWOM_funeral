import { MainContainer, MainInnerContainer } from '../../containers'
import { MainReview } from '../main-'
import Image from 'next/image'

export function HomeComponent() {
  return (
    <>
      <div className="flex flex-col">
        <div className="top-0 w-full h-full overflow-hidden bg-center bg-no-repeat bg-cover ">
          <Image src="/img/main/visual01.jpg" alt="Description" layout="responsive" width={1000} height={200} />
        </div>
        {/* 다움상조 회사소개 + 후불제상조 소개 */}
        <MainInnerContainer>
          <div className="flex-col">
            <h5 className="mb-2 text-3xl font-bold text-gray-900 dark:text-white">회사소개</h5>
            <p className="mb-5 text-base text-gray-500 sm:text-lg dark:text-gray-400">
              다움상조는 유가족의 편에서 일하고 있습니다. 장례식을 마치고 결제하는 정직한 후불 결제 시스템
            </p>
            <div className="items-center justify-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
              <a
                href="#"
                className="w-full sm:w-auto bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="mr-3 w-7 h-7"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.5 2.25a.75.75 0 000 1.5v16.5h-.75a.75.75 0 000 1.5h16.5a.75.75 0 000-1.5h-.75V3.75a.75.75 0 000-1.5h-15zM9 6a.75.75 0 000 1.5h1.5a.75.75 0 000-1.5H9zm-.75 3.75A.75.75 0 019 9h1.5a.75.75 0 010 1.5H9a.75.75 0 01-.75-.75zM9 12a.75.75 0 000 1.5h1.5a.75.75 0 000-1.5H9zm3.75-5.25A.75.75 0 0113.5 6H15a.75.75 0 010 1.5h-1.5a.75.75 0 01-.75-.75zM13.5 9a.75.75 0 000 1.5H15A.75.75 0 0015 9h-1.5zm-.75 3.75a.75.75 0 01.75-.75H15a.75.75 0 010 1.5h-1.5a.75.75 0 01-.75-.75zM9 19.5v-2.25a.75.75 0 01.75-.75h4.5a.75.75 0 01.75.75v2.25a.75.75 0 01-.75.75h-4.5A.75.75 0 019 19.5z"
                    clipRule="evenodd"
                  />
                </svg>

                <div className="text-left">
                  <div className="mb-1 text-xs"> 다움상조 안내</div>
                  <div className="-mt-1 font-sans text-sm font-semibold">기업 소개 더보기</div>
                </div>
              </a>
              <a
                href="#"
                className="w-full sm:w-auto bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
              >
                {/* <svg
                  className="mr-3 w-7 h-7"
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fab"
                  data-icon="google-play"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="currentColor"
                    d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"
                  ></path>
                </svg> */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="mr-3 w-7 h-7"
                >
                  <path d="M11.625 16.5a1.875 1.875 0 100-3.75 1.875 1.875 0 000 3.75z" />
                  <path
                    fillRule="evenodd"
                    d="M5.625 1.5H9a3.75 3.75 0 013.75 3.75v1.875c0 1.036.84 1.875 1.875 1.875H16.5a3.75 3.75 0 013.75 3.75v7.875c0 1.035-.84 1.875-1.875 1.875H5.625a1.875 1.875 0 01-1.875-1.875V3.375c0-1.036.84-1.875 1.875-1.875zm6 16.5c.66 0 1.277-.19 1.797-.518l1.048 1.048a.75.75 0 001.06-1.06l-1.047-1.048A3.375 3.375 0 1011.625 18z"
                    clipRule="evenodd"
                  />
                  <path d="M14.25 5.25a5.23 5.23 0 00-1.279-3.434 9.768 9.768 0 016.963 6.963A5.23 5.23 0 0016.5 7.5h-1.875a.375.375 0 01-.375-.375V5.25z" />
                </svg>

                <div className="text-left">
                  <div className="mb-1 text-xs">운영방식 소개</div>
                  <div className="-mt-1 font-sans text-sm font-semibold">후불제상품 상세</div>
                </div>
              </a>
            </div>
          </div>
        </MainInnerContainer>
        <div className="flex flex-col items-center w-full p-2 Tab:flex-row">
          {/* <div className="Tab:flex-row"> */}
          {/* 상품 소개 태그 */}
          {/* <div className="max-w-sm min-w-[200px] p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"> */}
          <div className="Tab:hidden PC:block max-w-sm min-w-[150px] p-6 rounded-lg  dark:bg-gray-800 dark:border-gray-700">
            <svg
              className="mb-3 text-gray-500 w-7 h-7 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M18 5h-.7c.229-.467.349-.98.351-1.5a3.5 3.5 0 0 0-3.5-3.5c-1.717 0-3.215 1.2-4.331 2.481C8.4.842 6.949 0 5.5 0A3.5 3.5 0 0 0 2 3.5c.003.52.123 1.033.351 1.5H2a2 2 0 0 0-2 2v3a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V7a2 2 0 0 0-2-2ZM8.058 5H5.5a1.5 1.5 0 0 1 0-3c.9 0 2 .754 3.092 2.122-.219.337-.392.635-.534.878Zm6.1 0h-3.742c.933-1.368 2.371-3 3.739-3a1.5 1.5 0 0 1 0 3h.003ZM11 13H9v7h2v-7Zm-4 0H2v5a2 2 0 0 0 2 2h3v-7Zm6 0v7h3a2 2 0 0 0 2-2v-5h-5Z" />
            </svg>
            <a href="#">
              <div className="App:flex-row">
                <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">다움상조</h5>
                <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">상품소개</h5>
              </div>
            </a>

            <p className="mb-3 font-normal text-gray-500 Tab:hidden PC:block dark:text-gray-400">
              고객님의 필요에 맞게 구성 되어 있는 상품을 선택 해 보세요.
            </p>
          </div>

          {/* 상품 1 */}
          <div className="h-52 Tab:h-56 mb-3 Tab:mb-0 w-full min-w-[200px] max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow Tab:w-4/12 dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">150</h5>
            </a>
            <div className="h-20 Tab:h-24">
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">무빈소 장례</p>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">조문객 방문이 없는 상품</p>
            </div>
            <a
              href="#"
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              상품 안내
              <svg
                className="w-3.5 h-3.5 ml-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
          </div>
          {/* 상품 2 */}
          <div className="h-52 Tab:mx-3 Tab:h-56 mb-3 Tab:mb-0 w-full min-w-[200px] Tab:w-4/12 max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">230</h5>
            </a>
            <div className="h-20 Tab:h-24">
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">고급형 장례</p>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">장례비용 부담없이 고급형 장례상품</p>
            </div>
            <a
              href="#"
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              상품 안내
              <svg
                className="w-3.5 h-3.5 ml-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
          </div>
          {/* 상품 3 */}
          <div className=" h-52 Tab:h-56 mb-3 Tab:mb-0 w-full min-w-[200px] Tab:w-4/12 max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">330</h5>
            </a>
            <div className="h-20 Tab:h-24">
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">프리미엄 장례</p>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">다움상조 고품격 vip장례 상품</p>
            </div>
            <a
              href="#"
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              상품 안내
              <svg
                className="w-3.5 h-3.5 ml-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
          </div>
        </div>
        {/* </div> */}
      </div>
      <MainReview></MainReview>
    </>
  )
}
