---
title: Getting something working with Journey
date: March 18, 2023
---

All this is new for me so my new focus is just getting something working. Picking your tech stack is something I often agonize over and play around with in my head, but I think the best way to learn is to make some choices and dive in. I’ll be rewriting the app multiple times, given that my main goal is learning so the only wrong move here is not getting a move on! I already selected Next 13’s app router so I can try out React Server components and I’m going to use CockroachDB for a database and Prisma to access it.

I’m going to start with the simplest thing I can think of: two pages. One page is a form that takes and start and end date and an origin and destination and stores them in a database and the other is a page that retrieves the trip data stored in the database.

I spent way too long trying to figure out the best way to do mutations despite Next.js’ docs being very clear that mutations like adding data to a database are not supported yet (hopefully something is coming very soon!). For now I have [a client component](https://github.com/mattcarrollcode/journey/blob/f62dd31ae28e7a2877a706048a77135b87444757/components/date.tsx) that fetches [an API route](https://github.com/mattcarrollcode/journey/blob/f62dd31ae28e7a2877a706048a77135b87444757/pages/api/create.ts). Because Next.js 13’s app routers API routes are not designed for mutations like adding a row to a database I used the non-app router pages directory API route to do my database mutations. I’ll migrate this to Next.js 13’s mutation solution when its  available.

Prisma handles a lot of the SQL statement dirty work including migrating your database from one schema to another. Fun fact: migrating from no schemas to a schema is also a migration. I came up with this[ simple schema](https://github.com/mattcarrollcode/journey/blob/main/prisma/schema.prisma) to start:

```tsx
model Trip {
  id          String   @id @default(uuid())
  start       DateTime
  end         DateTime
  origin      String
  destination String
}
```

Following [this guide](https://www.prisma.io/docs/getting-started/setup-prisma/start-from-scratch/relational-databases/using-prisma-migrate-typescript-cockroachdb) and [this example](https://github.com/prisma/prisma-examples/blob/latest/databases/cockroachdb/prisma/schema.prisma) helped me set up an initial working database connection with Prisma and CockroachDB. For their is was pretty easy to setup [a page that lists all the trips](https://github.com/mattcarrollcode/journey/blob/main/app/trips/page.tsx) and [another page that lists the “details” of each trip](https://github.com/mattcarrollcode/journey/blob/main/app/trips/%5Bslug%5D/page.tsx).

Next up will be expanding the schema to support more tables and fields to start supporting my use case of comparing different trip options.
