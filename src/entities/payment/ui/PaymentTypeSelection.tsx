"use client";

import { BsFillCreditCardFill } from "react-icons/bs";
import { FaWonSign } from "react-icons/fa6";
import { IoIosArrowBack } from "react-icons/io";

export default function PaymentTypeSelection() {
  return (
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
  );
}
