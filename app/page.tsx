import BookForm from '@/components/BookForm';
import { db } from '@/prisma/db';
import Image from 'next/image';

export default async function Home() {
  const books = await db.book.findMany();

  const refreshBooks = async () => {
    const books = await db.book.findMany();
    return books;
  };

  return (
    <main className='flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100'>
      <h1 className='text-4xl font-bold text-gray-800 mb-8'>Book Tracker</h1>

      <BookForm />

      <div className='w-full max-w-3xl bg-white shadow-md rounded-lg p-6 mt-8'>
        {books.length > 0 ? (
          books.map((book) => (
            <div
              key={book.id}
              className='border-b border-gray-200 py-4 last:border-none'
            >
              <h2 className='text-2xl font-semibold text-gray-700'>
                {book.title}
              </h2>
              {book.imageUrl && (
                <Image
                  src={book.imageUrl}
                  width={200}
                  height={300}
                  alt={book.title}
                />
              )}
              <p className='text-gray-600'>by {book.author}</p>
              <p className='text-gray-600'>Status: {book.status}</p>
            </div>
          ))
        ) : (
          <p className='text-gray-600'>
            No books found. Add some books to get started!
          </p>
        )}
      </div>
    </main>
  );
}
