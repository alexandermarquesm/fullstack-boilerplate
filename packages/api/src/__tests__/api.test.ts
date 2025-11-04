import request from "supertest";
import app from "../index";

describe("API Routes", () => {
  test("GET /api/health should return 200", async () => {
    const response = await request(app).get("/api/health");
    expect(response.status).toBe(200);
    expect(response.body.status).toBe("OK");
  });

  test("GET /api/hello should return hello message", async () => {
    const response = await request(app).get("/api/hello");
    expect(response.status).toBe(200);
    expect(response.body.message).toContain("Hello World");
  });

  test("GET /api/nonexistent should return 404", async () => {
    const response = await request(app).get("/api/nonexistent");
    expect(response.status).toBe(404);
  });
});
