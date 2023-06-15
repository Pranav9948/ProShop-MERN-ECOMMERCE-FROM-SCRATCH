import { PRODUCTS_URL } from "../constants/constants";
import { apiSlice } from "./apiSlice";


export const productApiSlice=apiSlice.injectEndpoints({

    endpoints:(builder)=>({

        getProducts:builder.query({
            query:({pageNumber})=>({
                url:PRODUCTS_URL,
                params:{
                    pageNumber,
                },
            }),

            keepUnusedDataFor:5,
            providesTags:['Products'],
        }),

        getProductDetails:builder.query({
            query:(productId)=>({
                url:`${PRODUCTS_URL}/${productId}`
            }),

            keepUnusedDataFor:5,
        }),



        addReview: builder.mutation({
      query: (data) => ({
        url: `${PRODUCTS_URL}/${data.id}/review`,  
        method: "POST",
        body:data
       
      }),
    }),         
    
       
    })
})


export const {useGetProductsQuery,useGetProductDetailsQuery,useAddReviewMutation}=productApiSlice