import express from "express";
import { FollowerController } from "../controllers/follower.controler";
import retweetRouter from "./retweet.routes";

const followerRouter = express.Router();

const followerController = new FollowerController();

followerRouter.get('/follower/:id/:userId', followerController.show);

followerRouter.post('/follower/:id/:userId', followerController.store);

followerRouter.delete('/follower/:id/:userId', followerController.delete);

export default followerRouter;
