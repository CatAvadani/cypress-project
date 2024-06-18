'use server';

import { db } from '@/prisma/db';
import { revalidatePath } from 'next/cache';

interface BookData {
  title: string;
  author: string;
  imageUrl: string;
  status: string;
}

export async function bookCreate(data: BookData) {
  const book = await db.book.create({ data });
  revalidatePath('/');
  return book;
}

export async function bookDelete(id: number) {
  await db.book.delete({ where: { id } });
  revalidatePath('/');
}

export async function bookUpdateStatus(id: number, status: string) {
  await db.book.update({
    where: { id },
    data: { status },
  });
  revalidatePath('/');
}
