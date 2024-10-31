import Image from 'next/image';
import React from 'react';

const Hero = () => {
  return (
    <div className='md:relative w-full bg-hero bg-cover h-[820px] pt-[56px] md:pt-[88px] flex justify-between flex-col'>
      <div className='space-y-4 mt-16'>
        <p className='text-center text-xl font-light tracking-[0.1rem]'>
          Chào mừng bạn đến với
        </p>
        <h1 className='text-center text-7xl lg:text-9xl font-light'>
          Book Vault
        </h1>
      </div>
      <div className='w-full flex justify-center md:absolute md:top-1/2 md:transform md:-translate-y-1/2 md:pt-24'>
        <Image src='/book.png' alt='book' width={544} height={338} />
      </div>
      <div className='mb-16'>
        <p className='max-w-[544px] text-sm font-light text-center mx-auto'>
          Ứng dụng trao đổi sách cũ dễ dàng và tiết kiệm, giúp người dùng tiếp
          cận nhiều đầu sách phong phú. Ngoài ra, ứng dụng cũng hỗ trợ phát
          triển thói quen đọc bền vững, giảm thiểu lãng phí giấy và bảo vệ môi
          trường. Thêm vào đó, người dùng có thể kết nối với những người cùng sở
          thích, mở rộng mối quan hệ và tạo dựng một cộng đồng chia sẻ tri thức
          sôi động và đa dạng.
        </p>
      </div>
    </div>
  );
};

export default Hero;
