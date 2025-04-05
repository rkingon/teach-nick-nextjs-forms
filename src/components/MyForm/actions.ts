'use server'

import { users } from '@/db'
import { myFormSchema, type MyFormValues } from './schema'

export async function updateUserAction(formValues: MyFormValues) {
    const parsedFormValues = myFormSchema.safeParse(formValues)
    if (!parsedFormValues.success) {
        return {
            success: false,
        }
    }
    users.set(1, {
        id: 1,
        firstName: parsedFormValues.data.firstName,
        lastName: parsedFormValues.data.lastName,
    })
    return {
        success: true,
    }
}
