import { render, screen } from "@testing-library/react";
import App from "../App";

// Mock do shared
jest.mock("@monorepo/shared", () => ({
  APP_VERSION: "1.0.0",
  testBoolean: () => false,
  isFeatureEnabled: (feature: string) => feature === "dark-mode",
  validateEmail: (email: string) => email.includes("@")
}));

describe("App Component", () => {
  test("renders the main title", () => {
    render(<App />);
    const titleElement = screen.getByText(/Fullstack Boilerplate/i);
    expect(titleElement).toBeInTheDocument();
  });

  test("shows APP_VERSION from shared", () => {
    render(<App />);
    const versionElement = screen.getByText(/Versão: 1.0.0/i);
    expect(versionElement).toBeInTheDocument();
  });

  test("renders test buttons", () => {
    render(<App />);
    const apiButton = screen.getByText(/Test API Hello/i);
    const healthButton = screen.getByText(/Test Health Check/i);
    
    expect(apiButton).toBeInTheDocument();
    expect(healthButton).toBeInTheDocument();
  });
});
