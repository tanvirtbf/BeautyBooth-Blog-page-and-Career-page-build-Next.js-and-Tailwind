"use client";
import { useRouter } from "next/navigation";

const RoleCartButton = ({ btnState, id, isTwoBtn }) => {
  const router = useRouter();

  let buttonText = "";

  if(btnState){
    buttonText = "View Details"
  } else if(!btnState){
    buttonText = "Closed"
  }
  if(isTwoBtn === 'yes') {
    buttonText = "All Jobs";
  } else if (isTwoBtn === 'no') {
    buttonText = "Apply Now";
  }


  return (
    <>
      <button
        onClick={() => router.push(`/career/${id}`)}
        className={`w-[106px] sm:w-[116px] h-[36px] sm:h-[44px] text-center ${
          btnState ? "bg-[#00CA8D]" : "bg[#999999]"
        } rounded-md text-xs sm:text-sm font-medium ${
          isTwoBtn === 'yes' ? "bg-white text-[##5A5A5A]  border-[#DDDDDD] border-[1px] text-[#5A5A5A]" : "text-[#FFFFFF] bg-[#00CA8D]"
        }`}
      >
        {buttonText}
      </button>
    </>
  );
};

export default RoleCartButton;
