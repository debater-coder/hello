import { describe, it, expect, vi } from "vitest";
import { hello } from ".";

describe("hello", () => {
  it("should log 'Hello, World!'", () => {
    const spy = vi.spyOn(console, "log");
    hello();
    expect(spy).toHaveBeenCalledOnce();
    expect(spy).toHaveBeenCalledWith("Hello, World!");
  });
});
