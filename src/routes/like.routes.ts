import express from "express";
import { LikeController } from "../controllers/likes.controller";

const router = express.Router();

const likeController = new LikeController();

router.get('/likes/:id/:userId/:tweetId', likeController.show);

router.post('/likes/:userId/:tweetId', likeController.store);

router.delete('/likes/:userId/:tweetId', likeController.delete);
