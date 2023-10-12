import { MainContainer, MainInnerContainer } from '../../containers'
import { MainReview } from '../main-'

export function HomeComponent() {
  return (
    <>
      <div className="flex flex-col">
        <div className="flex flex-col items-center w-full p-2 overflow-hidden Tab:flex-row">
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
        <MainReview />
      </div>
    </>
  )
}
