import { z } from "zod";

export const FormStateSchema = z.object({
  username: z
    .string({
      message: "Username is required.",
    })
    .max(100, "Username is invalid."),
  password: z
    .string({
      message: "Password is required.",
    })
    .min(1, "Password is required."),
});
export type FormStateType = z.infer<typeof FormStateSchema>;
