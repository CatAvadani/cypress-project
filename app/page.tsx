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
    <main className='flex flex-col items-center justify-center min-h-screen p-4 bg-red-900 max-w-7xl mx-auto mt-6'>
      <h1 className='text-4xl font-bold text-white mb-8'>Book Tracker</h1>

      <BookForm />

      <div className='w-full max-w-7xl mt-8'>
        {books.length > 0 ? (
          <div className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 gap-4 max-w-7xl'>
            {books.map((book) => (
              <div
                key={book.id}
                className=' bg-red-950 p-4 flex flex-col space-y-3 items-center rounded-sm'
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
                <h2 className='text-xl font-semibold text-yellow-500 text-center'>
                  {book.title}
                </h2>
                <p className='text-white text-center'>by {book.author}</p>
                {book.status === 'To Read' ? (
                  <p className='text-orange-600 text-center'>To Read</p>
                ) : book.status === 'Reading' ? (
                  <p className='text-green-600 text-center'> Reading</p>
                ) : (
                  <p className='text-blue-600 text-center'>Completed</p>
                )}
              </div>
            ))}
          </div>
        ) : (
          <p className='text-gray-600'>
            No books found. Add some books to get started!
          </p>
        )}
      </div>
    </main>
  );
}
