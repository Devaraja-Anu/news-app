import { NewsTypes } from "@/types/NewsTypes";
import React from "react";

const NewsBanner = ({
  bannerData,
}: {
  bannerData?: NewsTypes["articles"][0];
}) => {
  const bannerImage = bannerData?.urlToImage
    ? bannerData.urlToImage
    : "/newspaper-background-concept.jpg";

  if (!bannerData?.title) return null;

  return (
    <div className="w-full flex justify-center ">
      <div
        className={`w-10/12 h-11rem lg:h-96 flex flex-col md:flex-row bg-white mt-10 mb-5 justify-between rounded-xl overflow-hidden shadow-xl border-2 border-gray-200`}
      >
        <div className="rounded-xl block md:hidden">
          <a href={bannerData?.url}>
            <img
              className="w-full h-44  object-cover hover:scale-110 transition-all ease-in-out duration-500"
              src={bannerImage}
              alt="alt text"
              placeholder="/newspaper-background-concept.jpg"
            />
          </a>
        </div>

        <div className="w-full h-full px-10 xl:pl-20 pt-7 md:py-20 flex flex-col justify-around ">
          <p className=" py-5 font-semibold text-xl md:text-2xl h-60  overflow-clip xl:text-4xl">
            {bannerData.title.length > 100
              ? bannerData.title.slice(0, 99) + "..."
              : bannerData.title}
          </p>
          <a
            className="text-blue-400 text-xl pb-5 font-semibold font-mainFont pt-5"
            href={bannerData?.url}
          >
            {" "}
            Know More &#x2192;{" "}
          </a>
        </div>

        <div className="rounded-xl w-full hidden md:block">
          <a href={bannerData?.url}>
            <img
              className="w-full h-full  object-cover hover:scale-110 transition-all ease-in-out duration-500"
              src={bannerImage}
              alt="alt text"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsBanner;
