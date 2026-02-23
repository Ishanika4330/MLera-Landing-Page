import type { Express } from "express";
import { type Server } from "http";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  // Application routes would go here (prefixed with /api)
  // Currently serving as a clean entry point for the Express server.

  return httpServer;
}
