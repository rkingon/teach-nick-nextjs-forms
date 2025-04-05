'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { useState, useTransition } from 'react'
import { DefaultValues, useForm, useFormContext } from 'react-hook-form'
import { Button } from '../ui/button'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '../ui/form'
import { Input } from '../ui/input'
import { updateUserAction } from './actions'
import { myFormSchema, type MyFormValues } from './schema'

interface MyFormProps {
    defaultValues: DefaultValues<MyFormValues>
    children: React.ReactNode
}

export const MyForm = ({ defaultValues, children }: MyFormProps) => {
    const { formState, ...form } = useForm<MyFormValues>({
        defaultValues,
        resolver: zodResolver(myFormSchema),
    })
    const [serverError, setServerError] = useState<string | null>(null)
    const router = useRouter()
    const [isPending, startTransition] = useTransition()
    const isSubmitting = formState.isSubmitting || isPending
    return (
        <Form {...form} formState={{ ...formState, isSubmitting }}>
            <form
                onSubmit={form.handleSubmit(async (data) => {
                    try {
                        const result = await updateUserAction(data)
                        if (result.success) {
                            startTransition(() => {
                                router.refresh()
                            })
                        } else {
                            setServerError('Server validation failed.')
                        }
                    } catch (error) {
                        console.error(error)
                    }
                })}
            >
                {serverError && <div className="text-red-500">{serverError}</div>}
                {children}
            </form>
        </Form>
    )
}

interface MyFormFieldProps {
    name: keyof MyFormValues
    label: string
}

export const MyFormField = ({ name, label }: MyFormFieldProps) => {
    const form = useFormContext<MyFormValues>()
    return (
        <>
            <FormField
                control={form.control}
                name={name}
                render={() => (
                    <FormItem>
                        <FormLabel>{label}</FormLabel>
                        <FormControl>
                            <Input {...form.register(name)} />
                        </FormControl>
                        <FormDescription />
                        <FormMessage />
                    </FormItem>
                )}
            />
        </>
    )
}

export const MyFormSubmit = () => {
    const form = useFormContext<MyFormValues>()
    return (
        <Button type="submit" disabled={form.formState.isSubmitting}>
            {form.formState.isSubmitting ? 'Submitting...' : 'Submit'}
        </Button>
    )
}
