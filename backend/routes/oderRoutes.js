import express from 'express'
import {placeOrder, placeOrderStripe, allOrder, userOrder, updateStatus, verifyStripe} from '../controllers/oderControllers.js'
import adminAuth from '../middleware/adminAuth.js'
import authUser from '../middleware/auth.js'

const orderRouter  = express.Router()

// Admin Features
orderRouter.post('/list', adminAuth, allOrder)
orderRouter.post('/status', adminAuth, updateStatus)

// payment  Features
orderRouter.post('/place', authUser, placeOrder)
orderRouter.post('/stripe', authUser, placeOrderStripe)

// user Feature
orderRouter.post('/userorders', authUser, userOrder)

// verify payment
orderRouter.post('/verifyStripe', authUser, verifyStripe)

export default orderRouter