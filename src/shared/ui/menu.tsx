import Link from "next/link";
import { MdOutlineBarChart } from "react-icons/md";
import { FaBoxArchive } from "react-icons/fa6";
import { IoMdSettings } from "react-icons/io";

export default function Menu() {
  return (
    <div className="w-full px-12 py-10 absolute top-0 left-0 z-10 min-h-full flex flex-col bg-background-default">
      <header className="mb-10">
        <h1 className="text-label-900 text-title-1 font-bold">매장관리</h1>
      </header>
      <main>
        <nav className="md:flex w-full">
          <div className="flex-1 text-title-3 font-semibold mb-12">
            <h2 className="flex items-center gap-2 text-label-500 mb-6">
              <MdOutlineBarChart />
              매출
            </h2>
            <ul className="flex flex-col gap-8 pl-4">
              <li>
                <Link
                  href="/"
                  className="w-full hover:bg-line-200 duration-200 py-5 px-6 pr-20 md:pr-30 lg:pr-40 rounded-md"
                >
                  결제내역
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="w-full hover:bg-line-200 duration-200 py-5 px-6 pr-20 md:pr-30 lg:pr-40 rounded-md"
                >
                  시재 관리
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="w-full hover:bg-line-200 duration-200 py-5 px-6 pr-20 md:pr-30 lg:pr-40 rounded-md"
                >
                  매출 리포트
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex-1 text-title-3 font-semibold mb-12">
            <h2 className="flex items-center gap-2 text-label-500 mb-6">
              <FaBoxArchive />
              상품
            </h2>
            <ul className="flex flex-col gap-8 pl-4">
              <li>
                <Link
                  href="/"
                  className="w-full hover:bg-line-200 duration-200 py-5 px-6 pr-20 md:pr-10 lg:pr-40 rounded-md"
                >
                  재고관리
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="w-full hover:bg-line-200 duration-200 py-5 px-6 pr-20 md:pr-30 lg:pr-40 rounded-md"
                >
                  상품 · 할인
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="w-full hover:bg-line-200 duration-200 py-5 px-6 pr-20 md:pr-30 lg:pr-40 rounded-md"
                >
                  선불권
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex-1 text-title-3 font-semibold mb-12">
            <h2 className="flex items-center gap-2 text-label-500 mb-6">
              <IoMdSettings />
              설정
            </h2>
            <ul className="flex flex-col gap-8 pl-4">
              <li>
                <Link
                  href="/"
                  className="w-full hover:bg-line-200 duration-200 py-5 px-6 pr-20 md:pr-30 lg:pr-40 rounded-md"
                >
                  기타 설정
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </main>
    </div>
  );
}
