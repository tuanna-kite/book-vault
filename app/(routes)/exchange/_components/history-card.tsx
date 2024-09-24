import { Button } from '@/components/ui/button';
import { UsdCoin } from 'iconsax-react';
import { Circle, CircleDot, Dot } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

const HistoryCard = () => {
  return (
    <div className='flex space-x-5 p-4 rounded-2xl bg-gray-100 min-h-[250px]'>
      <div>
        <Image src='/image.png' alt='book' width={176} height={264} />
      </div>
      <div className='space-y-1 text-sm font-light'>
        <h3 className='font-semibold text-base mb-4'>
          Gian nan tuổi trẻ, thảnh thơi tuổi già
        </h3>
        <p className=''>
          <span className='text-gray-500'>Tác giả:</span> Nguyễn Ngọc Tư
        </p>
        <p className=''>
          <span className='text-gray-500'>Số lượng:</span> 1
        </p>
        <p className=' text-green-600'>
          <span className='text-gray-500'>Trạng thái:</span> Đã trao đổi
        </p>
        <p className=' flex items-center space-x-2'>
          <span className='text-gray-500'>Coin nhận:</span>{' '}
          <span className='flex items-center text-primary font-medium'>
            300 <UsdCoin variant='Bold' color='#FBBF24' size={18} />
          </span>
        </p>
        <div className='flex items-center pt-4'>
          <p>Vũ Văn Minh</p>
          <Dot size={18} />
          <p className='text-gray-500'>0345622456</p>
        </div>
        <p className='text-gray-500'>9 Vũ Phạm Hàm, Cầu Giấy, Hà Nội</p>
      </div>
    </div>
  );
};

export default HistoryCard;
