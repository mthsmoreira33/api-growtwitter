import express from "express";
import cors from "cors";
import userRouter from "./routes/user.routes";
import tweetRouter from "./routes/tweet.routes";
import retweetRouter from "./routes/retweet.routes";
import followerRouter from "./routes/follower.routes";
import likeRouter from "./routes/like.routes";

const app = express();
const port = 3030;

app.use(express.json());
app.use(cors());
app.use(userRouter);
app.use(tweetRouter);
app.use(retweetRouter);
app.use(followerRouter);
app.use(likeRouter);

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
