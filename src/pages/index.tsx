import Navbar from "@/components/Navbar";
import NewsBanner from "@/components/NewsBanner";
import NewsCard from "@/components/NewsCard";
import { useNewsQuery } from "@/hooks/useNewsQuery";
import { NewsTypes } from "@/types/NewsTypes";
import { useState,useEffect } from "react";
import { TailSpin } from "react-loader-spinner";


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


  const { data, isError, isLoading } = useNewsQuery(searchtext, pageNumber,selectedTopic);
  const bannerData = data?.articles.splice(0,1)
const pagesLength = data?.totalResults? Math.floor(data.totalResults/7): 2 


useEffect(() => {
  window.scrollTo(0, 0);
}, [pageNumber, selectedTopic]);



  if(isLoading){
    return (
      <div className="w-screen h-screen overflow-hidden flex justify-center align-middle">
        <div className="pt-72">
          <TailSpin
            height="150"
            width="150"
            color="#60a5fa"
            ariaLabel="tail-spin-loading"
            radius="1"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
        </div>
      </div>
    );
  }

  

  if(isError){
    return (
      <div className="w-screen h-screen overflow-hidden flex justify-center align-middle">
        <p className="text-6xl font-bold pt-96 ">Error</p>
      </div>
    );
  }



  return (
    <div className=" min-h-screen bg-[#F6F6F6] overflow-hidden   ">
      <div>
        <Navbar handleTopics={handleTopics} setsearchtext={setsearchtext} isLoading={isLoading} selectedTopic={selectedTopic} />

        {/* Banner Card */}
        <div className="mb-10 w-full flex justify-center">
          <NewsBanner bannerData={bannerData?.[0]} />
        </div>

        {/* Card Grid*/}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-14 gap-x-5 justify-items-center my-10  sm:px-10 md:px-28">
          {data?.articles
            .map((item:NewsTypes['articles'][0], index:number) => {
              return (
                <div key={index}>
                  <NewsCard newsData={item} />
                </div>
              );
            })}
        </div>

          {/* Prev and Next Page Buttons */}

        <div className="w-full  pb-10 flex flex-col px-10 sm:flex-row justify-around">
          <button
            className="my-5 py-2 sm:py-4 px-5 sm:px-8 text-xl text-blue-400 mx-4 border-2 border-blue-400 rounded-xl hover:scale-110 hover:bg-blue-400 hover:text-white transition-all disabled:border-gray-400 disabled:text-gray-400 disabled:hover:scale-100 disabled:hover:bg-[#F6F6F6] "
            onClick={() => setPageNumber((page) => page - 1)}
            disabled={pageNumber == 1 || isLoading}
          >
            Previous Page
          </button>
          <button
            className="my-5 py-2 sm:py-4 px-5 sm:px-8 text-xl text-blue-400 mx-4 border-2 border-blue-400 rounded-xl hover:scale-110 hover:bg-blue-400 hover:text-white transition-all  disabled:border-gray-400 disabled:text-gray-400 disabled:hover:scale-100 disabled:hover:bg-[#F6F6F6] "
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
