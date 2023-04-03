import Navbar from "@/components/Navbar";
import NewsBanner from "@/components/NewsBanner";
import NewsCard from "@/components/NewsCard";
import useDebounce from "@/hooks/useDebounce";
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
        return(
           setSelectedTopic(`category=${value}&`),
           setPageNumber(1)
           )
      } else {
        return setSelectedTopic(""),
        (setPageNumber(1))
      }
    } else return( (setSelectedTopic(`category=${value}&`)), setPageNumber(1))
  };


 //`https://newsapi.org/v2/everything?${searchtext}pageSize=20&page=${pageNumber}&apiKey=5cafeba9156d4331afe4dfa7784a02c0`;
// ;


  const getNewsData = async (): Promise<NewsTypes> => {
    const returnData = await axios.get(
      `https://newsapi.org/v2/top-headlines?pageSize=8&page=${pageNumber}&${searchtext}country=in&${selectedTopic}apiKey=0b179aff66094560a4e5de6e3068ae7a`
    );
    return returnData.data;
  };


 const debounceText = useDebounce(searchtext,500)


  const { data, isError, isLoading } = useQuery({
    queryKey: ["newsdata", searchtext,pageNumber],
    queryFn: getNewsData,
    keepPreviousData:true
    
  });

  
  const BannerData = data?.articles.splice(0,1)
const pagesLength = data?.totalResults? Math.floor(data.totalResults/7): 3 


useEffect(()=> {
  window.scrollTo(0,0)
},[])

  return (
    <div className=" min-h-screen bg-[#F6F6F6] overflow-hidden   ">
      <div>
        <Navbar handleTopics={handleTopics} setsearchtext={setsearchtext} isLoading={isLoading} selectedTopic={selectedTopic} />

        {/* Banner Card */}
        <div className="mb-10 w-full flex justify-center">
          <NewsBanner BannerData={BannerData?.[0]} />
        </div>

        {/* Card Grid*/}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-14 gap-x-5 justify-items-center my-10  sm:px-10 md:px-28">
          {data?.articles
            .map((item, index) => {
              return (
                <div key={index}>
                  <NewsCard NewsData={item} />
                </div>
              );
            })}
        </div>
        <div className="w-full  pb-10 flex flex-col px-10 sm:flex-row justify-around">
          <button
            className="my-5 py-4 px-8 text-xl text-blue-400 mx-4 border-2 border-blue-400 rounded-xl hover:scale-110 hover:bg-blue-400 hover:text-white transition-all disabled:border-gray-400 disabled:text-gray-400 disabled:hover:scale-100 disabled:hover:bg-[#F6F6F6] "
            onClick={() => setPageNumber((page) => page - 1)}
            disabled={pageNumber == 1 || isLoading}
          >
            Previous Page
          </button>
          <button
            className="my-5 py-4 px-8 text-xl text-blue-400 mx-4 border-2 border-blue-400 rounded-xl hover:scale-110 hover:bg-blue-400 hover:text-white transition-all  disabled:border-gray-400 disabled:text-gray-400 disabled:hover:scale-100 disabled:hover:bg-[#F6F6F6] "
            onClick={() => setPageNumber((page) => page + 1)}
            disabled={pageNumber == pagesLength || isLoading}
          >
            Next Page
          </button>
        </div>
      </div>
    </div>
  );
}
