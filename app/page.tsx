import { db } from '@/prisma/db';
import Home from '../components/Home';

export default async function Page() {
  const books = await db.book.findMany();

  return <Home initialBooks={books} />;
}
