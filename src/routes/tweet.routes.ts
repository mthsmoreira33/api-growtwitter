import express from "express";
import { TweetController } from "../controllers/tweets.controller";

const tweetController = new TweetController();

const tweetRouter = express.Router();

tweetRouter.get("/tweets", tweetController.index);

tweetRouter.post("/tweets", tweetController.store);

tweetRouter.put("/tweets/:id/:userId", tweetController.update);

tweetRouter.delete("/tweets/:id/:userId", tweetController.delete);

export default tweetRouter;
