import BookForm from '@/components/BookForm';
import { db } from '@/prisma/db';
import BookList from '../components/BookList';
import { bookDelete, bookUpdateStatus } from './actions/books';

export default async function Home() {
  const books = await db.book.findMany();

  const handleDelete = async (id: number) => {
    await bookDelete(id);
  };

  const handleUpdateStatus = async (id: number, status: string) => {
    await bookUpdateStatus(id, status);
  };

  return (
    <main className='flex flex-col items-center justify-center min-h-screen p-4 bg-red-900 max-w-7xl mx-auto mt-6'>
      <h1 className='text-4xl font-bold text-white mb-8'>Book Tracker</h1>
      <BookForm />

      <BookList initialBooks={books} />

      {/* <div className='w-full max-w-7xl mt-8'>
        {books.length > 0 ? (
          <div className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 gap-4 max-w-7xl'>
            {books.map((book) => (
              <div
                key={book.id}
                className='bg-red-950 p-4 flex flex-col space-y-3 items-center rounded-sm'
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
                <div className='flex space-x-2'>
                  <form action={() => handleUpdateStatus(book.id, 'To Read')}>
                    <button className='bg-green-500 text-white px-2 py-1 rounded'>
                      To Read
                    </button>
                  </form>
                  <form action={() => handleUpdateStatus(book.id, 'Reading')}>
                    <button className='bg-yellow-500 text-white px-2 py-1 rounded'>
                      Reading
                    </button>
                  </form>
                  <form action={() => handleUpdateStatus(book.id, 'Completed')}>
                    <button className='bg-blue-500 text-white px-2 py-1 rounded'>
                      Completed
                    </button>
                  </form>
                </div>
                <form action={() => handleDelete(book.id)}>
                  <button className='bg-red-600 text-white px-2 py-1 mt-4 rounded'>
                    Delete
                  </button>
                </form>
              </div>
            ))}
          </div>
        ) : (
          <p className='text-gray-600'>
            No books found. Add some books to get started!
          </p>
        )}
      </div> */}
    </main>
  );
}
