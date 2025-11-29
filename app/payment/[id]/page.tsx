"use client";

import { FaPen, FaWonSign } from "react-icons/fa6";
import { IoIosArrowBack } from "react-icons/io";
import { BsFillCreditCardFill } from "react-icons/bs";

export default function PaymentPage() {
  return (
    <div className="lg:flex h-[calc(100dvh-56px)] md:h-[calc(100dvh-67px)] top-[-56px] md:top-[-67px]">
      <section className="flex-[7] px-6 pb-6 bg-background-default border-r-2 border-line-400">
        <header className="flex items-center gap-8 py-6">
          <button className="p-4 cursor-pointer">
            <IoIosArrowBack size={24} />
          </button>
        </header>
        <div className="p-10">
          <div className="flex items-center justify-between mb-20">
            <div className="flex flex-col text-title-3 text-label-900 gap-6">
              <div className="gap-2">
                <h1>총 금액</h1>
                <span className="text-title-2">100,000원</span>
              </div>
              <div className="gap-2">
                <h1>남은 금액</h1>
                <span className="text-title-1 font-bold">100,000원</span>
              </div>
            </div>
            <div>
              <button className="text-title-3 text-secondary-600 font-semibold px-8 py-6 rounded-sm bg-secondary-50 cursor-pointer">
                분할 결제
              </button>
            </div>
          </div>
          <div className="flex items-center gap-6 flex-wrap text-body-1 text-label-900 font-semibold">
            <div className="flex flex-col items-center justify-center gap-4 w-[220px] h-[160px] rounded-md bg-background-alternative cursor-pointer">
              <BsFillCreditCardFill size={24} className="text-secondary-600" />
              <p>신용카드</p>
            </div>
            <div className="flex flex-col items-center justify-center gap-4 w-[220px] h-[160px] rounded-md bg-background-alternative cursor-pointer">
              <FaWonSign size={24} className="text-secondary-600" />
              <p>현금</p>
            </div>
          </div>
        </div>
      </section>
      <section className="flex-[3] bg-background-alternative ">
        <header className="flex items-center justify-center p-6 text-title-4 text-white bg-label-700 cursor-pointer">
          <span>
            <FaPen />
          </span>
          <span className="ml-2">주문내역 수정</span>
        </header>
        <div className="flex flex-col h-[calc(100dvh-150px)]">
          <ul className="overflow-y-auto">
            <li className="px-6 py-4 border-b-1 border-t-1 border-line-400 text-body-3 text-label-900 font-semibold">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <h1 className="">광어회</h1>
                  <p>×</p>
                  <p className="text-body-1">3</p>
                </div>
                <span>1,500,000</span>
              </div>
              <p className="text-label-700">소</p>
            </li>
            <li className="px-6 py-4 border-b-1 border-t-1 border-line-400 text-body-3 text-label-900 font-semibold">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <h1 className="">광어회</h1>
                  <p>×</p>
                  <p className="text-body-1">3</p>
                </div>
                <span>1,500,000</span>
              </div>
              <p className="text-label-700">소</p>
            </li>
            <li className="px-6 py-4 border-b-1 border-t-1 border-line-400 text-body-3 text-label-900 font-semibold">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <h1 className="">광어회</h1>
                  <p>×</p>
                  <p className="text-body-1">3</p>
                </div>
                <span>1,500,000</span>
              </div>
              <p className="text-label-700">소</p>
            </li>
          </ul>
          <div className="mt-auto flex items-center justify-between p-6 border-t-2 border-line-400 w-full text-title-2 text-label-900">
            <p className="text-title-3">
              총
              <span className="ml-2 mr-2 text-title-2 text-secondary-600 font-semibold">
                10
              </span>
              개
            </p>
            <p>
              <span className="mr-2 font-semibold">100,000</span>원
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
