import { z } from 'zod';

export const ZodUserFormSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, 'Name Required')
    .min(3, 'Name should be atleast length 3')
    .max(16, 'Name should not exceed length 16'),
});

export type TUserFormType = z.infer<typeof ZodUserFormSchema>;
