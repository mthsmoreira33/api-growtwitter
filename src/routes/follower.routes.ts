import express from "express";
import { FollowerController } from "../controllers/follower.controler";

const router = express.Router();

const followerController = new FollowerController();

router.get('/follower/:id/:userId', followerController.show);

router.post('/follower/:id/:userId', followerController.store);

router.delete('/follower/:id/:userId', followerController.delete);
