import { db } from './db';

async function main() {
  await db.book.upsert({
    where: { id: 1 },
    update: {},
    create: {
      id: 1,
      title: 'The Catcher in the Rye',
      author: 'J.D. Salinger',
      status: 'To Read',
    },
  });

  await db.book.upsert({
    where: { id: 2 },
    update: {},
    create: {
      id: 2,
      title: 'To Kill a Mockingbird',
      author: 'Harper Lee',
      status: 'Reading',
    },
  });

  await db.book.upsert({
    where: { id: 3 },
    update: {},
    create: {
      id: 3,
      title: '1984',
      author: 'George Orwell',
      status: 'Completed',
    },
  });
}

main()
  .then(async () => {
    await db.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await db.$disconnect();
    process.exit(1);
  });
