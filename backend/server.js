import  express  from "express"
import dotenv from 'dotenv'
dotenv.config()
import connectDB from "./config/db.js"
import productsRoutes from './routes/productRoutes.js'
import userRoutes from './routes/userRoutes.js'
import adminRoutes from './routes/adminRoutes.js'
import orderRoutes from './routes/orderRoutes.js'
import { notFound,errorHandler } from "./middleware/errorMiddleware.js"
import cookieParser from "cookie-parser"


connectDB()

const app = express()
const port = process.env.PORT || 5000


//Body Parser Middleware 

app.use(express.json())
app.use(express.urlencoded({extended:true}))

//ccokie parser middleware

app.use(cookieParser())


app.use('/api/products',productsRoutes)
app.use('/api/users',userRoutes)
app.use('/api/admin',adminRoutes)
app.use('/api/orders',orderRoutes)

app.use(notFound)
app.use(errorHandler)




app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})