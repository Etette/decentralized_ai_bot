import { StableBTreeMap } from "azle";
import { Request, Response } from "express";

let usernameStorage = StableBTreeMap<string, string>(3);

export default class UserController {
  static updateUsername(req: Request, res: Response) {
    const username = req.body.username;
    const userIdentity = req.body.userIdentity;
    usernameStorage.insert(userIdentity, username);
    return res.status(201).json({ username });
  }

  static getUsername(req: Request, res: Response) {
    const userIdentity = req.params.userIdentity;
    const username = usernameStorage.get(userIdentity);
    if ("None" in username) {
      return res
        .status(404)
        .json({ message: `username not found for ${userIdentity}` });
    }
    return res.status(200).json({ username: username.Some });
  }
}
