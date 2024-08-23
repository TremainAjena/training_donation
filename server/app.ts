// src/index.js
import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import { orgRoutes } from "./routes/organizations";
import { userRoutes } from "./routes/users";
import { PrismaClient } from '@prisma/client'
import cors from 'cors'

const prisma = new PrismaClient();

dotenv.config();

// const swaggerUi = require('swagger-ui-express');
// const swaggerDocs = require('swagger-jsdoc');

const app = express();
app.use(cors());
app.use(express.json()) // let's go ahead and add json too

app.use("/organizations", orgRoutes)
app.use("/users", userRoutes)


app.get("/", async (req: Request, res: Response) => {
  const allOrganizations = await prisma.organizations.findMany()
  console.log(allOrganizations)
  res.send("Express + TypeScript Server");
});

app.get("/", async (req: Request, res: Response) => {
  const allUsers = await prisma.users.findMany()
  console.log(allUsers)
  res.send("Express + TypeScript Server");
});

// const swaggerSpec = swaggerDocs(options);

// app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

export {app}