import { z } from 'zod'

const nameSchema = z.string().min(2, 'Too Short')

export const myFormSchema = z.object({
    firstName: nameSchema,
    lastName: nameSchema,
})

export type MyFormValues = z.infer<typeof myFormSchema>
