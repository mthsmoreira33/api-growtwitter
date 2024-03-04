import express from "express";
import { TweetController } from "../controllers/tweets.controller";

const tweetController = new TweetController();

const router = express.Router();

router.get("/tweets", tweetController.index);

router.post("/tweets", tweetController.store);

router.put("/tweets/:id/:userId", tweetController.update);

router.delete("/tweets/:id/:userId", tweetController.delete);
