import { MainContainer } from '../../containers'
import { HeaderImg } from '../common'

export function FuneralContentMain() {
  return (
    <>
      <HeaderImg>상품소개</HeaderImg>
      <MainContainer>
        <div className="relative p-4 bg-white rounded-lg shadow-md">
          <div className="absolute top-0 left-0 z-10 flex p-2 space-x-4 bg-white rounded-t-lg">
            <button className="px-3 py-1 text-blue-600 border border-blue-600 rounded-md">멤버십 가격표 150만원</button>
            <button className="px-3 py-1 text-gray-600 border border-gray-400 rounded-md">패키지A 230만원</button>
            <button className="px-3 py-1 text-gray-600 border border-gray-400 rounded-md">패키지A 330만원</button>
          </div>
          <div className="pt-16 pl-4">
            <h1 className="text-2xl font-bold text-blue-600">1,500,000원</h1>
            <p className="mt-4 text-gray-700">차가워요 없는 멤버십 서비스 시즌</p>
          </div>
          <div
            className="absolute bottom-0 right-0 w-3/5 bg-no-repeat bg-cover h-3/4"
            style={{ backgroundImage: 'url(/path-to-image.jpg)' }}
          ></div>
        </div>
      </MainContainer>
    </>
  )
}
