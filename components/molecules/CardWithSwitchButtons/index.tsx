'use client'

import { BsBoxSeam } from "react-icons/bs";
import EmptyState from "../EmptyState";
import SwitchTabs from "../SwitchTabs";
import AddLendingModal from "@/components/organisms/AddLendingModal";
import { useAddUserButtonStore } from "@/app/store/addUserStore";
import { usePathname } from "next/navigation";

export default function CardsWithSwitchButtons({children}) {

    const { isAddUserClicked, toggleAddUserClicked } = useAddUserButtonStore();

    const CurrentPath = usePathname()
    let path
    if(CurrentPath == '/'){
        path = 'Active';
    }else{
        path = CurrentPath.slice(1)
    }

    return (
        <div>

            <div className="rounded-3xl border border-(--color-primary-soft) bg-(--color-background) p-6 shadow-(--shadow-panel)">

                <SwitchTabs />

                {
                    CurrentPath == '/' ? 
                    <EmptyState
                    icon={<BsBoxSeam className="text-2xl" />}
                    title={`No ${path} Lendings`}
                    description='Click "Add New" to start tracking'
                /> 
                : 
                <div className="mt-6 flex flex-col items-center justify-center gap-3 rounded-2xl border border-(--color-primary-soft) bg-(--color-background) py-16 text-center">
                    {children} 
                </div>
                }
                
            </div>

            {isAddUserClicked && <AddLendingModal onClose={toggleAddUserClicked} />}
        </div>
    )
}