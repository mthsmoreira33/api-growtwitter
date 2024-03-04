import express from "express";
import { RetweetController } from "../controllers/retweets.controller";

const router = express.Router();

const retweetController = new RetweetController();

router.get("/retweets", retweetController.index);

router.post("retweets/:userId/:tweetId", retweetController.store);

router.put("/retweets/:id/:userId/:tweetId", retweetController.update);

router.delete("/retweets/:id/:userId/:tweetId", retweetController.delete);

