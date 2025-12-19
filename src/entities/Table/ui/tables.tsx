"use client";

import Link from "next/link";

export default function Tables() {
  return (
    <>
      {/* 사용가능한 테이블 */}
      {Array.from({ length: 21 }).map((_, index) => (
        <Link href={`/orders/${index}`}>
          <div
            key={index}
            className="w-full lg:min-w-[180px] lg:max-w-[180px] xl:min-w-[260px] xl:max-w-[260px] xl:min-h-[140px] min-h-[100px] lg:max-h-[110px]  bg-background-default rounded-sm border-3 border-secondary-600"
          >
            <h1 className="text-body-3 text-label-900 font-semibold text-center pt-2">
              홀1 테이블
            </h1>
          </div>
        </Link>
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
    </>
  );
}
