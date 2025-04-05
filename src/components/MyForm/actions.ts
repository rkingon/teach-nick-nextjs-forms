'use server'

import { users } from '@/app/db'
import { myFormSchema, type MyFormValues } from './schema'
import { revalidatePath } from 'next/cache'

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
