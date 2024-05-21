"use client";
import cn from "@/lib/cn";
import { useRouter } from "next/navigation";

const RoleCartButton = ({ btnState, id, isTwoBtn, className , btnText, isDisable }) => {
  const router = useRouter();

  return (
    <>
      <button
        disabled={isDisable}
        onClick={() => router.push(`/career/${id}`)}
        className={cn(
          'w-[106px] sm:w-[116px] h-9 sm:h-11 text-center bg-[#00CA8D] rounded-md text-xs sm:text-sm font-medium text-white',
          className
        )}
      >
        {btnState ? btnText : 'Closed'}
      </button>
    </>
  );
};

export default RoleCartButton;


//common -- Text size in web and mobile all