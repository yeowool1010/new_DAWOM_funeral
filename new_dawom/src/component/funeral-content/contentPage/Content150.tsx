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

      <h1 className="py-4 text-xl font-bold">전문인력지원</h1>

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

      <h1 className="py-4 text-xl font-bold">차량 지원 서비스</h1>

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
      <h1 className="py-4 text-xl font-bold">장례용품 제공</h1>

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
      {/* 이미지들... */}
      {/* Note: 각 항목의 구조는 첫 번째 열의 구조와 유사하게 작성할 수 있습니다. */}

      <h2 className="mt-6 text-xl">장례용품 제공</h2>
      <p className="mt-2 text-sm text-gray-500">내용, 설명, 리스트, 등등의 내용</p>
      {/* </div> */}
    </div>
  )
}
