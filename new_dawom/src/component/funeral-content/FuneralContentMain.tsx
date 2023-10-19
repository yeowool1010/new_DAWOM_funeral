import { MainContainer } from '../../containers'
import { HeaderImg } from '../common'

export const FuneralContentMain = () => {
  return (
    <>
      <HeaderImg>상품소개</HeaderImg>
      <MainContainer>
        <div className="p-4 space-y-6 bg-white">
          <div className="flex items-center justify-between p-2 bg-blue-100 rounded-md">
            <span className="text-blue-500">무게로 가격정하기 150만원</span>
            <span className="text-blue-500">평균정가 230만원</span>
            <span className="text-blue-500">평균정가 330만원</span>
          </div>

          <div className="relative">
            <img src="/path/to/your/image.jpg" alt="Flower Image" className="w-full rounded-md" />
            <div className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
              <span className="text-xl font-bold text-blue-600">1,500,000원</span>
              <p className="text-blue-600">참고로 해당 무게로 신청시</p>
            </div>
          </div>

          <h1 className="py-4 text-xl font-bold">제목예시자리</h1>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <img src="/path/to/your/first-image.jpg" alt="First Image" className="w-full mb-2 rounded-md" />
              <p className="text-center">제품진열상의 위치자리</p>
            </div>
            <div>
              <img src="/path/to/your/second-image.jpg" alt="Second Image" className="w-full mb-2 rounded-md" />
              <p className="text-center">업체상세사진, 함께 찍힌 업체와 준비물 에 신청사항</p>
            </div>
            <div className="col-span-2">
              <img src="/path/to/your/third-image.jpg" alt="Third Image" className="w-full mb-2 rounded-md" />
              <p className="text-center">업자 직접사용 2번째 위치</p>
              <p className="text-center">위치를 보고한 함께 하는 업소라서</p>
            </div>
          </div>
        </div>
      </MainContainer>
    </>
  )
}
