interface User {
    id: number
    firstName: string
    lastName: string
}

export const users = new Map<number, User>([
    [
        1,
        {
            id: 1,
            firstName: 'Nick',
            lastName: 'Kessler',
        },
    ],
])
