import { Books } from '@prisma/client';
import { UsdCoin } from 'iconsax-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export interface BookCardProps {
  data: Books;
}

const BookCard = ({ data }: BookCardProps) => {
  return (
    <Link href={`/stores/${data.slug}`}>
      <div className='space-y-4'>
        <div className='w-full'>
          <Image
            src={data.cover!}
            width={256}
            height={348}
            alt={data.title}
            className='w-full aspect-square object-contain'
          />
        </div>
        <div className='w-full flex flex-col items-center space-y-2'>
          <h3 className='md:text-lg lg:text-xl font-semibold'>{data.title}</h3>
          <p className='text-gray-500 text-sm'>{data.author}</p>
          <div className='flex space-x-1'>
            <span className='text-primary font-semibold'>{data.price}</span>
            <UsdCoin className='text-coin' variant='Bold' />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BookCard;
