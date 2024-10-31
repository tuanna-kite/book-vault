import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Benefit = () => {
  return (
    <div className='flex items-center space-x-0 flex-col-reverse md:flex-row md:space-x-16 py-20 lg:space-x-40'>
      <div className='space-y-6 flex-1 max-sm:px-4'>
        <h2 className='text-3xl font-semibold'>Lợi ích trao đổi sách</h2>
        <div className='space-y-4'>
          <p>
            <b>Đối với bản thân:</b> Trao đổi sách cũ giúp bạn đọc tiết kiệm chi
            phí, mở ra cơ hội khám phá nhiều thể loại tác phẩm. Hơn nữa, quá
            trình trao đổi sách còn giúp mọi người có thể tìm kiếm được những
            cuốn sách “quý hiếm” đã ngưng xuất bản trên thị trường.
          </p>
          <p>
            <b>Đối với cộng đồng người yêu đọc sách:</b> Hoạt động trao đổi sách
            xây dựng một mạng lưới kết nối mạnh mẽ giữa các độc giả, tạo ra một
            không gian văn hóa đọc nơi mọi người có thể chia sẻ đam mê và trao
            đổi kiến thức.
          </p>
        </div>
        <Button size='lg'>
          <Link href='/exchange'>Trao đổi sách ngay</Link>
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
