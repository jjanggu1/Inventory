"use client";

import Tabs from "@/shared/ui/tabs";
import { FaPen } from "react-icons/fa";
import { FaCirclePlus } from "react-icons/fa6";
import MenuCards from "@/entities/order/ui/MenuCard";
import MenuOptions from "@/entities/order/ui/MenuOption";
import OrderCart from "@/entities/order/ui/OrderCart";

export default function OrdersPage() {
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
        <header className="border-b-2 border-white">
          <Tabs tabsList={menuCategoryList} />
        </header>
        <MenuCards />
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
        <MenuOptions />
        <OrderCart />
      </div>
    </div>
  );
}
