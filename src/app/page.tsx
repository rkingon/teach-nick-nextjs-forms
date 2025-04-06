import { MyForm, MyFormField, MyFormSubmit } from '@/components/MyForm'
import { notFound } from 'next/navigation'
import { prisma } from '../db'

async function getUser() {
    const user = await prisma.user.findUnique({
        where: {
            id: 1,
        },
    })
    return user
}

export default async function Home() {
    const user = await getUser()
    if (!user) {
        notFound()
    }
    const { id, ...defaultValues } = user
    return (
        <div>
            <h1 className="text-center text-2xl font-bold">
                Welcome, {user.firstName} {user.lastName}
            </h1>
            <MyForm defaultValues={defaultValues}>
                <h2 className="mb-6 text-2xl font-bold">My Form</h2>
                <div className="flex flex-col gap-4 md:flex-row">
                    <MyFormField name="firstName" label="First Name" />
                    <MyFormField name="lastName" label="Last Name" />
                </div>
                <div className="mt-4">
                    <MyFormSubmit />
                </div>
            </MyForm>
        </div>
    )
}
