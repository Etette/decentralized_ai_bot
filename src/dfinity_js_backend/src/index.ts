import { Server } from "azle";
import express from "express";
import cors from "cors";
import AssistantController from "./controllers/assistant.controller";
import AssistantMiddleware from "./middleware/assistant.middlware";
import UserMiddleware from "./middleware/user.middleware";
import UserController from "./controllers/user.controller";

export default Server(() => {
  const app = express();
  app.use(cors());
  app.use(express.json());
  app.get("/", (req, res) => res.json({ messsage: "Assistant deBot" }));

  app.get("/assistant", AssistantController.getAssistant);
  app.put(
    "/thread",
    AssistantMiddleware.saveThread,
    AssistantController.saveThread
  );
  app.post("/thread/verify", AssistantController.verifySavedThread);
  app.get("/thread/:userIdentity", AssistantController.getThread);
  app.delete(
    "/thread",
    AssistantMiddleware.deleteThread,
    AssistantController.deleteThread
  );

  app.post(
    "/user",
    UserMiddleware.updateUsername,
    UserController.updateUsername
  );
  app.get("/user/:userIdentity", UserController.getUsername);

  return app.listen();
});
