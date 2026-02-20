'use client'

import AdvanceButton from "@/components/atoms/AdvanceButton";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { HiArrowTrendingUp } from "react-icons/hi2";
import { LuCircleCheckBig } from "react-icons/lu";

export default function SwitchTabs() {

    const [selectedTab, setSelectedTab] = useState<"active" | "returned">("active");

    const router = useRouter()

    const handleTabClick = (tab: "active" | "returned") => {
        setSelectedTab(tab);
        router.push(tab)
        console.log("Selected:", tab);
    };

    return (
        <div className="w-full h-15 bg-gray-200 flex gap-5 p-1 rounded-xl">

            <AdvanceButton
                variant="ghost"
                onClick={() => handleTabClick("active")}
                className={`cursor-pointer h-full flex-1 ${selectedTab === "active"
                    ? "bg-white text-black font-semibold"
                    : "bg-gray-200 font-semibold"
                    }`}
            >
                <HiArrowTrendingUp className="text-3xl font-bold" />  Active (0)
            </AdvanceButton>

            <AdvanceButton
                variant="ghost"
                onClick={() => handleTabClick("returned")}
                className={`cursor-pointer h-full flex-1 ${selectedTab === "returned"
                    ? "bg-white text-black font-semibold"
                    : "bg-gray-200 font-semibold"
                    }`}
            >
                <LuCircleCheckBig className="text-3xl font-bold" />Returned (0)
            </AdvanceButton>

        </div>
    )
}