import BookCard from '@/components/book-card';
import Hero from './_components/hero';
import TrendingCard from './_components/trending-card';
import Benefit from './_components/benefit';
import Procedure from './_components/procedure';
import { db } from '@/lib/db';

export default async function Home() {
  const books = await db.books.findMany({
    take: 3,
  });
  return (
    <div>
      <Hero />
      <section className='py-10 px-8 xl:px-0'>
        <div className='w-full space-y-4 max-w-5xl mx-auto'>
          <h2 className='text-3xl'>Xu hướng</h2>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
            {books.map((book) => (
              <TrendingCard key={book.id} data={book} />
            ))}
          </div>
        </div>
      </section>
      <section className='py-10 px-8 xl:px-0'>
        <div className='w-full space-y-4 max-w-5xl mx-auto'>
          <h2 className='text-3xl'>Phổ biến</h2>
          <div className='grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8'>
            {books.map((book) => (
              <BookCard key={book.id} data={book} />
            ))}
          </div>
        </div>
      </section>
      <section className='py-10 px-8 xl:px-0 bg-primary-light'>
        <div className='w-full max-w-5xl mx-auto'>
          <Benefit />
        </div>
      </section>
      <section>
        <div className='w-full px-8 xl:px-0 max-w-5xl mx-auto'>
          <Procedure />
        </div>
      </section>
    </div>
  );
}
