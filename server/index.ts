// src/index.js
import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 5000;

app.get("/", async (req: Request, res: Response) => {
  const allOrganizations = await prisma.organizations.findMany()
  console.log(allOrganizations)
  res.send("Express + TypeScript Server");
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});