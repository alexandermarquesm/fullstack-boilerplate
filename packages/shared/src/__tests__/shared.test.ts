import { isFeatureEnabled, validateEmail, APP_VERSION, testBoolean } from "../index";

describe("Shared Package", () => {
  test("APP_VERSION should be defined", () => {
    expect(APP_VERSION).toBe("1.0.0");
  });

  test("testBoolean should return false", () => {
    expect(testBoolean()).toBe(false);
  });

  test("isFeatureEnabled should work correctly", () => {
    expect(isFeatureEnabled("dark-mode")).toBe(true);
    expect(isFeatureEnabled("notifications")).toBe(true);
    expect(isFeatureEnabled("unknown-feature")).toBe(false);
  });

  test("validateEmail should validate emails", () => {
    expect(validateEmail("test@example.com")).toBe(true);
    expect(validateEmail("invalid-email")).toBe(false);
    expect(validateEmail("user@test.org")).toBe(true);
  });
});
