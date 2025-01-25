import { z } from "zod";

export const formSchema = z.object({
  title: z.string().min(3).max(100),
  description: z.string().min(20).max(500),
  category: z.string().min(3).max(20),
  imageUrl: z
    .string()
    .url("Invalid URL format")
    .regex(/\.(jpeg|jpg|gif|png|webp|svg)$/i, {
      message: "The URL must point to an image file",
    }),

  pitch: z.string().min(10),
});
