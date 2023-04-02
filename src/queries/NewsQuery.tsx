import React from 'react'
import {useQuery} from '@tanstack/react-query'
import axios from 'axios'
import { NewsTypes } from "@/types/NewsTypes";



const NewsQuery = () => {

    const getNewsData = ():Promise<NewsTypes>=> {
      return  axios.get('https://newsapi.org/v2/everything?q=bitcoin&apiKey=61b1fab9e17e47148757e7ee2b1a865c')
    }

    const NewsData = useQuery({
        queryKey:['newsdata'],
        queryFn: getNewsData
    }) 


    console.log(NewsData.data)
   return NewsData
}

export default NewsQuery