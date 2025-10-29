"use client";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Tabs({ tabsList }: { tabsList: any[] }) {
  const [activeTab, setActiveTab] = useState("1층");
  return (
    <div className="w-full md:flex flex-[7] items-center text-title-4 ">
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
                damping: 40,
                mass: 1,
              }}
            />
          )}
        </div>
      ))}
    </div>
  );
}
