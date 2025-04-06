'use server'

import { prisma } from '@/db'
import { myFormSchema, type MyFormValues } from './schema'

export async function updateUserAction(formValues: MyFormValues) {
    const parsedFormValues = myFormSchema.safeParse(formValues)
    if (!parsedFormValues.success) {
        return {
            success: false,
        }
    }
    await prisma.user.update({
        where: {
            id: 1,
        },
        data: {
            firstName: parsedFormValues.data.firstName,
            lastName: parsedFormValues.data.lastName,
        },
    })
    return {
        success: true,
    }
}
