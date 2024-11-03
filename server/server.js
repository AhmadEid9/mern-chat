import express from "express"
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";

import connectMongoDB from "./db/connectMongoDB.js";

import authenticationRouter from "./routers/authenticationRouter.js" ;
import messageRouter from "./routers/messageRouter.js" ;
import userRouter from "./routers/userRouter.js" ;
import { app, server } from "./sockets/socket.js"

app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE']
  }));
app.use(express.json())
app.use(cookieParser())

app.use((req, res, next) => {
    console.log(req.path, req.method, res.statusCode);
    next()
})
dotenv.config()

app.use('/api/auth', authenticationRouter)
app.use('/api/message', messageRouter)
app.use('/api/users', userRouter)

server.listen(process.env.PORT, () => {
    connectMongoDB();
    console.log("Server started on port 4000")
})
