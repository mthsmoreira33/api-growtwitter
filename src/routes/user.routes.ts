import express from "express";
import { UserController } from "../controllers/user.controller";

import { FollowerController } from "../controllers/follower.controler";
import { LikeController } from "../controllers/likes.controller";


const router = express.Router();

const userController = new UserController();


const followerController = new FollowerController();

const likeController = new LikeController();

router.get('/user', userController.index);

router.post('/user', userController.store);

router.get('/user/:id', userController.show);

router.put('/user/:id', userController.update);

router.delete('/user/:id', userController.delete);

