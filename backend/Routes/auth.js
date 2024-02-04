import express from 'express'
import {register} from '../Controllers/authController.js'
import {login} from '../Controllers/authController.js'

const router = express.Router();

router.post('/register', register);
router.post('/register', login);

export default router;