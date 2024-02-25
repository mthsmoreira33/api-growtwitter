import { randomUUID } from "crypto";

export class Follower {
    private _id: string;

    constructor(
        private _userId: string
    ) {
        this._id = randomUUID();
    }
}
