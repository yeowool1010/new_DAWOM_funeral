import Image from 'next/image'

export function MainReview() {
  return (
    // <div className="m-2 h-52 Tab:h-56 mb-3 Tab:mb-0 w-full min-w-[200px] Tab:w-4/12 max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <div className="w-11/12 p-3 m-3 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      {/* <ul
        className="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 rounded-t-lg bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:bg-gray-800"
        id="defaultTab"
        data-tabs-toggle="#defaultTabContent"
        role="tablist"
      >
        <li className="mr-2">
          <button
            id="about-tab"
            data-tabs-target="#about"
            type="button"
            role="tab"
            aria-controls="about"
            aria-selected="true"
            className="inline-block p-4 text-blue-600 rounded-tl-lg hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-blue-500"
          >
            About
          </button>
        </li>
        <li className="mr-2">
          <button
            id="services-tab"
            data-tabs-target="#services"
            type="button"
            role="tab"
            aria-controls="services"
            aria-selected="false"
            className="inline-block p-4 hover:text-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-gray-300"
          >
            Services
          </button>
        </li>
        <li className="mr-2">
          <button
            id="statistics-tab"
            data-tabs-target="#statistics"
            type="button"
            role="tab"
            aria-controls="statistics"
            aria-selected="false"
            className="inline-block p-4 hover:text-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-gray-300"
          >
            Facts
          </button>
        </li>
      </ul> */}
      <div id="defaultTabContent">
        <div
          className="p-4 bg-white rounded-lg md:p-8 dark:bg-gray-800"
          id="about"
          role="tabpanel"
          aria-labelledby="about-tab"
        >
          <h2 className="mb-3 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">장례후기</h2>
          {/* <p className="mb-3 text-gray-500 dark:text-gray-400 "> */}
          {/* <p className="w-[250px] overflow-hidden overflow-ellipsis whitespace-nowrap mb-3 text-gray-500 dark:text-gray-400 "> */}

          {/* 긴 글 줄바꿈 되지 않도록 이 줄만 프리티어 적용 ignore 함 */}
          {/* clamp-3은 tailwind plugins으로 세 줄 이상일 경우 ... 처리하는것임*/}
          {/* prettier-ignore */}
          <p className="w-[250px] clamp-3">
            몇일전 대전에서 어머니 장례식을 치렀어요. 경험이 없다보니 어떻게 준비해야 할지 막막 했었는데 전화상담부터 너무 친절하게 설명도 잘 해주시고 장례식 당일날 전화만 하니 장례식장으로 오셔서 진행을 너무 잘 해주셨습니다. 어머니 관에 꽃장식도 너무 예쁘고 마음에 들었습니다. 어머니 살아 생전 꽃을 좋아하셔서 정말 꽃길상조 선택하길 잘 했다는 칭찬도 친척분들에게 들었어요. 
          </p>
          <a
            href="#"
            className="inline-flex items-center font-medium text-blue-600 hover:text-blue-800 dark:text-blue-500 dark:hover:text-blue-700"
          >
            Learn more
            <svg
              className="w-2.5 h-2.5 ml-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
          </a>
        </div>
        <div
          className="hidden p-4 bg-white rounded-lg md:p-8 dark:bg-gray-800"
          id="services"
          role="tabpanel"
          aria-labelledby="services-tab"
        >
          <h2 className="mb-5 text-2xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            We invest in the world’s potential
          </h2>
          {/* <!-- List --> */}
          <ul role="list" className="space-y-4 text-gray-500 dark:text-gray-400">
            <li className="flex items-center space-x-2">
              <svg
                className="flex-shrink-0 w-3.5 h-3.5 text-blue-600 dark:text-blue-500"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
              </svg>
              <span className="leading-tight">Dynamic reports and dashboards</span>
            </li>
            <li className="flex items-center space-x-2">
              <svg
                className="flex-shrink-0 w-3.5 h-3.5 text-blue-600 dark:text-blue-500"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
              </svg>
              <span className="leading-tight">Templates for everyone</span>
            </li>
            <li className="flex items-center space-x-2">
              <svg
                className="flex-shrink-0 w-3.5 h-3.5 text-blue-600 dark:text-blue-500"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
              </svg>
              <span className="leading-tight">Development workflow</span>
            </li>
            <li className="flex items-center space-x-2">
              <svg
                className="flex-shrink-0 w-3.5 h-3.5 text-blue-600 dark:text-blue-500"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
              </svg>
              <span className="leading-tight">Limitless business automation</span>
            </li>
          </ul>
        </div>
        <div
          className="hidden p-4 bg-white rounded-lg md:p-8 dark:bg-gray-800"
          id="statistics"
          role="tabpanel"
          aria-labelledby="statistics-tab"
        >
          <dl className="grid max-w-screen-xl grid-cols-2 gap-8 p-4 mx-auto text-gray-900 sm:grid-cols-3 xl:grid-cols-6 dark:text-white sm:p-8">
            <div className="flex flex-col">
              <dt className="mb-2 text-3xl font-extrabold">73M+</dt>
              <dd className="text-gray-500 dark:text-gray-400">Developers</dd>
            </div>
            <div className="flex flex-col">
              <dt className="mb-2 text-3xl font-extrabold">100M+</dt>
              <dd className="text-gray-500 dark:text-gray-400">Public repositories</dd>
            </div>
            <div className="flex flex-col">
              <dt className="mb-2 text-3xl font-extrabold">1000s</dt>
              <dd className="text-gray-500 dark:text-gray-400">Open source projects</dd>
            </div>
          </dl>
        </div>
      </div>
      <ul>
        <li>
          <Image src="/img/main/review_img1.jpg" alt="Description" layout="responsive" width={200} height={200} />
        </li>
        <li>
          <Image src="/img/main/review_img2.jpg" alt="Description" layout="responsive" width={200} height={200} />
        </li>
        <li>
          <Image src="/img/main/review_img3.jpg" alt="Description" layout="responsive" width={200} height={200} />
        </li>
      </ul>
    </div>
  )
}
