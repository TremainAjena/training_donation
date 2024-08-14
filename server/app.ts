// src/index.js
import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import { orgRoutes } from "./routes/organizations";
import { PrismaClient } from '@prisma/client'
import cors from 'cors'

const prisma = new PrismaClient();

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json()) // let's go ahead and add json too

app.use("/organizations", orgRoutes)

app.get("/", async (req: Request, res: Response) => {
  const allOrganizations = await prisma.organizations.findMany()
  console.log(allOrganizations)
  res.send("Express + TypeScript Server");
});

export {app}