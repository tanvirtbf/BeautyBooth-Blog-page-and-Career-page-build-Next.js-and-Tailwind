"use client";
import { useRouter } from "next/navigation";

const RoleCartButton = ({ btnState, id, isTwoBtn }) => {
  const router = useRouter();

  let buttonText = "";

  if (isTwoBtn && btnState) {
    buttonText = "All Jobs";
  } else if (!isTwoBtn) {
    buttonText = "View Jobs";
  }

  return (
    <>
      <button
        onClick={() => router.push(`/career/${id}`)}
        className={`w-[106px] sm:w-[116px] h-[36px] sm:h-[44px] text-center ${
          isTwoBtn ? "text-[##5A5A5A]" : "text-[#FFFFFF]"
        } ${
          btnState ? "bg-[#00CA8D]" : "bg-[#999999]"
        } rounded-md text-xs sm:text-sm font-medium ${
          isTwoBtn && "bg-white  border-[#DDDDDD] border-[1px] text-[#5A5A5A]"
        }`}
      >
        {buttonText}
      </button>
    </>
  );
};

export default RoleCartButton;
