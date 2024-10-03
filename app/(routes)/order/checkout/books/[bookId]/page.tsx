import React from 'react';
import StepsHeader from './_components/steps-header';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const CheckoutByBookPage = ({ params }: { params: { bookId: string } }) => {
  return (
    <div className='pt-[56px] md:pt-[88px]'>
      <div className='flex flex-col space-y-8 p-8 w-full max-w-5xl xl:px-0 mx-auto'>
        <StepsHeader />
        <h2 className='text-3xl font-semibold'>Địa chỉ giao hàng</h2>
        <div className='grid md:grid-cols-2 grid-cols-1 md:gap-x-8 lg:gap-x-12 gap-y-4'>
          <div className='flex flex-col space-y-2'>
            <label htmlFor='name' className='font-medium'>
              Họ và tên
            </label>
            <Input type='text' id='name' placeholder='Nhập tên người nhận' />
          </div>
          <div className='flex flex-col space-y-2'>
            <label htmlFor='phone' className='font-medium'>
              Số điện thoại
            </label>
            <Input
              type='text'
              id='phone'
              placeholder='Nhập số điện thoại nhận đơn'
            />
          </div>
          <div className='flex flex-col space-y-2'>
            <label htmlFor='district' className='font-medium'>
              Quận/Huyện
            </label>
            <Input id='district' placeholder='Quận/Huyện' />
          </div>
          <div className='flex flex-col space-y-2'>
            <label htmlFor='city' className='font-medium'>
              Tỉnh/Thành phố
            </label>
            <Input type='text' id='city' placeholder='Tỉnh/Thành phố' />
          </div>
          <div className='flex flex-col space-y-2'>
            <label htmlFor='address' className='font-medium'>
              Địa chỉ
            </label>
            <Input type='text' id='address' placeholder='Địa chỉ người nhận' />
          </div>
          <div className='flex flex-col space-y-2'>
            <label htmlFor='email' className='font-medium'>
              Email
            </label>
            <Input type='email' id='email' placeholder='Email người nhận' />
          </div>
        </div>
        <div className='flex justify-end'>
          <Link href={`/order/checkout/books/${params.bookId}/payment`} className='w-full md:w-80'>
            <Button className='w-full md:w-80 py-5 rounded-lg font-light'>
              Giao đến địa chỉ này
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CheckoutByBookPage;
