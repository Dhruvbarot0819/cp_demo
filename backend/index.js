import { json } from "express";
import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import { configDotenv } from "dotenv";
import connectDB from "./utils/db.js ";
import userRoute from "./routes/user.routes";

const app = express();
// app.get("/home",(req,res)=>{
//     return res.status(200).json({
//         message:"I AM COMING FROM BACKEND",
//         success:true
//     })
// }); 

//middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());
const corsOptions={
    origin:'http//localhost:5173',
    Credentials:true
}
app.use(cors(corsOptions));

const PORT=process.env.PORT || 3000;

//api
app.use("/api/v1/user",userRoute);
app.listen(PORT,()=>{
    connectDB();
    console.log(`server runing at port ${PORT}`);
})