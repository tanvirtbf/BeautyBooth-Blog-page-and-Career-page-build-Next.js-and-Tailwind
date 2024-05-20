"use client"
import { useRouter } from "next/navigation";

const RoleCartButton = ({btnState,id,isTwoBtn}) => {
  const router = useRouter()
  return (
    <>
      <button
        onClick={()=> router.push(`/career/${id}`)}
        className={`w-[106px] sm:w-[116px] h-[36px] sm:h-[44px] text-center ${
          btnState ? "bg-[#00CA8D]" : "bg-[#999999]"
        } rounded-md text-xs sm:text-sm font-medium text-[#FFFFFF] ${isTwoBtn && "bg-white text-[#5A5A5A] border-[#DDDDDD] border-[1px]"}`}
      >
        {isTwoBtn? "All Jobs" : 'Apply Now' && btnState ? "View details" : `${isTwoBtn? 'Apply Now': 'Closed'}`}

      </button>
    </>
  );
};

export default RoleCartButton;
