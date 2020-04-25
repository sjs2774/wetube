import express from "express";
import routes from "../routes";
import {
    getJoin,
    logout,
    postJoin,
    getLogin,
    postLogin
  } from "../controllers/userController";
import { 
    search, 
    home 
} from "../controllers/videoController";

const globalRouter = express.Router();

globalRouter.get(routes.join, getJoin);
globalRouter.post(routes.join, postJoin);

globalRouter.get(routes.login, getLogin);
globalRouter.post(routes.login, postLogin);


globalRouter.get(routes.home, home);
globalRouter.get(routes.logout, logout);
globalRouter.get(routes.search, search);

export default globalRouter;