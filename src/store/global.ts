import { create } from "zustand";

// 定义可能的部分类型
export type SectionType = "stockSelection" | "researchPlan" | "dataCollection" | "finalReport";

// 定义完成状态接口
interface CompletionStatus {
  stockSelection: boolean;
  researchPlan: boolean;
  dataCollection: boolean;
  finalReport: boolean;
}

interface GlobalStore {
  openSetting: boolean;
  openHistory: boolean;
  openKnowledge: boolean;
  currentSection: SectionType; // 当前显示的部分
  completionStatus: CompletionStatus; // 各部分的完成状态
  autoNavigate: boolean; // 是否自动导航到下一部分
}

interface GlobalFunction {
  setOpenSetting: (visible: boolean) => void;
  setOpenHistory: (visible: boolean) => void;
  setOpenKnowledge: (visible: boolean) => void;
  setCurrentSection: (section: SectionType) => void; // 设置当前部分的函数
  setSectionCompletion: (section: SectionType, completed: boolean) => void; // 设置部分完成状态
  setAutoNavigate: (auto: boolean) => void; // 设置是否自动导航
  moveToNextSection: () => void; // 移动到下一个部分
}

export const useGlobalStore = create<GlobalStore & GlobalFunction>((set, get) => ({
  openSetting: false,
  openHistory: false,
  openKnowledge: false,
  currentSection: "stockSelection", // 默认显示股票选择部分
  completionStatus: {
    stockSelection: false,
    researchPlan: false,
    dataCollection: false,
    finalReport: false
  },
  autoNavigate: true, // 默认启用自动导航
  
  setOpenSetting: (visible) => set({ openSetting: visible }),
  setOpenHistory: (visible) => set({ openHistory: visible }),
  setOpenKnowledge: (visible) => set({ openKnowledge: visible }),
  setCurrentSection: (section) => set({ currentSection: section }),
  
  // 设置部分完成状态，并在自动导航开启时自动前进到下一部分
  setSectionCompletion: (section, completed) => {
    const state = get();
    const newCompletionStatus = { ...state.completionStatus, [section]: completed };
    
    set({ completionStatus: newCompletionStatus });
    
    // 如果完成了当前部分且自动导航开启，则自动前进到下一部分
    if (completed && section === state.currentSection && state.autoNavigate) {
      setTimeout(() => get().moveToNextSection(), 1000); // 延迟1秒后自动前进
    }
  },
  
  setAutoNavigate: (auto) => set({ autoNavigate: auto }),
  
  // 移动到下一个部分的函数
  moveToNextSection: () => {
    const state = get();
    const sectionOrder: SectionType[] = [
      "stockSelection",
      "researchPlan",
      "dataCollection",
      "finalReport"
    ];
    
    const currentIndex = sectionOrder.indexOf(state.currentSection);
    if (currentIndex < sectionOrder.length - 1) {
      set({ currentSection: sectionOrder[currentIndex + 1] });
    }
  }
}));
