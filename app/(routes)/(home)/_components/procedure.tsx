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
          content='Lorem ipsum dolor sit amet consectetur. Id volutpat ac feugiat sem massa ut dictum. '
        />
        <ProcedureItem
          numb={2}
          title='Chờ xử lý'
          content='Lorem ipsum dolor sit amet consectetur. Id volutpat ac feugiat sem massa ut dictum. '
        />
        <ProcedureItem
          numb={3}
          title='Xác nhận trao đổi'
          content='Lorem ipsum dolor sit amet consectetur. Id volutpat ac feugiat sem massa ut dictum. '
        />
        <ProcedureItem
          numb={4}
          title='Nhận BCoin'
          content='Lorem ipsum dolor sit amet consectetur. Id volutpat ac feugiat sem massa ut dictum. '
        />
      </div>
    </div>
  );
};

export default Procedure;
