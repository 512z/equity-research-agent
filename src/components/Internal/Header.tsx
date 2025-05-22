"use client";
import { useTranslation } from "../../../node_modules/react-i18next";
import { Settings, Github, History, BookText } from "lucide-react";
import { Button } from "@/components/Internal/Button";
import { useGlobalStore } from "@/store/global";

const VERSION = process.env.NEXT_PUBLIC_VERSION;

function Header() {
  const { t } = useTranslation();
  const { setOpenSetting, setOpenHistory, setOpenKnowledge } = useGlobalStore();

  return (
    <>
      <header className="flex justify-between items-center my-6 max-sm:my-4 print:hidden">
        <div>
          <h1 className="text-left text-xl font-bold text-black dark:text-white">
            {t("title")}
          </h1>
        </div>
        <div className="flex">
          <Button
            className="h-8 w-8 tech-icon-button"
            variant="ghost"
            size="icon"
            title={t("history.title")}
            onClick={() => setOpenHistory(true)}
          >
            <History className="h-5 w-5" />
          </Button>
          <Button
            className="h-8 w-8 tech-icon-button"
            variant="ghost"
            size="icon"
            title={t("knowledge.title")}
            onClick={() => setOpenKnowledge(true)}
          >
            <BookText className="h-5 w-5" />
          </Button>
          <Button
            className="h-8 w-8"
            title={t("setting.title")}
            variant="ghost"
            size="icon"
            onClick={() => setOpenSetting(true)}
          >
            <Settings className="h-5 w-5" />
          </Button>
        </div>
      </header>
    </>
  );
}

export default Header;
