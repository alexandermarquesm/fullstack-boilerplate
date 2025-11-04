import express from "express";
import cors from "cors";
import {
  isFeatureEnabled,
  validateEmail,
  APP_VERSION,
  testBoolean,
} from "@monorepo/shared";
import { VercelRequest, VercelResponse } from "@vercel/node";

const app = express();

app.use(cors());
app.use(express.json());

// Rota de health check simples
app.get("/api/health", (req, res) => {
  res.json({
    status: "OK",
    message: "API is working!",
    version: APP_VERSION,
    timestamp: new Date().toISOString(),
  });
});

// Rota hello world simples
app.get("/api/hello", (req, res) => {
  res.json({
    message: "Hello World from Vercel! 🚀",
    version: APP_VERSION,
    timestamp: new Date().toISOString(),
    sharedWorking: true,
  });
});

// Rota para testar funções do shared
app.get("/api/test-shared", (req, res) => {
  res.json({
    message: "Shared package test",
    appVersion: APP_VERSION,
    testBoolean: testBoolean(),
    darkModeEnabled: isFeatureEnabled("dark-mode"),
    emailValid: validateEmail("test@example.com"),
    timestamp: new Date().toISOString(),
  });
});

// 🚀 Exportação para o Vercel

export default (req: VercelRequest, res: VercelResponse) => {
  app(req, res);
};

// 🚀 Inicia o servidor localmente caso não esteja no Vercel

if (!process.env.VERCEL) {
  app.listen(4000, () => {
    console.log(`Server is running on port ${4000}`);
  });
}
