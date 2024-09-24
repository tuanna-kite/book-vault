import { Button } from '@/components/ui/button';
import { UsdCoin } from 'iconsax-react';
import Image from 'next/image';
import React from 'react';

const ExchangeCard = () => {
  return (
    <div className='flex space-x-5 p-4 rounded-2xl bg-gray-100 min-h-[250px]'>
      <div>
        <Image src='/image.png' alt='book' width={176} height={264} />
      </div>
      <div className='flex flex-col'>
        <div className='space-y-1'>
          <h3 className='font-semibold mb-4'>
            Gian nan tuổi trẻ, thảnh thơi tuổi già
          </h3>
          <p className='font-light text-sm'>
            <span className='text-gray-500'>Tác giả:</span> Nguyễn Ngọc Tư
          </p>
          <p className='font-light text-sm'>
            <span className='text-gray-500'>Số lượng:</span> 1
          </p>
          <p className='font-light text-sm text-primary'>
            <span className='text-gray-500'>Trạng thái:</span> Đang xử lý
          </p>
          <p className='font-light text-sm flex items-center space-x-2'>
            <span className='text-gray-500'>Coin nhận:</span>{' '}
            <span className='flex items-center text-primary font-medium'>
              300 <UsdCoin variant='Bold' color='#FBBF24' size={18} />
            </span>
          </p>
        </div>
        <div className='space-x-3 flex-1 flex items-end'>
          <Button className='rounded-xl' variant='destructive_outline'>
            Hủy
          </Button>
          <Button className='rounded-xl px-8' variant='disabled'>
            Xác nhận
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ExchangeCard;
