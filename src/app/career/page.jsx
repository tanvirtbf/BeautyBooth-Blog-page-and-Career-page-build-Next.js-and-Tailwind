import Image from "next/image";
import Banner from "../../../public/Banner.png";

const page = () => {
  return (
    <div className="container" style={{fontFamily:'roboto'}}>
      <div>
        <Image src={Banner} alt="banner" priority />
      </div>
      <div className="mt-8 flex flex-col gap-3">
        <h1 className="heading font-bold text-2xl text-[#222222]">
          Career at Beautybooth
        </h1>
        <p className="font-normal text-base">
          Beauty Booth is an online beauty platform that offers affordable
          skincare, cosmetics, and accessories in a range of options. Putting
          the requirements of our clients first, we strive to meet all of their
          beauty needs! <br /> <br />
          It feels like entering a world of elegance and creativity when you
          work at Beauty Booth. You can assist customers in finding their ideal
          match by interacting with a range of beauty products. Daily
          possibilities to learn and advance in the beauty business are common,
          ranging from skincare to cosmetics. Every shift is pleasing and
          entertaining because of the lively environment and encouraging team.
          <br /> <br />
          Professional growth and development are highly valued by us. To enable
          our team members to realize their greatest potential, we provide
          continuous training and assistance. We think that team members should
          be promoted from within and given the resources they require to be
          successful.
          <br /> <br />
          It is an exciting and fulfilling experience to work at Beauty Booth.
          We would be happy to work with you if you are searching for a business
          that loves its workers and is dedicated to changing the beauty
          industry.
        </p>
      </div>
      <div></div>
    </div>
  );
};

export default page;
