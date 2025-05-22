"use client";
import dynamic from "next/dynamic";
import { useLayoutEffect, useState, useEffect } from "react";
import { useTranslation } from "../../node_modules/react-i18next";
import { useTheme } from "next-themes";
import { useGlobalStore, SectionType } from "@/store/global";
import { useSettingStore } from "@/store/setting";
import { ChevronLeft, ChevronRight, Zap, ZapOff } from "lucide-react";
import QuoteRotator from "@/components/QuoteRotator";

const Header = dynamic(() => import("@/components/Internal/Header"));
const Setting = dynamic(() => import("@/components/Setting"));
const Topic = dynamic(() => import("@/components/Research/Topic"));
const Feedback = dynamic(() => import("@/components/Research/Feedback"));
const SearchResult = dynamic(
  () => import("@/components/Research/SearchResult")
);
const FinalReport = dynamic(() => import("@/components/Research/FinalReport"));
const History = dynamic(() => import("@/components/History"));
const Knowledge = dynamic(() => import("@/components/Knowledge"));

function Home() {
  const { t } = useTranslation();
  const {
    openSetting,
    setOpenSetting,
    openHistory,
    setOpenHistory,
    openKnowledge,
    setOpenKnowledge,
    currentSection,
    setCurrentSection,
    autoNavigate,
    setAutoNavigate,
    completionStatus,
  } = useGlobalStore();

  const { theme } = useSettingStore();
  const { setTheme } = useTheme();
  const [animating, setAnimating] = useState(false);
  
  // 部分标题映射
  const sectionTitles = {
    stockSelection: t("topic.title"),
    researchPlan: t("feedback.title"),
    dataCollection: t("searchResult.title"),
    finalReport: t("finalReport.title"),
  };
  
  // 部分顺序定义，用于导航
  const sectionOrder: SectionType[] = [
    "stockSelection",
    "researchPlan",
    "dataCollection",
    "finalReport"
  ];
  
  // 获取当前部分在顺序中的索引
  const currentIndex = sectionOrder.indexOf(currentSection);
  
  // 导航到下一个或上一个部分
  const navigate = (direction: "next" | "prev") => {
    if (animating) return; // 如果正在动画中，不允许导航
    
    setAnimating(true);
    
    let newIndex = currentIndex;
    if (direction === "next" && currentIndex < sectionOrder.length - 1) {
      newIndex = currentIndex + 1;
    } else if (direction === "prev" && currentIndex > 0) {
      newIndex = currentIndex - 1;
    }
    
    if (newIndex !== currentIndex) {
      setCurrentSection(sectionOrder[newIndex]);
    }
    
    // 动画结束后重置状态
    setTimeout(() => setAnimating(false), 500);
  };

  useLayoutEffect(() => {
    const settingStore = useSettingStore.getState();
    setTheme(settingStore.theme);
  }, [theme, setTheme]);
  return (
    <div className="max-lg:max-w-screen-md max-w-screen-lg mx-auto px-4 min-h-screen flex flex-col">
      <Header />
      
      {/* 投资名言区域 */}
      <QuoteRotator />
      
      {/* 只保留导航按钮 */}
      <div className="flex justify-end items-center my-4 print:hidden">
        <div className="flex space-x-4 items-center">
          <button 
            onClick={() => navigate("prev")} 
            disabled={currentIndex === 0 || animating}
            className={`p-2 rounded-full ${currentIndex === 0 ? 'opacity-30 cursor-not-allowed' : 'hover:bg-gray-800 tech-icon-button'}`}
            aria-label="上一部分"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button 
            onClick={() => navigate("next")} 
            disabled={currentIndex === sectionOrder.length - 1 || animating}
            className={`p-2 rounded-full ${currentIndex === sectionOrder.length - 1 ? 'opacity-30 cursor-not-allowed' : 'hover:bg-gray-800 tech-icon-button'}`}
            aria-label="下一部分"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      </div>
      
      {/* 主内容区域 - 使用条件渲染和过渡动画 */}
      <main className="flex-grow relative overflow-visible min-h-[500px]">
        <div className={`transition-all duration-500 ease-in-out w-full ${animating ? 'opacity-0 transform scale-95' : 'opacity-100 transform scale-100'}`}>
          {currentSection === "stockSelection" && <Topic />}
          {currentSection === "researchPlan" && <Feedback />}
          {currentSection === "dataCollection" && <SearchResult />}
          {currentSection === "finalReport" && <FinalReport />}
        </div>
      </main>
      
      {/* 进度指示器 - 使用黑色 */}
      <div className="flex justify-center space-x-2 my-4 print:hidden">
        {sectionOrder.map((section, index) => (
          <button
            key={section}
            onClick={() => !animating && setCurrentSection(section)}
            className={`h-2 rounded-full transition-all ${currentSection === section ? 'w-8 bg-black dark:bg-white' : 'w-2 bg-gray-400 dark:bg-gray-600'}`}
            aria-label={sectionTitles[section]}
            disabled={animating}
          />
        ))}
      </div>
      
      <aside className="print:hidden">
        <Setting open={openSetting} onClose={() => setOpenSetting(false)} />
        <History open={openHistory} onClose={() => setOpenHistory(false)} />
        <Knowledge
          open={openKnowledge}
          onClose={() => setOpenKnowledge(false)}
        />
      </aside>
    </div>
  );
}

export default Home;
