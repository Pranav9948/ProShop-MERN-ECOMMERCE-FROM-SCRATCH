import { ORDERS_URL} from "../constants/constants";
import { apiSlice } from "./apiSlice";


export const orderApiSlice=apiSlice.injectEndpoints({

    endpoints:(builder)=>({

        createOrder:builder.mutation({
            query:(order)=>({
                url:`${ORDERS_URL}`,
                method:'POST',
                body:{...order}
            }),

            keepUnusedDataFor:5,
        }),


        getOrderDetails:builder.query({
            query:(id)=>({
                url:`${ORDERS_URL}/${id}/orderDetails`
                
            }),

            keepUnusedDataFor:5,
        }),
        
        
       
    })
})


export const {useCreateOrderMutation,useGetOrderDetailsQuery}=orderApiSlice