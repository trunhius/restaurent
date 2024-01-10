import express  from "express";
import { getlistLikeRes, getlistRateRes } from "../controllers/resControllers.js";

const resRoutes = express.Router();


// userRoutes.get("/list-like/:user_id", getlistLike);
resRoutes.get("/like-res/:res_id", getlistLikeRes)
resRoutes.get("/rate-res/:res_id", getlistRateRes)

export default resRoutes;