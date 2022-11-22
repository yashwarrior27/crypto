import { createApi,fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

const cryptoNewsHeaders={
    'X-BingApis-SDK': 'true',
      'X-RapidAPI-Key': 'ab3e4e7f9dmshf23ec12c09a26dap1053d1jsn775d56719400',
      'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
}
const baseUrl='https://bing-news-search1.p.rapidapi.com';
const createRequest=(url)=>({
    url,headers:cryptoNewsHeaders,
})
export const cryptoNewsApi= createApi({
    reducerPath:'cryptoNewsApi',
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints: (builder)=>({
        getCryptoNews:builder.query({
            query:({newsCategory, count})=>createRequest(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`),
        })
    })

})
export const{useGetCryptoNewsQuery}=cryptoNewsApi;

// const options = {
//     method: 'GET',
//     url: 'https://bing-news-search1.p.rapidapi.com/news',
//     params: {safeSearch: 'Off', textFormat: 'Raw'},
//     headers: {
//       'X-BingApis-SDK': 'true',
//       'X-RapidAPI-Key': 'ab3e4e7f9dmshf23ec12c09a26dap1053d1jsn775d56719400',
//       'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
//     }
//   };