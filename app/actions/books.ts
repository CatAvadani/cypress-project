'use server';

import { db } from '@/prisma/db';

export async function bookCreate(data: any) {
  const book = await db.book.create({
    data: {
      title: data.title,
      author: data.author,
      imageUrl: data.imageUrl,
      status: data.status,
    },
  });
  return book;
}

export async function bookDelete(id: number) {
  const book = await db.book.delete({
    where: { id: id },
  });
  return book;
}

export async function bookUpdateStatus(id: number, status: string) {
  const book = await db.book.update({
    where: { id: id },
    data: { status: status },
  });
  return book;
}
