import { z } from "zod";

export const contactInquiryInput = z.object({
  name: z.string().trim().min(2, "Please enter your name.").max(120),
  email: z.string().trim().email("Please enter a valid email address.").max(320),
  company: z.string().trim().max(160).optional(),
  projectType: z.string().trim().max(80).optional(),
  budget: z.string().trim().max(80).optional(),
  message: z.string().trim().min(20, "Please share a little more about the project.").max(5000),
  website: z.string().max(0).optional(),
});

export type ContactInquiryInput = z.infer<typeof contactInquiryInput>;

export function formatInquiryNotification(input: ContactInquiryInput): string {
  const details = [
    `From: ${input.name} <${input.email}>`,
    input.company ? `Company: ${input.company}` : null,
    input.projectType ? `Project: ${input.projectType}` : null,
    input.budget ? `Budget: ${input.budget}` : null,
    "",
    input.message,
  ].filter(Boolean);

  return details.join("\n");
}
