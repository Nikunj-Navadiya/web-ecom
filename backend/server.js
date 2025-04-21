import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/mongodb.js';
import connectCloudinary from './config/cloudinary.js';
import userRouter from './routes/userRoutes.js';
import productRouter from './routes/productRoutes.js';
import cartRouter from './routes/cartRoutes.js';
import orderRouter from './routes/oderRoutes.js';



// App Config
const app = express();
const port = process.env.PORT || 4000
connectDB()
connectCloudinary() 

// Middleware
app.use(express.json())

const allowedOrigins = [
    'https://forever-admin-bay-xi.vercel.app',
    'https://forever-frontend-eight-kappa.vercel.app'
  ];
  
  app.use(cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    },
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    credentials: true,
  }));
  
  // Enable preflight for all routes
  app.options('*', cors());

// API endPoints
app.use('/api/user', userRouter)
app.use('/api/product', productRouter)
app.use('/api/cart', cartRouter)
app.use('/api/order', orderRouter);
 
app.get('/' ,(req, res) => {
    res.send("API Working")
})

app.listen(port, () => console.log('Server Start on Port :' + port)
)