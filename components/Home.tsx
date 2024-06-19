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
  const [filter, setFilter] = useState<string>('All');

  const addBook = (book: Book) => {
    setBooks((prevBooks) => [...prevBooks, book]);
  };

  const filteredBooks = books.filter((book) => {
    if (filter === 'All') return true;
    return book.status === filter;
  });

  return (
    <main className='flex flex-col items-center justify-center min-h-screen p-4 bg-red-900 max-w-7xl mx-auto mt-6'>
      <h1 className='text-4xl font-bold text-white mb-8'>Book Tracker</h1>
      <BookForm addBook={addBook} />
      <div className='w-full mt-4'>
        <label className='text-white mr-2'>Filter by status:</label>
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className='p-1 border rounded text-black'
          data-cy='filter-select'
        >
          <option value='All'>All</option>
          <option value='To Read'>To Read</option>
          <option value='Reading'>Reading</option>
          <option value='Completed'>Completed</option>
        </select>
      </div>
      <BookList books={filteredBooks} setBooks={setBooks} />
    </main>
  );
}
