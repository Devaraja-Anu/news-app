import React from "react";
import Image from "next/image";
import { NewsTypes } from "@/types/NewsTypes";
import { NewsData } from "@/Data/NewsData";
import placeHolderImage from "../Resources/Images/newspaper-background-concept.jpg";

import { useState } from "react";

const NewsCard = ({ NewsData }: { NewsData: NewsTypes["articles"][1] }) => {
  if (!NewsData) {
    return null;
  }

  return (
    <div className="rounded-xl px-5 h-11rem">
      <div className="w-full bg-white rounded-xl  border-2 shadow-xl ">
        <div className="w-full rounded-t-xl overflow-hidden">
          {
            <a href={NewsData.url}>
              {/* <picture> */}
              <img
                className="w-full h-44 rounded-t-xl object-cover hover:scale-110 ease-in-out duration-500 transition-all"
                src={NewsData.urlToImage ? NewsData.urlToImage : "/newspaper-background-concept.jpg"}
                width={600}
                height={400}
                alt={"representative for news"}
              />
              {/* </picture> */}
            </a>
          }
        </div>

        <div className="px-4 pb-5 h-60 ">
          <h1 className="text-xl font-semibold py-6 pb-5 font-mainFont ">
            {NewsData.title}
          </h1>
          {/* <p className="py-2 ">{NewsData.author}</p> */}
          {/* <p>{NewsData.description}</p>
          <p className="font-mainFont pb-4">{NewsData.content}</p> */}
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
