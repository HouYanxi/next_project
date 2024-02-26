/*
 * @Author: Miss.Hyx
 * @Date: 2024-02-22 20:34:40
 * @LastEditTime: 2024-02-26 20:09:50
 * @Description:
 */
'use client'
import Image from 'next/image'
import clockImg from '@/public/images/clock.png'
import bookImg from '@/public/images/book.png'
import FrameImg from '@/public/images/Frame.png'
import Rectangle from '@/public/images/Rectangle.png'
import Mask_group from '@/public/images/Mask_group.png'
import rightVector from '@/public/images/Vector_logo.png'
import leftVector from '@/public/images/Vector_left.png'
import bg_sub1 from '@/public/images/bg_sub1.png'
import bg_sub2 from '@/public/images/bg_sub2.png'
import bg_sub3 from '@/public/images/bg_sub3.png'
import bg_sub4 from '@/public/images/bg_sub4.png'

export default function home() {
  const slideToLeft = () => {
    console.log(123)
    let arr = document.querySelectorAll('section')
    arr.forEach((item) => {
      item.classList.remove('slide-crard-right')
      item.classList.add('slide-crard')
    })
    setTimeout(() => {
      let rightBtn = document.getElementById('right-btn')
      let leftBtn = document.getElementById('left-btn')
      rightBtn.classList.add('right-slide-end')
      leftBtn.style.visibility = 'visible'
    }, 3000)
  }
  const slideToRight = () => {
    let arr = document.querySelectorAll('section')
    arr.forEach((item) => {
      item.classList.remove('slide-crard')
      item.classList.add('slide-crard-right')
    })
    setTimeout(() => {
      let rightBtn = document.getElementById('right-btn')
      let leftBtn = document.getElementById('left-btn')
      rightBtn.classList.remove('right-slide-end')
      leftBtn.style.visibility = 'hidden'
    }, 3000)
  }

  return (
    <main className="bg-black min-h-screen text-white font-['NEXTBook'] pt-[11.5625rem] w-[100vw] h-[100vh]">
      <div className="relative  w-[98.75rem] h-[17.375rem] flex overflow-hidden">
        {/* 卡片一 */}
        <section className="ml-[5.625rem] relative flex-none">
          <Image
            src={bg_sub1}
            alt="clock"
            className="inline-block w-[25.75rem] h-[17.25rem]"
          />
          <div className="bg-no-repeat bg-contain bg-[url('../public/images/Vector138.png')] h-[17.375rem] w-[26rem] pt-[2.25rem] pl-[1.625rem] pr-[1rem] transition ease-in-out delay-150 hover:-translate-y-[0.375rem] hover:translate-x-[0.375rem] duration-300 absolute top-[-0.125rem] left-[-0.125rem]">
            <div className="w-[2.875rem] h-[0.25rem] bg-gradient-to-b from-pink-500 to-purple-500 rounded-[0.6875rem]"></div>
            <div className="mt-[1.25rem] font-bold text-[1rem]">
              Introduction to programming
            </div>
            <div className="mt-[0.625rem] text-[0.625rem] py-[0.25rem] px-[0.5rem] rounded-[1.25rem] border-solid border-[0.0625rem] border-gray-400 inline-block">
              Beginner
            </div>
            <div className="mt-[0.625rem] text-[0.75rem] text-gray-400">
              This course covers the most basic concepts in programming using
              Solidity as an example.
            </div>
            <div className="flex justify-between mt-[3.75rem]">
              <div className="flex-1 flex items-center text-[0.875rem] font-['NeueMachina']">
                <Image
                  src={clockImg}
                  alt="clock"
                  className="inline-block mr-[0.375rem] w-[1rem] h-[1rem]"
                />
                36 Hour
              </div>
              <div className="flex-1 flex items-center text-[0.875rem] font-['NeueMachina']">
                <Image
                  src={bookImg}
                  alt="clock"
                  className="inline-block mr-[0.375rem] w-[1rem] h-[1rem]"
                />
                5 Course
              </div>
              <div className="flex-initail flex items-center text-[0.875rem] px-[1rem] py-[0.5rem] text-[#9EFA13] bg-[#2A2A2A] rounded-[2.5rem]">
                <Image
                  src={FrameImg}
                  alt="clock"
                  className="inline-block mr-[0.375rem] w-[1.25rem] h-[1.25rem]"
                />
                45%COMPLETED
              </div>
            </div>
          </div>
        </section>
        {/* 卡片二 */}
        <section className="ml-[5.625rem] relative flex-none">
          <Image
            src={bg_sub2}
            alt="clock"
            className="inline-block w-[25.75rem] h-[17.25rem]"
          />
          {/* <section className="ml-[90px] bg-no-repeat bg-[url('../public/images/Group_sub1.png')] h-[278px] w-[416px]"> */}
          <div className="flex flex-col justify-between transition ease-in-out delay-150 hover:-translate-y-[0.375rem] hover:translate-x-[0.375rem] duration-300 bg-no-repeat bg-contain bg-[url('../public/images/Group2.png')] h-[17.375rem] w-[26rem] py-[2.25rem] pl-[1.625rem] pr-[1rem] absolute top-[-0.125rem] left-[-0.125rem]">
            <div>
              <div className="font-bold text-[1rem]">
                Moonshot 2023 Summer Hackathon
              </div>
              <div className="flex">
                <div className="mt-[0.625rem] text-[0.625rem] py-[0.25rem] px-[0.5rem] rounded-[1.25rem] border-solid border-[0.0625rem] border-gray-400 inline-block mr-[1.25rem]">
                  All Tracks
                </div>
                <div className="mt-[0.625rem] text-[0.625rem] py-[0.25rem] px-[0.5rem] rounded-[1.25rem] border-solid border-[0.0625rem] border-gray-400 inline-block mr-[1.25rem]">
                  Solidity
                </div>
                <div className="mt-[0.625rem] text-[0.625rem] py-[0.25rem] px-[0.5rem] rounded-[1.25rem] border-solid border-[0.0625rem] border-gray-400 inline-block">
                  ZK
                </div>
              </div>
            </div>
            <div className="text-[0.75rem]">
              <div className="flex justify-between items-center border-b-[0.0625rem] border-b-gray-200/50 pb-[0.25rem] pt-[0.625rem]">
                <div className="text-gray-400">Signup</div>
                <div className="font-['NeueMachina'] text-[0.875rem]">
                  4/15-6/15
                </div>
              </div>
              <div className="flex justify-between items-center border-b-[0.0625rem] border-b-gray-200/50 pb-[0.25rem] pt-[0.625rem]">
                <div className="text-gray-400">Event</div>
                <div className="font-['NeueMachina'] text-[0.875rem]">
                  6/15-7/15
                </div>
              </div>
              <div className="flex justify-between items-center border-b-[0.0625rem] border-b-gray-200/50 pb-[0.25rem] pt-[0.625rem]">
                <div className="text-gray-400">Grant Size</div>
                <div className="font-['NeueMachina'] text-[0.875rem]">200K</div>
              </div>
            </div>
          </div>
        </section>
        {/* 卡片三 */}
        <section className="ml-[5.625rem] relative flex-none">
          <Image
            src={bg_sub3}
            alt="clock"
            className="inline-block w-[25.75rem] h-[17.25rem]"
          />
          <div className="bg-no-repeat bg-contain bg-[url('../public/images/Vector139.png')] h-[17.375rem] w-[26rem] pt-[2.25rem] pl-[1.625rem] pr-[2.875rem] transition ease-in-out delay-150 hover:-translate-y-[0.375rem] hover:translate-x-[0.375rem] duration-300 absolute top-[-0.125rem] left-[-0.125rem]">
            <div className="w-[2.875rem] h-[0.25rem] bg-gradient-to-b from-[#D9E313] to-[#3CBC34] rounded-[0.6875rem]"></div>
            <div className="mt-[1.25rem] font-bold text-[1rem]">
              Web 3.0 Programming Basics
            </div>
            <div className="mt-[0.625rem] text-[0.625rem] py-[0.25rem] px-[0.5rem] rounded-[1.25rem] border-solid border-[0.0625rem] border-gray-400 inline-block">
              Beginner
            </div>
            <div className="mt-[0.625rem] text-[0.75rem] text-gray-400">
              This course covers the most basic concepts in programming using
              Solidity as an example.
            </div>
            <div className="flex justify-between mt-[3.75rem]">
              <div className="flex-1 flex items-center text-[0.875rem] font-['NeueMachina']">
                <Image
                  src={clockImg}
                  alt="clock"
                  className="inline-block mr-[0.375rem] w-[1rem] h-[1rem]"
                />
                36 Hour
              </div>
              <div className="flex-1 flex items-center text-[0.875rem] font-['NeueMachina']">
                <Image
                  src={bookImg}
                  alt="clock"
                  className="inline-block mr-[0.375rem] w-[1rem] h-[1rem]"
                />
                5 Course
              </div>
            </div>
          </div>
        </section>
        {/* 卡片四 */}
        <section className="ml-[5.625rem] relative flex-none">
          <Image
            src={bg_sub4}
            alt="clock"
            className="inline-block w-[25.75rem] h-[17.25rem]"
          />
          <div className="bg-no-repeat bg-contain bg-[url('../public/images/Rectangle.png')] h-[17.375rem] w-[26rem] py-[1.25rem] pl-[1.625rem] pr-[2.875rem] transition ease-in-out delay-150 hover:-translate-y-[0.375rem] hover:translate-x-[0.375rem] duration-300 absolute top-[-0.125rem] left-[-0.125rem]">
            <div className="w-[2.875rem] h-[0.25rem] bg-gradient-to-b from-[#D9E313] to-[#3CBC34] rounded-[0.6875rem]"></div>
            <span className="mt-[1.25rem] font-bold text-[1rem]">Web</span>
            <Image
              src={Mask_group}
              width={380}
              height={238}
              alt="clock"
              className="inline-block"
            />
          </div>
        </section>

        {/* 右边滑动按钮 */}
        <div
          className="w-[3rem] h-[3rem] rounded-[1.5rem] border-[0.0625rem] absolute right-[5rem] top-[6.875rem] border-[#676767] flex items-center justify-center hover:bg-[#303030] hover:border-none"
          onClick={slideToLeft}
          id="right-btn"
        >
          <Image
            src={rightVector}
            alt="clock"
            className="w-[0.6875rem] h-[1rem]"
          />
        </div>
        {/* 左边边滑动按钮 */}
        <div
          className="w-[3rem] h-[3rem] rounded-[1.5rem] border-[0.0625rem] absolute left-[5rem] top-[6.875rem] border-[#676767] flex items-center justify-center hover:bg-[#303030] hover:border-none"
          id="left-btn"
          onClick={slideToRight}
        >
          <Image
            src={leftVector}
            alt="clock"
            className="w-[0.6875rem] h-[1rem]"
          />
        </div>
      </div>
    </main>
  )
}
