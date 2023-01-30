import express from 'express';
import User  from '../models/userModel.js';
import { isAuthFactory } from '../utils.js';

const router = express.Router();

router.get("/", (async (req, res) => {
    const users = await User.find({isSuscp:"true"});
    res.json(users);
    
}));

export default router;


