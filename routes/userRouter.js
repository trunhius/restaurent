import express  from "express";
import  { getlistRate, getlistLike, craetLike, craetRate, unLike, createOrder} from "../controllers/userControllers.js";

const userRoutes = express.Router();


userRoutes.get("/list-like/:user_id", getlistLike);
userRoutes.get("/list-rate/:user_id", getlistRate);
userRoutes.post("/create-like", craetLike);
userRoutes.post("/create-rate", craetRate);
userRoutes.delete("/delete-like", unLike);
userRoutes.post("/create-order", createOrder)

export default userRoutes;