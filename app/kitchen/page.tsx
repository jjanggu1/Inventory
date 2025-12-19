"use client";
import { IoIosArrowUp, IoMdSettings } from "react-icons/io";
import Tabs from "@/shared/ui/tabs";
import { useState, useEffect, useRef, useLayoutEffect } from "react";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import { FaCheck } from "react-icons/fa";

export default function KitchenPage() {
  const statusList = [
    {
      id: 1,
      name: "진행",
    },
    {
      id: 2,
      name: "완료",
    },
    {
      id: 3,
      name: "취소",
    },
  ];

  const [orderList, setOrderList] = useState([
    {
      id: 1,
      orderType: "포장",
      space: "포장",
      table: "1번",
      orderList: [
        {
          id: 1,
          name: "명태양념튀김",
          option: null,
          price: 20000,
          quantity: 1,
        },
        {
          id: 2,
          name: "명태양념튀김",
          option: null,
          price: 20000,
          quantity: 1,
        },
        {
          id: 3,
          name: "명태양념튀김",
          option: null,
          price: 20000,
          quantity: 1,
        },
        {
          id: 4,
          name: "명태양념튀김",
          option: null,
          price: 20000,
          quantity: 1,
        },
        {
          id: 5,
          name: "명태양념튀김",
          option: null,
          price: 20000,
          quantity: 1,
        },
        {
          id: 6,
          name: "명태양념튀김",
          option: null,
          price: 20000,
          quantity: 1,
        },
        {
          id: 7,
          name: "명태양념튀김",
          option: null,
          price: 20000,
          quantity: 1,
        },
        {
          id: 8,
          name: "명태양념튀김",
          option: null,
          price: 20000,
          quantity: 1,
        },
        {
          id: 9,
          name: "명태양념튀김",
          option: null,
          price: 20000,
          quantity: 1,
        },
        {
          id: 10,
          name: "명태양념튀김",
          option: null,
          price: 20000,
          quantity: 1,
        },
      ],
      isOverflow: false,
      isExpanded: false,
    },
    {
      id: 2,
      orderType: "매장",
      space: "1층",
      table: "1번",
      orderList: [
        {
          id: 1,
          name: "광어회",
          option: "소",
          price: 15000,
          quantity: 2,
        },
        {
          id: 2,
          name: "명태양념튀김",
          option: null,
          price: 20000,
          quantity: 1,
        },
      ],
      isOverflow: false,
      isExpanded: false,
    },
  ]);

  const [isOrderTypeOptionOpen, setIsOrderTypeOptionOpen] = useState(false);
  const [activeOrderType, setActiveOrderType] = useState({
    hall: false,
    takeout: false,
  });

  const handleOrderType = (type: "hall" | "takeout") => {
    setActiveOrderType({
      ...activeOrderType,
      [type]: !activeOrderType[type],
    });
  };

  const orderListRef = useRef<Array<HTMLUListElement | null>>([]);

  const setOrderListRef = (index: number, ref: HTMLUListElement | null) => {
    orderListRef.current[index] = ref;
  };

  useLayoutEffect(() => {
    const checkOverflow = () => {
      setOrderList((prevOrderList) => {
        return prevOrderList.map((order, index) => {
          const el = orderListRef.current[index];
          if (!el) return order;

          const { scrollHeight, clientHeight } = el;

          return {
            ...order,
            isOverflow: scrollHeight > clientHeight,
          };
        });
      });
    };

    checkOverflow();

    // resize 시 다시 체크
    window.addEventListener("resize", checkOverflow);

    return () => {
      window.removeEventListener("resize", checkOverflow);
    };
  }, [orderList.length]);

  const toggleExpand = (id: number) => {
    setOrderList((prev) =>
      prev.map((order) =>
        order.id === id ? { ...order, isExpanded: !order.isExpanded } : order
      )
    );
  };

  return (
    <div className="px-6">
      <header className="w-full md:flex items-center justify-between gap-4 mb-2 border-b-2 border-white text-center">
        <Tabs tabsList={statusList} />
        <div className="w-full flex-[4] lg:flex-[5] md:flex items-center gap-4">
          <ul className="w-full flex items-center justify-end gap-4 text-body-3 lg:text-title-4 text-label-700 font-semibold">
            <li
              onClick={(event) => {
                event.stopPropagation();
                setIsOrderTypeOptionOpen((prev) => !prev);
              }}
              className="flex items-center gap-2 px-6 py-4 rounded-md bg-background-default cursor-pointer relative"
            >
              주문 유형
              <IoIosArrowDown className="text-label-500" />
              {isOrderTypeOptionOpen && (
                <div
                  onClick={(event) => {
                    event.stopPropagation();
                  }}
                  className="absolute top-11 right-0 w-full flex flex-col gap-2 p-4 bg-background-default rounded-md shadow-sm z-10 "
                >
                  <button
                    onClick={(event) => {
                      event.stopPropagation();
                      handleOrderType("hall");
                    }}
                    className={`w-full flex items-center gap-2 px-4 py-2 rounded-md cursor-pointer ${
                      activeOrderType.hall ? "font-bold" : "font-normal"
                    }`}
                  >
                    <FaCheck
                      className={`${
                        activeOrderType.hall ? "text-primary" : "text-label-500"
                      }`}
                    />
                    홀
                  </button>
                  <button
                    onClick={(event) => {
                      event.stopPropagation();
                      handleOrderType("takeout");
                    }}
                    className={`w-full flex items-center gap-2 px-4 py-2 rounded-md cursor-pointer ${
                      activeOrderType.takeout ? "font-bold" : "font-normal"
                    }`}
                  >
                    <FaCheck
                      className={`${
                        activeOrderType.takeout
                          ? "text-primary"
                          : "text-label-500"
                      }`}
                    />
                    포장
                  </button>
                </div>
              )}
            </li>
            <li className="px-6 py-4 rounded-md bg-background-default cursor-pointer">
              전체완료
            </li>
          </ul>
          <IoMdSettings className="p-2 size-10 text-label-500 cursor-pointer hidden md:block" />
        </div>
      </header>
      <main className="w-full h-full grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] xl:grid-cols-[repeat(auto-fill,minmax(260px,1fr))] gap-6 mt-8 mb-8 overflow-y-auto">
        {orderList.map((order, index) => (
          <div
            key={order.id}
            className={`w-full overflow-hidden border-b-1 border-1 border-line-200 bg-background-default rounded-md shadow-sm text-body-1 text-label-900 relative transition-all duration-300
            ${
              order.isExpanded
                ? "h-[600px] md:h-[560px] xl:h-[640px]"
                : "h-[300px] md:h-[280px] xl:h-[320px]"
            }
          `}
          >
            <div className="flex items-center justify-between border-b-1 border-line-200 p-6 text-body-3 font-semibold">
              <div className="flex items-center gap-2">
                <h1 className="w-9 h-9 flex items-center justify-center rounded-full bg-label-700 text-white">
                  {order.orderType}
                </h1>
                <h1 className="w-9 h-9 flex items-center justify-center rounded-full bg-status-caution text-white">
                  추가
                </h1>
                <h2>
                  {order.space}-{order.table}
                </h2>
                <IoIosArrowForward size={16} />
              </div>
              <span className="text-body-1 text-primary">9분 전</span>
            </div>
            <div
              className={`p-6  ${
                order.isExpanded
                  ? "h-auto overflow-auto"
                  : "h-[180px] md:h-[160px] xl:h-[200px]"
              }`}
            >
              <ul ref={(el) => setOrderListRef(index, el)} className="h-full">
                {order.orderList.map((menu) => (
                  <li key={menu.id} className="flex gap-2 mb-6">
                    <span className="mr-8">{menu.quantity}</span>
                    <p>{menu.name}</p>
                  </li>
                ))}
              </ul>
            </div>

            {order.isOverflow && (
              <button
                onClick={() => toggleExpand(order.id)}
                className="absolute bottom-11 left-1/2 -translate-x-1/2 w-fit flex items-center justify-center gap-1 px-6 py-3 bg-background-default border border-line-400 rounded-full text-body-3 text-label-900 cursor-pointer"
              >
                {order.isExpanded ? (
                  <>
                    <IoIosArrowUp size={16} />
                    <span>접기</span>
                  </>
                ) : (
                  <>
                    <IoIosArrowDown size={16} />
                    <span>펼치기</span>
                  </>
                )}
              </button>
            )}

            <button className="w-full absolute bottom-0 left-0 right-0 py-5 bg-label-700 text-white font-semibold rounded-b-md cursor-pointer">
              조리 완료
            </button>
          </div>
        ))}
      </main>
    </div>
  );
}
