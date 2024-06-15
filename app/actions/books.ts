'use server';

import { db } from '@/prisma/db';
import { revalidatePath } from 'next/cache';

export async function bookCreate(formData: any) {
  const book = await db.book.create({
    data: {
      title: formData.title,
      author: formData.author,
      imageUrl: formData.imageUrl,
      status: formData.status,
    },
  });

  revalidatePath('/');

  return book;
}
