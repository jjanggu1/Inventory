"use client";
import { IoMdSettings } from "react-icons/io";
import Tabs from "@/shared/ui/tabs";
import Tables from "@/entities/Table/ui/tables";

export default function TablesPage() {
  const spaceList = [
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
        <Tables />
      </main>
    </div>
  );
}
