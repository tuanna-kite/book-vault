import Image from 'next/image';
import React from 'react';

const Hero = () => {
  return (
    <div className='md:relative w-full bg-hero bg-cover h-[820px] pt-[56px] md:pt-[88px] flex justify-between flex-col'>
      <div className='space-y-4 mt-16'>
        <p className='text-center text-xl font-light tracking-[1.2rem]'>
          GET LOST
        </p>
        <h1 className='text-center text-7xl lg:text-9xl font-light'>
          IN THE BOOKS
        </h1>
      </div>
      <div className='w-full flex justify-center md:absolute md:top-1/2 md:transform md:-translate-y-1/2 md:pt-24'>
        <Image src='/book.png' alt='book' width={544} height={338} />
      </div>
      <div className='mb-16'>
        <p className='max-w-[544px] text-sm font-light text-center mx-auto'>
          Lorem ipsum dolor sit amet consectetur. Commodo senectus proin tortor
          ut. Tincidunt ante sem neque aliquet hac. Eu urna scelerisque eget
          odio scelerisque magna elit. Augue vitae massa in habitasse adipiscing
          posuere maecenas sed.
        </p>
      </div>
    </div>
  );
};

export default Hero;
