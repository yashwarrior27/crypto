import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react';

const cryptoApiHeaders={
    'X-RapidAPI-Key': 'ab3e4e7f9dmshf23ec12c09a26dap1053d1jsn775d56719400',
     'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com',
}
const baseUrl = 'https://coinranking1.p.rapidapi.com';
const createRequest = (url)=>({url , headers: cryptoApiHeaders});

export const cryptoApi = createApi({
      reducerPath: 'cryptoApi',
      baseQuery: fetchBaseQuery({baseUrl}),
      endpoints: (builder)=>({
        getCryptos: builder.query({
            query: (count) => createRequest(`/coins?limit=${count}`),
        }),
        getCryptoDetails:builder.query({
          query: (coinId) => createRequest(`/coin/${coinId}`),
        }),
        getCryptoHistory:builder.query({
          query: ({coinId, timeperiod}) => createRequest(`coin/${coinId}/history?timeperiod=${timeperiod}`),
        }),
        getExchanges: builder.query({
          query: () => createRequest('/exchanges'),
        }),
      }) 
});  

export const {useGetCryptosQuery, useGetCryptoDetailsQuery, useGetCryptoHistoryQuery, useGetExchangesQuery}= cryptoApi;

// const options = {
//   method: 'GET',
//   url: 'https://coinranking1.p.rapidapi.com/coins',
//   params: {
//     referenceCurrencyUuid: 'yhjMzLPhuIDl',
//     timePeriod: '24h',
//     'tiers[0]': '1',
//     orderBy: 'marketCap',
//     orderDirection: 'desc',
//     limit: '50',
//     offset: '0'
//   },
//   headers: {
//     'X-RapidAPI-Key': 'ab3e4e7f9dmshf23ec12c09a26dap1053d1jsn775d56719400',
//     'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
//   }
// };
