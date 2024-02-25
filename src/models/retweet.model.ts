import { randomUUID } from "crypto";
import { Tweet } from "./tweet.model";

export class Retweet extends Tweet {
  constructor(content: string) {
    super(content, "Retweet");
  }
}
