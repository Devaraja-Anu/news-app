import Navbar from "@/components/Navbar";
import NewsCard from "@/components/NewsCard";
import NewsQuery from "@/queries/NewsQuery";
import { NewsTypes } from "@/types/NewsTypes";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export default function Home() {

   const getNewsData = async(): Promise<NewsTypes> => {
      const returnData =await axios.get(
       "https://newsapi.org/v2/top-headlines?country=us&apiKey=61b1fab9e17e47148757e7ee2b1a865c"
     )
     return returnData.data
   };

   const {data,isError,isLoading} = useQuery({
     queryKey: ["newsdata"],
     queryFn: getNewsData,
     
   }); 

  console.log(data)

  

  return (
    <div className=" min-h-screen bg-[#F6F6F6] overflow-hidden px-5 sm:px-10 md:px-5 ">
      <Navbar />
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-5 xl:gap-10 justify-items-center my-10">
        {/* {data?.articles.map((item: NewsTypes["articles"][0], index) => {
          return <div key={index}>{item.author}</div>;
        })} */}

        {
          data?.articles.map((item,index) => {
            return(
              <div key={index}> 
              <NewsCard NewsData={item} />
              </div>
            )
          })
        }
        
      </div>
    </div>
  );
}
