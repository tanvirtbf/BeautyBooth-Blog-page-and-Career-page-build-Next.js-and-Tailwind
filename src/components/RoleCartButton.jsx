const RoleCartButton = ({btnState}) => {
  return (
    <>
      <button
        className={`w-[106px] sm:w-[116px] h-[36px] sm:h-[44px] text-center ${
          btnState ? "bg-[#00CA8D]" : "bg-[#999999]"
        } rounded-md text-xs sm:text-sm font-medium text-[#FFFFFF]`}
      >
        {btnState ? "View details" : "Closed"}
      </button>
    </>
  );
};

export default RoleCartButton;
