import React from 'react';

const ContactPage = () => {
  return (
    <div className='pt-[56px] md:pt-[88px] pb-10'>
      <div className='max-w-4xl mx-auto space-y-8 mt-16 font-light px-8 lg:px-0'>
        <h2 className='text-3xl font-semibold'>Liên hệ</h2>
        <div>
          Cách nhanh nhất để liên hệ với chúng tôi là sử dụng thông tin liên hệ
          bên dưới.
        </div>
        <div>
          <div>
            <span className='font-medium'>Địa chỉ:</span> 9 Vũ Phạm Hàm, Yên
            Hòa, Cầu Giấy, Hà Nội
          </div>
          <div>
            <span className='font-medium'>Email:</span> info@bookvault.com
          </div>
          <div>
            <span className='font-medium'>Số điện thoại:</span> (+84) 345 622
            345
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
