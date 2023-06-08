import  express  from "express"
import dotenv from 'dotenv'
dotenv.config()
import connectDB from "./config/db.js"
import productsRouter from './routes/productRoutes.js'
import { notFound,errorHandler } from "./middleware/errorMiddleware.js"


connectDB()

const app = express()
const port = process.env.PORT || 5000


app.use(express.json())
app.use('/api/products',productsRouter)
app.use(notFound)
app.use(errorHandler)




app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})