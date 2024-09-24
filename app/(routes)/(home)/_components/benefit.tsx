import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

const Benefit = () => {
  return (
    <div className='flex items-center space-x-0 flex-col-reverse md:flex-row md:space-x-16 py-20 lg:space-x-40'>
      <div className='space-y-6 flex-1 max-sm:px-4'>
        <h2 className='text-3xl font-semibold'>Lợi ích trao đổi sách</h2>
        <div className='space-y-4'>
          <p>
            Lorem ipsum dolor sit amet consectetur. Commodo senectus proin
            tortor ut. Tincidunt ante sem neque aliquet hac.
          </p>
          <p>
            Eu urna scelerisque eget odio scelerisque magna elit. Augue vitae
            massa in habitasse adipiscing posuere maecenas sed.
          </p>
        </div>
        <Button size='lg'>
          Trao đổi sách ngay
          <ArrowRight size={20} className='ml-3' />
        </Button>
      </div>
      <div className='flex-1 max-sm:mb-8 max-sm:px-4'>
        <Image
          src='/benefit.png'
          width={544}
          height={362}
          alt='Book Benefit'
          className='w-full'
        />
      </div>
    </div>
  );
};

export default Benefit;
