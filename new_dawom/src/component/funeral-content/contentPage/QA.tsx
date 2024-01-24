import Image from 'next/image'

export const QA = () => {

    return (
<>
    
            {/* <div className=" p-4  bg-innerBg rounded-md"> */}
            <div className=" p-4  rounded-md">
              <div className="flex">
                <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 24 24" 
                    // fill="currentColor" 
                    fill="gray" 
                    className="w-6 h-6">
                  <path
                    fill-rule="evenodd"
                    d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z"
                    clip-rule="evenodd"
                  />
                </svg>
    
                <h2 className="pl-2 text-lg font-semibold text-titleGray">안내 사항</h2>
              </div>
              <ul className="pl-5 mt-2 space-y-2 text-sm list-disc border-t border-gray-200 text-textGray">
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
            <div className="p-4 bg-innerBg rounded-md ">
              <div className="flex">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 24 24" 
                  // fill="currentColor"
                  fill="gray" 
                  className="w-6 h-6">
                  <path
                    fill-rule="evenodd"
                    d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm11.378-3.917c-.89-.777-2.366-.777-3.255 0a.75.75 0 01-.988-1.129c1.454-1.272 3.776-1.272 5.23 0 1.513 1.324 1.513 3.518 0 4.842a3.75 3.75 0 01-.837.552c-.676.328-1.028.774-1.028 1.152v.75a.75.75 0 01-1.5 0v-.75c0-1.279 1.06-2.107 1.875-2.502.182-.088.351-.199.503-.331.83-.727.83-1.857 0-2.584zM12 18a.75.75 0 100-1.5.75.75 0 000 1.5z"
                    clip-rule="evenodd"
                  />
                </svg>
    
                <h2 className="pl-2 text-lg font-semibold text-titleGray">자주 묻는 질문</h2>
              </div>
              {/* 질문과 답변 리스트 */}
              <div className="mt-2 space-y-2">
                <div className="pt-2 my-4 border-t border-gray-200">
                  <div className="flex mb-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      // fill="none"
                      fill="gray"
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
    
                    <h3 className="pl-2 font-medium text-titleGray">장례식장 상담시 상조 사용하지 않으면 빈소료 할인?</h3>
                  </div>
                  {/* <p className="text-sm">
                    상조회사 사용하지 않을시 빈소료를 할인해 주겠다는 장례식장이 있습니다. 
                    장례식 경험이 없는 유가족의
                    특성상 상조회사가 없으면 음식비용과 장례용품 비용을 과다 청구하는 경우가 많습니다. 
                    꽃길상조 전문인력은
                    유가족의 편에서 장례비용 절약에 도움을 드리고 있습니다.
                  </p> */}
                 <div className='text-textGray'>
                    <p className="text-sm">상조회사 사용하지 않을시 빈소료를 할인해 주겠다는 장례식장이 있습니다.</p>
                    <p className="text-sm">
                      장례식 경험이 없는 유가족의 특성상 상조회사가 없으면 음식비용과 장례용품 비용을 과다 청구하는 경우가
                      많습니다.
                    </p>
                    <p className="text-sm">꽃길상조 전문인력은 유가족의 편에서 장례비용 절약에 도움을 드리고 있습니다.</p>
                 </div>
                </div>
                <div className="pt-2 my-4 border-t border-gray-200">
                  <div className="flex mb-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      // fill="none"
                      fill="gray"
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
    
                    <h3 className="pl-2 font-medium text-titleGray">장례식장 혜택은 없나요?</h3>
                  </div>
                  {/* <p className="text-sm">
                    유가족이 미리 장례식장으로 방문하거나 전화 예약을 할 경우 상조회사를 통해서 간 것이 아니기 때문에
                    빈소료 할인 또는 제단 장식 할인을 받을 수가 없습니다. 가급적이면 상조회사를 믿고 이용하시면 할인 받을
                    수 있는 부분은 최대한 도움을 드리고 있으니 임종시 바로 대표번호로 연락 주시면 최대한 도움을
                    드리겠습니다.
                  </p> */}
                 <div className='text-textGray'>
                    <p className="text-sm">
                      유가족이 미리 장례식장으로 방문하거나 전화 예약을 할 경우 상조회사를 통해서 간 것이 아니기 때문에
                      빈소료 할인 또는 제단 장식 할인을 받을 수가 없습니다.
                    </p>
                    <p className="text-sm">
                      가급적이면 상조회사를 믿고 이용하시면 할인 받을 수 있는 부분은 최대한 도움을 드리고 있으니 임종시 바로
                      대표번호로 연락 주시면 최대한 도움을 드리겠습니다.
                    </p>
                 </div>
                </div>
                {/* ...기타 질문과 답변 */}
              </div>
            </div>
</>

    )
}