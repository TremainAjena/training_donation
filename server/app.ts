// src/index.js
import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();

dotenv.config();

const app: Express = express();

app.get("/", async (req: Request, res: Response) => {
  const allOrganizations = await prisma.organizations.findMany()
  console.log(allOrganizations)
  res.send("Express + TypeScript Server");
});

export {app}