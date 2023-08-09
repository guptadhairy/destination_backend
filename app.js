import express from 'express'
import {config} from 'dotenv';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import contactRouter from './routes/contact.js'
const app = express();
config({
    path: "./data/config.env",
});

app.use(express.json());
app.use(cookieParser());

app.use(
    cors({
        origin: [process.env.FRONTEND_URL],
        methods: ["GET","POST"],
        credentials: true,
    })
);

app.use(contactRouter);

app.get("/",(req,res)=>{
    res.send("Hey Tony!")
})

app.listen(process.env.PORT,(req,res)=>{
    console.log(`Server is working on PORT ${process.env.PORT} successfully`);
})