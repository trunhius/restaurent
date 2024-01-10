import  express  from "express";
import userRoutes from "./userRouter.js";
import resRoutes from "./resRoutes.js";



const rootRoutes = express.Router();

rootRoutes.use("/user",userRoutes)
rootRoutes.use("/res",resRoutes)

export default rootRoutes;