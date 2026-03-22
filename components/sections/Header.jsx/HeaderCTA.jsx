import Button from "@/components/ui/Button";
import Link from "next/link";
import React from "react";

const HeaderCTA = () => {
  return (
    <>
      <div className="flex justify-center items-center lg:gap-5 gap-2">
        <Link href={"/login"}>
          <Button classname={"text-gray-300 hover:text-white"}>Login</Button>
        </Link>
        <Link href={"/signup"}>
          <Button
            classname={
              "text-white bg-gradient-to-r from-[#7C3AED] to-[#A78BFA] hover:scale-105 hover:shadow-lg hover:shadow-purple-500/30 text-[12px] lg:text-[15px]"
            }
          >
            Get Started
          </Button>
        </Link>
      </div>
    </>
  );
};

export default HeaderCTA;
