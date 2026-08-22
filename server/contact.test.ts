import { describe, expect, it } from "vitest";
import { contactInquiryInput, formatInquiryNotification } from "./contact";

describe("contact inquiry input", () => {
  const validInquiry = {
    name: "Amina Rahman",
    email: "amina@example.com",
    company: "Northline Studio",
    projectType: "Product website",
    budget: "$2k–$5k",
    message: "We need a focused marketing site that clarifies our product and supports a new launch.",
  };

  it("accepts a complete public inquiry and formats a useful owner alert", () => {
    const inquiry = contactInquiryInput.parse(validInquiry);
    expect(formatInquiryNotification(inquiry)).toContain("From: Amina Rahman <amina@example.com>");
    expect(formatInquiryNotification(inquiry)).toContain("Project: Product website");
  });

  it("rejects invalid contact information and short messages", () => {
    expect(() => contactInquiryInput.parse({ ...validInquiry, email: "not-an-email" })).toThrow();
    expect(() => contactInquiryInput.parse({ ...validInquiry, message: "Too short" })).toThrow();
  });
});

