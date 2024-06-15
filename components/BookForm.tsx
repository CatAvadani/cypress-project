'use client';

import { bookCreate } from '@/app/actions/books';
import { useState } from 'react';

export default function BookForm() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [status, setStatus] = useState('To Read');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = { title, author, imageUrl, status };
    await bookCreate(data);
    // await refreshBooks();
    setTitle('');
    setAuthor('');
    setImageUrl('');
    setStatus('To Read');
  };

  return (
    <div className='w-full mt-5'>
      <form
        onSubmit={handleSubmit}
        className='space-y-4 w-full bg-red-950/40  p-4 rounded'
      >
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
          <div className='flex flex-col'>
            <input
              type='text'
              placeholder='Title'
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className='p-2 border rounded text-black'
            />
          </div>

          <div className='flex flex-col'>
            <input
              type='text'
              placeholder='Author'
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              className='p-2 border rounded text-black'
            />
          </div>

          <div className='flex flex-col'>
            <input
              type='text'
              placeholder='Image URL'
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
              className='p-2 border rounded text-black'
            />
          </div>

          <div className='flex flex-col'>
            <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className='p-2 border rounded text-black'
            >
              <option value='To Read'>To Read</option>
              <option value='Reading'>Reading</option>
              <option value='Completed'>Completed</option>
            </select>
          </div>
        </div>

        <button
          type='submit'
          className='bg-blue-700 text-white font-bold py-2 px-4 rounded'
        >
          Add Book
        </button>
      </form>
    </div>
  );
}
