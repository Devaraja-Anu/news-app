import React from "react";
import Image from "next/image";
import { NewsTypes } from "@/types/NewsTypes";
import { NewsData } from "@/Data/NewsData";

const NewsCard = ({ NewsData }: {NewsData: NewsTypes["articles"][1]}) => {

  if (! NewsData){
    return null
  }

  console.log(NewsData)

  return (
    <div className="rounded-xl px-5">
      <div className="w-full bg-white rounded-xl  border-2 shadow-xl ">
        <div className="w-full overflow-hidden">
          <Image
            className="w-full h-1/4 rounded-t-xl object-cover hover:scale-110 ease-in-out duration-500 transition-all"
            src={`/api/imagefetcher?url=${encodeURIComponent(
              `${NewsData.urlToImage}`
            )}`}
            width={600}
            height={400}
            alt="representative for news"
          />
        </div>

        <div className="px-4 pb-5">
          <h1 className="text-xl font-semibold py-6 pb-5 font-mainFont ">
            {NewsData.title}
          </h1>
          <p className="py-2 ">{NewsData.author}</p>
          {/* <p>{NewsData.description}</p> */}
          <p className="font-mainFont pb-4">{NewsData.content}</p>
          <a
            className="text-blue-500 font-semibold font-mainFont pt-5"
            href={NewsData.url}
          >
            Know More &#x2192;
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
