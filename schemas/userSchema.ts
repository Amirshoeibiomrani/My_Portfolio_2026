import { z } from 'zod';

export const userSchema = z.object({
  name: z.string().min(1, "نام الزامی است"),
  email: z.string().email("فرمت ایمیل نامعتبر است"),
  age: z.number().positive("سن باید مثبت باشد").optional(),
});

export type User = z.infer<typeof userSchema>;