import Image from 'next/image'

export const Content150 = () => {
  return (
    <div className="max-w-3xl ">
      <div className="relative">
        <Image
          src="/img/170/info_box_bg.png"
          alt="Flower Image"
          className="w-full rounded-md"
          width={1000}
          height={300}
        />
        <div className="absolute flex flex-col items-center transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
          <span className="text-xl font-bold text-blue-600">1,500,000원</span>
          <div className="flex flex-col items-center Tab:flex-row">
            <p className="text-black ">추가비용 없는</p>
            <p className="text-black ">무빈소 서비스 상품.</p>
          </div>
        </div>
      </div>

      <div className="flex py-4 mt-14">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
          <path d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z" />
        </svg>

        {/* <h1 className="py-4 text-xl font-bold">전문인력지원</h1> */}
        <h1 className="ml-2 text-xl font-bold ">전문인력지원</h1>
      </div>

      <div className="grid grid-cols-2 gap-4 p-5 bg-white rounded-md drop-shadow-lg">
        <div>
          <Image
            src="/img/170/70_list01_1_img.png"
            alt="장례식 사진"
            className="w-full mb-2 rounded-md"
            width={200}
            height={200}
          />
          <p className="mb-1 text-base font-semibold text-center">장례지도사 의전지원</p>
        </div>
        <div>
          <Image
            src="/img/170/70_list01_2_img.png"
            alt="입관사진"
            className="w-full mb-2 rounded-md"
            width={200}
            height={200}
          />
          <p className="mb-1 text-base font-semibold text-center">장례지도사</p>
          <p className="text-sm text-center text-gray-500">입관식진행</p>
          <p className="text-sm text-center text-gray-500">관내 화장장 우선 예약</p>
          <p className="text-sm text-center text-gray-500">종교별 예식 제사진행</p>
        </div>
        <div className="col-span-2">
          <Image
            src="/img/170/70_list01_3_img.png"
            alt="입관사진"
            className="w-full mb-2 rounded-md"
            width={200}
            height={200}
          />
          <p className="mb-1 text-base font-semibold text-center">입관지도사 2명 지원</p>
          <p className="text-sm text-center text-gray-500">유가족 분들과 함께 하는 입관식</p>
        </div>
      </div>

      {/* <h1 className="py-4 text-xl font-bold">차량 지원 서비스</h1> */}
      <div className="flex py-4 mt-14">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
          <path d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z" />
        </svg>

        <h1 className="ml-2 text-xl font-bold ">차량지원서비스</h1>
      </div>

      <div className="grid grid-cols-2 gap-4 p-5 bg-white rounded-md drop-shadow-lg">
        <div>
          <Image
            src="/img/170/70_list02_1_img.png"
            alt="고인전용 리무진"
            className="w-full mb-2 rounded-md"
            width={200}
            height={200}
          />
          <p className="mb-1 text-base font-semibold text-center">고인전용</p>
          <p className="mb-1 text-base font-semibold text-center">리무진 제공</p>
        </div>
        <div>
          <Image
            src="/img/170/70_list02_2_img.png"
            alt="앰뷸런스"
            className="w-full mb-2 rounded-md"
            width={200}
            height={200}
          />
          <p className="mb-1 text-base font-semibold text-center">앰뷸런스</p>
          <p className="text-sm text-center text-gray-500">관내 무료 이송</p>
        </div>
        <div className="col-span-2">
          <Image
            src="/img/170/70_list02_3_img.png"
            alt="유족을 위한 대형버스"
            className="w-full mb-2 rounded-md"
            width={200}
            height={200}
          />
          <p className="mb-1 text-base font-semibold text-center">유족 버스 지원</p>
          <p className="text-sm text-center text-gray-500">고인 전용칸이 마련되어 있어</p>
          <p className="text-sm text-center text-gray-500">버스만 이용하여 운구 가능</p>
          <p className="text-sm text-red-600 text-cente">
            ※ 리무진 버스 둘중 한 대 선택 제공 왕복 200km 제공 추가 운임 1km 당 1500원 발생 됩니다.
          </p>
        </div>
      </div>

      {/* <div className="p-8 bg-white"> */}
      {/* <h1 className="mb-6 text-2xl">장례용품 제공</h1> */}
      {/* <h1 className="py-4 text-xl font-bold">장례용품 제공</h1> */}
      <div className="flex py-4 mt-14">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
          <path d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z" />
        </svg>

        <h1 className="ml-2 text-xl font-bold ">장례용품 제공</h1>
      </div>

      <div className="grid grid-cols-3 gap-6 p-5 mb-5 bg-white rounded-md drop-shadow-lg">
        <div className="">
          <Image
            src="/img/170/70_list03_3_img.png"
            alt="고급 수의"
            className="w-full mb-2 rounded-md"
            width={200}
            height={200}
          />
          <p className="mb-1 text-base font-semibold">고급 화장용 수의 제공</p>
          <p className="text-sm text-gray-500">도포,원삼,겹저고리,속저고리,두루마기 천금,지금.장매,악수 등 일체</p>
        </div>

        <div>
          <Image
            src="/img/170/70_list03_2_img.png"
            alt="고급 도자기 유골함"
            className="w-full mb-2 rounded-md"
            width={200}
            height={200}
          />
          <p className="mb-1 text-base font-semibold">고급 도자기 유골함 제공</p>
        </div>

        {/* 세 번째 열 */}
        <div>
          <Image
            src="/img/170/70_list03_1_img.png"
            alt="상복"
            className="w-full mb-2 rounded-md"
            width={200}
            height={200}
          />
          <p className="mb-1 text-base font-semibold">남상복 2벌</p>
          <p className="mb-1 text-base font-semibold">여상복 5벌</p>
          {/* <p className="text-sm text-gray-500">여상복 5벌</p> */}
        </div>
      </div>

      <div className="flex flex-col items-center mb-5 bg-white rounded-md drop-shadow-lg">
        <div className="grid items-center grid-cols-3 gap-4 p-5">
          <div className="flex flex-col items-center">
            <Image
              src="/img/170/70_list03_4_1_img.png"
              alt="상주완장"
              className="w-24 h-20 mb-2 rounded-md"
              width={100}
              height={100}
            />
            <div className="w-24 px-4 py-2 font-bold text-center text-white bg-blue-500 rounded-full h-fit hover:bg-blue-700">
              상주완장
            </div>
          </div>
          <div className="flex flex-col items-center mr-3 Tab:mr-0">
            <Image
              src="/img/170/70_list03_4_2_img.png"
              alt="머리핀"
              className="w-24 h-20 mb-2 rounded-md"
              width={100}
              height={100}
            />
            <div className="w-24 px-4 py-2 font-bold text-center text-white bg-blue-500 rounded-full h-fit hover:bg-blue-700">
              머리핀
            </div>
          </div>
          <div className="flex flex-col items-center">
            <Image
              src="/img/170/70_list03_4_3_img.png"
              alt="운구용 장갑"
              className="w-24 h-20 mb-2 rounded-md"
              width={100}
              height={100}
            />
            <div className="w-32 px-4 py-2 font-bold text-center text-white bg-blue-500 rounded-full h-fit hover:bg-blue-700">
              운구용 장갑
            </div>
          </div>
        </div>
        <p className="mb-1 text-base font-semibold text-blue-600">상주 용품 제공</p>
      </div>

      <div className="flex flex-col items-center bg-white rounded-md drop-shadow-lg">
        <div className="grid items-center grid-cols-4 gap-4 p-5">
          <div className="flex flex-col items-center">
            <Image
              src="/img/170/70_list03_4_1_img.png"
              alt="상주완장"
              className="w-24 h-20 mb-2 rounded-md"
              width={100}
              height={100}
            />
            <div className="w-16 px-4 py-2 font-bold text-center text-white bg-blue-500 rounded-full h-fit hover:bg-blue-700">
              알콜
            </div>
          </div>

          <div className="flex flex-col items-center ">
            <Image
              src="/img/170/70_list03_4_2_img.png"
              alt="머리핀"
              className="w-24 h-20 mb-2 rounded-md"
              width={100}
              height={100}
            />
            <div className="w-20 px-4 py-2 font-bold text-center text-white bg-blue-500 rounded-full h-fit hover:bg-blue-700">
              탈지면
            </div>
          </div>

          <div className="flex flex-col items-center">
            <Image
              src="/img/170/70_list03_4_3_img.png"
              alt="운구용 장갑"
              className="w-24 h-20 mb-2 rounded-md"
              width={100}
              height={100}
            />
            <div className="w-16 px-4 py-2 font-bold text-center text-white bg-blue-500 rounded-full h-fit hover:bg-blue-700">
              예단
            </div>
          </div>

          <div className="flex flex-col items-center">
            <Image
              src="/img/170/70_list03_4_3_img.png"
              alt="운구용 장갑"
              className="w-24 h-20 mb-2 rounded-md"
              width={100}
              height={100}
            />
            <div className="w-16 px-4 py-2 font-bold text-center text-white bg-blue-500 rounded-full h-fit hover:bg-blue-700">
              습신
            </div>
          </div>
        </div>

        <div className="grid items-center grid-cols-3 gap-4 p-5">
          <div className="flex flex-col items-center">
            <Image
              src="/img/170/70_list03_4_1_img.png"
              alt="상주완장"
              className="w-24 h-20 mb-2 rounded-md"
              width={100}
              height={100}
            />
            <div className="w-24 px-4 py-2 font-bold text-center text-white bg-blue-500 rounded-full h-fit hover:bg-blue-700">
              염지
            </div>
          </div>
          <div className="flex flex-col items-center ">
            <Image
              src="/img/170/70_list03_4_2_img.png"
              alt="머리핀"
              className="w-24 h-20 mb-2 rounded-md"
              width={100}
              height={100}
            />
            <div className="w-24 px-4 py-2 font-bold text-center text-white bg-blue-500 rounded-full h-fit hover:bg-blue-700">
              다라니경
            </div>
          </div>
          <div className="flex flex-col items-center">
            <Image
              src="/img/170/70_list03_4_3_img.png"
              alt="운구용 장갑"
              className="w-24 h-20 mb-2 rounded-md"
              width={100}
              height={100}
            />
            <div className="w-24 px-4 py-2 font-bold text-center text-white bg-blue-500 rounded-full h-fit hover:bg-blue-700">
              기독경
            </div>
          </div>
        </div>

        <div className="grid items-center grid-cols-2 gap-4 p-5">
          <div className="flex flex-col items-center ">
            <Image
              src="/img/170/70_list03_4_2_img.png"
              alt="머리핀"
              className="w-24 h-20 mb-2 rounded-md"
              width={100}
              height={100}
            />
            <div className="w-32 px-4 py-2 font-bold text-center text-white bg-blue-500 rounded-full h-fit hover:bg-blue-700">
              오동나무 관
            </div>
          </div>
          <div className="flex flex-col items-center">
            <Image
              src="/img/170/70_list03_4_3_img.png"
              alt="운구용 장갑"
              className="w-24 h-20 mb-2 rounded-md"
              width={100}
              height={100}
            />
            <div className="w-32 px-4 py-2 font-bold text-center text-white bg-blue-500 rounded-full h-fit hover:bg-blue-700">
              종교별 관보
            </div>
          </div>
        </div>

        <p className="mb-1 text-base font-semibold text-blue-600">입관 용품 제공</p>
        <p className="p-4 text-sm text-gray-500">
          관보, 결관바, 습신, 탈지면, 염지, 알코올, 고인전문 메이크업, 입관생화꽃 장식, 예단 기독경, 다라니경, 천주경,
          외 위생용품 일체 제공
        </p>
      </div>

      <div className="flex py-4 mt-14">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
          <path d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z" />
        </svg>

        <h1 className="ml-2 text-xl font-bold ">연계 서비스</h1>
      </div>

      <div className="grid grid-cols-3 gap-6 p-5 mb-5 bg-white rounded-md drop-shadow-lg">
        <div className="">
          <Image
            src="/img/170/70_list03_3_img.png"
            alt="고급 수의"
            className="w-full mb-2 rounded-md"
            width={200}
            height={200}
          />
          <p className="mb-1 text-base font-semibold">장례식장 안치실 예약</p>
          <p className="text-sm text-gray-500">유가족 희망 장례식장 우선예약 장례비용 부담시 근교 장례식장 추천</p>
        </div>

        <div>
          <Image
            src="/img/170/70_list03_2_img.png"
            alt="고급 도자기 유골함"
            className="w-full mb-2 rounded-md"
            width={200}
            height={200}
          />
          <p className="mb-1 text-base font-semibold">화장장 동행 서비스</p>
          <p className="text-sm text-gray-500">접수, 화장시간, 절차, 수골, 동행안내</p>
        </div>

        <div>
          <Image
            src="/img/170/70_list03_1_img.png"
            alt="상복"
            className="w-full mb-2 rounded-md"
            width={200}
            height={200}
          />
          <p className="mb-1 text-base font-semibold">납골당, 수목장</p>
          <p className="mb-1 text-base font-semibold">사전 신청시 할인</p>
          {/* <p className="text-sm text-gray-500">여상복 5벌</p> */}
        </div>

        <div className="grid grid-cols-2 col-span-3 gap-6">
          <div className="">
            <Image
              src="/img/170/70_list03_3_img.png"
              alt="고급 수의"
              className="w-full mb-2 rounded-md"
              width={200}
              height={200}
            />
            <p className="mb-1 text-base font-semibold">장례식장 빈소 예약</p>
            <p className="text-sm text-gray-500">유가족 희망 장례식장 우선 예약 지역별 장례식장 추천</p>
          </div>

          <div>
            <Image
              src="/img/170/70_list03_2_img.png"
              alt="고급 도자기 유골함"
              className="w-full mb-2 rounded-md"
              width={200}
              height={200}
            />
            <p className="mb-1 text-base font-semibold">운구인원 요청시 2명 무상지원</p>
            {/* <p className="text-sm text-gray-500">접수, 화장시간, 절차, 수골, 동행안내</p> */}
          </div>

          <div className="">
            <Image
              src="/img/170/70_list03_3_img.png"
              alt="고급 수의"
              className="w-full mb-2 rounded-md"
              width={200}
              height={200}
            />
            <p className="mb-1 text-base font-semibold">조문 예절 안내</p>
            <p className="text-sm text-gray-500">
              장례가 처음인 분들도 걱정 없도록 제사 집례 안내 종교별 조문 예절 방법 안내
            </p>
          </div>

          <div className="">
            <Image
              src="/img/290/123_list04_7_img.jpg"
              alt="관 생화장식"
              className="w-full mb-2 rounded-md"
              width={200}
              height={200}
            />
            <p className="mb-1 text-base font-semibold">관 속 생화 장식</p>
            <p className="text-sm text-gray-500">생화를 직접 준비하여 정성스럽게 모십니다.</p>
          </div>
        </div>
      </div>

      <div className="container p-4 mx-auto">
        <div className="space-y-4">
          {/* 안내 사항 섹션 */}
          <div className="p-4 bg-white rounded-md ">
            <div className="flex">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path
                  fill-rule="evenodd"
                  d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z"
                  clip-rule="evenodd"
                />
              </svg>

              <h2 className="pl-2 text-lg font-semibold">안내 사항</h2>
            </div>
            <ul className="pl-5 mt-2 space-y-2 text-sm list-disc border-t border-gray-200">
              <li className="mt-3">장례지도사 도착 후 고객의 사정으로 취소 시 출동 비용이 발생합니다.</li>
              <li>장의차량 운행 시 발생하는 도로비는 상품에 포함되어 있지 않습니다.</li>
              <li>꽃길상조 상품 중 고객의 요청으로 사용되지 않는 상품은 비용으로 공제해 드립니다.</li>
              <li>상품 이미지는 포토샵 작업이 되어 있으므로 실제 이미지와 다를 수 있습니다.</li>
              <li>고인 전용 리무진은 1차 화장장까지 운행 합니다.</li>
            </ul>
            {/* 유의사항 */}
            <p className="mt-4 text-sm font-bold text-blue-600">
              다움상조는 장례식 마지막 날 결제하는 후불 결제방식으로 진행됩니다. 가입비나 월 납입금이 없습니다.
            </p>
          </div>

          {/* 자주 묻는 질문 섹션 */}
          <div className="p-4 bg-white rounded-md ">
            <div className="flex">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path
                  fill-rule="evenodd"
                  d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm11.378-3.917c-.89-.777-2.366-.777-3.255 0a.75.75 0 01-.988-1.129c1.454-1.272 3.776-1.272 5.23 0 1.513 1.324 1.513 3.518 0 4.842a3.75 3.75 0 01-.837.552c-.676.328-1.028.774-1.028 1.152v.75a.75.75 0 01-1.5 0v-.75c0-1.279 1.06-2.107 1.875-2.502.182-.088.351-.199.503-.331.83-.727.83-1.857 0-2.584zM12 18a.75.75 0 100-1.5.75.75 0 000 1.5z"
                  clip-rule="evenodd"
                />
              </svg>

              <h2 className="pl-2 text-lg font-semibold">자주 묻는 질문</h2>
            </div>
            {/* 질문과 답변 리스트 */}
            <div className="mt-2 space-y-2">
              <div className="pt-2 my-4 border-t border-gray-200">
                <div className="flex mb-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z"
                    />
                  </svg>

                  <h3 className="pl-2 font-medium">장례식장 상담시 상조 사용하지 않으면 빈소료 할인?</h3>
                </div>
                {/* <p className="text-sm">
                  상조회사 사용하지 않을시 빈소료를 할인해 주겠다는 장례식장이 있습니다. 
                  장례식 경험이 없는 유가족의
                  특성상 상조회사가 없으면 음식비용과 장례용품 비용을 과다 청구하는 경우가 많습니다. 
                  꽃길상조 전문인력은
                  유가족의 편에서 장례비용 절약에 도움을 드리고 있습니다.
                </p> */}
                <p className="text-sm">상조회사 사용하지 않을시 빈소료를 할인해 주겠다는 장례식장이 있습니다.</p>
                <p className="text-sm">
                  장례식 경험이 없는 유가족의 특성상 상조회사가 없으면 음식비용과 장례용품 비용을 과다 청구하는 경우가
                  많습니다.
                </p>
                <p className="text-sm">꽃길상조 전문인력은 유가족의 편에서 장례비용 절약에 도움을 드리고 있습니다.</p>
              </div>
              <div className="pt-2 my-4 border-t border-gray-200">
                <div className="flex mb-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z"
                    />
                  </svg>

                  <h3 className="pl-2 font-medium">장례식장 혜택은 없나요?</h3>
                </div>
                {/* <p className="text-sm">
                  유가족이 미리 장례식장으로 방문하거나 전화 예약을 할 경우 상조회사를 통해서 간 것이 아니기 때문에
                  빈소료 할인 또는 제단 장식 할인을 받을 수가 없습니다. 가급적이면 상조회사를 믿고 이용하시면 할인 받을
                  수 있는 부분은 최대한 도움을 드리고 있으니 임종시 바로 대표번호로 연락 주시면 최대한 도움을
                  드리겠습니다.
                </p> */}
                <p className="text-sm">
                  유가족이 미리 장례식장으로 방문하거나 전화 예약을 할 경우 상조회사를 통해서 간 것이 아니기 때문에
                  빈소료 할인 또는 제단 장식 할인을 받을 수가 없습니다.
                </p>
                <p className="text-sm">
                  가급적이면 상조회사를 믿고 이용하시면 할인 받을 수 있는 부분은 최대한 도움을 드리고 있으니 임종시 바로
                  대표번호로 연락 주시면 최대한 도움을 드리겠습니다.
                </p>
              </div>
              {/* ...기타 질문과 답변 */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
