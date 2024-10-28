import BookCard from '@/components/book-card';
import { Button } from '@/components/ui/button';
import { db } from '@/lib/db';
import { UsdCoin } from 'iconsax-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const BookDetailPage = async ({ params }: { params: { slug: string } }) => {
  const book = await db.books.findUnique({
    where: {
      slug: params.slug,
    },
  });
  const books = await db.books.findMany({
    take: 4,
  });

  if (!book) {
    return <div className='pt-[56px] md:pt-[88px] w-full'>Book not found</div>;
  }

  return (
    <div className='pt-[56px] md:pt-[88px] w-full'>
      <div className='w-full max-w-5xl mx-auto px-8 xl:px-0'>
        <div className='flex flex-col md:flex-row md:space-x-8 space-y-6 md:space-y-0 py-12'>
          <div>
            <Image
              src={book.cover!}
              alt={book.title}
              width={256 * 2}
              height={256 * 2}
              className='border w-96'
            />
          </div>
          <div className='space-y-4 flex flex-col'>
            <h3 className='text-2xl font-semibold'>{book.title}</h3>
            <div className='flex space-x-1 items-center'>
              <span className='text-primary font-semibold text-xl'>
                {book.price}
              </span>
              <UsdCoin variant='Bold' className='text-coin' />
            </div>
            <div className='flex space-x-4'>
              <div className='space-y-1 flex-1'>
                <div className='font-semibold'>Thông tin</div>
                <p>
                  <span className='text-gray-500 mr-2'>Tác giả:</span>
                  {book.author}
                </p>
                <p>
                  <span className='text-gray-500 mr-2'>NXB:</span>
                  {book.publisher}
                </p>
              </div>
              <div className='space-y-1'>
                <div className='font-semibold'>Chi tiết</div>
                <p>
                  <span className='text-gray-500 mr-2'>Tình trạng:</span>
                  <span className='text-green-700 px-2 py-1.5 text-sm font-semibold rounded-md'>
                    Mới
                  </span>
                </p>
                <p>
                  <span className='text-gray-500 mr-2'>Kho:</span>
                  <span className=' text-green-700 px-2 py-1.5 text-sm font-semibold rounded-md'>
                    Còn hàng
                  </span>
                </p>
              </div>
            </div>
            <div className='space-x-4 pt-6 md:pt-12'>
              {/* <Button variant='outline' size='lg'>
                Thêm vào giỏ hàng
              </Button> */}
              <Link
                href={`/order/checkout/books/${book.id}`}
                className='block w-full md:w-80'
              >
                <Button size='lg' className='w-full'>
                  Mua ngay
                </Button>
              </Link>
            </div>
          </div>
        </div>
        <div>
          <h3 className='text-xl font-semibold'>Mô tả</h3>
          <div
            dangerouslySetInnerHTML={{ __html: book.description }}
            className='pt-2'
          ></div>
        </div>
        <div className='mt-10 space-y-6'>
          <h3 className='text-2xl font-semibold'>Có thể bạn thích</h3>
          <div className='grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8'>
            {books.map((book) => (
              <BookCard key={book.id} data={book} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetailPage;
