"use client";
import { IoMdSettings } from "react-icons/io";
import Tabs from "@/shared/ui/tabs";

export default function Tables() {
  let spaceList = [
    {
      id: 1,
      name: "1층",
      status: "사용중",
    },
    {
      id: 2,
      name: "2층",
      status: "사용중",
    },
    {
      id: 3,
      name: "3층",
      status: "사용중",
    },
    {
      id: 4,
      name: "4층",
      status: "사용중",
    },
  ];
  return (
    <div className="px-6">
      <header className="w-full md:flex items-center justify-between gap-4 mb-2 border-b-2 border-white text-center">
        <Tabs tabsList={spaceList} />
        <div className="w-full flex-[4] lg:flex-[5] md:flex items-center gap-4">
          <ul className="w-full flex items-center gap-4 text-body-3 lg:text-title-4 text-label-700 font-semibold">
            <li className="w-full px-4 py-4 rounded-md bg-line-400 cursor-pointer active:scale-95 active:duration-100 transition-all">
              합석
            </li>
            <li className="w-full px-4 py-4 rounded-md bg-line-400 cursor-pointer active:scale-95 active:duration-100 transition-all">
              자리이동
            </li>
            <li className="w-full px-4 py-4 rounded-md bg-line-400 cursor-pointer active:scale-95 active:duration-100 transition-all">
              단체손님
            </li>
            <li className="w-full px-4 py-4 rounded-md bg-line-400 cursor-pointer active:scale-95 active:duration-100 transition-all">
              재출력
            </li>
            <li className="w-full px-4 py-4 rounded-md bg-line-400 cursor-pointer active:scale-95 active:duration-100 transition-all">
              결제내역
            </li>
          </ul>
          <IoMdSettings className="p-2 size-10 text-label-500 cursor-pointer hidden md:block" />
        </div>
      </header>
      <main className="w-full h-full grid grid-cols-[repeat(auto-fill,minmax(180px,1fr))] xl:grid-cols-[repeat(auto-fill,minmax(260px,1fr))] gap-4 lg:gap-x-6 xl:gap-x-14 items-center mt-8 mb-8">
        {/* 사용가능한 테이블 */}
        {Array.from({ length: 21 }).map((_, index) => (
          <div
            key={index}
            className="w-full lg:min-w-[180px] lg:max-w-[180px] xl:min-w-[260px] xl:max-w-[260px] xl:min-h-[140px] min-h-[100px] lg:max-h-[110px]  bg-background-default rounded-sm border-3 border-secondary-600"
          >
            <h1 className="text-body-3 text-label-900 font-semibold text-center pt-2">
              홀1 테이블
            </h1>
          </div>
        ))}
        {/* 사용중인 테이블 */}
        {Array.from({ length: 3 }).map((_, index) => (
          <div
            key={index}
            className="w-full lg:min-w-[180px] lg:max-w-[180px] xl:min-w-[260px] xl:max-w-[260px] xl:min-h-[140px] min-h-[100px] lg:max-h-[110px] bg-secondary-600 text-white p-2 rounded-sm relative"
          >
            <div className="flex items-center justify-between">
              <h1 className="text-body-3 font-semibold ">홀1 테이블</h1>
              <h2 className="text-caption-1 font-semibold ">00:00</h2>
            </div>
            <div className="flex items-center justify-between pt-1">
              <p className="text-body-3 ">광어회 2인</p>
              <p className="text-body-3 font-bold">1</p>
            </div>
            <div className="absolute bottom-0 left-0 w-full px-2 flex items-center justify-between pt-1">
              <p className="text-caption-1 ">외 1개</p>
              <p className="text-body-3 font-bold">25,000원</p>
            </div>
          </div>
        ))}
        {/* 활성화된 테이블 */}
        {Array.from({ length: 1 }).map((_, index) => (
          <>
            <div
              key={index}
              className="w-full lg:min-w-[180px] lg:max-w-[180px] xl:min-w-[260px] xl:max-w-[260px] xl:min-h-[140px] min-h-[100px] lg:max-h-[110px] bg-secondary-600 text-white p-2 rounded-sm relative"
            >
              <div className="flex items-center justify-between">
                <h1 className="text-body-3 font-semibold">홀1 테이블</h1>
                <h2 className="text-caption-1 font-semibold ">00:00</h2>
              </div>
              <div className="absolute bottom-0 left-0 w-full px-2 flex items-center justify-between pt-1">
                <p className="text-caption-1 ">외 1개</p>
                <p className="text-body-3 font-bold">25,000원</p>
              </div>
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center rounded-sm">
                <span className="text-white text-lg font-bold">사용 중</span>
              </div>
            </div>
          </>
        ))}
      </main>
    </div>
  );
}
