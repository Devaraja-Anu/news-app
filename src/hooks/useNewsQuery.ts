import { NewsTypes } from "@/types/NewsTypes";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

export const useNewsQuery = (
  searchtext: string,
  pageNumber: number,
  selectedTopic: string
) => {
  const getNewsData = async (): Promise<NewsTypes> => {
    const returnData = await axios.get(
      `https://newsapi.org/v2/top-headlines?pageSize=7&page=${pageNumber}&${searchtext}country=in&${selectedTopic}apiKey=${process.env.NEXT_PUBLIC_API_KEY}`
    );
    return returnData.data;
  };

  return useQuery({
    queryKey: ["newsdata", searchtext, pageNumber],
    queryFn: getNewsData,
  });
};
