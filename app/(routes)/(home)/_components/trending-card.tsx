import { UsdCoin } from 'iconsax-react';
import Image from 'next/image';
import React from 'react';

interface TrendingCardProps {
  imageUrl: string;
  title: string;
  author: string;
  price: number;
}

const TrendingCard = ({
  imageUrl,
  title,
  author,
  price,
}: TrendingCardProps) => {
  return (
    <div className='bg-gray-100 p-5 flex space-x-8 md:space-x-4 rounded-2xl'>
      <div className='flex-1'>
        <Image
          src={imageUrl}
          alt={title}
          width={165}
          height={248}
          className='w-full'
        />
      </div>
      <div className='flex-1 flex flex-col justify-end space-y-2'>
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

export default TrendingCard;
