import { UsdCoin } from 'iconsax-react';
import Image from 'next/image';
import React from 'react';

export interface BookCardProps {
  imageUrl: string;
  title: string;
  author: string;
  price: number;
}

const BookCard = ({ imageUrl, title, author, price }: BookCardProps) => {
  return (
    <div className='space-y-4'>
      <div className='w-full'>
        <Image
          src={imageUrl}
          width={256}
          height={348}
          alt={title}
          className='w-full'
        />
      </div>
      <div className='w-full flex flex-col items-center space-y-2'>
        <h3 className='md:text-lg lg:text-xl font-semibold'>{title}</h3>
        <p className='text-gray-500 text-sm'>{author}</p>
        <div className='flex space-x-1'>
          <span className='text-primary font-semibold'>{price}</span>
          <UsdCoin className='text-coin' variant='Bold' />
        </div>
      </div>
    </div>
  );
};

export default BookCard;
