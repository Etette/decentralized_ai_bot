import { NextFunction, Request, Response } from "express";

export default class AssistantMiddleware {
  static deleteThread(req: Request, res: Response, next: NextFunction) {
    if (!req.body.userIdentity) {
      return res.status(400).json({ message: "Thread id is required" });
    }
    next();
  }

  static saveThread(req: Request, res: Response, next: NextFunction) {
    if (!req.body.userIdentity?.trim() || !req.body.thread) {
      return res
        .status(400)
        .json({ message: "User identity and thread are required" });
    }
    next();
  }
}
