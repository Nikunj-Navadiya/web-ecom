import express from 'express';
import { addcart, getUsercart, updatecart } from '../controllers/cartControllers.js';
import authUser from '../middleware/auth.js';

const cartRouter = express.Router()

cartRouter.post('/get',authUser, getUsercart)
cartRouter.post('/add',authUser, addcart)
cartRouter.post('/update',authUser, updatecart)

export default cartRouter