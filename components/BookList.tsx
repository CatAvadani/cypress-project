'use client';

import { bookDelete, bookUpdateStatus } from '@/app/actions/books';
import { Book } from '@prisma/client';
import Image from 'next/image';

interface BookListProps {
  books: Book[];
  setBooks: (books: Book[]) => void;
}

export default function BookList({ books, setBooks }: BookListProps) {
  const handleDelete = async (id: number) => {
    await bookDelete(id);
    setBooks(books.filter((book) => book.id !== id));
  };

  const handleUpdateStatus = async (id: number, status: string) => {
    await bookUpdateStatus(id, status);
    setBooks(
      books.map((book) => (book.id === id ? { ...book, status } : book))
    );
  };

  return (
    <div className='w-full max-w-7xl mt-8'>
      {books.length > 0 ? (
        <div className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-4 max-w-7xl'>
          {books.map((book) => (
            <div
              key={book.id}
              data-cy='book-card'
              className='bg-red-950 p-4 flex flex-col space-y-3 items-center rounded-sm shadow-md'
            >
              {book.imageUrl && (
                <Image
                  src={book.imageUrl}
                  width={150}
                  height={200}
                  alt={book.title}
                  className='mb-8'
                />
              )}
              <h2 className='text-xl font-semibold text-yellow-300 text-center'>
                {book.title}
              </h2>
              <p className='text-white text-center'>by {book.author}</p>
              <p className='text-white text-center'>Status: {book.status}</p>
              <div className='flex space-x-2'>
                <button
                  className='bg-green-700 text-white p-1 rounded'
                  onClick={() => handleUpdateStatus(book.id, 'To Read')}
                >
                  To Read
                </button>
                <button
                  className='bg-yellow-700 text-white p-1 rounded'
                  onClick={() => handleUpdateStatus(book.id, 'Reading')}
                >
                  Reading
                </button>
                <button
                  className='bg-blue-700 text-white p-1 rounded'
                  onClick={() => handleUpdateStatus(book.id, 'Completed')}
                >
                  Completed
                </button>
              </div>
              <button
                className='bg-red-600 text-white p-1 mt-4 rounded'
                onClick={() => handleDelete(book.id)}
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      ) : (
        <p className='text-gray-600'>
          No books found. Add some books to get started!
        </p>
      )}
    </div>
  );
}
