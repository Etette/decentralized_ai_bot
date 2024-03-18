import { StableBTreeMap } from "azle";
import { Request, Response } from "express";
import { ASSISTANT_ID } from "../../../../credential";

type Thread = {
  id: string;
  object: string;
  created_at: number;
};

let threadStorage = StableBTreeMap<string, Thread>(4);
let assistantId: string = ASSISTANT_ID ?? "";

export default class AssistantController {
  static getAssistant(req: Request, res: Response) {
    return res.status(200).json({ assistantId });
  }

  static saveThread(req: Request, res: Response) {
    const thread = req.body.thread as Thread;
    const userIdentity = req.body.userIdentity?.trim();

    function hasASavedThread() {
      const thread = threadStorage.get(userIdentity);
      if ("None" in thread) {
        return false;
      }
      return true;
    }

    if (hasASavedThread()) {
      const thread = threadStorage.get(userIdentity);
      return res.status(200).json(thread.Some);
    }

    threadStorage.insert(userIdentity, thread);
    return res.status(200).json(thread);
  }

  static getThread(req: Request, res: Response) {
    const userIdentity = req.params.userIdentity;
    const thread = threadStorage.get(userIdentity);
    if ("None" in thread) {
      return res.status(404).json({
        message: `Thread not found for ${userIdentity} ICP indentity`,
      });
    }
    return res.status(200).json(thread.Some);
  }

  static deleteThread(req: Request, res: Response) {
    const userIdentity = req.body.userIdentity;
    const threadToDelete = threadStorage.get(userIdentity);
    if ("None" in threadToDelete) {
      return res.status(409).json({
        message: `Thread not found for ${userIdentity} ICP indentity`,
      });
    }
    threadStorage.remove(userIdentity);
    return res.status(201).json({ message: "Thread deleted successfully" });
  }

  static verifySavedThread(req: Request, res: Response) {
    const thread = threadStorage.get(req.body.userIdentity);
    if ("None" in thread) {
      return res.send(false);
    }
    return res.send(true);
  }
}
