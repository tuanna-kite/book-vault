import React from 'react';

const Footer = () => {
  return (
    <div className='w-full px-8 xl:px-0 xl:max-w-5xl mx-auto'>
      <div className='flex flex-col items-center space-y-8'>
        <p className='font-semibold'>Bắt đầu xây dựng thư viện của bạn</p>
        <h2 className='text-4xl max-sm:text-3xl font-bold w-full max-w-2xl text-center'>
          Đến với chúng tôi để tạo ra thư viện sách khổng lồ cho riêng bạn
        </h2>
        <p className='max-w-[544px] text-center text-sm font-light'>
          Lorem ipsum dolor sit amet consectetur. Commodo senectus proin tortor
          ut. Tincidunt ante sem neque aliquet hac.
        </p>
      </div>
      <footer className='mt-12 flex justify-between max-sm:flex-col'>
        <div className='space-y-2'>
          <h3 className='font-semibold text-lg mb-4'>BookVault</h3>
          <div className='font-light'>9 Vũ Phạm Hàm, Yên Hòa, Cầu Giấy, HN</div>
          <div className='font-light'>(+84) 345 622 345</div>
          <div className='font-light'>info@bookvault.com</div>
        </div>
        <div className='flex items-end font-light max-sm:text-xs max-sm:mt-6'>
          Copyright © 2024. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Footer;
