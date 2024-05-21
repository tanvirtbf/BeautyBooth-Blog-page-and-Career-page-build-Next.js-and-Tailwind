"use client";
import { useRouter } from "next/navigation";

const RoleCartButton = ({ btnState, id, isTwoBtn }) => {
  const router = useRouter();

  return (
    <>
      <button
        onClick={() => router.push(`/career/${id}`)}
        className={`w-[106px] sm:w-[116px] h-9 sm:h-11 text-center bg-[#00CA8D] rounded-md text-xs sm:text-sm font-medium text-white`}
      >
        View Details
      </button>
    </>
  );
};

export default RoleCartButton;
