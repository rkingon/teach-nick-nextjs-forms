# Next.js Project with Prisma

This is a [Next.js](https://nextjs.org) project using Prisma as the database ORM.

## Getting Started

1. Install dependencies:

```bash
pnpm install
```

2. Start the database:

```bash
docker-compose up -d
```

This will start the PostgreSQL database in a Docker container.

3. Set up the database:

```bash
pnpm prisma migrate dev
```

This will apply all pending migrations and generate the Prisma Client.

4. Start the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Database Management

To view and manage your database with a GUI, you can use Prisma Studio:

```bash
pnpm prisma studio
```

This will open a browser window at [http://localhost:5555](http://localhost:5555) where you can manage your data.

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Prisma Documentation](https://www.prisma.io/docs)
