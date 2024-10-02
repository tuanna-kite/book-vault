import Image from 'next/image';
import React from 'react';
import { Button } from './ui/button';
import { auth } from '@clerk/nextjs/server';
import { UserButton } from '@clerk/nextjs';
import Link from 'next/link';
import ProductSearch from './product-search';

const Header = () => {
  const { userId } = auth();

  return (
    <div className='hidden md:block fixed inset-0 top-0 md:top-[32px] h-[56px] bg-white z-50 border-b border-b-black/10'>
      <div className='flex items-center justify-between max-w-5xl px-8 xl:px-0 w-full mx-auto py-2 h-[56px]'>
        <Link href='/'>
          <div className='w-48'>
            <Image src='/logo.png' alt='Logo' width={156} height={36} />
          </div>
        </Link>
        <div className='flex-1'>
          <ProductSearch />
        </div>
        {userId ? (
          <div>
            <UserButton />
          </div>
        ) : (
          <div className='w-48 flex justify-between'>
            <Link href='/sign-in'>
              <Button variant='ghost'>Đăng nhập</Button>
            </Link>
            <Link href='/sign-up'>
              <Button variant='outline'>Đăng ký</Button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
