'use client'
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useDictionary } from "@/context/dictionary-provider";

const WhoCanUse = () => {
  const dictionary = useDictionary();
  const [activeTab, setActiveTab] = useState("Students");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [previousStep, setPreviousStep] = useState(0);

  const handleTabClick = (itemKey: any) => {
    setActiveTab(itemKey);
  };

  const tabs = [
    { key: "Students", title: "1" },
    { key: "Teachers", title: "2" },
    { key: "Writer and Gernalists", title: "3" },
    { key: "Digital Marketers", title: "4" },
    { key: "Awards", title: "5" },
  ];

  const data = {
    mainTitle: "Endless Possibilities, Limitless Use Cases.",
    details: [
      {
        key: "Students",
        imageUrl: "https://img.freepik.com/free-photo/view-3d-female-teacher_23-2150710016.jpg",
        title: dictionary.who_can_use_1_title,
        description: dictionary.who_can_use_1_description,
      },
      {
        key: "Teachers",
        imageUrl: "https://img.freepik.com/free-photo/funny-cartoon-man-sitting-table-writing-notebook_1057-44584.jpg?size=338&ext=jpg&ga=GA1.1.1141335507.1719360000&semt=ais_user",
        title: dictionary.who_can_use_2_title,
        description: dictionary.who_can_use_2_description,
      },
      {
        key: "Writer and Gernalists",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDQ-QCfwt-RFKgiZRSHRO9grOYyjdP2PT-cw&s",
        title: dictionary.who_can_use_3_title,
        description: dictionary.who_can_use_3_description,
      },
      {
        key: "Digital Marketers",
        imageUrl: "https://as1.ftcdn.net/v2/jpg/01/26/87/76/1000_F_126877617_p43HQAUrkVLpDNdvzDNyQesxDxHzNSY3.jpg",
        title: dictionary.who_can_use_4_title,
        description: dictionary.who_can_use_4_description,
      },
      {
        key: "Awards",
        imageUrl: "https://img.freepik.com/premium-vector/couple-student-avatars_18591-46239.jpg",
        title: dictionary.who_can_use_5_title,
        description: dictionary.who_can_use_5_description,
      },
    ],
  };
  const rotateTabs = () => {
    setPreviousStep(currentIndex);
    setActiveTab(tabs[currentIndex].key);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % tabs.length);
  };

  const renderContent = (cur: any, index: number) => {
    return (
      <motion.div
        key={index}
        initial={{ x: 500, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="flex"
        
      >
        <div className="flex mt-10 justify-center">
          <div className="flex flex-col lg:flex-row sm:flex-col md:flex-row gap-10 md:px-14 sm:items-center items-center">
            <Image
            style={{height: "250px", borderRadius: "15px"}}
              src={cur.imageUrl}
              width={400}
              height={200}
              alt="Image description"
              className="md:disabled: lg:h-[400px] lg:w-[400px] md:h-[300px] md:w-[300px] sm:h-[400px] sm:w-[400px] h-[300px] w-[300px]"
            />
            <div className="flex flex-col gap-5">
              <div className="flex text-[30px] font-semibold cursor-pointer text-blue-950 hover:text-blue-600 ">
                {cur.title}
              </div>
              <p className="flex"> {cur.description}</p>
            </div>
          </div>
        </div>
      </motion.div>
    );
  };

  useEffect(() => {
    const interval = setInterval(rotateTabs, 4000);
    return () => clearInterval(interval);
  }, [currentIndex]);


  return (
    <>
      <div className="flex flex-col w-full gap-12 p-4 bg-gray-100">
        <div className="flex text-[28px] sm:text-[32px] font-bold justify-center text-gray-800 mt-8">
          {data.mainTitle}
        </div>
        <div className="flex w-full justify-center">
          <div className="flex flex-col w-full overflow-x-hidden">
            <div
              className="flex w-fit gap-6 lg:gap-8 md:gap-6 sm:gap-4 uppercase text-[14px] font-medium justify-center self-center"
              style={{
                background:
                  "linear-gradient(to bottom, transparent 50%, #E2E8F0 50% 52%, transparent 52%)",
              }}
            >
              {tabs.map((tab) => (
                <div
                  key={tab.key}
                  className={`flex items-center justify-center text-center cursor-pointer border-[1px] rounded-full h-[50px] w-[50px] ${
                    activeTab === tab.key ? "!bg-blue-600 !text-white" : "!bg-white !text-black"
                  }`}
                  onClick={() => handleTabClick(tab.key)}
                >
                  {tab.title}
                </div>
              ))}
            </div>
            {renderContent(data.details[currentIndex], currentIndex)}
          </div>
        </div>
      </div>
    </>
  );
};

export default WhoCanUse;
