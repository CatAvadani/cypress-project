import { db } from './db';

async function main() {
  // Delete all existing books
  await db.book.deleteMany();

  // Insert updated books
  await db.book.upsert({
    where: { id: 1 },
    update: {},
    create: {
      id: 1,
      title: 'The Great Gatsby',
      author: 'F. Scott Fitzgerald',
      imageUrl: 'https://m.media-amazon.com/images/I/81QuEGw8VPL._SY522_.jpg',
      status: 'To Read',
    },
  });

  await db.book.upsert({
    where: { id: 2 },
    update: {},
    create: {
      id: 2,
      title: 'In Search of Lost Time',
      author: 'Marcel Proust',
      imageUrl: 'https://m.media-amazon.com/images/I/61zuy-mRSIL._SY522_.jpg',
      status: 'Reading',
    },
  });

  await db.book.upsert({
    where: { id: 3 },
    update: {},
    create: {
      id: 3,
      title: 'Crime and Punishment',
      author: 'Fyodor Dostoyevsky',
      imageUrl: 'https://m.media-amazon.com/images/I/81EcXiV-9WL._SY522_.jpg',
      status: 'Completed',
    },
  });

  await db.book.upsert({
    where: { id: 4 },
    update: {},
    create: {
      id: 4,
      title: 'War and Peace',
      author: 'Leo Tolstoy',
      imageUrl: 'https://m.media-amazon.com/images/I/81s6DUyQCZL._SY522_.jpg',
      status: 'To Read',
    },
  });

  await db.book.upsert({
    where: { id: 5 },
    update: {},
    create: {
      id: 5,
      title: 'Moby Dick',
      author: 'Herman Melville',
      imageUrl:
        'https://m.media-amazon.com/images/I/61Vm+Z02frL._AC_UL640_FMwebp_QL65_.jpg',
      status: 'Reading',
    },
  });

  await db.book.upsert({
    where: { id: 6 },
    update: {},
    create: {
      id: 6,
      title: 'Pride and Prejudice',
      author: 'Jane Austen',
      imageUrl: 'https://m.media-amazon.com/images/I/81OthjkJBuL._SY522_.jpg',
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
