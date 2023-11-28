import { z } from 'zod';

export const ZodMessageSchema = z.object({
  message: z.string().trim().min(1),
});

export type TMessage = z.infer<typeof ZodMessageSchema>;
