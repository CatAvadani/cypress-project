import { defineConfig } from 'cypress';
import { db } from './prisma/db';

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here ###
      on('task', {
        reseed: reseed,
      });
    },
    baseUrl: 'http://localhost:3100',
  },
});

async function reseed() {
  if (process.env.NODE_ENV !== 'test') {
    throw new Error('Cannot reseed outside test');
  }

  await db.book.deleteMany({});

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

  return null;
}
