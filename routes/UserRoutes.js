import express from 'express';

import { getUsers, authUser, getUserProfile, registerUser, updateUserProfile } from '../controllers/UserController.js';
import { protect, admin } from '../middleware/authMiddleware.js';


const router = express.Router();

router.route('/').post(registerUser).get(protect, admin, getUsers);
router.post('/login', authUser);
router.route('/profile').get(protect, getUserProfile).put(protect, updateUserProfile)


export default router;
