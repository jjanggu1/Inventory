"use client";

import Link from "next/link";
import { FiMenu, FiMoreVertical, FiX } from "react-icons/fi";
import { useCurrentDateTime } from "@/shared/hooks/useCurrentDateTime";
import { useMenuStore } from "@/shared/store";
import Menu from "@/shared/ui/menu";
import { useActiveViewStore } from "@/shared/store";

export default function Header() {
  const currentDateTime = useCurrentDateTime();
  const { isMenuOpen, setIsMenuOpen } = useMenuStore();
  const { activeView, setActiveView } = useActiveViewStore();
  return (
    <header className="w-full relative flex items-center justify-between px-6 py-4 text-label-500 bg-label-800">
      <div>
        <button className="p-4 rounded-md cursor-pointer active:scale-95 active:duration-100 transition-all">
          {isMenuOpen ? (
            <FiX
              className="text-2xl text-label-100"
              onClick={() => setIsMenuOpen(false)}
            />
          ) : (
            <FiMenu className="text-2xl" onClick={() => setIsMenuOpen(true)} />
          )}
        </button>
      </div>
      <nav>
        <ul className="flex items-center gap-4 text-body-2 md:text-title-2 font-bold">
          <li
            onClick={() => setActiveView("tables")}
            className={`px-8 py-4 rounded-md cursor-pointer active:bg-label-700 active:scale-95 active:duration-100 transition-all ${
              activeView === "tables" ? "text-label-100" : "text-label-500"
            }`}
          >
            <Link href="/tables">테이블</Link>
          </li>
          <li
            onClick={() => setActiveView("kitchen")}
            className={`px-8 py-4 rounded-md cursor-pointer active:bg-label-700 active:scale-95 active:duration-100 transition-all ${
              activeView === "kitchen" ? "text-label-100" : "text-label-500"
            }`}
          >
            <Link href="/kitchen">주방</Link>
          </li>
        </ul>
      </nav>
      <div className="flex items-center gap-2">
        <div className="text-body-3 font-semibold text-label-200">
          <p>
            {currentDateTime.month}.{currentDateTime.day} (
            {currentDateTime.dayOfWeek})
          </p>
          <p>
            {currentDateTime.ampm} {currentDateTime.hours}:
            {currentDateTime.minutes}
          </p>
        </div>
        <div>
          <button className="p-4 mx-4 rounded-md cursor-pointer active:scale-95 active:duration-100 transition-all">
            <FiMoreVertical className="text-2xl" />
          </button>
        </div>
      </div>
      {isMenuOpen && <Menu />}
    </header>
  );
}
