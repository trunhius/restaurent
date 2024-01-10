import express from "express";
import rootRoutes from "./routes/rootRoutes.js";

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.static("."));
app.use(rootRoutes)
//setup port cho BE
app.listen(port, ()=>{
    console.log("BE is starting");
});