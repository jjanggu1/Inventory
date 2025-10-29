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
        <div className="w-full flex-[3] md:flex items-center gap-4">
          <ul className="w-full flex items-center gap-4 text-title-4 text-label-700 font-semibold">
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
          <IoMdSettings className="p-2 size-10 text-label-500 cursor-pointer" />
        </div>
      </header>
      <main></main>
    </div>
  );
}
