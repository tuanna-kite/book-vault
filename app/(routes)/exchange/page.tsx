import React from 'react';
import ExchangeCard from './_components/exchange-card';
import HistoryCard from './_components/history-card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Send, Send2 } from 'iconsax-react';

const ExchangePage = () => {
  return (
    <div className='pt-[56px] md:pt-[88px] w-full'>
      <div className='max-w-5xl mx-auto px-8 xl:px-0'>
        <h2 className='text-3xl font-semibold py-10'>Trao đổi</h2>
        <div>
          <h3 className='text-xl font-semibold mb-4'>Yêu cầu</h3>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            <ExchangeCard />
            <ExchangeCard />
          </div>
        </div>
        <div className='mt-20'>
          <h3 className='text-xl font-semibold mb-4'>Tạo yêu cầu</h3>
          <div className='flex max-sm:flex-col-reverse md:space-x-6'>
            <div className='flex-1 space-y-4'>
              <div className='flex space-x-4'>
                <div className='flex-1 space-y-2'>
                  <label className='block text-sm font-medium text-gray-700'>
                    Họ tên
                  </label>
                  <Input />
                </div>
                <div className='flex-1 space-y-2'>
                  <label className='block text-sm font-medium text-gray-700'>
                    Số điện thoại
                  </label>
                  <Input />
                </div>
              </div>

              <div className='space-y-2'>
                <label className='block text-sm font-medium text-gray-700'>
                  Địa chỉ
                </label>
                <Input />
              </div>

              <div className='flex space-x-4'>
                <div className='space-y-2 flex-1'>
                  <label className='block text-sm font-medium text-gray-700'>
                    Tên sách
                  </label>
                  <Input />
                </div>
                <div className='space-y-2 w-32'>
                  <label className='block text-sm font-medium text-gray-700'>
                    Số lượng
                  </label>
                  <Input />
                </div>
              </div>

              <Button className='rounded-xl px-8 w-full font-normal' size='lg'>
                Gửi yêu cầu
                <Send2 size={18} className='ml-2' />
              </Button>
            </div>

            <div className='md:flex-1 max-sm:mb-8 bg-gray-300 rounded-3xl h-[280px]'></div>
          </div>
        </div>
        <div className='mt-20'>
          <h3 className='text-xl font-semibold mb-4'>Lịch sử</h3>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            <HistoryCard />
            <HistoryCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExchangePage;
