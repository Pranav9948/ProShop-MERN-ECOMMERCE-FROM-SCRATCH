import Product from "../models/productModel.js";
import asyncHandler from "../middleware/asyncHandler.js";



// @desc    get all product
// @route   get /api/products
// @access  Public

const getAllProducts=asyncHandler(async(req, res) => {
    
console.log('123reach');

    const products=await Product.find({})

    res.json(products)
})

// @desc    get single product
// @route   get /api/products/:id
// @access  Public


const getSingleProduct=asyncHandler(async(req, res) => {

    const productDetail = await Product.findById(req.params.id)

    if(productDetail){
     return   res.json(productDetail);
    }
   
    res.status(404);
    throw new Error('product not found...')
  
  })


  export{
     getAllProducts,
     getSingleProduct,

  }
