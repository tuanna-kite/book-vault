import Image from 'next/image';
import React from 'react';
import { Button } from './button';
import { Menu, Search } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from '@/components/ui/sheet';
import MobileSidebar from '../mobile-sidebar';

const MobileHeader = () => {
  return (
    <div className='md:hidden fixed inset-0 h-[56px] bg-white border-b border-b-black/10'>
      <div className='flex items-center justify-between container w-full mx-auto h-[56px]'>
        <div className='flex space-x-3'>
          <Sheet>
            <SheetTrigger className='px-2'>
              <Menu className='text-slate-400' />
            </SheetTrigger>
            <SheetContent side='left' className='bg-white w-3/4 px-5'>
              <SheetHeader>
                <Image src='/logo.png' alt='Logo' width={132} height={56} />
              </SheetHeader>
              <MobileSidebar />
            </SheetContent>
          </Sheet>
        </div>

        <Image src='/logo-wide.png' alt='Logo' width={112} height={56} />

        <Button variant='ghost'>
          <Search className='text-slate-400' />
        </Button>
      </div>
    </div>
  );
};

export default MobileHeader;
