import Navbar from "@/components/Navbar";
import NewsCard from "@/components/NewsCard";
import NewsQuery from "@/queries/NewsQuery";
import { NewsTypes } from "@/types/NewsTypes";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useState,useEffect } from "react";


export default function Home() {

  const [searchtext, setsearchtext] = useState("");
  const [selectedTopic, setSelectedTopic] = useState("");

  const handleTopics = (value: string) => {
    if (selectedTopic == value && selectedTopic != "") {
      if (selectedTopic == "") {
        return setSelectedTopic(`category=${value}&`);
      } else {
        return setSelectedTopic("");
      }
    } else return setSelectedTopic(`category=${value}&`);
  };





  const getNewsData = async (): Promise<NewsTypes> => {
    const returnData = await axios.get(
      `https://newsapi.org/v2/top-headlines?${searchtext}country=in&${selectedTopic}apiKey=0b179aff66094560a4e5de6e3068ae7a`
    );
    return returnData.data;
  };

  const { data, isError, isLoading } = useQuery({
    queryKey: ["newsdata", selectedTopic,searchtext],
    queryFn: getNewsData,
  });

  const test = data?.articles.map((item) => item.urlToImage);
 

  return (
    <div className=" min-h-screen bg-[#F6F6F6] overflow-hidden   ">
      <Navbar handleTopics={handleTopics} setsearchtext={setsearchtext} />
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-5 xl:gap-10 justify-items-center my-10 sm:px-10 md:px-32">
        {data?.articles
          .filter((item) => !item.urlToImage?.includes("/."))
          .map((item, index) => {
            return (
              <div key={index}>
                <NewsCard NewsData={item} />
              </div>
            );
          })}
      </div>
    </div>
  );
}
