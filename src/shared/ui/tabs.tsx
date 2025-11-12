"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

export default function Tabs({ tabsList }: { tabsList: any[] }) {
  const [activeTab, setActiveTab] = useState(tabsList[0].name);
  return (
    <div className="w-full flex flex-[7] items-center">
      <div className="w-full grid grid-cols-2 lg:grid-cols-5 text-title-4 text-center">
        {tabsList.map((tab) => (
          <div
            key={tab.id}
            className="bg-background-alternative w-full relative cursor-pointer"
            onClick={() => setActiveTab(tab.name)}
          >
            <div
              className={`px-4 py-6 ${
                activeTab === tab.name
                  ? "text-label-900 font-bold"
                  : "text-label-500"
              }`}
            >
              {tab.name}
            </div>
            {activeTab === tab.name && (
              <motion.div
                layoutId="activeSpace"
                className="absolute bottom-0 left-0 right-0 h-[2px] bg-label-900"
                transition={{
                  type: "spring",
                  stiffness: 1000,
                  damping: 50,
                  mass: 1,
                }}
              />
            )}
          </div>
        ))}
      </div>
      <div className="flex items-center gap-2">
        <button className="cursor-pointer">
          <IoIosArrowBack className="size-10 text-label-500 p-2" />
        </button>
        <button className="cursor-pointer">
          <IoIosArrowForward className="size-10 text-label-800 p-2" />
        </button>
      </div>
    </div>
  );
}
