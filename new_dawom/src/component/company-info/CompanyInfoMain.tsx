import { MainContainer } from '../../containers'
import { HeaderImg } from '../common'
import Image from 'next/image'
import React from 'react';

export const CompanyInfoMain = () => {
  return (
    <>
      <HeaderImg>회사소개</HeaderImg>
      <MainContainer>
        <div className="container px-4 py-8 mx-auto space-y-8">
          <div className="container px-4 py-8 mx-auto">
            <h1 className="mb-4 text-4xl font-bold">다움상조가 일하는 방식</h1>
            <hr className="w-20 mb-8 border-blue-500" />

            <div className="flex flex-col Tab:grid Tab:grid-cols-3 Tab:gap-8">
              {/* 첫 번째 이미지와 텍스트 */}
              <div className="mb-3">
                <Image
                  src="/img/companyInfo/intro01_img1.jpg"
                  alt="First Image"
                  width={500}
                  height={300}
                  className="object-cover w-full h-48 mb-4"
                />
                <div className="text-center">
                  <span className="inline-block p-2 mb-2 font-bold text-white bg-yellow-500">01</span>
                  <p className="font-bold">다움상조는 매우 합리적입니다.</p>
                  <p className="text-sm">
                    장례는 대부분 화장으로 모시는데 아직도 매장상품 그대로 비싼 비용을 지불하고 상조를 이용한다는 것이
                    불합리하다는생각에서 꽃길상조가 시작되었습니다.
                  </p>
                </div>
              </div>

              {/* 두 번째 이미지와 텍스트 */}
              <div className="mb-3">
                <Image
                  src="/img/companyInfo/intro01_img2.jpg"
                  alt="Second Image"
                  width={500}
                  height={300}
                  className="object-cover w-full h-48 mb-4"
                />
                <div className="text-center">
                  <span className="inline-block p-2 mb-2 font-bold text-white bg-yellow-500">02</span>
                  <p className="font-bold">다움상조는 매우 정직합니다.</p>
                  <p className="text-sm">
                    정직한 장례지도사 분들이 뜻을 모아 정작한 상조, 정직한 상품을 제공하고자 화장전문 상품을 만들게
                    되었습니다 거품을 거둬내며 서비스질은 최대로 높였습니다.
                  </p>
                </div>
              </div>

              {/* 세 번째 이미지와 텍스트 */}
              <div className="mb-3">
                <Image
                  src="/img/companyInfo/intro01_img3.jpg"
                  alt="Third Image"
                  width={500}
                  height={300}
                  className="object-cover w-full h-48 mb-4"
                />
                <div className="text-center">
                  <span className="inline-block p-2 mb-2 font-bold text-white bg-yellow-500">03</span>
                  <p className="font-bold">다움상조는 매우 효율적입니다.</p>
                  <p className="text-sm">
                    비용 부담을 줄여 유가족분들의 부담을 덜면서도 품격있고 아름다운 이별을 하는데 불편함이 없도록
                    끊임없이 노력 하며, 서비스 비용대비 효율이 매우 높습니다
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* 하단 섹션 */}
          {/* <div className="space-y-8">
            <h2 className="text-2xl font-bold">꽃길상조 이용고객님들을 위해</h2>
            <h2 className="text-2xl font-bold">다양한 서비스를 제공하고 있습니다</h2>
            <Image src="/img/companyInfo/intro02_bg.jpg" alt="Bottom Image" width={800} height={400} />
            <p className="text-lg">
              2017년부터 시작된 꽃길상조 서비스는 많은 분들이 이용하고 주변 분들에게 소개할 만큼 만족을 표현해
              주셨습니다.
            </p>
            <p>
              대한민국 1등 기업 이라는 타이틀 보다는 유가족분들에게 조금이라도 도움이 되기 위해 항상 최선을 다하고
              고민하고 있습니다. 과한 광고와 홍보 활동은 회사의 지출을 만들고 회사의 지출이 많아지면 고객에게 부담을
              드릴 수밖에 없습니다. 1등 브랜드는 돈만 주면 언제든 살수 있는게 현실입니다. 하지만 그 비용은 고스란히
              소비자에게 부담으로 전달되죠. 최소한의 광고와 연예인 모델이 없는 이유는 고객에게 부담을 드리기 싫은
              꽃길상조의 마음입니다. 유가족분들이 바라는 점은 부담 없는 가격으로 사랑하는 가족의 장례식을 정중하게
              모시는 것을 잘 이해 하기에 마지막 가시는 길이 꽃길이 되기를 바라는 마음으로 장례 예식을 진행해 드리고
              있습니다.
            </p>
          </div> */}

          <div className="container mx-auto space-y-6 Tab:p-6">
            <h1 className="text-4xl font-bold text-center">다움상조는 이용고객님들을 위해</h1>
            <h1 className="text-4xl font-bold text-center">다양한 서비스를 제공하고 있습니다</h1>
            <hr className="w-20 mx-auto mb-4 border-blue-400" />

            <p className="mb-6 text-lg text-center">2017년부터 시작된 다움상조 서비스는 많은 분들이 이용하고</p>
            <p className="mb-6 text-lg text-center">변 분들에게 소개할 만큼 만족을 표현해 주셨습니다.</p>

            <div className="flex flex-col items-center justify-center Tab:space-x-8 Tab:flex-row">
              <div className="Tab:w-1/3">
                <Image
                  src="/img/companyInfo/intro02_bg.jpg"
                  alt="Review Image"
                  className="shadow-lg rounded-xl"
                  width={800}
                  height={400}
                />
              </div>
              <div className="space-y-4 Tab:w-2/3">
                <p className="text-base">
                  대한민국 1등 기업 이라는 타이틀 보다는 유가족분들에게 조금이라도 도움이 되기 위해 항상 최선을 다하고
                  고민하고 있습니다. 과한 광고와 홍보 활동은 회사의 지출을 만들고 회사의 지출이 많아지면 고객에게 부담을
                  드릴 수밖에 없습니다. 1등 브랜드는 돈만 주면 언제든 살수 있는게 현실입니다. 하지만 그 비용은 고스란히
                  소비자에게 부담으로 전달되죠. 최소한의 광고와 연예인 모델이 없는 이유는 고객에게 부담을 드리기 싫은
                  꽃길상조의 마음입니다. 유가족분들이 바라는 점은 부담 없는 가격으로 사랑하는 가족의 장례식을 정중하게
                  모시는 것을 잘 이해 하기에 마지막 가시는 길이 꽃길이 되기를 바라는 마음으로 장례 예식을 진행해 드리고
                  있습니다.
                </p>
                <button className="px-4 py-2 text-white transition duration-300 bg-blue-500 rounded-full hover:bg-blue-600">
                  서비스 후기 보러가기
                </button>
              </div>
            </div>
          </div>
        </div>
      </MainContainer>
    </>
  )
}
