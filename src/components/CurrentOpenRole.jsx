import Image from "next/image";
import GraphChartImage from "../../public/graph-chart 1.png";
import LocationImage from "../../public/Page-1.png";
import VectorMailImage from "../../public/Vector.png";

const CurrentOpenRole = ({heading,remoteOrOffice,state,positions,btnState}) => {
  return (
    <div className="cart-shadow rounded-lg p-4 sm:p-5 bg-white grid grid-cols-12 gap-5">
      <div className="flex flex-col gap-3 col-span-12 sm:col-span-8">
        <h3 className="font-medium text-sm sm:text-base text-[#222222]">
          {heading}
        </h3>
        <div>
          <div className="flex justify-between">
            <div className="flex gap-[6px] items-center">
              <Image src={LocationImage} alt="locationimage" />
              <span className="font-normal text-xs sm:text-sm text-[#717171]">{remoteOrOffice? 'Office': 'Remote'}</span>
            </div>
            <div className="flex gap-[6px] items-center">
              <Image src={GraphChartImage} alt="locationimage" />
              <span className="font-normal text-xs sm:text-sm text-[#717171]">{state}</span>
            </div>
            <div className="flex gap-[6px] items-center">
              <Image src={VectorMailImage} alt="locationimage" />
              <span className="font-normal text-xs sm:text-sm text-[#717171]">
                {positions}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-start sm:justify-end items-center col-span-12 sm:col-span-4">
        <button className={`w-[106px] sm:w-[116px] h-[36px] sm:h-[44px] text-center ${btnState ? 'bg-[#00CA8D]' : 'bg-[#999999]'} rounded-md text-xs sm:text-sm font-medium text-[#FFFFFF]`}>
          {btnState ? 'View details' : 'Closed'}
        </button>
      </div>
    </div>
  );
};

export default CurrentOpenRole;
