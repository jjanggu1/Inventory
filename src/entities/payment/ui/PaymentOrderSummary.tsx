"use client";

import { FaPen } from "react-icons/fa6";

export default function PaymentOrderSummary() {
  return (
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
  );
}
