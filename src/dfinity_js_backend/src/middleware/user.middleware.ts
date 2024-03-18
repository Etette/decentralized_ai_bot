import { Request, Response, NextFunction } from "express";

export default class UserMiddleware {
  static updateUsername(req: Request, res: Response, next: NextFunction) {
    if (!req.body.username || !req.body.userIdentity) {
      return res
        .status(400)
        .json({ message: "Username and userIdentity are required" });
    }
    next();
  }
}
