import { NewsTypes } from "@/types/NewsTypes";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";


export const useNewsQuery = (searchtext: string, pageNumber: number,selectedTopic:string) => {

    const getNewsData = async (): Promise<NewsTypes> => {
      const returnData = await axios.get(
        `https://newsapi.org/v2/top-headlines?pageSize=8&page=${pageNumber}&${searchtext}country=in&${selectedTopic}apiKey=0b179aff66094560a4e5de6e3068ae7a`
      );
      return returnData.data;
    };


  return useQuery({
    queryKey: ["newsdata", searchtext, pageNumber],
    queryFn: getNewsData,
    keepPreviousData: true,
  });
};
