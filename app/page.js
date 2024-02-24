/*
 * @Author: Miss.Hyx
 * @Date: 2024-02-22 20:34:40
 * @LastEditTime: 2024-02-23 20:49:41
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
    <main className="bg-black min-h-screen text-white font-['NEXTBook'] pt-[185px] w-[100vw] h-[100vh]">
      <div className="relative w-[1580px] h-[278px] flex overflow-hidden">
        {/* 卡片一 */}
        <section className="ml-[90px] relative flex-none">
          <Image
            src={bg_sub1}
            width={412}
            height={276}
            alt="clock"
            className="inline-block "
          />
          <div className="bg-no-repeat bg-[url('../public/images/Vector138.png')] h-[278px] w-[416px] pt-[36px] pl-[26px] pr-[16px] transition ease-in-out delay-150 hover:-translate-y-[6px] hover:translate-x-[6px] duration-300 absolute top-[-2px] left-[-2px]">
            <div className="w-[46px] h-[4px] bg-gradient-to-b from-pink-500 to-purple-500 rounded-[11px]"></div>
            <div className="mt-[20px] font-bold text-[16px]">
              Introduction to programming
            </div>
            <div className="mt-[10px] text-[10px] py-[4px] px-[8px] rounded-[20px] border-solid border-[1px] border-gray-400 inline-block">
              Beginner
            </div>
            <div className="mt-[10px] text-[12px] text-gray-400">
              This course covers the most basic concepts in programming using
              Solidity as an example.
            </div>
            <div className="flex justify-between mt-[60px]">
              <div className="flex-1 flex items-center text-[14px] font-['NeueMachina']">
                <Image
                  src={clockImg}
                  width={16}
                  height={16}
                  alt="clock"
                  className="inline-block mr-[6px]"
                />
                36 Hour
              </div>
              <div className="flex-1 flex items-center text-[14px] font-['NeueMachina']">
                <Image
                  src={bookImg}
                  width={16}
                  height={16}
                  alt="clock"
                  className="inline-block mr-[6px]"
                />
                5 Course
              </div>
              <div className="flex-initail flex items-center text-[14px] px-[16px] py-[8px] text-[#9EFA13] bg-[#2A2A2A] rounded-[40px]">
                <Image
                  src={FrameImg}
                  width={20}
                  height={20}
                  alt="clock"
                  className="inline-block mr-[6px]"
                />
                45%COMPLETED
              </div>
            </div>
          </div>
        </section>
        {/* 卡片二 */}
        <section className="ml-[90px] relative flex-none">
          <Image
            src={bg_sub2}
            width={412}
            height={276}
            alt="clock"
            className="inline-block "
          />
          {/* <section className="ml-[90px] bg-no-repeat bg-[url('../public/images/Group_sub1.png')] h-[278px] w-[416px]"> */}
          <div className="flex flex-col justify-between transition ease-in-out delay-150 hover:-translate-y-[6px] hover:translate-x-[6px] duration-300 bg-no-repeat bg-[url('../public/images/Group2.png')] h-[278px] w-[416px] py-[36px] pl-[26px] pr-[16px] absolute top-[-2px] left-[-2px]">
            <div>
              <div className="font-bold text-[16px]">
                Moonshot 2023 Summer Hackathon
              </div>
              <div className="flex">
                <div className="mt-[10px] text-[10px] py-[4px] px-[8px] rounded-[20px] border-solid border-[1px] border-gray-400 inline-block mr-[20px]">
                  All Tracks
                </div>
                <div className="mt-[10px] text-[10px] py-[4px] px-[8px] rounded-[20px] border-solid border-[1px] border-gray-400 inline-block mr-[20px]">
                  Solidity
                </div>
                <div className="mt-[10px] text-[10px] py-[4px] px-[8px] rounded-[20px] border-solid border-[1px] border-gray-400 inline-block">
                  ZK
                </div>
              </div>
            </div>
            <div className="text-[12px]">
              <div className="flex justify-between items-center border-b-[1px] border-b-gray-200/50 pb-[4px] pt-[10px]">
                <div className="text-gray-400">Signup</div>
                <div className="font-['NeueMachina'] text-[14px]">
                  4/15-6/15
                </div>
              </div>
              <div className="flex justify-between items-center border-b-[1px] border-b-gray-200/50 pb-[4px] pt-[10px]">
                <div className="text-gray-400">Event</div>
                <div className="font-['NeueMachina'] text-[14px]">
                  6/15-7/15
                </div>
              </div>
              <div className="flex justify-between items-center border-b-[1px] border-b-gray-200/50 pb-[4px] pt-[10px]">
                <div className="text-gray-400">Grant Size</div>
                <div className="font-['NeueMachina'] text-[14px]">200K</div>
              </div>
            </div>
          </div>
        </section>
        {/* 卡片三 */}
        <section className="ml-[90px] relative flex-none">
          <Image
            src={bg_sub3}
            width={412}
            height={276}
            alt="clock"
            className="inline-block "
          />
          <div className="bg-no-repeat bg-[url('../public/images/Vector139.png')] h-[278px] w-[416px] pt-[36px] pl-[26px] pr-[46px] transition ease-in-out delay-150 hover:-translate-y-[6px] hover:translate-x-[6px] duration-300 absolute top-[-2px] left-[-2px]">
            <div className="w-[46px] h-[4px] bg-gradient-to-b from-[#D9E313] to-[#3CBC34] rounded-[11px]"></div>
            <div className="mt-[20px] font-bold text-[16px]">
              Web 3.0 Programming Basics
            </div>
            <div className="mt-[10px] text-[10px] py-[4px] px-[8px] rounded-[20px] border-solid border-[1px] border-gray-400 inline-block">
              Beginner
            </div>
            <div className="mt-[10px] text-[12px] text-gray-400">
              This course covers the most basic concepts in programming using
              Solidity as an example.
            </div>
            <div className="flex justify-between mt-[60px]">
              <div className="flex-1 flex items-center text-[14px] font-['NeueMachina']">
                <Image
                  src={clockImg}
                  width={16}
                  height={16}
                  alt="clock"
                  className="inline-block mr-[6px]"
                />
                36 Hour
              </div>
              <div className="flex-1 flex items-center text-[14px] font-['NeueMachina']">
                <Image
                  src={bookImg}
                  width={16}
                  height={16}
                  alt="clock"
                  className="inline-block mr-[6px]"
                />
                5 Course
              </div>
            </div>
          </div>
        </section>
        {/* 卡片四 */}
        <section className="ml-[90px] relative flex-none">
          <Image
            src={bg_sub4}
            width={412}
            height={276}
            alt="clock"
            className="inline-block "
          />
          <div className="bg-no-repeat bg-[url('../public/images/Rectangle.png')] h-[278px] w-[416px] py-[20px] pl-[26px] pr-[46px] transition ease-in-out delay-150 hover:-translate-y-[6px] hover:translate-x-[6px] duration-300 absolute top-[-2px] left-[-2px]">
            <div className="w-[46px] h-[4px] bg-gradient-to-b from-[#D9E313] to-[#3CBC34] rounded-[11px]"></div>
            <span className="mt-[20px] font-bold text-[16px]">Web</span>
            <Image
              src={Mask_group}
              width={380}
              height={238}
              alt="clock"
              className="inline-block "
            />
          </div>
        </section>

        {/* 右边滑动按钮 */}
        <div
          className="w-[48px] h-[48px] rounded-[24px] border-[1px] absolute right-[80px] top-[110px] border-[#676767] flex items-center justify-center hover:bg-[#303030] hover:border-none"
          onClick={slideToLeft}
          id="right-btn"
        >
          <Image src={rightVector} width={11} height={16} alt="clock" />
        </div>
        {/* 左边边滑动按钮 */}
        <div
          className="w-[48px] h-[48px] rounded-[24px] border-[1px] absolute left-[80px] top-[110px] border-[#676767] flex items-center justify-center hover:bg-[#303030] hover:border-none"
          id="left-btn"
          onClick={slideToRight}
        >
          <Image src={leftVector} width={11} height={16} alt="clock" />
        </div>
      </div>
    </main>
  )
}
