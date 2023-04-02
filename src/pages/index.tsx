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
  const [pageNumber,setPageNumber] = useState(1)

  const handleTopics = (value: string) => {
    if (selectedTopic == value && selectedTopic != "") {
      if (selectedTopic == "") {
        return setSelectedTopic(`category=${value}&`);
      } else {
        return setSelectedTopic("");
      }
    } else return setSelectedTopic(`category=${value}&`);
  };


 //`https://newsapi.org/v2/everything?${searchtext}pageSize=20&page=${pageNumber}&apiKey=5cafeba9156d4331afe4dfa7784a02c0`;
// ;

  const getNewsData = async (): Promise<NewsTypes> => {
    const returnData = await axios.get(
      `https://newsapi.org/v2/top-headlines?pageSize=11&page=${pageNumber}&${searchtext}country=in&${selectedTopic}apiKey=5cafeba9156d4331afe4dfa7784a02c0`
    );
    return returnData.data;
  };

  const { data, isError, isLoading } = useQuery({
    queryKey: ["newsdata", selectedTopic,searchtext,pageNumber],
    queryFn: getNewsData,
    keepPreviousData:true
    
  });

 
  console.log(pageNumber)

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
      <div>
        <button
          className="my-5 p-2 mx-4 border-2 border-black "
          onClick={() => setPageNumber((page) => page - 1)}
          disabled={pageNumber == 1}
        >
          &#x2190; Previous Page
        </button>
        <button
          className="my-5 p-2 mx-4 border-2 border-black "
          onClick={() => setPageNumber((page) => page + 1)}
          disabled={pageNumber == 3}
        >
          Next Page &#x2192;
        </button>
      </div>
    </div>
  );
}
