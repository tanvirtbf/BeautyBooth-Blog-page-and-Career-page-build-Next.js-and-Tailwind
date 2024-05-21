"use client";
import cn from "@/lib/cn";
import { useRouter } from "next/navigation";

const RoleCartButton = ({ btnState, id, isTwoBtn, className , btnText, isDisable }) => {
  const router = useRouter();

  return (
    <div className={cn(
      {
        "grid w-[50%] sm:w-auto" : isTwoBtn
      }
    )}>
      <button
        disabled={isDisable}
        onClick={() => router.push(`/career/${btnText==='All Jobs' ? '' : id}`)}
        className={cn(
          'w-[106px] sm:w-[116px] h-9 sm:h-11 text-center bg-[#00CA8D] rounded-md text-xs sm:text-sm font-medium text-white',
          className,
          {
            "w-[100%]" : isTwoBtn,
          }
        )}
      >
        {btnState ? btnText : 'Closed'}
      </button>
    </div>
  );
};

export default RoleCartButton;

//common -- Text size in web and mobile all
