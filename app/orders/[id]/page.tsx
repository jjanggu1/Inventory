"use client";

import Tabs from "@/shared/ui/tabs";
import { FaPen } from "react-icons/fa";
import { FaCirclePlus, FaMinus, FaPlus } from "react-icons/fa6";
import { MdPrint } from "react-icons/md";
import { FaTrash } from "react-icons/fa6";
import Link from "next/link";

export default function OrderPage() {
  let menuCategoryList = [
    {
      id: 1,
      name: "활어회",
      menuList: [
        {
          id: 1,
          name: "광어회",
          price: 15000,
          isSoldout: false,
          optionList: [
            {
              id: 1,
              name: "소",
              price: 5000,
              isSoldout: false,
            },
            {
              id: 2,
              name: "중",
              price: 10000,
              isSoldout: false,
            },
          ],
        },
      ],
    },
    {
      id: 2,
      name: "주류",
      menuList: [
        {
          id: 1,
          name: "참이슬",
          price: 5000,
        },
        {
          id: 2,
          name: "카스",
          price: 5000,
        },
      ],
    },
    {
      id: 3,
      name: "요리",
      menuList: [
        {
          id: 1,
          name: "매운탕",
          price: 10000,
        },
        {
          id: 2,
          name: "회덮밥",
          price: 8000,
        },
      ],
    },
    {
      id: 4,
      name: "해산물",
      menuList: [
        {
          id: 1,
          name: "멍게",
          price: 15000,
        },
        {
          id: 2,
          name: "낙지",
          price: 25000,
        },
      ],
    },
    {
      id: 5,
      name: "튀김",
      menuList: [
        {
          id: 1,
          name: "오징어튀김",
          price: 15000,
        },
        {
          id: 2,
          name: "새우튀김",
          price: 15000,
        },
      ],
    },
    {
      id: 6,
      name: "제철",
      menuList: [
        {
          id: 1,
          name: "대방어",
          price: 55000,
        },
        {
          id: 2,
          name: "석화",
          price: 22000,
        },
      ],
    },
  ];
  return (
    <div className="lg:flex h-[calc(100dvh-56px)] md:h-[calc(100dvh-67px)] top-[-56px] md:top-[-67px]">
      <div className="flex-[7] px-6 pb-6">
        <section className="border-b-2 border-white">
          <Tabs tabsList={menuCategoryList} />
        </section>
        <section className="w-full grid grid-cols-3 lg:grid-cols-5 gap-4 pt-6">
          {Array.from({ length: 25 }).map((_, index) => (
            <div
              key={index}
              className="flex flex-col justify-between bg-background-default rounded-sm shadow-sm h-[90px] xl:h-[120px] p-4 text-body-3 font-semibold"
            >
              <h1 className="text-label-900">광어회</h1>
              <div className="flex items-center justify-between">
                <p className="text-caption-1 text-label-900">1,500,000</p>
                <p className="text-caption-2 text-background-default bg-label-700 rounded-l-full rounded-r-full px-3 py-1 text-center">
                  품절
                </p>
              </div>
            </div>
          ))}
        </section>
        <div className="text-body-3 text-label-700 flex items-center gap-4 mt-6">
          <button className="flex items-center gap-2 p-6 cursor-pointer">
            <FaPen />
            편집모드
          </button>
          <button className="flex items-center gap-2 p-6 cursor-pointer">
            <FaCirclePlus />
            상품추가
          </button>
        </div>
      </div>
      <div className="flex flex-[5]">
        <section className="flex-[2] border-r-2 border-l-2 border-line-200 bg-background-default p-6 overflow-y-auto">
          <div className="flex items-center text-body-2 text-label-900 font-semibold">
            <h1>옵션</h1>
            <h2 className="text-caption-1 text-white bg-label-700 rounded-sm ml-2 px-3 py-1 text-center">
              광어회
            </h2>
          </div>
          <div className="mt-6">
            <h3 className="text-caption-1 text-label-900 font-semibold mb-4">
              사이즈
              <span className="text-caption-1 text-status-error"> *</span>
            </h3>
            <div className="flex flex-col gap-4">
              <button className="text-body-3 text-label-900 font-semibold py-6 border-1 border-line-200 rounded-sm bg-background-default cursor-pointer">
                소
              </button>
              <button className="text-body-3 text-white font-semibold py-6 rounded-sm shadow-sm bg-primary cursor-pointer">
                중(10,000)
              </button>
            </div>
          </div>
          <div className="mt-8">
            <h3 className="text-caption-1 text-label-900 font-semibold mb-4">
              기타
            </h3>
            <div className="flex flex-col gap-4">
              <button className="text-body-3 text-label-900 font-semibold py-6 border-1 border-line-200 rounded-sm bg-background-default cursor-pointer">
                무순많이(500)
              </button>
              <button className="text-body-3 text-white font-semibold py-6 rounded-sm shadow-sm bg-primary cursor-pointer">
                레몬많이(1,000)
              </button>
              <button className="text-body-3 text-white font-semibold py-6 rounded-sm shadow-sm bg-primary cursor-pointer">
                와사비많이
              </button>
            </div>
          </div>
        </section>
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
      </div>
    </div>
  );
}
