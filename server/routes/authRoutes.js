import { Router } from "express";
import { changePassword, login, session } from "../controllers/authController";
import { protect } from "../middlewares/auth";

const authRouter = Router();

authRouter.post("/login", login);
authRouter.get("/session",  protect, session);
authRouter.post("/:id", protect, changePassword);

export default authRouter;
