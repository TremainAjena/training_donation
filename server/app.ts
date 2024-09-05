// src/index.js
import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import { orgRoutes } from "./routes/organizations";
import { userRoutes } from "./routes/users";
import { authRoutes } from "./routes/auth";
import cors from 'cors'
import swaggerDocs from "swagger-jsdoc"
import morgan from 'morgan'

import { verifyTokenMiddleware } from './middleware/auth';

dotenv.config();

const swaggerUI = require('swagger-ui-express');
// const swaggerDocs = require('swagger-jsdoc');  Don't need to have this and line 8 because they do the same thing

const app = express();
app.use(cors());
app.use(express.json()) // let's go ahead and add json too
app.use(morgan('combined'))


const swaggerOptions = {
  failOnErrors: true, // Whether or not to throw when parsing errors. Defaults to false.
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Test API",
      version: "1.0.0"
    },
    servers: [
      {
        url: "http://localhost:3000",
        description: "Local development server"
      }
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          in: "header",
          name: "Authorization",
          description: "Bearer token to access api endpoints",
          scheme: "bearer",
          bearerFormat: "JWT"
        }
      }
    },
    security: [
      {
        bearerAuth: []
      }
    ]
  },
  apis: ['./routes/**.ts', `${__dirname}/routes/*.ts`, './controllers/**.ts', `${__dirname}/controllers/*.ts` ],
};
const swaggerSpec = swaggerDocs(swaggerOptions);

app.use('/docs', swaggerUI.serve, swaggerUI.setup(swaggerSpec))
app.use("/swagger.json", (req, res) =>
  res.json(swaggerSpec).status(200)
)

// Validation line should probably go here to restrict access to my user and organizations
app.use('/login', authRoutes)
app.use("*", verifyTokenMiddleware)
app.use("/organizations", orgRoutes)
app.use("/users", userRoutes)


app.get("/", async (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});

export {app}