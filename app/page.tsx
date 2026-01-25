import Image from "next/image";
import {FaPlus } from '@/app/icons'
import InputField from "@/components/atoms/InputField";
import AdvanceButton from "@/components/atoms/AdvanceButton";

export default function Home() {
  return (
    <div className="flex justify-center items-center h-screen w-screen">
        hii
        <InputField className=" w-1/2" type="password"/>
        <AdvanceButton className=""><FaPlus className="bg-red-500"/>Click Me</AdvanceButton>
    </div>
  );
}
