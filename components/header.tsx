import { Search } from 'lucide-react';
import Image from 'next/image';
import React from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { auth } from '@clerk/nextjs/server';
import { UserButton } from '@clerk/nextjs';
import Link from 'next/link';

const Header = () => {
  const { userId } = auth();

  return (
    <div className='hidden md:block fixed inset-0 top-0 md:top-[32px] h-[56px] bg-white z-50 border-b border-b-black/10'>
      <div className='flex items-center justify-between max-w-5xl px-8 xl:px-0 w-full mx-auto py-2 h-[56px]'>
        <div className='w-48'>
          <Image src='/logo.png' alt='Logo' width={156} height={36} />
        </div>
        <div className='flex-1'>
          <div className='flex items-center w-[70%] min-w-80 mx-auto space-x-1 border border-black/20 pr-3 rounded-lg'>
            <Input
              className='flex-1 text-sm border-0 focus-visible:ring-0'
              type='text'
              placeholder='Search'
            />
            <Search className='text-slate-400' />
          </div>
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
