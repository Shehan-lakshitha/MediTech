import express from 'express';
import {authenticate} from '../auth/verifyToken.js';
import { getAllBookings, getCheckoutSession } from '../Controllers/bookingController.js';

const router = express.Router();

router.post('/checkout-session/:doctorId', authenticate, getCheckoutSession);
router.get('/', getAllBookings);

export default router;