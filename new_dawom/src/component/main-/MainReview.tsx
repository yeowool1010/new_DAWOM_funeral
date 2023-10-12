import Image from 'next/image'

export function MainReview() {
  return (
    <div className="flex flex-col items-center w-11/12 p-3 m-3 overflow-hidden bg-white border border-gray-200 rounded-lg shadow Tab:items-start Tab:flex-row dark:bg-gray-800 dark:border-gray-700">
      <div className="Tab:w-1/3" id="defaultTabContent">
        <div
          className="p-4 bg-white rounded-lg md:p-8 dark:bg-gray-800"
          id="about"
          role="tabpanel"
          aria-labelledby="about-tab"
        >
          <h2 className="mb-3 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">장례후기</h2>

          {/* 긴 글 줄바꿈 되지 않도록 이 줄만 프리티어 적용 ignore 함 */}
          {/* clamp-3은 tailwind plugins으로 세 줄 이상일 경우 ... 처리하는것임*/}
          {/* prettier-ignore */}
          <p className="w-[18rem] Tab:w-[11rem] clamp-3">
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
      </div>
      <div className="Tab:w-2/3">
        <ul className="flex flex-col Tab:flex-row">
          <li className="relative w-full h-64 Tab:pt-14 sm:w-64 sm:h-fit Tab:p-2">
            <Image
              src="/img/main/review_img1.jpg"
              alt="Description"
              // layout="fill"
              className="object-cover"
              width={300}
              height={300}
            />
          </li>
          <li className="relative w-full h-64 Tab:pt-14 sm:w-64 sm:h-fit Tab:p-2">
            <Image
              src="/img/main/review_img2.jpg"
              alt="Description"
              className="object-cover"
              width={300}
              height={300}
            />
          </li>
          <li className="relative w-full h-64 Tab:pt-14 sm:w-64 sm:h-fit Tab:p-2">
            <Image
              src="/img/main/review_img3.jpg"
              alt="Description"
              className="object-cover"
              width={300}
              height={300}
            />
          </li>
        </ul>
        {/* <ul className="flex flex-col Tab:flex-row">
          <li>
            <Image src="/img/main/review_img1.jpg" alt="Description" layout="responsive" width={200} height={200} />
          </li>
          <li>
            <Image src="/img/main/review_img2.jpg" alt="Description" layout="responsive" width={200} height={200} />
          </li>
          <li>
            <Image src="/img/main/review_img3.jpg" alt="Description" layout="responsive" width={200} height={200} />
          </li>
        </ul> */}
      </div>
    </div>
  )
}
