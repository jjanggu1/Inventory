"use client";

import { MdPrint } from "react-icons/md";
import { FaTrash } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
import Link from "next/link";

export default function OrderCart() {
  return (
    <section className="flex-[3] bg-background-default">
      <header className="flex items-center justify-between p-6 text-title-4 text-label-700 border-b-1 border-line-200">
        <div className="flex items-center">
          <div>
            <h1 className="text-label-900 font-bold">홀1</h1>
            <p className="text-caption-1 text-label-700 font-semibold">
              오후 3:52
            </p>
          </div>
          <div>
            <button className="text-body-3 text-label-900 py-3 px-5 ml-4 border-1 border-line-400 rounded-full cursor-pointer">
              주문내역
            </button>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <button>
            <MdPrint className="size-10 p-4 cursor-pointer" />
          </button>
          <button>
            <FaTrash className="size-10 p-4 cursor-pointer" />
          </button>
        </div>
      </header>
      <main className="flex flex-col h-[calc(100dvh-150px)]">
        <ul className="overflow-y-auto">
          <li className="p-6 border-2 border-secondary-300 rounded-sm bg-secondary-50 text-body-3 text-label-900 font-semibold">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <h1 className="">광어회</h1>
                <p>×</p>
                <p className="text-body-1">3</p>
              </div>
              <div>1,500,000</div>
            </div>
            <p className="text-label-700">소</p>
            <div className="flex items-center justify-between mt-4">
              <div className="flex items-center gap-2">
                <button className="py-6 px-6 border-1 border-line-200 rounded-sm shadow-sm bg-background-default cursor-pointer">
                  <FaMinus />
                </button>
                <button className="py-6 px-6 border-1 border-line-200 rounded-sm shadow-sm bg-background-default cursor-pointer">
                  <FaPlus />
                </button>
              </div>
              <button className="py-6 px-7 border-1 border-line-200 rounded-sm shadow-sm bg-background-default cursor-pointer">
                삭제
              </button>
            </div>
          </li>
          <li className="p-6 border-b-1 border-t-1 border-line-200 text-body-3 text-label-900 font-semibold">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 ">
                <h1 className="">광어회</h1>
                <p>×</p>
                <p className="text-body-1">3</p>
              </div>
              <div>1,500,000</div>
            </div>
            <p className="text-label-700">소</p>
          </li>
          <li className="p-6 border-b-1 border-t-2 border-line-400 bg-background-alternative text-body-3 text-label-900 font-semibold">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <h1 className="">광어회</h1>
                <p>×</p>
                <p className="text-body-1">3</p>
              </div>
              <div>1,500,000</div>
            </div>
            <p className="text-label-700">소</p>
          </li>
          <li className="p-6 border-b-1 border-t-1 border-line-400 bg-background-alternative text-body-3 text-label-900 font-semibold">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <h1 className="">광어회</h1>
                <p>×</p>
                <p className="text-body-1">3</p>
              </div>
              <div>1,500,000</div>
            </div>
            <p className="text-label-700">소</p>
          </li>
        </ul>
        <div className="mt-auto p-6 border-t-2 border-line-400 w-full grid grid-cols-2 gap-4 text-title-2">
          <button className="text-title-3 text-secondary-600 font-semibold py-6 rounded-sm shadow-sm border-1 border-secondary-300 cursor-pointer">
            할인
          </button>
          <button className="text-title-3 text-secondary-600 font-semibold py-6 rounded-sm shadow-sm border-1 border-secondary-300 cursor-pointer">
            선결제
          </button>
          <button className="flex items-center justify-center text-white font-semibold py-8 rounded-sm shadow-sm bg-primary cursor-pointer">
            주문
            <span className="text-body-1 bg-white text-secondary-600 rounded-full px-4 py-1 ml-2">
              5
            </span>
          </button>
          <Link href="/payment/1">
            <div className="flex flex-col items-center justify-center text-white font-semibold py-8 rounded-sm shadow-sm bg-label-700 cursor-pointer">
              <div className="flex items-center justify-center">
                <button>결제</button>
                <p className="text-body-1 bg-white text-label-700 rounded-full px-4 py-1 ml-2">
                  5
                </p>
              </div>
              <p className="text-body-1 text-white px-4 py-1 text-center">
                10,000,000원
              </p>
            </div>
          </Link>
        </div>
      </main>
    </section>
  );
}
