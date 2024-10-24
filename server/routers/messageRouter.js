import { Router } from "express";
import protectRoute from "../middlewares/protectRoute.js";
import { getMessages, sendMessage } from "../controllers/messageController.js";

const router = Router();

router.post('/send/:id', protectRoute, sendMessage)

router.get('/:id', protectRoute, getMessages)


export default router