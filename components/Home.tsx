// Mark the file as a client component
'use client';

import { Book } from '@prisma/client';
import { useState } from 'react';
import BookForm from '../components/BookForm';
import BookList from '../components/BookList';

interface HomeProps {
  initialBooks: Book[];
}

export default function Home({ initialBooks }: HomeProps) {
  const [books, setBooks] = useState<Book[]>(initialBooks);

  const addBook = (book: Book) => {
    setBooks((prevBooks) => [...prevBooks, book]);
  };

  return (
    <main className='flex flex-col items-center justify-center min-h-screen p-4 bg-red-900 max-w-7xl mx-auto mt-6'>
      <h1 className='text-4xl font-bold text-white mb-8'>Book Tracker</h1>
      <BookForm addBook={addBook} />
      <BookList books={books} setBooks={setBooks} />
    </main>
  );
}
