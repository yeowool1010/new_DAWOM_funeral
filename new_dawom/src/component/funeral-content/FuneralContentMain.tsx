'use client'

import { useState } from 'react'
import { MainContainer } from '../../containers'
import { HeaderImg } from '../common'
import { Content150 } from './contentPage'
import Image from 'next/image'

export const FuneralContentMain = () => {
  const [isClickedContent, setIsClickedContent] = useState('150')

  const handleContentClick = (content: string) => {
    setIsClickedContent(content)
  }
  console.log(isClickedContent)

  return (
    <>
      <HeaderImg>상품소개</HeaderImg>
      <MainContainer>
        <div className="p-4 space-y-6 bg-white">
          {/* <div className="flex items-center justify-between p-2 bg-blue-100 rounded-md "> */}
          <div className="flex items-center justify-between p-2 ">
            <button
              type="button"
              className="flex flex-col items-center w-4/12 p-1 mx-2 font-bold  text-blue-500 hover:text-white bg-blue-100 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300  rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-100 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              onClick={() => {
                handleContentClick('150')
              }}
            >
              <p>150</p>
              <p>무빈소</p>
            </button>
            <button
              type="button"
              className="flex flex-col items-center w-4/12 p-1 mx-2 font-bold  text-blue-500 hover:text-white bg-blue-100 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300  rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-100 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              onClick={() => {
                handleContentClick('230')
              }}
            >
              <p>230</p>
              <p>고급형</p>
            </button>
            <button
              type="button"
              className="flex flex-col items-center w-4/12 p-1 mx-2 font-bold  text-blue-500 hover:text-white bg-blue-100 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300  rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-100 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              onClick={() => {
                handleContentClick('330')
              }}
            >
              <p>330</p>
              <p>프리미엄</p>
            </button>
          </div>

          {isClickedContent === '150' && <Content150 />}
          {isClickedContent === '230' && <p>230</p>}
          {isClickedContent === '330' && <p>330</p>}
        </div>
      </MainContainer>
    </>
  )
}
