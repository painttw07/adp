import "dotenv/config";

import { z } from "zod";

const envSchema = z.object({
  SYSTEM_UNDER_TESTING: z
    .string()
    .default(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    ),
  MY_USER: z.string().default("Admin"),
  MY_PASSWRD: z.string().default("admin123"),
});

const _env = envSchema.safeParse(process.env);

if (_env.success === false) {
  console.error("Invalid environment variables", _env.error.format());
  throw new Error("Invalid environment variables.");
}

export const env = _env.data;
