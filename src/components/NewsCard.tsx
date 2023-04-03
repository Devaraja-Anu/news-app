import React from "react";
import { NewsTypes } from "@/types/NewsTypes";


import { useState } from "react";

const NewsCard = ({ newsData }: { newsData: NewsTypes["articles"][0] }) => {


  const headline = newsData.title.length > 100 ? newsData.title.slice(0,99)+'...':newsData.title


  if (!newsData) {
    return null;
  }

  return (
    <div className="rounded-xl px-5 h-11rem">
      <div className="w-full bg-white rounded-xl  border-2 shadow-xl ">
        <div className="w-full rounded-t-xl overflow-hidden">
          
            <a href={newsData.url} target="_blank">
              <img
                className="w-full h-44 rounded-t-xl object-cover hover:scale-110 ease-in-out duration-500 transition-all"
                src={
                  newsData.urlToImage
                    ? newsData.urlToImage
                    : "/newspaper-background-concept.jpg"
                }
                width={600}
                height={400}
                alt={"representative text img displayed in news article"}
                placeholder="/newspaper-background-concept.jpg"
              />
            </a>
          
        </div>

        <div className="px-4 pb-5 h-60 flex  flex-col justify-between ">
          <h1 className="  sm:text-xl  font-semibold pt-8 md:py-6 sm:pb-5 font-mainFont ">
            {headline}
          </h1>
          <a
            className="text-blue-400 font-semibold font-mainFont pt-5 px-4"
            href={newsData.url}
            target="_blank"
          >
            Know More &#x2192;
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
