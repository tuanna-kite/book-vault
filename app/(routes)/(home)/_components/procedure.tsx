import React from 'react';

const ProcedureItem = ({
  numb,
  title,
  content,
}: {
  numb: number;
  title: string;
  content: string;
}) => {
  return (
    <div className='flex flex-col items-center space-y-3'>
      <div className='flex justify-center items-center w-8 h-8 bg-black text-white rounded-full'>
        {numb}
      </div>
      <h3 className='text-lg font-semibold pt-4 text-center'>{title}</h3>
      <p className='text-center text-sm'>{content}</p>
    </div>
  );
};

const Procedure = () => {
  return (
    <div className='space-y-10 py-16 px-4'>
      <h2 className='text-3xl font-semibold text-center'>
        Quy trình trao đổi sách
      </h2>
      <div className='grid grid-cols-2 max-sm:gap-y-16 md:grid-cols-4 gap-6'>
        <ProcedureItem
          numb={1}
          title='Gửi yêu cầu'
          content='Người dùng lựa chọn cuốn sách mình muốn trao đổi và gửi yêu cầu qua ứng dụng.'
        />
        <ProcedureItem
          numb={2}
          title='Chờ xử lý'
          content='Sau khi yêu cầu được gửi đi, hệ thống sẽ tiếp nhận và kiểm tra thông tin, đảm bảo rằng yêu cầu trao đổi là hợp lệ.'
        />
        <ProcedureItem
          numb={3}
          title='Xác nhận trao đổi'
          content='Sau khi được duyệt, hệ thống sẽ gửi thông báo để người dùng xác nhận trao đổi.'
        />
        <ProcedureItem
          numb={4}
          title='Nhận BCoin'
          content='Sau khi hoàn tất trao đổi, người dùng sẽ được thưởng BCoin, có thể sử dụng cho các hoạt động trao đổi sách trong lần tiếp theo.'
        />
      </div>
    </div>
  );
};

export default Procedure;
