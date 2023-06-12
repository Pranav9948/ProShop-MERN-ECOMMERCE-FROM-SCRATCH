import Orders from "../models/orderModel.js";
import asyncHandler from "../middleware/asyncHandler.js";
import Order from "../models/orderModel.js";



// @desc    create new order
// @route   POST /api/orders
// @access  Private

const  createNewOrder=asyncHandler(async(req, res) => {

      
    const {

        orderItems,
        shippingAddress,
        paymentMethod,
        itemsPrice,
        taxPrice,
        shippingPrice,
        totalPrice

    } = req.body

    if(!orderItems && orderItems.length ===0){

        res.status(400)
        throw new Error ('no items found')
    }

    else{

      const order=new Order({

        orderItems:orderItems.map((x)=>({

            ...x,
            product:x._id,
            _id:undefined
        })),

        user:req.user._id,
        shippingAddress,
        paymentMethod,
        itemsPrice,
        taxPrice,
        shippingPrice,
        totalPrice

    })

    const newOrder=await order.save()

    res.status(201).json(newOrder)

    
    
}

})


// @desc    get my orders
// @route   GET /api/orders/myorders
// @access  Private

const  getMyOrders=asyncHandler(async(req, res) => {
    
  const myOrder=await Order.find({user:req.user._id})

   if(myOrder.length===0){

      res.status(200).send(' no items ordered')
   }

   else{

      res.status(200).json(myOrder)
   }


   
})


// @desc    get orders by Id
// @route   GET /api/orders/:id
// @access  Private


const  getMyOrdersById=asyncHandler(async(req, res) => {
    
    const orderDetails=Order.findById(req.params._id)

    if(orderDetails.length===0){

res.status(200).send(' no details found')
}

else{

res.status(200).json(orderDetails)
}

})



// @desc    update order to paid
// @route   PUT /api/orders/:id/orderDetails
// @access  Private


const  getMyOrdersDetailsById=asyncHandler(async(req, res) => {

    

    const getOrderDetails=await Order.findById(req.params.id)
    
    res.json(getOrderDetails)
})


export{

createNewOrder,getMyOrders,getMyOrdersById,getMyOrdersDetailsById

}