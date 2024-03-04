import express from "express";
import { UserController } from "../controllers/user.controller";

import { FollowerController } from "../controllers/follower.controler";
import { LikeController } from "../controllers/likes.controller";


const userRouter = express.Router();

const userController = new UserController();


const followerController = new FollowerController();

const likeController = new LikeController();

userRouter.get('/user', userController.index);

userRouter.post('/user', userController.store);

userRouter.get('/user/:id', userController.show);

userRouter.put('/user/:id', userController.update);

userRouter.delete('/user/:id', userController.delete);

export default userRouter;
